import * as PIXI from 'pixi.js';

import type { BitmapFontData } from 'pixi.js';
import type { FontSrc, RawAsset, SpineSrc } from './types';

/** Resolve Vite-emitted asset paths against the live game URL, not scratch/api/file bases. */
export const toAbsoluteAssetUrl = (url: string) => {
	if (typeof window === 'undefined') return url;
	try {
		const immutableAsset = url.match(/_app\/immutable\/[^?#]*/)?.[0];
		if (immutableAsset) {
			return new URL(immutableAsset, window.location.href).href;
		}
		return new URL(url, window.location.href).href;
	} catch {
		return url;
	}
};

export const parseAtlasPageNames = (atlasText: string) => {
	const lines = atlasText.split(/\r?\n/);
	const pageNames: string[] = [];

	for (let index = 0; index < lines.length; index++) {
		const line = lines[index].trim();
		const nextLine = lines[index + 1]?.trimStart();
		if (/^[\w.-]+\.png$/i.test(line) && nextLine?.startsWith('size:')) {
			pageNames.push(line);
		}
	}

	return pageNames;
};

export const getTexturePageUrls = (src: Record<string, string | number | undefined>) => {
	return Object.entries(src)
		.filter(([key, value]) => key.startsWith('texturePage') && typeof value === 'string')
		.sort(([leftKey], [rightKey]) =>
			leftKey.localeCompare(rightKey, undefined, { numeric: true }),
		)
		.map(([, value]) => value as string);
};

const parseBitmapFontXml = (xmlText: string): BitmapFontData => {
	const xml = new DOMParser().parseFromString(xmlText, 'text/xml');
	const info = xml.getElementsByTagName('info')[0];
	const common = xml.getElementsByTagName('common')[0];
	const distanceFieldNode = xml.getElementsByTagName('distanceField')[0];
	const pageNodes = xml.getElementsByTagName('page');
	const charNodes = xml.getElementsByTagName('char');
	const kerningNodes = xml.getElementsByTagName('kerning');

	const data: BitmapFontData = {
		chars: {},
		pages: [],
		lineHeight: parseInt(common.getAttribute('lineHeight') ?? '0', 10),
		fontSize: parseInt(info.getAttribute('size') ?? '0', 10),
		fontFamily: info.getAttribute('face') ?? '',
		baseLineOffset: 0,
	};

	if (distanceFieldNode) {
		data.distanceField = {
			type: distanceFieldNode.getAttribute('fieldType') as 'sdf' | 'msdf' | 'none',
			range: parseInt(distanceFieldNode.getAttribute('distanceRange') ?? '0', 10),
		};
	}

	for (let index = 0; index < pageNodes.length; index++) {
		data.pages.push({
			id: parseInt(pageNodes[index].getAttribute('id') ?? '0', 10) || 0,
			file: pageNodes[index].getAttribute('file') ?? '',
		});
	}

	const charIdToLetter: Record<number, string> = {};
	data.baseLineOffset =
		data.lineHeight - parseInt(common.getAttribute('base') ?? '0', 10);

	for (let index = 0; index < charNodes.length; index++) {
		const charNode = charNodes[index];
		const id = parseInt(charNode.getAttribute('id') ?? '0', 10);
		let letter =
			charNode.getAttribute('letter') ??
			charNode.getAttribute('char') ??
			String.fromCharCode(id);
		if (letter === 'space') letter = ' ';

		charIdToLetter[id] = letter;
		data.chars[letter] = {
			id,
			page: parseInt(charNode.getAttribute('page') ?? '0', 10) || 0,
			x: parseInt(charNode.getAttribute('x') ?? '0', 10),
			y: parseInt(charNode.getAttribute('y') ?? '0', 10),
			width: parseInt(charNode.getAttribute('width') ?? '0', 10),
			height: parseInt(charNode.getAttribute('height') ?? '0', 10),
			xOffset: parseInt(charNode.getAttribute('xoffset') ?? '0', 10),
			yOffset: parseInt(charNode.getAttribute('yoffset') ?? '0', 10),
			xAdvance: parseInt(charNode.getAttribute('xadvance') ?? '0', 10),
			kerning: {},
		};
	}

	for (let index = 0; index < kerningNodes.length; index++) {
		const first = parseInt(kerningNodes[index].getAttribute('first') ?? '0', 10);
		const second = parseInt(kerningNodes[index].getAttribute('second') ?? '0', 10);
		const amount = parseInt(kerningNodes[index].getAttribute('amount') ?? '0', 10);
		const secondLetter = charIdToLetter[second];
		const firstLetter = charIdToLetter[first];
		if (secondLetter && firstLetter) {
			data.chars[secondLetter].kerning[firstLetter] = amount;
		}
	}

	return data;
};

const buildAtlasImagesMap = async ({
	atlasUrl,
	texturePageUrls,
}: {
	atlasUrl: string;
	texturePageUrls: string[];
}) => {
	const atlasResponse = await fetch(atlasUrl);
	if (!atlasResponse.ok) {
		throw new Error(`Failed to load atlas: ${atlasUrl}`);
	}

	const pageNames = parseAtlasPageNames(await atlasResponse.text());
	const images: Record<string, string> = {};

	for (let index = 0; index < pageNames.length; index++) {
		const pageName = pageNames[index];
		const texturePageUrl = texturePageUrls[index];
		if (!texturePageUrl) {
			console.warn(`Missing texture page for ${pageName} referenced by ${atlasUrl}`);
			continue;
		}
		images[pageName] = toAbsoluteAssetUrl(texturePageUrl);
	}

	return images;
};

const normalizeSpineSrc = (
	src: SpineSrc & Record<string, string | number | undefined>,
) => {
	const normalized = { ...src } as SpineSrc & Record<string, string | number | undefined>;

	if (typeof normalized.atlas === 'string') {
		normalized.atlas = toAbsoluteAssetUrl(normalized.atlas);
	}
	if (typeof normalized.skeleton === 'string') {
		normalized.skeleton = toAbsoluteAssetUrl(normalized.skeleton);
	}
	for (const [key, value] of Object.entries(normalized)) {
		if (key.startsWith('texturePage') && typeof value === 'string') {
			normalized[key] = toAbsoluteAssetUrl(value);
		}
	}

	return normalized;
};

export const loadSpineBundle = async (
	src: SpineSrc & Record<string, string | number | undefined>,
	onProgress?: (progress: number) => void,
) => {
	const normalizedSrc = normalizeSpineSrc(src);
	const texturePageUrls = getTexturePageUrls(normalizedSrc);
	const atlasUrl = normalizedSrc.atlas;
	const skeletonUrl = normalizedSrc.skeleton;

	const descriptors: Array<string | PIXI.UnresolvedAsset> = [skeletonUrl];

	if (texturePageUrls.length > 0) {
		descriptors.unshift({
			src: atlasUrl,
			data: {
				images: await buildAtlasImagesMap({ atlasUrl, texturePageUrls }),
			},
		});
	} else {
		descriptors.unshift(atlasUrl);
	}

	return PIXI.Assets.load<RawAsset>(descriptors, onProgress);
};

export const loadFontBundle = async (
	src: string | FontSrc,
	onProgress?: (progress: number) => void,
) => {
	const xmlUrl = toAbsoluteAssetUrl(typeof src === 'string' ? src : src.xml);
	const imageUrl = typeof src === 'string' ? undefined : toAbsoluteAssetUrl(src.image);

	if (!imageUrl) {
		return PIXI.Assets.load(xmlUrl, onProgress);
	}

	const xmlResponse = await fetch(xmlUrl);
	if (!xmlResponse.ok) {
		throw new Error(`Failed to load bitmap font: ${xmlUrl}`);
	}

	const xmlText = await xmlResponse.text();
	const texture = await PIXI.Assets.load<PIXI.Texture>(imageUrl, onProgress);
	const bitmapFontData = parseBitmapFontXml(xmlText);
	const bitmapFont = new PIXI.BitmapFont({ data: bitmapFontData, textures: [texture] }, xmlUrl);

	// BitmapText looks up `${fontFamily}-bitmap` in Cache; Assets.load does this via
	// bitmapFontCachePlugin, but manual loads must register explicitly.
	PIXI.Cache.set(xmlUrl, bitmapFont);

	return bitmapFont;
};

import { readFileSync, writeFileSync } from 'node:fs';
import { dirname, join, basename } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));

function parseRegion(lines, startIndex) {
	let i = startIndex;
	const name = lines[i++];
	const boundsLine = lines[i++];
	const [, bx, by, bw, bh] = boundsLine.match(/bounds:(\d+),(\d+),(\d+),(\d+)/);

	let ox = 0;
	let oy = 0;
	let origW = Number(bw);
	let origH = Number(bh);
	let rotated = false;

	while (i < lines.length && lines[i].includes(':')) {
		const line = lines[i++];
		if (line.startsWith('offsets:')) {
			[, ox, oy, origW, origH] = line.match(/offsets:(\d+),(\d+),(\d+),(\d+)/).map(Number);
		} else if (line.startsWith('rotate:')) {
			rotated = true;
		}
	}

	const frameName = `${name}.png`;
	const trimmed = ox !== 0 || oy !== 0 || origW !== bw || origH !== bh;

	return {
		nextIndex: i,
		region: {
			name: frameName,
			frame: { x: Number(bx), y: Number(by), w: Number(bw), h: Number(bh) },
			rotated,
			trimmed,
			spriteSourceSize: {
				x: ox,
				y: oy,
				w: rotated ? Number(bh) : Number(bw),
				h: rotated ? Number(bw) : Number(bh),
			},
			sourceSize: { w: origW, h: origH },
		},
	};
}

function isPageHeader(line) {
	return /\.(png|webp|jpg|jpeg)$/i.test(line);
}

function parseAtlasPages(content) {
	const lines = content.split(/\r?\n/).map((l) => l.trim()).filter(Boolean);
	const pages = [];
	let i = 0;

	while (i < lines.length) {
		if (!isPageHeader(lines[i])) {
			i++;
			continue;
		}

		const image = lines[i++];
		const sizeLine = lines[i++];
		if (!sizeLine?.startsWith('size:')) {
			throw new Error(`Expected size line after image "${image}"`);
		}
		const [, sheetW, sheetH] = sizeLine.match(/size:(\d+),(\d+)/);

		while (i < lines.length && !lines[i].startsWith('scale:')) {
			i++;
		}
		if (i >= lines.length) break;
		const [, atlasScale] = lines[i].match(/scale:([\d.]+)/);
		i++;

		const regions = [];
		while (i < lines.length) {
			if (isPageHeader(lines[i])) break;
			const result = parseRegion(lines, i);
			i = result.nextIndex;
			regions.push(result.region);
		}

		pages.push({
			image,
			sheetW: Number(sheetW),
			sheetH: Number(sheetH),
			scale: Number(atlasScale) || 1,
			regions,
		});
	}

	return pages;
}

function writeSpritesheetJson(
	{ image, sheetW, sheetH, regions, scale, relatedMultiPacks },
	outputPath,
) {
	const frames = Object.fromEntries(
		regions.map((r) => [
			r.name,
			{
				frame: r.frame,
				rotated: r.rotated,
				trimmed: r.trimmed,
				spriteSourceSize: r.spriteSourceSize,
				sourceSize: r.sourceSize,
			},
		]),
	);

	const json = {
		frames,
		meta: {
			app: 'https://www.codeandweb.com/texturepacker',
			version: '1.0',
			image,
			format: 'RGBA8888',
			size: { w: sheetW, h: sheetH },
			scale: String(scale ?? 1),
			...(relatedMultiPacks ? { related_multi_packs: relatedMultiPacks } : {}),
		},
	};

	writeFileSync(outputPath, JSON.stringify(json, null, '\t') + '\n');
	console.log(`Wrote ${regions.length} frames to ${outputPath}`);
}

function convertAtlas(atlasPath, outputDir) {
	const pages = parseAtlasPages(readFileSync(atlasPath, 'utf8'));

	for (const [index, page] of pages.entries()) {
		const outputName = page.image.replace(/\.(png|webp|jpg|jpeg)$/i, '.json');
		const relatedMultiPacks =
			index === 0 && pages.length > 1
				? pages.slice(1).map((nextPage) => nextPage.image.replace(/\.(png|webp|jpg|jpeg)$/i, '.json'))
				: undefined;
		writeSpritesheetJson({ ...page, relatedMultiPacks }, join(outputDir, outputName));
	}

	return pages;
}

const [atlasArg, outputDirArg] = process.argv.slice(2);
const atlasPath =
	atlasArg ?? join(__dirname, '../static/assets/sprites/freeSpins/freeSpinsMessage.atlas');
const outputDir =
	outputDirArg ?? join(__dirname, '../static/assets/sprites/freeSpins');

convertAtlas(atlasPath, outputDir);

import type * as PIXI from 'pixi.js';

export type BitmapFontId = 'gold' | 'goldBlur' | 'silver' | 'purple';

export type BitmapFontConfig = {
	family: string;
	scale: number;
	letterSpacing: number;
	atlasSize: number;
};

export const BITMAP_FONTS: Record<BitmapFontId, BitmapFontConfig> = {
	gold: { family: 'gold', scale: 0.5, letterSpacing: -10, atlasSize: 72 },
	goldBlur: { family: 'goldblur', scale: 1, letterSpacing: 0, atlasSize: 376 },
	silver: { family: 'silver', scale: 0.5, letterSpacing: 0, atlasSize: 97 },
	purple: { family: 'purple', scale: 1, letterSpacing: 0, atlasSize: 177 },
};

export type BitmapFontUsage =
	| 'winBig'
	| 'winNormal'
	| 'symbolMultiplier'
	| 'freeSpinCounter'
	| 'freeSpinIntro'
	| 'freeSpinOutro';

export type BitmapFontUsageConfig = {
	font: BitmapFontId;
	sizeMode: 'symbolMultiplier' | 'absolute' | 'widthRatio';
	size: number;
	letterSpacing?: number;
	align?: 'left' | 'center' | 'right';
};

export const BITMAP_FONT_USAGES: Record<BitmapFontUsage, BitmapFontUsageConfig> = {
	winBig: { font: 'gold', sizeMode: 'symbolMultiplier', size: 1.6, align: 'center' },
	winNormal: { font: 'gold', sizeMode: 'symbolMultiplier', size: 0.5, align: 'center' },
	symbolMultiplier: { font: 'gold', sizeMode: 'absolute', size: 50 },
	freeSpinCounter: { font: 'gold', sizeMode: 'symbolMultiplier', size: 0.275 },
	freeSpinIntro: { font: 'gold', sizeMode: 'widthRatio', size: 0.05 },
	freeSpinOutro: { font: 'gold', sizeMode: 'widthRatio', size: 0.08 },
};

const REFERENCE_ATLAS_SIZE = 72;

export type BitmapFontStyleContext = {
	symbolSize?: number;
	width?: number;
};

export type BitmapFontStyle = Pick<
	PIXI.TextStyleOptions,
	'fontFamily' | 'fontSize' | 'letterSpacing' | 'align'
>;

const atlasCompensation = (font: BitmapFontConfig) => REFERENCE_ATLAS_SIZE / font.atlasSize;

const resolveFontSize = (
	usage: BitmapFontUsageConfig,
	font: BitmapFontConfig,
	context: BitmapFontStyleContext,
) => {
	const compensated = atlasCompensation(font);

	if (usage.sizeMode === 'symbolMultiplier') {
		return (context.symbolSize ?? 0) * usage.size * font.scale * compensated;
	}

	if (usage.sizeMode === 'absolute') {
		return usage.size * font.scale * compensated;
	}

	return (context.width ?? 0) * usage.size * font.scale * compensated;
};

export const getBitmapFontStyle = (
	usageKey: BitmapFontUsage,
	context: BitmapFontStyleContext = {},
): BitmapFontStyle => {
	const usage = BITMAP_FONT_USAGES[usageKey];
	const font = BITMAP_FONTS[usage.font];

	return {
		fontFamily: font.family,
		fontSize: resolveFontSize(usage, font, context),
		letterSpacing: usage.letterSpacing ?? font.letterSpacing,
		...(usage.align ? { align: usage.align } : {}),
	};
};

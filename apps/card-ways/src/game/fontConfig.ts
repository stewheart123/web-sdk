import type * as PIXI from 'pixi.js';

import {
	type BitmapFontId,
	type BitmapFontUsage,
	type BitmapFontUsageConfig,
	type LayoutType,
	TEXT_LAYOUT,
	getFontScale,
} from './visualLayoutConfig';

export type { BitmapFontId, BitmapFontUsage, BitmapFontUsageConfig };

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

/** @deprecated Use TEXT_LAYOUT from visualLayoutConfig */
export const BITMAP_FONT_USAGES = TEXT_LAYOUT;

const REFERENCE_ATLAS_SIZE = 72;

export type BitmapFontStyleContext = {
	symbolSize?: number;
	width?: number;
	layoutType?: LayoutType;
	/** Overrides TEXT_LAYOUT size when sizeMode is widthRatio. */
	sizeRatio?: number;
};

export type BitmapFontStyle = Pick<
	PIXI.TextStyleOptions,
	'fontFamily' | 'fontSize' | 'letterSpacing' | 'align' | 'fill'
>;

const atlasCompensation = (font: BitmapFontConfig) => REFERENCE_ATLAS_SIZE / font.atlasSize;

const roundFontSize = (size: number) => Math.max(1, Math.round(size));

const resolveFontSize = (
	usage: BitmapFontUsageConfig,
	font: BitmapFontConfig,
	context: BitmapFontStyleContext,
) => {
	const layoutScale = context.layoutType ? getFontScale(context.layoutType) : 1;
	const compensated = atlasCompensation(font);

	if (usage.sizeMode === 'symbolMultiplier') {
		return roundFontSize(
			(context.symbolSize ?? 0) * usage.size * font.scale * compensated * layoutScale,
		);
	}

	if (usage.sizeMode === 'absolute') {
		return roundFontSize(usage.size * font.scale * compensated * layoutScale);
	}

	return roundFontSize(
		(context.width ?? 0) * (context.sizeRatio ?? usage.size) * font.scale * compensated * layoutScale,
	);
};

export const getBitmapFontStyle = (
	usageKey: BitmapFontUsage,
	context: BitmapFontStyleContext = {},
): BitmapFontStyle => {
	const usage = TEXT_LAYOUT[usageKey];
	const font = BITMAP_FONTS[usage.font];

	return {
		fontFamily: font.family,
		fontSize: resolveFontSize(usage, font, context),
		fill: 0xffffff,
		letterSpacing: usage.letterSpacing ?? font.letterSpacing,
		...(usage.align ? { align: usage.align } : {}),
	};
};

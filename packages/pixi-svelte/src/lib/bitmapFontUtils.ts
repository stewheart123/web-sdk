import * as PIXI from 'pixi.js';

export const applyBitmapFontScaleMode = (
	font: unknown,
	scaleMode: 'linear' | 'nearest' = 'nearest',
) => {
	if (!(font instanceof PIXI.BitmapFont)) return;

	for (const page of font.pages) {
		const source = page.texture?.source;
		if (source?.style) {
			source.style.scaleMode = scaleMode;
		}
	}
};

/** @deprecated Use applyBitmapFontScaleMode */
export const applyNearestScaleModeToBitmapFont = (font: unknown) =>
	applyBitmapFontScaleMode(font, 'nearest');

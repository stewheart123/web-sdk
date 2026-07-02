import * as PIXI from 'pixi.js';

export const applyNearestScaleModeToBitmapFont = (font: unknown) => {
	if (!(font instanceof PIXI.BitmapFont)) return;

	for (const page of font.pages) {
		const source = page.texture?.source;
		if (source?.style) {
			source.style.scaleMode = 'nearest';
		}
	}
};

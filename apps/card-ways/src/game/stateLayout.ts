import { createLayout } from 'utils-layout';

export const BACKGROUND_ART_SIZE = {
	width: 1264 * 2,
	height: 842 * 2,
} as const;

export const BACKGROUND_OFFSET = {
	x: 465,
	y: 400,
} as const;

export const { stateLayout, stateLayoutDerived } = createLayout({
	backgroundRatio: {
		normal: 1264 / 842,
		portrait: 1242 / 2208,
	},
	mainSizesMap: {
		desktop: { width: 1422, height: 800 },
		tablet: { width: 1000, height: 1000 },
		landscape: { width: 1600, height: 900 },
		portrait: { width: 800, height: 1422 },
	},
});

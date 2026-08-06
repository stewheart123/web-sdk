import { createLayout } from 'utils-layout';

import {
	BACKGROUND_ART_SIZE,
	BACKGROUND_OFFSET,
	BACKGROUND_RATIO,
	BACKGROUND_SCALE,
	MAIN_SIZES_MAP,
} from './visualLayoutConfig';

export { BACKGROUND_ART_SIZE, BACKGROUND_OFFSET, BACKGROUND_SCALE };

/** Args for `centeredBackgroundLayout` — plate size, not skeleton AABB. */
export const BACKGROUND_SPINE_LAYOUT_ARGS = {
	artSize: BACKGROUND_ART_SIZE,
	scale: BACKGROUND_SCALE,
} as const;

/** Canvas x/y/scale for background + free-spin foreground spine instances. */
export const resolveBackgroundSpineProps = (layout: {
	x: number;
	y: number;
	scale: number;
}) => ({
	x: layout.x + BACKGROUND_OFFSET.x,
	y: layout.y + BACKGROUND_OFFSET.y,
	scale: layout.scale,
});

export const { stateLayout, stateLayoutDerived } = createLayout({
	backgroundRatio: BACKGROUND_RATIO,
	mainSizesMap: MAIN_SIZES_MAP,
});

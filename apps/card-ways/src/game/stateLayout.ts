import { createLayout } from 'utils-layout';

import {
	BACKGROUND_ART_SIZE,
	BACKGROUND_OFFSET,
	BACKGROUND_RATIO,
	MAIN_SIZES_MAP,
} from './visualLayoutConfig';

export { BACKGROUND_ART_SIZE, BACKGROUND_OFFSET };

export const { stateLayout, stateLayoutDerived } = createLayout({
	backgroundRatio: BACKGROUND_RATIO,
	mainSizesMap: MAIN_SIZES_MAP,
});

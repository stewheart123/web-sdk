export type LayoutType = 'desktop' | 'landscape' | 'portrait' | 'tablet';

export type LayoutBoardSettings = {
	/** Multiplier on the board container scale. 1.0 = baseline size from constants.ts. */
	symbolScale: number;
	/** Positive values shift the board right. */
	boardXOffset: number;
	/** Positive values shift the board up (subtracted from y). */
	boardYOffset: number;
	frame: { x: number; y: number; width: number; height: number };
};

export const BOARD_LAYOUT_BY_TYPE: Record<LayoutType, LayoutBoardSettings> = {
	desktop: {
		symbolScale: 1.0,
		boardXOffset: 0,
		boardYOffset: 62,
		frame: { x: 700, y: 420, width: 1000, height: 688 },
	},
	landscape: {
		symbolScale: 1.0,
		boardXOffset: 0,
		boardYOffset: 62,
		frame: { x: 700, y: 420, width: 1000, height: 688 },
	},
	portrait: {
		symbolScale: 1.0,
		boardXOffset: -45,
		boardYOffset: 0,
		frame: { x: 367, y: 716, width: 706, height: 550 },
	},
	tablet: {
		symbolScale: 1.0,
		boardXOffset: 0,
		boardYOffset: 0,
		frame: { x: 500, y: 500, width: 900, height: 620 },
	},
};

export const getBoardLayoutSettings = (layoutType: LayoutType) =>
	BOARD_LAYOUT_BY_TYPE[layoutType];

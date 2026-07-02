import { WHITE } from 'constants-shared/colors';

export const UI_BASE_SIZE = 150;

export const UI_COLORS = {
	bar: 0x000000,
	winTicker: 0x1b8f3a,
	buyBonus: 0x1a7a3a,
	button: 0x111111,
	buttonLight: 0xffffff,
	menuItem: 0xffffff,
	disabled: 0xaaaaaa,
} as const;

/** Corner radius for Pixi UI rectangles — tune here for the whole HUD. */
export const UI_BORDER_RADIUS = {
	button: 8,
	buttonLight: 8,
	menuItem: 8,
	buyBonus: 6,
	win: 8,
	controlBar: 8,
	label: 8,
	menuPanel: 8,
	counter: 8,
} as const;

export const UI_BASE_FONT_SIZE = UI_BASE_SIZE * 0.3;

export const UI_TEXT_STYLES = {
	labelStyle: {
		fontSize: UI_BASE_FONT_SIZE,
		fill: WHITE,
	},
	amountStyle: {
		fontSize: UI_BASE_FONT_SIZE,
		fill: WHITE,
	},
};

// desktop
export const DESKTOP_BASE_SIZE = UI_BASE_SIZE * 0.9;

export const DESKTOP_BACKGROUND_WIDTH_LIST = [
	DESKTOP_BASE_SIZE * (188 / 116),
	800,
	350,
	DESKTOP_BASE_SIZE * (340 / 116),
];

// portrait
export const PORTRAIT_BASE_SIZE = UI_BASE_SIZE * 1.32;

// landscape
export const LANDSCAPE_BASE_SIZE = UI_BASE_SIZE * 1.1;

export const LANDSCAPE_BACKGROUND_WIDTH_LIST = [
	LANDSCAPE_BASE_SIZE * (188 / 116),
	1000,
	LANDSCAPE_BASE_SIZE * (373 / 116),
];

// desktop
export const TABLET_BASE_SIZE = UI_BASE_SIZE * 1.2;

export const TABLET_BACKGROUND_WIDTH_LIST = [
	TABLET_BASE_SIZE * (188 / 116),
	650,
	350,
	TABLET_BASE_SIZE * (340 / 116),
];

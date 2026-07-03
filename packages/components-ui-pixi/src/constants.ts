import { WHITE } from 'constants-shared/colors';

export const UI_BASE_SIZE = 150;

/** UI fill colours and alphas — tune opacity here for the whole HUD. */
export const UI_COLORS = {
	bar: 0x000000,
	barAlpha: 0.3,
	button: 0x111111,
	buttonAlpha: 0.3,
	buttonLight: 0xffffff,
	buttonLightAlpha: 0.3,
	menuItem: 0xffffff,
	menuItemAlpha: 0.3,
	buyBonus: 0x1a7a3a,
	buyBonusAlpha: 0.3,
	winTicker: 0x1b8f3a,
	/** Win ticker on the control bar (opaque by default). */
	winAlpha: 0.3,
	/** Floating win ticker pill above the bar. */
	winTickerAlpha: 0.35,
	disabled: 0xaaaaaa,
	disabledAlpha: 1,
	menuOverlay: 0x000000,
	menuOverlayAlpha: 0.5,
	menuPanel: 0x000000,
	menuPanelAlpha: 0.3,
	sliderTrack: 0x333333,
	sliderTrackAlpha: 0.3,
	sliderFill: 0xffffff,
	sliderFillAlpha: 0.3,
	sliderThumb: 0xffffff,
	sliderThumbAlpha: 0.3,
	sliderThumbBorder: 0x333333,
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

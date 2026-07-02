import { UI_BASE_SIZE } from './constants';

export type UiLayoutType = 'desktop' | 'tablet' | 'landscape' | 'portrait';

export const UI_BAR_HEIGHT = UI_BASE_SIZE * 0.77;
export const UI_BAR_WIDTH = 1680;
export const UI_BUY_BONUS_SIZE = UI_BASE_SIZE;
export const UI_BUTTON_SIZE = UI_BASE_SIZE * 0.85;
export const UI_SPIN_BUTTON_SIZE = UI_BASE_SIZE * 1.35;
export const UI_MENU_BUTTON_SIZE = UI_BASE_SIZE * 1.2;
export const UI_BET_STEPPER_SIZE = UI_BASE_SIZE * 0.55;
export const UI_LABEL_SCALE = 0.85;

export const UI_LAYOUT_SCALE_BY_TYPE: Record<UiLayoutType, number> = {
	desktop: 1,
	tablet: 0.92,
	landscape: 0.82,
	portrait: 0.72,
};

export const UI_BAR_BOTTOM_PADDING_BY_TYPE: Record<UiLayoutType, number> = {
	desktop: 10,
	tablet: 16,
	landscape: 12,
	portrait: 20,
};

/** X positions relative to the left edge of the control bar (y is always bar center). */
export const UI_BAR_SLOTS = {
	menu: UI_BUTTON_SIZE * 0.65,
	balance: UI_BUTTON_SIZE * 2.2,
	win: UI_BUTTON_SIZE * 5.8,
	bet: UI_BUTTON_SIZE * 8.8,
	decrease: UI_BUTTON_SIZE * 11.6,
	increase: UI_BUTTON_SIZE * 12.8,
	spin: UI_BUTTON_SIZE * 15.2,
	autoSpin: UI_BUTTON_SIZE * 17.4,
} as const;

export const UI_BUY_BONUS_OFFSET_X = -(UI_BUY_BONUS_SIZE * 0.55 + UI_BUTTON_SIZE * 0.4);

export const UI_MENU_PANEL = {
	itemSpacing: UI_MENU_BUTTON_SIZE * 1.05,
	width: UI_MENU_BUTTON_SIZE * 2.4,
	height: UI_MENU_BUTTON_SIZE * 4.8,
	borderRadius: 12,
} as const;

export const getUiLayoutScale = (layoutType: UiLayoutType) => UI_LAYOUT_SCALE_BY_TYPE[layoutType];

export const getUiBarBottomPadding = (layoutType: UiLayoutType) =>
	UI_BAR_BOTTOM_PADDING_BY_TYPE[layoutType];

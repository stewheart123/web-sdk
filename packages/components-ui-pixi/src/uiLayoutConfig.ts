import { UI_BASE_SIZE, UI_BORDER_RADIUS } from './constants';

export type UiLayoutType = 'desktop' | 'tablet' | 'landscape' | 'portrait';

export const UI_BAR_HEIGHT = UI_BASE_SIZE * 0.9;

/** Max height for labels/buttons inside the bar background. */
export const UI_BAR_CONTENT_MAX_HEIGHT = UI_BAR_HEIGHT * 0.86;

/** Nudge interactive controls upward within the bar (standard-layout pixels). */
export const UI_BAR_CONTENT_Y_NUDGE_UP = 75;

/** Vertical anchor for buttons/labels — slightly above bar geometric centre. */
export const UI_BAR_SLOT_CENTER_Y = UI_BAR_HEIGHT * 0.5 - UI_BAR_CONTENT_Y_NUDGE_UP;

/** Vertical centre of the background rectangle itself. */
export const UI_BAR_BACKGROUND_CENTER_Y = UI_BAR_HEIGHT * 0.5;

export const UI_BAR_WIDTH = 1500;
export const UI_BUY_BONUS_SIZE = UI_BASE_SIZE;
export const UI_BUTTON_SIZE = UI_BASE_SIZE * 0.85;
export const UI_SPIN_BUTTON_SIZE = UI_BASE_SIZE * 1.35;
export const UI_MENU_BUTTON_SIZE = UI_BASE_SIZE * 1.2;
export const UI_BET_STEPPER_SIZE = UI_BASE_SIZE * 0.55;
/** Vertical gap between stacked +/- bet buttons. */
export const UI_BET_STEPPER_VERTICAL_GAP = 6;
export const UI_BET_STEPPER_STACK_HEIGHT =
	UI_BET_STEPPER_SIZE * 2 + UI_BET_STEPPER_VERTICAL_GAP;
export const UI_LABEL_SCALE = 0.85;

/** Gap between adjacent slot regions inside the bar. */
export const UI_SLOT_GAP = 8;

export const UI_BAR_SLOT_ORDER = [
	'menu',
	'balance',
	'win',
	'bet',
	'betStepper',
	'spin',
	'autoSpin',
] as const;

export type UiBarSlotKey = (typeof UI_BAR_SLOT_ORDER)[number];

export type UiBarSlotRegion = {
	centerX: number;
	width: number;
	left: number;
	right: number;
};

/**
 * Slot positions as fractions of {@link UI_BAR_WIDTH} so elements stay inside the bar
 * at the design reference size.
 */
export const UI_BAR_SLOT_RATIOS = {
	menu: 0.04,
	balance: 0.17,
	win: 0.34,
	bet: 0.5,
	betStepper: 0.65,
	spin: 0.78,
	autoSpin: 0.92,
} as const;

export const getUiBarSlotRegion = (slotKey: UiBarSlotKey): UiBarSlotRegion => {
	const index = UI_BAR_SLOT_ORDER.indexOf(slotKey);
	const ratio = UI_BAR_SLOT_RATIOS[slotKey];
	const prevRatio = index === 0 ? 0 : UI_BAR_SLOT_RATIOS[UI_BAR_SLOT_ORDER[index - 1]];
	const nextRatio =
		index === UI_BAR_SLOT_ORDER.length - 1
			? 1
			: UI_BAR_SLOT_RATIOS[UI_BAR_SLOT_ORDER[index + 1]];

	const left = ((prevRatio + ratio) / 2) * UI_BAR_WIDTH + UI_SLOT_GAP;
	const right = ((ratio + nextRatio) / 2) * UI_BAR_WIDTH - UI_SLOT_GAP;

	return {
		centerX: ratio * UI_BAR_WIDTH,
		width: Math.max(0, right - left),
		left,
		right,
	};
};

/** Scale a square control to fit its slot region inside the bar. */
export const getUiBarSlotButtonScale = ({
	regionWidth,
	baseSize,
	maxHeight = UI_BAR_CONTENT_MAX_HEIGHT,
}: {
	regionWidth: number;
	baseSize: number;
	maxHeight?: number;
}) => Math.min(regionWidth / baseSize, maxHeight / baseSize) * 0.92;

/** Scale factor for the vertically stacked +/- bet stepper column. */
export const getUiBetStepperScale = ({
	regionWidth,
	maxHeight = UI_BAR_CONTENT_MAX_HEIGHT,
}: {
	regionWidth: number;
	maxHeight?: number;
}) =>
	Math.min(
		regionWidth / UI_BET_STEPPER_SIZE,
		maxHeight / UI_BET_STEPPER_STACK_HEIGHT,
	) * 0.92;

/** Y offset from the bet-stepper slot centre for each stacked button. */
export const getBetStepperButtonOffsetY = (position: 'increase' | 'decrease') => {
	const offset = (UI_BET_STEPPER_SIZE + UI_BET_STEPPER_VERTICAL_GAP) * 0.5;

	return position === 'increase' ? -offset : offset;
};

/** Horizontal inset from the standard layout edges when fitting the bar. */
export const UI_SIDE_PADDING = 24;

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

/** Vertical nudge for the control bar in standard-layout coordinates (negative = up). */
export const UI_BAR_Y_OFFSET = 10;

export const getUiBarY = ({
	mainLayoutHeight,
	layoutType,
}: {
	mainLayoutHeight: number;
	layoutType: UiLayoutType;
}) =>
	mainLayoutHeight - UI_BAR_HEIGHT * 0.5 - getUiBarBottomPadding(layoutType) + UI_BAR_Y_OFFSET;

/** X positions relative to the left edge of the control bar (y is always bar center). */
export const UI_BAR_SLOTS = {
	menu: UI_BAR_WIDTH * UI_BAR_SLOT_RATIOS.menu,
	balance: UI_BAR_WIDTH * UI_BAR_SLOT_RATIOS.balance,
	win: UI_BAR_WIDTH * UI_BAR_SLOT_RATIOS.win,
	bet: UI_BAR_WIDTH * UI_BAR_SLOT_RATIOS.bet,
	betStepper: UI_BAR_WIDTH * UI_BAR_SLOT_RATIOS.betStepper,
	spin: UI_BAR_WIDTH * UI_BAR_SLOT_RATIOS.spin,
	autoSpin: UI_BAR_WIDTH * UI_BAR_SLOT_RATIOS.autoSpin,
} as const;

export const UI_BUY_BONUS_OFFSET_X = -(UI_BUY_BONUS_SIZE * 0.55 + UI_BUTTON_SIZE * 0.4);

/** Extra left inset when buy bonus shows an active border (see ButtonBuyBonus). */
export const UI_BUY_BONUS_EDGE_PADDING = 12;

export const UI_MENU_PANEL = {
	itemSpacing: UI_MENU_BUTTON_SIZE * 1.05,
	width: UI_MENU_BUTTON_SIZE * 2.4,
	height: UI_MENU_BUTTON_SIZE * 4.8,
	borderRadius: UI_BORDER_RADIUS.menuPanel,
} as const;

export type UiDesignBounds = {
	left: number;
	right: number;
	width: number;
	centerX: number;
};

export const getUiDesignBounds = (): UiDesignBounds => {
	const left = UI_BUY_BONUS_OFFSET_X - UI_BUY_BONUS_SIZE * 0.5 - UI_BUY_BONUS_EDGE_PADDING;
	const right = Math.max(
		UI_BAR_WIDTH,
		UI_BAR_SLOTS.spin + UI_SPIN_BUTTON_SIZE * 0.5,
		UI_BAR_SLOTS.autoSpin + UI_BUTTON_SIZE * 0.5,
	);

	return {
		left,
		right,
		width: right - left,
		centerX: (left + right) * 0.5,
	};
};

/**
 * Pivot for the whole control-bar cluster (bar + buy bonus).
 * Centres on {@link getUiDesignBounds} so buy bonus is not clipped on the left.
 */
export const getUiClusterPivot = () => {
	const { centerX } = getUiDesignBounds();

	return {
		x: centerX,
		y: UI_BAR_BACKGROUND_CENTER_Y,
	};
};

export const getUiLayoutScale = (layoutType: UiLayoutType) => UI_LAYOUT_SCALE_BY_TYPE[layoutType];

export const getUiBarBottomPadding = (layoutType: UiLayoutType) =>
	UI_BAR_BOTTOM_PADDING_BY_TYPE[layoutType];

/** Scene-graph labels for the Pixi UI (debug overlay, tooling). */
export const UI_SCENE_LABELS = {
	root: 'UI',
	fade: 'UI/Fade',
	layout: 'UI/Layout',
	controlBar: {
		root: 'UI/ControlBar',
		background: 'UI/ControlBar/Background',
		buyBonus: 'UI/ControlBar/BuyBonus',
		menu: 'UI/ControlBar/Menu',
		balance: 'UI/ControlBar/Balance',
		win: 'UI/ControlBar/Win',
		bet: 'UI/ControlBar/Bet',
		betStepper: 'UI/ControlBar/BetStepper',
		betStepperIncrease: 'UI/ControlBar/BetStepper/Increase',
		betStepperDecrease: 'UI/ControlBar/BetStepper/Decrease',
		spin: 'UI/ControlBar/Spin',
		autoSpin: 'UI/ControlBar/AutoSpin',
	},
	menu: {
		root: 'UI/Menu',
		overlay: 'UI/Menu/Overlay',
		panel: 'UI/Menu/Panel',
		sound: 'UI/Menu/Sound',
		music: 'UI/Menu/Music',
		turbo: 'UI/Menu/Turbo',
		info: 'UI/Menu/Info',
	},
	chrome: {
		gameName: 'UI/Chrome/GameName',
		logo: 'UI/Chrome/Logo',
	},
} as const;

/**
 * Scale the control bar so the full design (including buy bonus) fits the available width.
 * Never scales above the layout-type preference.
 */
export const getUiFitScale = ({
	layoutType,
	availableWidth,
}: {
	layoutType: UiLayoutType;
	availableWidth: number;
}) => {
	const preferredScale = getUiLayoutScale(layoutType);
	const { width: designWidth } = getUiDesignBounds();

	if (designWidth <= 0 || availableWidth <= 0) {
		return preferredScale;
	}

	const widthFitScale = availableWidth / designWidth;

	return Math.min(preferredScale, widthFitScale);
};

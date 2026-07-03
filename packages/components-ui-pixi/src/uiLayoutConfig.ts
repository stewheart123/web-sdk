import { UI_BASE_SIZE, UI_BORDER_RADIUS } from './constants';

export type UiLayoutType = 'desktop' | 'tablet' | 'landscape' | 'portrait';

export const UI_BAR_HEIGHT = UI_BASE_SIZE * 0.9;

/** Max height for labels/buttons inside the bar background. */
export const UI_BAR_CONTENT_MAX_HEIGHT = UI_BAR_HEIGHT * 0.86;

/** Taller max height for balance/bet labels after win slot removal. */
export const UI_BAR_LABEL_MAX_HEIGHT = UI_BAR_CONTENT_MAX_HEIGHT * 1.3;

/** Nudge interactive controls upward within the bar (standard-layout pixels). */
export const UI_BAR_CONTENT_Y_NUDGE_UP = 70;

/** Vertical anchor for buttons/labels — slightly above bar geometric centre. */
export const UI_BAR_SLOT_CENTER_Y = UI_BAR_HEIGHT * 0.5 - UI_BAR_CONTENT_Y_NUDGE_UP;

/** Vertical centre of the background rectangle itself. */
export const UI_BAR_BACKGROUND_CENTER_Y = UI_BAR_HEIGHT * 0.5;

export const UI_BAR_WIDTH = 1500;
export const UI_BUY_BONUS_SIZE = UI_BASE_SIZE;
export const UI_BUTTON_SIZE = UI_BASE_SIZE * 0.85;
/** Smaller than {@link UI_BUTTON_SIZE} — used as the scale denominator for auto-spin. */
export const UI_AUTO_SPIN_BUTTON_SIZE = UI_BASE_SIZE * 1.25;
/** Scale denominator for the main spin/bet button — lower value = larger on screen. */
export const UI_SPIN_BUTTON_SIZE = (UI_BASE_SIZE * 1.35) / 2.5;
export const UI_MENU_BUTTON_SIZE = UI_BASE_SIZE * 1.2;

/** Compact menu row height — matches bar control density. */
export const UI_MENU_AUDIO_ROW_HEIGHT = UI_BAR_CONTENT_MAX_HEIGHT * 0.44;

/** Label column width inside an audio menu row. */
export const UI_MENU_AUDIO_LABEL_WIDTH = UI_BASE_SIZE * 0.38;

/** Gap between columns in an audio menu row. */
export const UI_MENU_AUDIO_GAP = 6;

/** Square on/off toggle in an audio menu row. */
export const UI_MENU_AUDIO_TOGGLE_SIZE = UI_MENU_AUDIO_ROW_HEIGHT * 0.82;

/** Slider track width inside the menu audio row. */
export const UI_MENU_AUDIO_SLIDER_WIDTH = UI_BASE_SIZE * 1.05;

export const UI_MENU_AUDIO_SLIDER_HEIGHT = 8;

export const UI_MENU_AUDIO_THUMB_SIZE = 14;

/** Total width of one audio control row (label + toggle + slider). */
export const UI_MENU_AUDIO_ROW_WIDTH =
	UI_MENU_AUDIO_LABEL_WIDTH +
	UI_MENU_AUDIO_GAP +
	UI_MENU_AUDIO_TOGGLE_SIZE +
	UI_MENU_AUDIO_GAP +
	UI_MENU_AUDIO_SLIDER_WIDTH;

/** Square menu items (e.g. info) — same scale as audio row controls. */
export const UI_MENU_ITEM_SIZE = UI_MENU_AUDIO_TOGGLE_SIZE;
export const UI_BET_STEPPER_SIZE = UI_BASE_SIZE * 0.75;
/** Font size for +/- icons — sized for legibility after bar height scaling. */
export const UI_BET_STEPPER_ICON_FONT_RATIO = 0.82;
export const getUiBetStepperIconFontSize = () =>
	UI_BET_STEPPER_SIZE * UI_BET_STEPPER_ICON_FONT_RATIO;
/** Vertical gap between stacked +/- bet buttons. */
export const UI_BET_STEPPER_VERTICAL_GAP = 8;
export const UI_BET_STEPPER_STACK_HEIGHT =
	UI_BET_STEPPER_SIZE * 2 + UI_BET_STEPPER_VERTICAL_GAP;
/** Shared design size for turbo + auto-spin stacked on the control bar. */
export const UI_AUTO_SPIN_TURBO_BUTTON_SIZE = UI_BASE_SIZE;
/** Vertical gap between stacked turbo and auto-spin buttons. */
export const UI_AUTO_SPIN_TURBO_VERTICAL_GAP = 8;
export const UI_AUTO_SPIN_TURBO_STACK_HEIGHT =
	UI_AUTO_SPIN_TURBO_BUTTON_SIZE * 2 + UI_AUTO_SPIN_TURBO_VERTICAL_GAP;
export const UI_LABEL_SCALE = 0.85;

/** Gap between adjacent slot regions inside the bar (ratio-based fallback). */
export const UI_SLOT_GAP = 8;

/** Tight gap for flow-anchored controls (menu → balance → bet → stepper → spin). */
export const UI_BAR_FLOW_GAP = 4;

/** Balance share of the info strip between menu and bet-stepper. */
export const UI_BALANCE_INFO_WIDTH_RATIO = 0.48;

/** Horizontal gap between the spin and auto-spin buttons. */
export const UI_AUTO_SPIN_GAP = 8;

/** Padding past the rightmost control when sizing the bar background. */
export const UI_BAR_EDGE_PADDING = 12;

/** Vertical offset above the bar top for the floating win ticker. */
export const UI_WIN_FLOAT_ABOVE_BAR = 90;

/** Max height of the floating win ticker — short pill, distinct from bar labels. */
export const UI_WIN_FLOAT_MAX_HEIGHT = UI_BASE_SIZE * 0.5;

export const UI_BAR_SLOT_ORDER = [
	'menu',
	'balance',
	'bet',
	'betStepper',
	'spin',
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
	balance: 0.22,
	bet: 0.38,
	betStepper: 0.52,
	spin: 0.66,
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

/** Height-based scale for square bar buttons (ignores wide slot regions). */
export const getUiBarButtonHeightScale = (baseSize: number) =>
	(UI_BAR_CONTENT_MAX_HEIGHT / baseSize) * 0.92;

export const getUiBarButtonRenderedSize = (baseSize: number) =>
	UI_BASE_SIZE * getUiBarButtonHeightScale(baseSize);

export const getUiSpinRenderedSize = () => getUiBarButtonRenderedSize(UI_SPIN_BUTTON_SIZE);

export const getUiAutoSpinRenderedSize = () => getUiBarButtonRenderedSize(UI_AUTO_SPIN_BUTTON_SIZE);

/** Places auto-spin snug against the spin button's right edge. */
export const getUiAutoSpinCenterX = () => getUiBarFlowLayout().autoSpin.centerX;

/** Bar background width — ends shortly after the auto-spin button. */
export const getUiBarContentWidth = () => {
	const { autoSpin } = getUiBarFlowLayout();
	const autoSize = UI_BASE_SIZE * autoSpin.scale;

	return autoSpin.centerX + autoSize * 0.5 + UI_BAR_EDGE_PADDING;
};

/** Horizontal centre of the floating win ticker (midpoint of balance + bet). */
export const getUiWinFloatCenterX = () => {
	const { balance, bet } = getUiBarFlowLayout();

	return (balance.centerX + bet.centerX) * 0.5;
};

/** Design width of the floating win ticker — spans the balance + bet info strip. */
export const getUiWinFloatWidth = () => {
	const { balance, bet } = getUiBarFlowLayout();

	return balance.width + bet.width;
};

/** Y position for the floating win ticker, above the bar top. */
export const getUiWinFloatY = () =>
	UI_BAR_BACKGROUND_CENTER_Y -
	UI_BAR_HEIGHT * 0.5 -
	UI_WIN_FLOAT_ABOVE_BAR -
	UI_WIN_FLOAT_MAX_HEIGHT * 0.5;

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

/** Height-only scale for bet stepper when positioned via flow layout. */
export const getUiBetStepperHeightScale = () =>
	(UI_BAR_CONTENT_MAX_HEIGHT / UI_BET_STEPPER_STACK_HEIGHT) * 0.92;

/** Height-only scale for the turbo + auto-spin column when positioned via flow layout. */
export const getUiAutoSpinColumnScale = () =>
	(UI_BAR_CONTENT_MAX_HEIGHT / UI_AUTO_SPIN_TURBO_STACK_HEIGHT) * 0.92;

export type UiBarFlowRegion = {
	centerX: number;
	width: number;
};

export type UiBarFlowButton = {
	centerX: number;
	scale: number;
};

export type UiBarFlowLayout = {
	menu: UiBarFlowButton;
	balance: UiBarFlowRegion;
	bet: UiBarFlowRegion;
	betStepper: UiBarFlowButton;
	spin: UiBarFlowButton;
	autoSpin: UiBarFlowButton;
};

/**
 * Positions bar controls edge-to-edge instead of ratio midpoints.
 * Menu → balance → bet → stepper → spin → auto-spin, left to right.
 */
export const getUiBarFlowLayout = (): UiBarFlowLayout => {
	const menuRegion = getUiBarSlotRegion('menu');
	const menuScale = getUiBarSlotButtonScale({
		regionWidth: menuRegion.width,
		baseSize: UI_BASE_SIZE,
	});
	const menuWidth = UI_BASE_SIZE * menuScale;
	const menuCenterX = UI_BAR_SLOTS.menu;

	const spinScale = getUiBarButtonHeightScale(UI_SPIN_BUTTON_SIZE);
	const spinSize = UI_BASE_SIZE * spinScale;
	const autoSpinColumnScale = getUiAutoSpinColumnScale();
	const autoSpinSize = UI_BASE_SIZE * autoSpinColumnScale;
	const stepperScale = getUiBetStepperHeightScale();
	const stepperWidth = UI_BET_STEPPER_SIZE * stepperScale;

	const spinSlotX = UI_BAR_SLOTS.spin;
	const spinCenterX = spinSlotX;
	const resolvedAutoSpinCenterX =
		spinCenterX + spinSize * 0.5 + UI_AUTO_SPIN_GAP + autoSpinSize * 0.5;

	const stepperCenterX =
		spinCenterX - spinSize * 0.5 - UI_BAR_FLOW_GAP - stepperWidth * 0.5;

	const infoLeft = menuCenterX + menuWidth * 0.5 + UI_BAR_FLOW_GAP;
	const infoRight = stepperCenterX - stepperWidth * 0.5 - UI_BAR_FLOW_GAP;
	const infoWidth = Math.max(0, infoRight - infoLeft);

	const balanceWidth = infoWidth * UI_BALANCE_INFO_WIDTH_RATIO;
	const betWidth = infoWidth - balanceWidth;

	return {
		menu: { centerX: menuCenterX, scale: menuScale },
		balance: {
			centerX: infoLeft + balanceWidth * 0.5,
			width: balanceWidth,
		},
		bet: {
			centerX: infoLeft + balanceWidth + betWidth * 0.5,
			width: betWidth,
		},
		betStepper: { centerX: stepperCenterX, scale: stepperScale },
		spin: { centerX: spinCenterX, scale: spinScale },
		autoSpin: { centerX: resolvedAutoSpinCenterX, scale: autoSpinColumnScale },
	};
};

/** Y offset from the auto-spin column centre for each stacked button. */
export const getAutoSpinTurboButtonOffsetY = (position: 'turbo' | 'autoSpin') => {
	const offset = (UI_AUTO_SPIN_TURBO_BUTTON_SIZE + UI_AUTO_SPIN_TURBO_VERTICAL_GAP) * 0.5;

	return position === 'turbo' ? -offset : offset;
};

/** Y offset from the bet-stepper slot centre for each stacked button. */
export const getBetStepperButtonOffsetY = (position: 'increase' | 'decrease') => {
	const offset = (UI_BET_STEPPER_SIZE + UI_BET_STEPPER_VERTICAL_GAP) * 0.5;

	return position === 'increase' ? -offset : offset;
};

/** Horizontal inset from the standard layout edges when fitting the bar. */
export const UI_SIDE_PADDING = 24;

export const UI_LAYOUT_SCALE_BY_TYPE: Record<UiLayoutType, number> = {
	desktop: 0.85,
	tablet: 0.92,
	landscape: 0.82,
	portrait: 1,
};

export const UI_BAR_BOTTOM_PADDING_BY_TYPE: Record<UiLayoutType, number> = {
	desktop: 10,
	tablet: 16,
	landscape: 12,
	portrait: 20,
};

/** Vertical nudge for the control bar in standard-layout coordinates (negative = up). */
export const UI_BAR_Y_OFFSET = 40;

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
	bet: UI_BAR_WIDTH * UI_BAR_SLOT_RATIOS.bet,
	betStepper: UI_BAR_WIDTH * UI_BAR_SLOT_RATIOS.betStepper,
	spin: UI_BAR_WIDTH * UI_BAR_SLOT_RATIOS.spin,
} as const;

export const UI_BUY_BONUS_OFFSET_X = -(UI_BUY_BONUS_SIZE * 0.5 + UI_BUTTON_SIZE * 0.1);

/** Extra left inset when buy bonus shows an active border (see ButtonBuyBonus). */
export const UI_BUY_BONUS_EDGE_PADDING = 12;

export const UI_MENU_PANEL = {
	itemSpacing: UI_MENU_AUDIO_ROW_HEIGHT + 10,
	width: UI_MENU_AUDIO_ROW_WIDTH + UI_BASE_SIZE * 0.12,
	height: UI_MENU_AUDIO_ROW_HEIGHT * 3 + 10 * 2 + 8,
	borderRadius: UI_BORDER_RADIUS.menuPanel,
	paddingX: UI_BASE_SIZE * 0.06,
} as const;

/** Horizontal layout offsets for a centred audio menu row (anchor 0.5). */
export const getUiMenuAudioRowLayout = () => {
	const halfRow = UI_MENU_AUDIO_ROW_WIDTH * 0.5;
	const labelCenterX = -halfRow + UI_MENU_AUDIO_LABEL_WIDTH * 0.5;
	const toggleCenterX =
		-halfRow +
		UI_MENU_AUDIO_LABEL_WIDTH +
		UI_MENU_AUDIO_GAP +
		UI_MENU_AUDIO_TOGGLE_SIZE * 0.5;
	const sliderCenterX =
		-halfRow +
		UI_MENU_AUDIO_LABEL_WIDTH +
		UI_MENU_AUDIO_GAP +
		UI_MENU_AUDIO_TOGGLE_SIZE +
		UI_MENU_AUDIO_GAP +
		UI_MENU_AUDIO_SLIDER_WIDTH * 0.5;

	return { labelCenterX, toggleCenterX, sliderCenterX };
};

export type UiDesignBounds = {
	left: number;
	right: number;
	width: number;
	centerX: number;
};

export const getUiDesignBounds = (): UiDesignBounds => {
	const { spin } = getUiBarFlowLayout();
	const spinSize = UI_BASE_SIZE * spin.scale;
	const left = UI_BUY_BONUS_OFFSET_X - UI_BUY_BONUS_SIZE * 0.5 - UI_BUY_BONUS_EDGE_PADDING;
	const right = Math.max(getUiBarContentWidth(), spin.centerX + spinSize * 0.5);

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
		bet: 'UI/ControlBar/Bet',
		betStepper: 'UI/ControlBar/BetStepper',
		betStepperIncrease: 'UI/ControlBar/BetStepper/Increase',
		betStepperDecrease: 'UI/ControlBar/BetStepper/Decrease',
		spin: 'UI/ControlBar/Spin',
		turbo: 'UI/ControlBar/Turbo',
		autoSpin: 'UI/ControlBar/AutoSpin',
		autoSpinButton: 'UI/ControlBar/AutoSpin/Button',
	},
	menu: {
		root: 'UI/Menu',
		overlay: 'UI/Menu/Overlay',
		panel: 'UI/Menu/Panel',
		sound: 'UI/Menu/Sound',
		soundSlider: 'UI/Menu/Sound/Slider',
		music: 'UI/Menu/Music',
		musicSlider: 'UI/Menu/Music/Slider',
		turbo: 'UI/Menu/Turbo',
		info: 'UI/Menu/Info',
	},
	chrome: {
		gameName: 'UI/Chrome/GameName',
		logo: 'UI/Chrome/Logo',
		winFloat: 'UI/Chrome/WinFloat',
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

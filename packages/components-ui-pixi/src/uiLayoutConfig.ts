import { UI_BASE_SIZE, UI_BORDER_RADIUS } from './constants';

export type UiLayoutType = 'desktop' | 'tablet' | 'landscape' | 'portrait';

/** Font-size multiplier per layout — independent of bar/button scale. */
export const UI_FONT_SCALE_BY_TYPE: Record<UiLayoutType, number> = {
	desktop: 1,
	tablet: 1,
	landscape: 1,
	portrait: 1,
};

/** Heavier weight on smaller viewports for legibility at full font scale. */
export const UI_FONT_WEIGHT_BY_TYPE: Record<UiLayoutType, '600' | 'bold'> = {
	desktop: '600',
	tablet: 'bold',
	landscape: 'bold',
	portrait: 'bold',
};

export const getUiFontScale = (layoutType: UiLayoutType) => UI_FONT_SCALE_BY_TYPE[layoutType];

export const getUiFontWeight = (layoutType: UiLayoutType) => UI_FONT_WEIGHT_BY_TYPE[layoutType];

export const UI_BAR_HEIGHT = UI_BASE_SIZE * 0.9;

/** Max height for labels/buttons inside the bar background. */
export const UI_BAR_CONTENT_MAX_HEIGHT = UI_BAR_HEIGHT * 0.86;

/** Taller max height for balance/bet labels after win slot removal. */
export const UI_BAR_LABEL_MAX_HEIGHT = UI_BAR_CONTENT_MAX_HEIGHT * 1.3;

/**
 * Balance / bet ticker text — tuned independently from buttons and menu labels.
 * Lower the ratios or per-layout scale to shrink BALANCE/BET only.
 */
export const UI_BAR_LABEL_FONT_HEIGHT_RATIO = 0.22;
export const UI_BAR_LABEL_FONT_WIDTH_RATIO = 0.13;

const UI_BAR_LABEL_FONT_HEIGHT_RATIO_BY_TYPE: Partial<Record<UiLayoutType, number>> = {
	landscape: 0.26,
	portrait: 0.28,
};

const UI_BAR_LABEL_FONT_WIDTH_RATIO_BY_TYPE: Partial<Record<UiLayoutType, number>> = {
	landscape: 0.15,
	portrait: 0.17,
};

export const UI_BAR_LABEL_FONT_SCALE_BY_TYPE: Record<UiLayoutType, number> = {
	desktop: 0.85,
	tablet: 1,
	landscape: 1.28,
	portrait: 1.42,
};

export const getUiBarLabelFontSize = ({
	contentHeight,
	contentWidth,
	layoutType,
}: {
	contentHeight: number;
	contentWidth: number;
	layoutType: UiLayoutType;
}) => {
	const heightRatio =
		UI_BAR_LABEL_FONT_HEIGHT_RATIO_BY_TYPE[layoutType] ?? UI_BAR_LABEL_FONT_HEIGHT_RATIO;
	const widthRatio =
		UI_BAR_LABEL_FONT_WIDTH_RATIO_BY_TYPE[layoutType] ?? UI_BAR_LABEL_FONT_WIDTH_RATIO;

	return (
		Math.min(contentHeight * heightRatio, contentWidth * widthRatio) *
		UI_BAR_LABEL_FONT_SCALE_BY_TYPE[layoutType]
	);
};

/** Heuristic average character width as a fraction of font size (proxima-nova currency). */
export const UI_BAR_LABEL_CHAR_WIDTH_RATIO = 0.58;

/** Horizontal inset fraction when fitting text to the bar label slot. */
export const UI_BAR_LABEL_TEXT_WIDTH_PADDING_RATIO = 0.92;

/** Floor as a fraction of the layout max — avoids unreadably small amounts. */
export const UI_BAR_LABEL_MIN_FONT_SIZE_RATIO = 0.65;

/**
 * Bar label font size capped by slot size, then shrunk to fit `charCount` (currency included).
 * Recomputed whenever balance/bet formatted strings change.
 */
export const getUiBarLabelFontSizeForText = ({
	contentHeight,
	contentWidth,
	layoutType,
	charCount,
}: {
	contentHeight: number;
	contentWidth: number;
	layoutType: UiLayoutType;
	charCount: number;
}) => {
	const maxFontSize = getUiBarLabelFontSize({ contentHeight, contentWidth, layoutType });
	const safeCharCount = Math.max(charCount, 1);
	const fitFontSize =
		(contentWidth * UI_BAR_LABEL_TEXT_WIDTH_PADDING_RATIO) /
		(safeCharCount * UI_BAR_LABEL_CHAR_WIDTH_RATIO);
	const minFontSize = maxFontSize * UI_BAR_LABEL_MIN_FONT_SIZE_RATIO;

	return Math.max(minFontSize, Math.min(maxFontSize, fitFontSize));
};

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

/** Chunky menu row height — touch-friendly while staying within the bar scale. */
export const UI_MENU_AUDIO_ROW_HEIGHT = UI_BAR_CONTENT_MAX_HEIGHT * 0.68;

/** Toggle button width — icon toggle button. */
export const UI_MENU_AUDIO_LABEL_WIDTH = UI_BASE_SIZE * 0.52;

/** Toggle button height in an audio menu row. */
export const UI_MENU_AUDIO_TOGGLE_HEIGHT = UI_MENU_AUDIO_ROW_HEIGHT * 0.88;

/** Total width of one audio control row (toggle only). */
export const UI_MENU_AUDIO_ROW_WIDTH = UI_MENU_AUDIO_LABEL_WIDTH;

/** Shared size for SOUND / MUSIC / INFO menu toggle buttons (desktop baseline). */
export const UI_MENU_TOGGLE_SIZES = {
	width: UI_MENU_AUDIO_LABEL_WIDTH,
	height: UI_MENU_AUDIO_TOGGLE_HEIGHT,
} as const;

/** Touch-target scale multiplier per layout type for bar-level buttons (menu, buy bonus). */
export const UI_MOBILE_TOUCH_SCALE: Partial<Record<UiLayoutType, number>> = {
	portrait: 1.3,
	landscape: 1.25,
	tablet: 1.1,
};

/** Larger scale for expanded menu-panel toggles (sound / music / info) — opens upward with room to spare. */
export const UI_MENU_PANEL_TOUCH_SCALE: Partial<Record<UiLayoutType, number>> = {
	portrait: 1.35,
	landscape: 1.25,
	tablet: 1.15,
};

export const getUiMobileTouchScale = (layoutType: UiLayoutType) =>
	UI_MOBILE_TOUCH_SCALE[layoutType] ?? 1;

export const getUiMenuPanelTouchScale = (layoutType: UiLayoutType) =>
	UI_MENU_PANEL_TOUCH_SCALE[layoutType] ?? 0;

/** Layout-aware size for SOUND / MUSIC / INFO menu toggle buttons. */
export const getUiMenuToggleSizes = (layoutType: UiLayoutType) => {
	const panelScale = getUiMenuPanelTouchScale(layoutType);

	if (panelScale > 0) {
		const size = UI_BASE_SIZE * panelScale;

		return { width: size, height: size };
	}

	return {
		width: UI_MENU_AUDIO_LABEL_WIDTH,
		height: UI_MENU_AUDIO_TOGGLE_HEIGHT,
	};
};

/** Layout-aware size for bar-level circular buttons (menu, buy bonus). */
export const getUiBarButtonSize = (layoutType: UiLayoutType) => {
	const scale = getUiMobileTouchScale(layoutType);

	return {
		width: UI_BASE_SIZE * scale,
		height: UI_BASE_SIZE * scale,
	};
};
export const UI_BET_STEPPER_SIZE = UI_BASE_SIZE * 0.75;
/** Font size for +/- icons — sized for legibility after bar height scaling. */
export const UI_BET_STEPPER_ICON_FONT_RATIO = 0.82;
export const getUiBetStepperIconFontSize = (layoutType: UiLayoutType) =>
	UI_BET_STEPPER_SIZE * UI_BET_STEPPER_ICON_FONT_RATIO * getUiFontScale(layoutType);

/** Font size for SOUND / MUSIC / INFO menu toggle labels. */
export const getUiMenuButtonFontSize = (
	sizes: { width: number; height: number },
	layoutType: UiLayoutType,
) => {
	const base = Math.min(sizes.height * 0.48, sizes.width * 0.36);

	return base * getUiFontScale(layoutType);
};
/** Vertical gap between stacked +/- bet buttons. */
export const UI_BET_STEPPER_VERTICAL_GAP = 8;
export const UI_BET_STEPPER_STACK_HEIGHT =
	UI_BET_STEPPER_SIZE * 2 + UI_BET_STEPPER_VERTICAL_GAP;
/** Shared design size for turbo + auto-spin stacked on the control bar. */
export const UI_AUTO_SPIN_TURBO_BUTTON_SIZE = UI_BASE_SIZE;
/** Render scale boost for the turbo + auto-spin column (1 = bar-fit default). */
export const UI_AUTO_SPIN_TURBO_SCALE_MULTIPLIER = 1.7;
/** Vertical gap between stacked turbo and auto-spin buttons. */
export const UI_AUTO_SPIN_TURBO_VERTICAL_GAP = 8;
export const UI_AUTO_SPIN_TURBO_STACK_HEIGHT =
	UI_AUTO_SPIN_TURBO_BUTTON_SIZE * 2 + UI_AUTO_SPIN_TURBO_VERTICAL_GAP;
export const UI_LABEL_SCALE = 0.85;

/** Gap between adjacent slot regions inside the bar (ratio-based fallback). */
export const UI_SLOT_GAP = 8;

/** Tight gap for flow-anchored controls (menu → balance → bet → spin). */
export const UI_BAR_FLOW_GAP = 4;

/** Balance share of the info strip between menu and spin. */
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
	(UI_BAR_CONTENT_MAX_HEIGHT / UI_AUTO_SPIN_TURBO_STACK_HEIGHT) *
	0.92 *
	UI_AUTO_SPIN_TURBO_SCALE_MULTIPLIER;

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
	spin: UiBarFlowButton;
	autoSpin: UiBarFlowButton;
};

/**
 * Positions bar controls edge-to-edge instead of ratio midpoints.
 * Menu → balance → bet → spin → auto-spin, left to right.
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

	const spinSlotX = UI_BAR_SLOTS.spin;
	const spinCenterX = spinSlotX;
	const resolvedAutoSpinCenterX =
		spinCenterX + spinSize * 0.5 + UI_AUTO_SPIN_GAP + autoSpinSize * 0.5;

	const infoLeft = menuCenterX + menuWidth * 0.5 + UI_BAR_FLOW_GAP;
	const infoRight = spinCenterX - spinSize * 0.5 - UI_BAR_FLOW_GAP;
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
		spin: { centerX: spinCenterX, scale: spinScale },
		autoSpin: { centerX: resolvedAutoSpinCenterX, scale: autoSpinColumnScale },
	};
};

/** Y offset from the auto-spin column centre for each stacked button. */
export const getAutoSpinTurboButtonOffsetY = (position: 'turbo' | 'autoSpin') => {
	const offset = (UI_AUTO_SPIN_TURBO_BUTTON_SIZE + UI_AUTO_SPIN_TURBO_VERTICAL_GAP) * 0.5;

	return position === 'turbo' ? -offset : offset;
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
	spin: UI_BAR_WIDTH * UI_BAR_SLOT_RATIOS.spin,
} as const;

export const UI_BUY_BONUS_OFFSET_X = -(UI_BUY_BONUS_SIZE * 0.5 + UI_BUTTON_SIZE * 0.1);

/** Extra left inset when buy bonus shows an active border (see ButtonBuyBonus). */
export const UI_BUY_BONUS_EDGE_PADDING = 12;

export const UI_MENU_PANEL = {
	rowGap: 12,
	paddingX: 2,
	paddingY: 10,
	gapAboveMenu: 8,
	itemSpacing: UI_MENU_AUDIO_ROW_HEIGHT + 12,
	width: UI_MENU_AUDIO_ROW_WIDTH + 4,
	borderRadius: UI_BORDER_RADIUS.menuPanel,
} as const;

export type UiMenuPanelLayout = {
	panelLeftX: number;
	panelTopY: number;
	panelWidth: number;
	panelHeight: number;
	rowCenterX: number;
	menuCenterX: number;
	soundY: number;
	musicY: number;
	infoY: number;
};

/** Positions the menu panel flush with the menu button (center-aligned, opens upward). */
export const getUiMenuPanelLayout = (
	menuScale: number,
	menuCenterY: number = UI_BAR_SLOT_CENTER_Y,
	menuCenterX: number = UI_BAR_SLOTS.menu,
	layoutType: UiLayoutType = 'desktop',
): UiMenuPanelLayout => {
	const toggleSizes = getUiMenuToggleSizes(layoutType);
	const toggleHeight = toggleSizes.height;
	const toggleWidth = toggleSizes.width;
	const panelSpacingScale = getUiMenuPanelTouchScale(layoutType) || 1;
	const rowGap = UI_MENU_PANEL.rowGap * panelSpacingScale;
	const paddingY = UI_MENU_PANEL.paddingY * panelSpacingScale;
	const menuButtonSize = getUiBarButtonSize(layoutType).width * menuScale;
	const panelWidth = Math.max(
		toggleWidth + UI_MENU_PANEL.paddingX * 2,
		menuButtonSize + UI_MENU_PANEL.paddingX * 2,
	);
	const panelLeftX = menuCenterX - panelWidth * 0.5;
	const rowCenterX = menuCenterX;

	const menuButtonTop = menuCenterY - menuButtonSize * 0.5;
	const panelBottomY = menuButtonTop - UI_MENU_PANEL.gapAboveMenu;

	const infoY = panelBottomY - toggleHeight * 0.5 - paddingY;
	const musicY = infoY - toggleHeight * 0.5 - rowGap - toggleHeight * 0.5;
	const soundY = musicY - toggleHeight * 0.5 - rowGap - toggleHeight * 0.5;
	const panelTopY = soundY - toggleHeight * 0.5 - paddingY;
	const panelHeight = panelBottomY - panelTopY;

	return {
		panelLeftX,
		panelTopY,
		panelWidth,
		panelHeight,
		rowCenterX,
		menuCenterX,
		soundY,
		musicY,
		infoY,
	};
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

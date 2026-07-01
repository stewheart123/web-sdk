import { BOARD_DIMENSIONS, SYMBOL_SIZE } from './constants';

// ---------------------------------------------------------------------------
// Layout types & virtual canvas sizes (game MainContainer coordinate space)
// ---------------------------------------------------------------------------

export type LayoutType = 'desktop' | 'landscape' | 'portrait' | 'tablet';

export const MAIN_SIZES_MAP = {
	desktop: { width: 1422, height: 800 },
	tablet: { width: 1000, height: 1000 },
	landscape: { width: 1600, height: 900 },
	portrait: { width: 800, height: 1422 },
} as const satisfies Record<LayoutType, { width: number; height: number }>;

export const BACKGROUND_RATIO = {
	normal: 1264 / 842,
	portrait: 1242 / 2208,
} as const;

export const BACKGROUND_ART_SIZE = {
	width: 1264,
	height: 842,
} as const;

export const BACKGROUND_OFFSET = {
	x: 0,
	y: 0,
} as const;

export const BACKGROUND_LAYERS = {
	backdrop: -3,
	normal: -2,
	feature: -1,
} as const;

// ---------------------------------------------------------------------------
// Shared overlay (dim background on modals / win screens)
// ---------------------------------------------------------------------------

export const OVERLAY = {
	backgroundColor: 0x000000,
	backgroundAlpha: 0.5,
	/** Fade duration in ms — matches HALF_SECOND. */
	fadeDurationMs: 500,
} as const;

// ---------------------------------------------------------------------------
// Board & frame
// ---------------------------------------------------------------------------

export type FrameLayoutSettings = {
	/** Offset from board center (boardLayout x/y) in game virtual space. */
	offsetX: number;
	offsetY: number;
	width: number;
	height: number;
};

export type LayoutBoardSettings = {
	/** Multiplier on the board container scale. 1.0 = baseline size from constants.ts. */
	symbolScale: number;
	/** Positive values shift the board right. */
	boardXOffset: number;
	/** Positive values shift the board up (subtracted from y). */
	boardYOffset: number;
	frame: FrameLayoutSettings;
};

export const BOARD_LAYOUT_BY_TYPE: Record<LayoutType, LayoutBoardSettings> = {
	desktop: {
		symbolScale: 1.1,
		boardXOffset: 0,
		boardYOffset: 20,
		frame: { offsetX: 9, offsetY: 70, width: 840, height: 688 },
	},
	landscape: {
		symbolScale: 1.0,
		boardXOffset: 0,
		boardYOffset: 62,
		frame: { offsetX: -100, offsetY: 32, width: 1000, height: 688 },
	},
	portrait: {
		symbolScale: 1.0,
		boardXOffset: -45,
		boardYOffset: 0,
		frame: { offsetX: 12, offsetY: 5, width: 706, height: 550 },
	},
	tablet: {
		symbolScale: 1.0,
		boardXOffset: 0,
		boardYOffset: 0,
		frame: { offsetX: 0, offsetY: 0, width: 900, height: 620 },
	},
};

export const BOARD_MASK = {
	/** Horizontal mask padding as a multiple of SYMBOL_SIZE (applied left and right). */
	horizontalPadding: 1,
} as const;

export const FRAME_GLOW = {
	spineScale: { width: 0.62 * 2.5, height: 0.66 * 2 },
	positionAdjustment: 1.01,
	fadeDuration: 500,
} as const;

export const resolveFrameLayout = (
	boardX: number,
	boardY: number,
	frame: FrameLayoutSettings,
) => ({
	x: boardX + frame.offsetX,
	y: boardY + frame.offsetY,
	width: frame.width,
	height: frame.height,
});

// ---------------------------------------------------------------------------
// Logo (game virtual space — rendered inside MainContainer)
// ---------------------------------------------------------------------------

export type LogoAlign = 'topRight' | 'topCenter';

export type LogoLayoutSettings = {
	width: number;
	/** Position in game virtual space. For topRight: right edge x. For topCenter: center x. */
	x: number;
	y: number;
	align: LogoAlign;
};

export const LOGO_LAYOUT_BY_TYPE: Record<LayoutType, LogoLayoutSettings> = {
	desktop: { width: 120, x: 1252, y: 40, align: 'topRight' },
	landscape: { width: 120, x: 800, y: 30, align: 'topCenter' },
	portrait: { width: 100, x: 400, y: 40, align: 'topCenter' },
	tablet: { width: 120, x: 870, y: 30, align: 'topRight' },
};

// ---------------------------------------------------------------------------
// Modifier reel
// ---------------------------------------------------------------------------

export type ModifierLayoutSettings = {
	slabWidth: number;
	slabHeight: number;
	cardHeight: number;
	cardWindowY: number;
	/** Card-only vertical offset inside the mask window. Negative moves the card up. */
	cardYOffset: number;
	cardWindowWidth: number;
	cardWindowHeight: number;
	scrollDistance: number;
	scrollDuration: number;
	/** Scale applied when layout is stacked (portrait / tablet). */
	stackedScale: number;
	desktopPosition: {
		xOffsetFromBoardWidth: number;
		yMultiplier: number;
	};
	portraitPosition: {
		xOffsetFromBoardWidth: number;
		yMultiplier: number;
	};
};

const BASE_MODIFIER_LAYOUT: Omit<ModifierLayoutSettings, 'slabWidth'> = {
	slabHeight: SYMBOL_SIZE * 1.45,
	cardHeight: SYMBOL_SIZE * 0.95,
	cardWindowY: SYMBOL_SIZE * 0.15,
	cardYOffset: SYMBOL_SIZE * -0.45,
	cardWindowWidth: SYMBOL_SIZE * 1,
	cardWindowHeight: SYMBOL_SIZE * 1.1,
	scrollDistance: SYMBOL_SIZE,
	scrollDuration: 333,
	stackedScale: 1.28,
	desktopPosition: { xOffsetFromBoardWidth: 0.75, yMultiplier: 1 },
	portraitPosition: { xOffsetFromBoardWidth: -3.5, yMultiplier: -0.55 },
};

export const MODIFIER_LAYOUT_BY_TYPE: Record<LayoutType, ModifierLayoutSettings> = {
	desktop: { ...BASE_MODIFIER_LAYOUT, slabWidth: SYMBOL_SIZE },
	landscape: { ...BASE_MODIFIER_LAYOUT, slabWidth: SYMBOL_SIZE },
	portrait: { ...BASE_MODIFIER_LAYOUT, slabWidth: SYMBOL_SIZE * 0.95 },
	tablet: { ...BASE_MODIFIER_LAYOUT, slabWidth: SYMBOL_SIZE },
};

// ---------------------------------------------------------------------------
// Anticipation spine (per reel)
// ---------------------------------------------------------------------------

export const ANTICIPATION = {
	widthMultiplier: 0.56,
	heightMultiplier: 1.6,
	/** Subtracted from board centre y: y = boardHeight * 0.5 - SYMBOL_SIZE * yOffsetMultiplier */
	yOffsetMultiplier: 0.06,
} as const;

// ---------------------------------------------------------------------------
// Bonus transition (full canvas space)
// ---------------------------------------------------------------------------

export type BonusTransitionLayoutSettings = {
	/** Fraction of canvas width (0.5 = center). */
	xRatio: number;
	/** Fraction of canvas height. */
	yRatio: number;
	/** Target spine height = canvas.height * heightScale. */
	heightScale: number;
	anchor?: number;
	scale?: number;
};

export const BONUS_TRANSITION_LAYOUT_BY_TYPE: Record<LayoutType, BonusTransitionLayoutSettings> = {
	desktop: { xRatio: 0.5, yRatio: 0.5, heightScale: 1.7 },
	landscape: { xRatio: 0.5, yRatio: 0.5, heightScale: 1.7 },
	portrait: { xRatio: 0.5, yRatio: 0.48, heightScale: 1.9 },
	tablet: { xRatio: 0.5, yRatio: 0.5, heightScale: 1.75 },
};

// ---------------------------------------------------------------------------
// Free spin modal (shared by intro & outro)
// ---------------------------------------------------------------------------

export const FREE_SPIN_MODAL = {
	/** Aspect ratio of the foil modal sprite (width / height). */
	modalRatio: 613 / 391,
	/** Multiplier on SYMBOL_SIZE * BOARD_DIMENSIONS.x for modal background width. */
	widthMultiplier: 1,
	panelWidthMultiplier: 1,
	panelHeightMultiplier: 1,
	/** Vertical offset from boardLayout y (negative = up). */
	yOffsetFromBoard: -60,
	/** Position of shine spine and modal content container within panel space. */
	contentXRatio: 0.5,
	contentYRatio: 0.4,
	modalSpriteAnchor: { x: 0.5, y: 0.5 },
} as const;

export const getFreeSpinModalSizes = () => {
	const baseWidth = SYMBOL_SIZE * BOARD_DIMENSIONS.x;
	const backgroundWidth = baseWidth * FREE_SPIN_MODAL.widthMultiplier;

	return {
		background: {
			width: backgroundWidth,
			height: backgroundWidth / FREE_SPIN_MODAL.modalRatio,
		},
		panel: {
			width: baseWidth * FREE_SPIN_MODAL.panelWidthMultiplier,
			height: baseWidth * FREE_SPIN_MODAL.panelHeightMultiplier,
		},
	};
};

// ---------------------------------------------------------------------------
// Free spin intro
// ---------------------------------------------------------------------------

export const FREE_SPIN_INTRO = {
	/** "Congratulations" / freespins_{lang}.png header sprite. */
	congratsSprite: {
		width: 426 * 1.6,
		height: 85 * 1.6,
		anchor: { x: 0.5, y: 2 },
	},
	/** Spine + bitmap number (e.g. "10"). */
	numberSpine: {
		widthRatio: 0.4,
		y: -200,
		zIndex: 1,
		numberTextAnchor: { x: 0.5, y: 0.5 },
	},
	/** "FREE SPINS" label sprite (freespins.png). */
	freeSpinsLabel: {
		width: 335,
		height: 67,
		anchor: { x: 0.5, y: 5 },
	},
} as const;

// ---------------------------------------------------------------------------
// Free spin outro
// ---------------------------------------------------------------------------

export const FREE_SPIN_OUTRO = {
	numberSpine: {
		widthRatio: 0.4,
		zIndex: 1,
		maxWidthRatio: 1,
	},
	/** Big-win variant of congrats header (freespins_{lang}.png). */
	bigWinCongratsSprite: {
		width: 426 * 2.2,
		height: 85 * 2.2,
		anchor: { x: 0.5, y: 1.2 },
	},
	youWon: {
		anchor: { x: 0.5, y: 0.5 },
		widthScale: 0.7,
		heightScale: 0.07,
		x: 0,
		yRatio: -0.28,
		zIndex: 2,
	},
	totalWin: {
		anchor: { x: 0.5, y: 0.5 },
		widthScale: 0.55,
		heightScale: 0.055,
		x: 0,
		yRatio: 0.28,
		zIndex: 2,
		bigWidthScale: 0.4,
		bigHeightScale: 0.045,
	},
} as const;

/** @deprecated Use FREE_SPIN_OUTRO */
export const FREE_SPIN_OUTRO_LABELS = {
	youWon: FREE_SPIN_OUTRO.youWon,
	totalWin: FREE_SPIN_OUTRO.totalWin,
};

// ---------------------------------------------------------------------------
// Free spin counter (desktop / landscape HUD)
// ---------------------------------------------------------------------------

export const FREE_SPIN_COUNTER = {
	panelKey: 'Frame_FSCounter.png',
	panelRatio: 824 / 622,
	widthMultiplier: 1.2,
	gapFromBoard: 0.2,
	scale: 1,
	textContainerXRatio: 0.5,
	textContainerYRatio: 0.48,
	textContainerAnchor: { x: 0.5, y: 0.5 },
	counterTextAnchor: { x: 0.5, y: 0 },
} as const;

// ---------------------------------------------------------------------------
// Press to continue (intro, outro, win, loading)
// ---------------------------------------------------------------------------

export const PRESS_TO_CONTINUE = {
	width: 600,
	xRatio: 0.5,
	yRatio: 0.8,
	anchor: { x: 0.5, y: 1 },
} as const;

// ---------------------------------------------------------------------------
// Loading screen
// ---------------------------------------------------------------------------

export const LOADING_SCREEN = {
	logoWidth: 300,
	xRatio: 0.5,
	yRatio: 0.5,
	progressBar: {
		y: 250,
		width: 1967 * 0.2,
		height: 346 * 0.2,
	},
} as const;

// ---------------------------------------------------------------------------
// Win overlay
// ---------------------------------------------------------------------------

export const WIN_LAYOUT = {
	bigWinTextContainerScale: 0.7,
	bigWinTextMaxWidth: 2130,
	animationScale: 0.55,
	countUpCompleteDelayMs: 300,
} as const;

// ---------------------------------------------------------------------------
// Bitmap text sizes (used by fontConfig)
// ---------------------------------------------------------------------------

export type BitmapFontId = 'gold' | 'goldBlur' | 'silver' | 'purple';

export type BitmapFontUsage =
	| 'winBig'
	| 'winNormal'
	| 'symbolMultiplier'
	| 'freeSpinCounter'
	| 'freeSpinIntro'
	| 'freeSpinOutro';

export type BitmapFontUsageConfig = {
	font: BitmapFontId;
	sizeMode: 'symbolMultiplier' | 'absolute' | 'widthRatio';
	size: number;
	letterSpacing?: number;
	align?: 'left' | 'center' | 'right';
};

export const TEXT_LAYOUT: Record<BitmapFontUsage, BitmapFontUsageConfig> = {
	winBig: { font: 'gold', sizeMode: 'symbolMultiplier', size: 1.6, align: 'center' },
	winNormal: { font: 'gold', sizeMode: 'symbolMultiplier', size: 0.5, align: 'center' },
	symbolMultiplier: { font: 'gold', sizeMode: 'absolute', size: 50 },
	freeSpinCounter: { font: 'gold', sizeMode: 'symbolMultiplier', size: 0.275 },
	freeSpinIntro: { font: 'gold', sizeMode: 'widthRatio', size: 0.05 },
	freeSpinOutro: { font: 'gold', sizeMode: 'widthRatio', size: 0.08 },
};

export const FONT_SCALE_BY_TYPE: Record<LayoutType, number> = {
	desktop: 1,
	landscape: 1,
	portrait: 1,
	tablet: 1,
};

// ---------------------------------------------------------------------------
// Accessors
// ---------------------------------------------------------------------------

export const getBoardLayoutSettings = (layoutType: LayoutType) =>
	BOARD_LAYOUT_BY_TYPE[layoutType];

export const getLogoLayoutSettings = (layoutType: LayoutType) =>
	LOGO_LAYOUT_BY_TYPE[layoutType];

export const getModifierLayoutSettings = (layoutType: LayoutType) =>
	MODIFIER_LAYOUT_BY_TYPE[layoutType];

export const getBonusTransitionLayoutSettings = (layoutType: LayoutType) =>
	BONUS_TRANSITION_LAYOUT_BY_TYPE[layoutType];

export const getFontScale = (layoutType: LayoutType) => FONT_SCALE_BY_TYPE[layoutType];

/** @deprecated Use FREE_SPIN_MODAL */
export const FREE_SPIN_ANIMATION = {
	yOffsetFromBoard: FREE_SPIN_MODAL.yOffsetFromBoard,
};

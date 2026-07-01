import { BOARD_DIMENSIONS, SYMBOL_SIZE } from './constants';

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

export type LayoutType = 'desktop' | 'landscape' | 'portrait' | 'tablet';

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

export type LogoAlign = 'topRight' | 'topCenter';

export type LogoLayoutSettings = {
	width: number;
	/** Position in game virtual space. For topRight: right edge x. For topCenter: center x. */
	x: number;
	y: number;
	align: LogoAlign;
};

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

// ---------------------------------------------------------------------------
// VISUAL_LAYOUT — labels + layout values (Area/Element convention)
// ---------------------------------------------------------------------------

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

export const VISUAL_LAYOUT = {
	background: {
		backdrop: { label: 'Background/Backdrop', zIndex: -3 },
		base: { label: 'Background/Base', zIndex: -2 },
		feature: { label: 'Background/Feature', zIndex: -1 },
		ratio: {
			normal: 1264 / 842,
			portrait: 1242 / 2208,
		},
		artSize: { width: 1264, height: 842 },
		offset: { x: 0, y: 0 },
	},
	board: {
		root: { label: 'Board/Root' },
		mask: {
			label: 'Board/Mask',
			/** Horizontal mask padding as a multiple of SYMBOL_SIZE (applied left and right). */
			horizontalPadding: 1,
		},
		maskDebug: { label: 'Board/MaskDebug' },
		frame: { label: 'Board/Frame' },
		frameGlow: {
			label: 'Board/FrameGlow',
			spine: { label: 'Board/FrameGlow/Spine' },
			spineScale: { width: 0.62 * 2.5, height: 0.66 * 2 },
			positionAdjustment: 1.01,
			fadeDuration: 500,
		},
		layoutByType: {
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
		} satisfies Record<LayoutType, LayoutBoardSettings>,
		anticipation: {
			widthMultiplier: 0.56,
			heightMultiplier: 1.6,
			/** Subtracted from board centre y: y = boardHeight * 0.5 - SYMBOL_SIZE * yOffsetMultiplier */
			yOffsetMultiplier: 0.06,
		},
	},
	logo: {
		root: { label: 'Logo/Root' },
		spine: { label: 'Logo/Spine' },
		layoutByType: {
			desktop: { width: 120, x: 1252, y: 40, align: 'topRight' },
			landscape: { width: 120, x: 800, y: 30, align: 'topCenter' },
			portrait: { width: 100, x: 400, y: 40, align: 'topCenter' },
			tablet: { width: 120, x: 870, y: 30, align: 'topRight' },
		} satisfies Record<LayoutType, LogoLayoutSettings>,
	},
	modifier: {
		root: { label: 'Modifier/Root' },
		slab: { label: 'Modifier/Slab' },
		cardWindow: { label: 'Modifier/CardWindow' },
		cardWindowMask: { label: 'Modifier/CardWindow/Mask' },
		card: { label: 'Modifier/Card' },
		cardSpine: { label: 'Modifier/Card/Spine' },
		layoutByType: {
			desktop: { ...BASE_MODIFIER_LAYOUT, slabWidth: SYMBOL_SIZE },
			landscape: { ...BASE_MODIFIER_LAYOUT, slabWidth: SYMBOL_SIZE },
			portrait: { ...BASE_MODIFIER_LAYOUT, slabWidth: SYMBOL_SIZE * 0.95 },
			tablet: { ...BASE_MODIFIER_LAYOUT, slabWidth: SYMBOL_SIZE },
		} satisfies Record<LayoutType, ModifierLayoutSettings>,
	},
	freeSpin: {
		modal: {
			root: { label: 'FreeSpin/Modal/Root' },
			shine: { label: 'FreeSpin/Modal/Shine' },
			panel: { label: 'FreeSpin/Modal/Panel' },
			foil: { label: 'FreeSpin/Modal/Foil' },
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
		},
		intro: {
			congrats: {
				label: 'FreeSpin/Intro/Congrats',
				width: 426 * 1.6,
				height: 85 * 1.6,
				anchor: { x: 0.5, y: 2 },
			},
			numberSpine: {
				label: 'FreeSpin/Intro/NumberSpine',
				widthRatio: 0.4,
				y: -200,
				zIndex: 1,
				numberTextAnchor: { x: 0.5, y: 0.5 },
			},
			numberText: { label: 'FreeSpin/Intro/NumberText' },
			freeSpinsLabel: {
				label: 'FreeSpin/Intro/FreeSpinsLabel',
				width: 335,
				height: 67,
				anchor: { x: 0.5, y: 5 },
			},
		},
		outro: {
			numberSpine: {
				label: 'FreeSpin/Outro/NumberSpine',
				widthRatio: 0.4,
				zIndex: 1,
				maxWidthRatio: 1,
			},
			numberText: { label: 'FreeSpin/Outro/NumberText' },
			bigWinCongrats: {
				label: 'FreeSpin/Outro/BigWinCongrats',
				width: 426 * 2.2,
				height: 85 * 2.2,
				anchor: { x: 0.5, y: 1.2 },
			},
			youWon: {
				label: 'FreeSpin/Outro/YouWon',
				anchor: { x: 0.5, y: 0.5 },
				widthScale: 0.7,
				heightScale: 0.07,
				x: 0,
				yRatio: -0.28,
				zIndex: 2,
			},
			totalWin: {
				label: 'FreeSpin/Outro/TotalWin',
				anchor: { x: 0.5, y: 0.5 },
				widthScale: 0.55,
				heightScale: 0.055,
				x: 0,
				yRatio: 0.28,
				zIndex: 2,
				bigWidthScale: 0.4,
				bigHeightScale: 0.045,
			},
		},
		counter: {
			panel: { label: 'FreeSpin/Counter/Panel' },
			text: { label: 'FreeSpin/Counter/Text' },
			title: { label: 'FreeSpin/Counter/Title' },
			count: { label: 'FreeSpin/Counter/Count' },
			layout: {
				panelKey: 'Frame_FSCounter.png',
				panelRatio: 824 / 622,
				widthMultiplier: 1.2,
				gapFromBoard: 0.2,
				scale: 1,
				textContainerXRatio: 0.5,
				textContainerYRatio: 0.48,
				textContainerAnchor: { x: 0.5, y: 0.5 },
				counterTextAnchor: { x: 0.5, y: 0 },
			},
		},
	},
	win: {
		root: { label: 'Win/Root' },
		dim: { label: 'Win/Dim' },
		bigText: { label: 'Win/BigText' },
		normalText: { label: 'Win/NormalText' },
		bigAnimation: { label: 'Win/BigAnimation' },
		coins: { label: 'Win/Coins' },
		coinsEmitter: { label: 'Win/Coins/Emitter' },
		layout: {
			bigWinTextContainerScale: 0.7,
			bigWinTextMaxWidth: 2130,
			animationScale: 0.55,
			countUpCompleteDelayMs: 300,
		},
	},
	loading: {
		root: { label: 'Loading/Root' },
		logo: { label: 'Loading/Logo' },
		progress: { label: 'Loading/Progress' },
		progressBg: { label: 'Loading/ProgressBg' },
		progressFill: { label: 'Loading/ProgressFill' },
		screen: {
			logoWidth: 300,
			xRatio: 0.5,
			yRatio: 0.5,
			progressBar: {
				y: 250,
				width: 1967 * 0.2,
				height: 346 * 0.2,
			},
		},
	},
	layout: {
		frameLayer: { label: 'Layout/FrameLayer' },
		boardLayer: { label: 'Layout/BoardLayer' },
		freeSpinModal: { label: 'Layout/FreeSpinModal' },
		pressToContinue: { label: 'Layout/PressToContinue' },
		win: { label: 'Layout/Win' },
		winCoins: { label: 'Layout/WinCoins' },
		freeSpinCounter: { label: 'Layout/FreeSpinCounter' },
		loading: { label: 'Layout/Loading' },
	},
	fade: {
		backgroundBase: { label: 'Fade/Background/Base' },
		backgroundFeature: { label: 'Fade/Background/Feature' },
		freeSpinIntro: { label: 'Fade/FreeSpin/Intro' },
		freeSpinOutro: { label: 'Fade/FreeSpin/Outro' },
		modifier: { label: 'Fade/Modifier' },
		win: { label: 'Fade/Win' },
		freeSpinCounter: { label: 'Fade/FreeSpin/Counter' },
		loadingStart: { label: 'Fade/Loading/Start' },
		loadingPressToContinue: { label: 'Fade/Loading/PressToContinue' },
		loadingTransition: { label: 'Fade/Loading/Transition' },
	},
	ui: {
		pressToContinue: {
			label: 'UI/PressToContinue',
			width: 600,
			xRatio: 0.5,
			yRatio: 0.8,
			anchor: { x: 0.5, y: 1 },
		},
	},
	overlay: {
		dim: { label: 'Overlay/Dim' },
		backgroundColor: 0x000000,
		backgroundAlpha: 0.5,
		/** Fade duration in ms — matches HALF_SECOND. */
		fadeDurationMs: 500,
	},
	transition: {
		bonus: { label: 'Transition/Bonus' },
		layoutByType: {
			desktop: { xRatio: 0.5, yRatio: 0.5, heightScale: 1.7 },
			landscape: { xRatio: 0.5, yRatio: 0.5, heightScale: 1.7 },
			portrait: { xRatio: 0.5, yRatio: 0.48, heightScale: 1.9 },
			tablet: { xRatio: 0.5, yRatio: 0.5, heightScale: 1.75 },
		} satisfies Record<LayoutType, BonusTransitionLayoutSettings>,
	},
	dev: {
		i18nTest: { label: 'Dev/I18nTest' },
	},
	canvas: {
		mainSizesByType: {
			desktop: { width: 1422, height: 800 },
			tablet: { width: 1000, height: 1000 },
			landscape: { width: 1600, height: 900 },
			portrait: { width: 800, height: 1422 },
		} satisfies Record<LayoutType, { width: number; height: number }>,
	},
	fonts: {
		textLayout: {
			winBig: { font: 'gold', sizeMode: 'symbolMultiplier', size: 1.6, align: 'center' },
			winNormal: { font: 'gold', sizeMode: 'symbolMultiplier', size: 0.5, align: 'center' },
			symbolMultiplier: { font: 'gold', sizeMode: 'absolute', size: 50 },
			freeSpinCounter: { font: 'gold', sizeMode: 'symbolMultiplier', size: 0.275 },
			freeSpinIntro: { font: 'gold', sizeMode: 'widthRatio', size: 0.05 },
			freeSpinOutro: { font: 'gold', sizeMode: 'widthRatio', size: 0.08 },
		} satisfies Record<BitmapFontUsage, BitmapFontUsageConfig>,
		scaleByType: {
			desktop: 1,
			landscape: 1,
			portrait: 1,
			tablet: 1,
		} satisfies Record<LayoutType, number>,
	},
} as const;

// ---------------------------------------------------------------------------
// Dynamic scene labels (symbols, per-reel anticipation)
// ---------------------------------------------------------------------------

export const sceneLabel = {
	symbol: (reel: number, row: number) => `Board/Symbol/R${reel}C${row}`,
	anticipation: (reel: number) => `Board/Anticipation/R${reel}`,
	anticipationSpine: (reel: number) => `Board/Anticipation/R${reel}/Spine`,
	symbolMultiplier: (reel: number, row: number) => `Board/Symbol/R${reel}C${row}/Multiplier`,
} as const;

// ---------------------------------------------------------------------------
// Accessors
// ---------------------------------------------------------------------------

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

export const getFreeSpinModalSizes = () => {
	const modal = VISUAL_LAYOUT.freeSpin.modal;
	const baseWidth = SYMBOL_SIZE * BOARD_DIMENSIONS.x;
	const backgroundWidth = baseWidth * modal.widthMultiplier;

	return {
		background: {
			width: backgroundWidth,
			height: backgroundWidth / modal.modalRatio,
		},
		panel: {
			width: baseWidth * modal.panelWidthMultiplier,
			height: baseWidth * modal.panelHeightMultiplier,
		},
	};
};

export const getBoardLayoutSettings = (layoutType: LayoutType) =>
	VISUAL_LAYOUT.board.layoutByType[layoutType];

export const getLogoLayoutSettings = (layoutType: LayoutType) =>
	VISUAL_LAYOUT.logo.layoutByType[layoutType];

export const getModifierLayoutSettings = (layoutType: LayoutType) =>
	VISUAL_LAYOUT.modifier.layoutByType[layoutType];

export const getBonusTransitionLayoutSettings = (layoutType: LayoutType) =>
	VISUAL_LAYOUT.transition.layoutByType[layoutType];

export const getFontScale = (layoutType: LayoutType) =>
	VISUAL_LAYOUT.fonts.scaleByType[layoutType];

// ---------------------------------------------------------------------------
// SCENE_LABELS (derived from VISUAL_LAYOUT)
// ---------------------------------------------------------------------------

export const SCENE_LABELS = {
	background: {
		backdrop: VISUAL_LAYOUT.background.backdrop.label,
		base: VISUAL_LAYOUT.background.base.label,
		feature: VISUAL_LAYOUT.background.feature.label,
	},
	board: {
		root: VISUAL_LAYOUT.board.root.label,
		mask: VISUAL_LAYOUT.board.mask.label,
		maskDebug: VISUAL_LAYOUT.board.maskDebug.label,
		frame: VISUAL_LAYOUT.board.frame.label,
		frameGlow: VISUAL_LAYOUT.board.frameGlow.label,
		frameGlowSpine: VISUAL_LAYOUT.board.frameGlow.spine.label,
	},
	logo: {
		root: VISUAL_LAYOUT.logo.root.label,
		spine: VISUAL_LAYOUT.logo.spine.label,
	},
	modifier: {
		root: VISUAL_LAYOUT.modifier.root.label,
		slab: VISUAL_LAYOUT.modifier.slab.label,
		cardWindow: VISUAL_LAYOUT.modifier.cardWindow.label,
		cardWindowMask: VISUAL_LAYOUT.modifier.cardWindowMask.label,
		card: VISUAL_LAYOUT.modifier.card.label,
		cardSpine: VISUAL_LAYOUT.modifier.cardSpine.label,
	},
	freeSpin: {
		modal: {
			root: VISUAL_LAYOUT.freeSpin.modal.root.label,
			shine: VISUAL_LAYOUT.freeSpin.modal.shine.label,
			panel: VISUAL_LAYOUT.freeSpin.modal.panel.label,
			foil: VISUAL_LAYOUT.freeSpin.modal.foil.label,
		},
		intro: {
			congrats: VISUAL_LAYOUT.freeSpin.intro.congrats.label,
			numberSpine: VISUAL_LAYOUT.freeSpin.intro.numberSpine.label,
			numberText: VISUAL_LAYOUT.freeSpin.intro.numberText.label,
			freeSpinsLabel: VISUAL_LAYOUT.freeSpin.intro.freeSpinsLabel.label,
		},
		outro: {
			numberSpine: VISUAL_LAYOUT.freeSpin.outro.numberSpine.label,
			numberText: VISUAL_LAYOUT.freeSpin.outro.numberText.label,
			bigWinCongrats: VISUAL_LAYOUT.freeSpin.outro.bigWinCongrats.label,
			youWon: VISUAL_LAYOUT.freeSpin.outro.youWon.label,
			totalWin: VISUAL_LAYOUT.freeSpin.outro.totalWin.label,
		},
		counter: {
			panel: VISUAL_LAYOUT.freeSpin.counter.panel.label,
			text: VISUAL_LAYOUT.freeSpin.counter.text.label,
			title: VISUAL_LAYOUT.freeSpin.counter.title.label,
			count: VISUAL_LAYOUT.freeSpin.counter.count.label,
		},
	},
	win: {
		root: VISUAL_LAYOUT.win.root.label,
		dim: VISUAL_LAYOUT.win.dim.label,
		bigText: VISUAL_LAYOUT.win.bigText.label,
		normalText: VISUAL_LAYOUT.win.normalText.label,
		bigAnimation: VISUAL_LAYOUT.win.bigAnimation.label,
		coins: VISUAL_LAYOUT.win.coins.label,
		coinsEmitter: VISUAL_LAYOUT.win.coinsEmitter.label,
	},
	loading: {
		root: VISUAL_LAYOUT.loading.root.label,
		logo: VISUAL_LAYOUT.loading.logo.label,
		progress: VISUAL_LAYOUT.loading.progress.label,
		progressBg: VISUAL_LAYOUT.loading.progressBg.label,
		progressFill: VISUAL_LAYOUT.loading.progressFill.label,
	},
	layout: {
		frameLayer: VISUAL_LAYOUT.layout.frameLayer.label,
		boardLayer: VISUAL_LAYOUT.layout.boardLayer.label,
		freeSpinModal: VISUAL_LAYOUT.layout.freeSpinModal.label,
		pressToContinue: VISUAL_LAYOUT.layout.pressToContinue.label,
		win: VISUAL_LAYOUT.layout.win.label,
		winCoins: VISUAL_LAYOUT.layout.winCoins.label,
		freeSpinCounter: VISUAL_LAYOUT.layout.freeSpinCounter.label,
		loading: VISUAL_LAYOUT.layout.loading.label,
	},
	fade: {
		backgroundBase: VISUAL_LAYOUT.fade.backgroundBase.label,
		backgroundFeature: VISUAL_LAYOUT.fade.backgroundFeature.label,
		freeSpinIntro: VISUAL_LAYOUT.fade.freeSpinIntro.label,
		freeSpinOutro: VISUAL_LAYOUT.fade.freeSpinOutro.label,
		modifier: VISUAL_LAYOUT.fade.modifier.label,
		win: VISUAL_LAYOUT.fade.win.label,
		freeSpinCounter: VISUAL_LAYOUT.fade.freeSpinCounter.label,
		loadingStart: VISUAL_LAYOUT.fade.loadingStart.label,
		loadingPressToContinue: VISUAL_LAYOUT.fade.loadingPressToContinue.label,
		loadingTransition: VISUAL_LAYOUT.fade.loadingTransition.label,
	},
	ui: {
		pressToContinue: VISUAL_LAYOUT.ui.pressToContinue.label,
	},
	overlay: {
		dim: VISUAL_LAYOUT.overlay.dim.label,
	},
	transition: {
		bonus: VISUAL_LAYOUT.transition.bonus.label,
	},
	dev: {
		i18nTest: VISUAL_LAYOUT.dev.i18nTest.label,
	},
} as const;

// ---------------------------------------------------------------------------
// Backward-compat flat exports
// ---------------------------------------------------------------------------

export const MAIN_SIZES_MAP = VISUAL_LAYOUT.canvas.mainSizesByType;

export const BACKGROUND_RATIO = VISUAL_LAYOUT.background.ratio;

export const BACKGROUND_ART_SIZE = VISUAL_LAYOUT.background.artSize;

export const BACKGROUND_OFFSET = VISUAL_LAYOUT.background.offset;

export const BACKGROUND_LAYERS = {
	backdrop: VISUAL_LAYOUT.background.backdrop.zIndex,
	normal: VISUAL_LAYOUT.background.base.zIndex,
	feature: VISUAL_LAYOUT.background.feature.zIndex,
} as const;

export const OVERLAY = {
	backgroundColor: VISUAL_LAYOUT.overlay.backgroundColor,
	backgroundAlpha: VISUAL_LAYOUT.overlay.backgroundAlpha,
	fadeDurationMs: VISUAL_LAYOUT.overlay.fadeDurationMs,
} as const;

export const BOARD_LAYOUT_BY_TYPE = VISUAL_LAYOUT.board.layoutByType;

export const BOARD_MASK = {
	horizontalPadding: VISUAL_LAYOUT.board.mask.horizontalPadding,
} as const;

export const FRAME_GLOW = {
	spineScale: VISUAL_LAYOUT.board.frameGlow.spineScale,
	positionAdjustment: VISUAL_LAYOUT.board.frameGlow.positionAdjustment,
	fadeDuration: VISUAL_LAYOUT.board.frameGlow.fadeDuration,
} as const;

export const LOGO_LAYOUT_BY_TYPE = VISUAL_LAYOUT.logo.layoutByType;

export const MODIFIER_LAYOUT_BY_TYPE = VISUAL_LAYOUT.modifier.layoutByType;

export const ANTICIPATION = VISUAL_LAYOUT.board.anticipation;

export const BONUS_TRANSITION_LAYOUT_BY_TYPE = VISUAL_LAYOUT.transition.layoutByType;

export const FREE_SPIN_MODAL = {
	modalRatio: VISUAL_LAYOUT.freeSpin.modal.modalRatio,
	widthMultiplier: VISUAL_LAYOUT.freeSpin.modal.widthMultiplier,
	panelWidthMultiplier: VISUAL_LAYOUT.freeSpin.modal.panelWidthMultiplier,
	panelHeightMultiplier: VISUAL_LAYOUT.freeSpin.modal.panelHeightMultiplier,
	yOffsetFromBoard: VISUAL_LAYOUT.freeSpin.modal.yOffsetFromBoard,
	contentXRatio: VISUAL_LAYOUT.freeSpin.modal.contentXRatio,
	contentYRatio: VISUAL_LAYOUT.freeSpin.modal.contentYRatio,
	modalSpriteAnchor: VISUAL_LAYOUT.freeSpin.modal.modalSpriteAnchor,
} as const;

export const FREE_SPIN_INTRO = {
	congratsSprite: {
		width: VISUAL_LAYOUT.freeSpin.intro.congrats.width,
		height: VISUAL_LAYOUT.freeSpin.intro.congrats.height,
		anchor: VISUAL_LAYOUT.freeSpin.intro.congrats.anchor,
	},
	numberSpine: {
		widthRatio: VISUAL_LAYOUT.freeSpin.intro.numberSpine.widthRatio,
		y: VISUAL_LAYOUT.freeSpin.intro.numberSpine.y,
		zIndex: VISUAL_LAYOUT.freeSpin.intro.numberSpine.zIndex,
		numberTextAnchor: VISUAL_LAYOUT.freeSpin.intro.numberSpine.numberTextAnchor,
	},
	freeSpinsLabel: {
		width: VISUAL_LAYOUT.freeSpin.intro.freeSpinsLabel.width,
		height: VISUAL_LAYOUT.freeSpin.intro.freeSpinsLabel.height,
		anchor: VISUAL_LAYOUT.freeSpin.intro.freeSpinsLabel.anchor,
	},
} as const;

export const FREE_SPIN_OUTRO = {
	numberSpine: {
		widthRatio: VISUAL_LAYOUT.freeSpin.outro.numberSpine.widthRatio,
		zIndex: VISUAL_LAYOUT.freeSpin.outro.numberSpine.zIndex,
		maxWidthRatio: VISUAL_LAYOUT.freeSpin.outro.numberSpine.maxWidthRatio,
	},
	bigWinCongratsSprite: {
		width: VISUAL_LAYOUT.freeSpin.outro.bigWinCongrats.width,
		height: VISUAL_LAYOUT.freeSpin.outro.bigWinCongrats.height,
		anchor: VISUAL_LAYOUT.freeSpin.outro.bigWinCongrats.anchor,
	},
	youWon: {
		anchor: VISUAL_LAYOUT.freeSpin.outro.youWon.anchor,
		widthScale: VISUAL_LAYOUT.freeSpin.outro.youWon.widthScale,
		heightScale: VISUAL_LAYOUT.freeSpin.outro.youWon.heightScale,
		x: VISUAL_LAYOUT.freeSpin.outro.youWon.x,
		yRatio: VISUAL_LAYOUT.freeSpin.outro.youWon.yRatio,
		zIndex: VISUAL_LAYOUT.freeSpin.outro.youWon.zIndex,
	},
	totalWin: {
		anchor: VISUAL_LAYOUT.freeSpin.outro.totalWin.anchor,
		widthScale: VISUAL_LAYOUT.freeSpin.outro.totalWin.widthScale,
		heightScale: VISUAL_LAYOUT.freeSpin.outro.totalWin.heightScale,
		x: VISUAL_LAYOUT.freeSpin.outro.totalWin.x,
		yRatio: VISUAL_LAYOUT.freeSpin.outro.totalWin.yRatio,
		zIndex: VISUAL_LAYOUT.freeSpin.outro.totalWin.zIndex,
		bigWidthScale: VISUAL_LAYOUT.freeSpin.outro.totalWin.bigWidthScale,
		bigHeightScale: VISUAL_LAYOUT.freeSpin.outro.totalWin.bigHeightScale,
	},
} as const;

/** @deprecated Use FREE_SPIN_OUTRO */
export const FREE_SPIN_OUTRO_LABELS = {
	youWon: FREE_SPIN_OUTRO.youWon,
	totalWin: FREE_SPIN_OUTRO.totalWin,
};

export const FREE_SPIN_COUNTER = VISUAL_LAYOUT.freeSpin.counter.layout;

export const PRESS_TO_CONTINUE = {
	width: VISUAL_LAYOUT.ui.pressToContinue.width,
	xRatio: VISUAL_LAYOUT.ui.pressToContinue.xRatio,
	yRatio: VISUAL_LAYOUT.ui.pressToContinue.yRatio,
	anchor: VISUAL_LAYOUT.ui.pressToContinue.anchor,
} as const;

export const LOADING_SCREEN = VISUAL_LAYOUT.loading.screen;

export const WIN_LAYOUT = VISUAL_LAYOUT.win.layout;

export const TEXT_LAYOUT = VISUAL_LAYOUT.fonts.textLayout;

export const FONT_SCALE_BY_TYPE = VISUAL_LAYOUT.fonts.scaleByType;

/** @deprecated Use FREE_SPIN_MODAL */
export const FREE_SPIN_ANIMATION = {
	yOffsetFromBoard: FREE_SPIN_MODAL.yOffsetFromBoard,
};

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

export type LogoAlign = 'topLeft' | 'topCenter' | 'topRight';

export type LogoLayoutSettings = {
	width: number;
	/** Position in game virtual space. topLeft: left edge x; topCenter: center x; topRight: right edge x. */
	x: number;
	y: number;
	align: LogoAlign;
	/** Extra nudge after align (virtual pixels). Use for spine animation/bleed past bounds. */
	offset?: VirtualOffset;
};

/** Offset in game virtual pixels (MainContainer space). */
export type VirtualOffset = {
	x: number;
	y: number;
};

/** Size in game virtual pixels. */
export type VirtualSize = {
	width: number;
	height: number;
};

export type ModalLayoutSettings = VirtualSize & {
	/** Offset from boardLayout x/y (board center anchor). */
	offsetFromBoard: VirtualOffset;
	/** Shine spine + content panel origin within the modal (top-left local space). */
	content: VirtualOffset;
	shineWidth: number;
};

export type SpriteElementLayout = VirtualSize & {
	x?: number;
	y?: number;
	anchor: { x: number; y: number };
	zIndex?: number;
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
	/** Container scale in board-local space. */
	scale: number;
	/** x = boardLayout.width + x; y = y (board-local pixels). */
	x: number;
	y: number;
};

export type FreeSpinCounterLayoutSettings = {
	panel: VirtualSize;
	/** Gap between board edge and counter panel (virtual pixels). */
	gapFromBoard: number;
	scale: number;
	panelKey: string;
	text: VirtualOffset & {
		containerAnchor: { x: number; y: number };
		counterTextAnchor: { x: number; y: number };
		/** Vertical gap between title and count lines (virtual pixels). */
		lineGap: number;
	};
};

export type PressToContinueLayoutSettings = {
	x: number;
	y: number;
	width: number;
	anchor: { x: number; y: number };
};

export type LoadingScreenLayoutSettings = VirtualOffset & {
	logoWidth: number;
	progressBar: VirtualOffset & VirtualSize;
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
//
// layoutSpace labels (top-level blocks):
//   canvas      — screen pixels / fractions; applied outside MainContainer
//   virtual     — fixed coords inside MainContainer (scaled design box)
//   board       — offset from boardLayout center (reel grid)
//   board-local — offset from board edges / board-local origin (modifier, frame)
//   modal-local — offset inside free-spin modal panel (intro/outro children)
//   meta        — defines coordinate system, not element placement
//   n/a         — labels, styling, or sizing only (no position)
// ---------------------------------------------------------------------------

// layoutSpace: board — FreeSpinAnimation.svelte: boardLayout + offsetFromBoard
const FREE_SPIN_MODAL_LAYOUT_BY_TYPE: Record<LayoutType, ModalLayoutSettings> = {
	desktop: {
		width: 1020 * 0.7,
		height: 651 * 0.7,
		offsetFromBoard: { x: 0, y: -60 },
		content: { x: 510 * 0.7, y: 260 },
		shineWidth: 600,
	},
	landscape: {
		width: 1020 * 0.8,
		height: 651 * 0.8,
		offsetFromBoard: { x: 0, y: 20 },
		content: { x: 510, y: 260 },
		shineWidth: 700,
	},
	portrait: {
		width: 1020 * 0.7,
		height: 651 * 0.7,
		offsetFromBoard: { x: 0, y: -60 },
		content: { x: 510 * 0.7, y: 260 },
		shineWidth: 600,
	},
	tablet: {
		width: 1020 * 0.7,
		height: 651 * 0.7,
		offsetFromBoard: { x: 0, y: -60 },
		content: { x: 510 * 0.7, y: 260 },
		shineWidth: 600,
	},
};

export const VISUAL_LAYOUT = {
	// layoutSpace: canvas — Background.svelte; centeredBackgroundLayout on window
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
	// layoutSpace: virtual — board origin derived in stateGame; frame.offset* is board-local
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
				symbolScale: 1.18,
				boardXOffset: 0,
				boardYOffset: -100,
				frame: { offsetX: 2, offsetY: 70, width: 706 * 1.25, height: 550 * 1.5 },
			},
			tablet: {
				symbolScale: 1.09,
				boardXOffset: 0,
				boardYOffset: -80,
				frame: { offsetX: 8, offsetY: 70, width: 840, height: 688 * 1.1 },
			},
		} satisfies Record<LayoutType, LayoutBoardSettings>,
		anticipation: {
			width: 114,
			height: 326,
			/** Subtracted from board centre y in board-local pixels. */
			yOffset: 12,
		},
	},
	// layoutSpace: virtual — GameLogo.svelte inside MainContainer
	logo: {
		root: { label: 'Logo/Root' },
		spine: { label: 'Logo/Spine' },
		layoutByType: {
			desktop: { width: 140, x: 55, y: 145, align: 'topLeft', offset: { x: 24, y: 0 } },
			landscape: { width: 120, x: 900, y: 30, align: 'topCenter' },
			portrait: { width: 150, x: 55, y: 100, align: 'topLeft' },
			tablet: { width: 120, x: 150, y: 50, align: 'topLeft' },
		} satisfies Record<LayoutType, LogoLayoutSettings>,
	},
	// layoutSpace: board-local — ModifierReel.svelte; x/y offset from board right edge
	modifier: {
		root: { label: 'Modifier/Root' },
		slab: { label: 'Modifier/Slab' },
		cardWindow: { label: 'Modifier/CardWindow' },
		cardWindowMask: { label: 'Modifier/CardWindow/Mask' },
		card: { label: 'Modifier/Card' },
		cardSpine: { label: 'Modifier/Card/Spine' },
		layoutByType: {
			desktop: {
				slabWidth: 204,
				slabHeight: 296,
				cardHeight: 194,
				cardWindowY: 31,
				cardYOffset: -92,
				cardWindowWidth: 204,
				cardWindowHeight: 224,
				scrollDistance: 204,
				scrollDuration: 333,
				scale: 1,
				x: 153,
				y: 204,
			},
			landscape: {
				slabWidth: 204,
				slabHeight: 296,
				cardHeight: 194,
				cardWindowY: 31,
				cardYOffset: -92,
				cardWindowWidth: 204,
				cardWindowHeight: 224,
				scrollDistance: 204,
				scrollDuration: 333,
				scale: 1,
				x: 153,
				y: 204,
			},
			portrait: {
				slabWidth: 194,
				slabHeight: 296,
				cardHeight: 194,
				cardWindowY: 31,
				cardYOffset: -92,
				cardWindowWidth: 204,
				cardWindowHeight: 224,
				scrollDistance: 204,
				scrollDuration: 333,
				scale: 0.9,
				x: -100,
				y: -200,
			},
			tablet: {
				slabWidth: 204,
				slabHeight: 296,
				cardHeight: 194,
				cardWindowY: 31,
				cardYOffset: -92,
				cardWindowWidth: 204,
				cardWindowHeight: 224,
				scrollDistance: 204,
				scrollDuration: 333,
				scale: 0.85,
				x: -50,
				y: -170,
			},
		} satisfies Record<LayoutType, ModifierLayoutSettings>,
	},
	freeSpin: {
		// layoutSpace: board — see FREE_SPIN_MODAL_LAYOUT_BY_TYPE
		modal: {
			root: { label: 'FreeSpin/Modal/Root' },
			shine: { label: 'FreeSpin/Modal/Shine' },
			panel: { label: 'FreeSpin/Modal/Panel' },
			foil: { label: 'FreeSpin/Modal/Foil' },
			spriteAnchor: { x: 0.5, y: 0.5 },
			layoutByType: FREE_SPIN_MODAL_LAYOUT_BY_TYPE,
		},
		// layoutSpace: modal-local — children positioned inside modal panel
		intro: {
			congrats: {
				label: 'FreeSpin/Intro/Congrats',
				width: 682,
				height: 136,
				y: 80,
				anchor: { x: 0.5, y: 1.5 },
			},
			numberSpine: {
				label: 'FreeSpin/Intro/NumberSpine',
				width: 600,
				y: -250,
				zIndex: 1,
				numberTextAnchor: { x: 0.5, y: 0.5 },
			},
			numberText: { label: 'FreeSpin/Intro/NumberText' },
			freeSpinsLabel: {
				label: 'FreeSpin/Intro/FreeSpinsLabel',
				width: 335,
				height: 67,
				anchor: { x: 0.5, y: -2 },
			},
		},
		// layoutSpace: modal-local — children positioned inside modal panel
		outro: {
			numberSpine: {
				label: 'FreeSpin/Outro/NumberSpine',
				width: 408,
				zIndex: 1,
				maxWidth: 1020,
			},
			numberText: { label: 'FreeSpin/Outro/NumberText' },
			bigWinCongrats: {
				label: 'FreeSpin/Outro/BigWinCongrats',
				width: 937,
				height: 187,
				anchor: { x: 0.5, y: 1.2 },
			},
			youWon: {
				label: 'FreeSpin/Outro/YouWon',
				anchor: { x: 0.5, y: 0.5 },
				width: 714,
				height: 71,
				x: 0,
				y: -182,
				zIndex: 2,
			},
			totalWin: {
				label: 'FreeSpin/Outro/TotalWin',
				anchor: { x: 0.5, y: 0.5 },
				width: 561,
				height: 56,
				x: 0,
				y: 182,
				zIndex: 2,
				big: { width: 408, height: 29 },
			},
		},
		// layoutSpace: board — FreeSpinCounter.svelte; position computed from boardLayout
		counter: {
			panel: { label: 'FreeSpin/Counter/Panel' },
			text: { label: 'FreeSpin/Counter/Text' },
			title: { label: 'FreeSpin/Counter/Title' },
			count: { label: 'FreeSpin/Counter/Count' },
			layoutByType: {
				desktop: {
					panel: { width: 245, height: 85 },
					gapFromBoard: 41,
					scale: 1,
					panelKey: 'Frame_FSCounter.png',
					text: {
						x: 122,
						y: 89,
						containerAnchor: { x: 0.5, y: 0.5 },
						counterTextAnchor: { x: 0.5, y: 0 },
						lineGap: 30,
					},
				},
				landscape: {
					panel: { width: 245, height: 185 },
					gapFromBoard: 41,
					scale: 1,
					panelKey: 'Frame_FSCounter.png',
					text: {
						x: 122,
						y: 89,
						containerAnchor: { x: 0.5, y: 0.5 },
						counterTextAnchor: { x: 0.5, y: 0 },
						lineGap: 30,
					},
				},
				portrait: {
					panel: { width: 245, height: 185 },
					gapFromBoard: 41,
					scale: 1,
					panelKey: 'Frame_FSCounter.png',
					text: {
						x: 122,
						y: 89,
						containerAnchor: { x: 0.5, y: 0.5 },
						counterTextAnchor: { x: 0.5, y: 0 },
						lineGap: 30,
					},
				},
				tablet: {
					panel: { width: 245, height: 185 },
					gapFromBoard: 41,
					scale: 1,
					panelKey: 'Frame_FSCounter.png',
					text: {
						x: 122,
						y: 89,
						containerAnchor: { x: 0.5, y: 0.5 },
						counterTextAnchor: { x: 0.5, y: 0 },
						lineGap: 30,
					},
				},
			} satisfies Record<LayoutType, FreeSpinCounterLayoutSettings>,
		},
	},
	// layoutSpace: board — Win.svelte anchored to boardLayout; dim overlay is canvas
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
	// layoutSpace: virtual — LoadingScreen.svelte inside MainContainer
	loading: {
		root: { label: 'Loading/Root' },
		logo: { label: 'Loading/Logo' },
		progress: { label: 'Loading/Progress' },
		progressBg: { label: 'Loading/ProgressBg' },
		progressFill: { label: 'Loading/ProgressFill' },
		screen: {
			layoutByType: {
				desktop: {
					x: 711,
					y: 400,
					logoWidth: 300,
					progressBar: { x: 0, y: 250, width: 393, height: 69 },
				},
				landscape: {
					x: 800,
					y: 450,
					logoWidth: 300,
					progressBar: { x: 0, y: 250, width: 393, height: 69 },
				},
				portrait: {
					x: 400,
					y: 711,
					logoWidth: 300,
					progressBar: { x: 0, y: 250, width: 393, height: 69 },
				},
				tablet: {
					x: 500,
					y: 500,
					logoWidth: 300,
					progressBar: { x: 0, y: 250, width: 393, height: 69 },
				},
			} satisfies Record<LayoutType, LoadingScreenLayoutSettings>,
		},
	},
	// layoutSpace: n/a — MainContainer scene labels only
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
	// layoutSpace: n/a — FadeContainer scene labels only
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
		// layoutSpace: virtual — PressToContinue.svelte; MainContainer alignVertical=bottom
		// note: drifts on portrait height — candidate for canvas yRatio
		pressToContinue: {
			label: 'UI/PressToContinue',
			layoutByType: {
				desktop: { x: 711, y: 530, width: 600, anchor: { x: 0.5, y: 0.5 } },
				landscape: { x: 800, y: 660, width: 600, anchor: { x: 0.5, y: 0.5 } },
				portrait: { x: 400, y: 1050, width: 600, anchor: { x: 0.5, y: 0.5 } },
				tablet: { x: 500, y: 700, width: 600, anchor: { x: 0.5, y: 0.5 } },
			} satisfies Record<LayoutType, PressToContinueLayoutSettings>,
		},
	},
	// layoutSpace: n/a — overlay colour/alpha; win dim applied as canvas in Win.svelte
	overlay: {
		dim: { label: 'Overlay/Dim' },
		backgroundColor: 0x000000,
		backgroundAlpha: 0.5,
		/** Fade duration in ms — matches HALF_SECOND. */
		fadeDurationMs: 500,
	},
	// layoutSpace: canvas — BonusTransitionAnimation.svelte; xRatio/yRatio on window
	transition: {
		bonus: { label: 'Transition/Bonus' },
		layoutByType: {
			desktop: { xRatio: 0.5, yRatio: 0.5, heightScale: 1.7 },
			landscape: { xRatio: 0.5, yRatio: 0.5, heightScale: 1.7 },
			portrait: { xRatio: 0.5, yRatio: 0.5, heightScale: 1.9 },
			tablet: { xRatio: 0.5, yRatio: 0.5, heightScale: 1.75 },
		} satisfies Record<LayoutType, BonusTransitionLayoutSettings>,
	},
	// layoutSpace: n/a — dev-only labels
	dev: {
		i18nTest: { label: 'Dev/I18nTest' },
	},
	// layoutSpace: meta — mainSizesByType defines the virtual design box per layoutType
	canvas: {
		mainSizesByType: {
			desktop: { width: 1422, height: 800 },
			tablet: { width: 1000, height: 1000 },
			landscape: { width: 1600, height: 900 },
			portrait: { width: 800, height: 1422 },
		} satisfies Record<LayoutType, { width: number; height: number }>,
	},
	// layoutSpace: n/a — bitmap font sizing rules, not position
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

export const getFreeSpinModalLayout = (layoutType: LayoutType) =>
	VISUAL_LAYOUT.freeSpin.modal.layoutByType[layoutType];

/** @deprecated Use getFreeSpinModalLayout — returns modal content size for intro/outro snippets. */
export const getFreeSpinModalSizes = (layoutType: LayoutType) => {
	const layout = getFreeSpinModalLayout(layoutType);
	return { width: layout.width, height: layout.height };
};

export const getPressToContinueLayout = (layoutType: LayoutType) =>
	VISUAL_LAYOUT.ui.pressToContinue.layoutByType[layoutType];

export const getLoadingScreenLayout = (layoutType: LayoutType) =>
	VISUAL_LAYOUT.loading.screen.layoutByType[layoutType];

export const getFreeSpinCounterLayout = (layoutType: LayoutType) =>
	VISUAL_LAYOUT.freeSpin.counter.layoutByType[layoutType];

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
	yOffsetFromBoard: FREE_SPIN_MODAL_LAYOUT_BY_TYPE.desktop.offsetFromBoard.y,
	modalSpriteAnchor: VISUAL_LAYOUT.freeSpin.modal.spriteAnchor,
} as const;

export const FREE_SPIN_INTRO = {
	congratsSprite: {
		width: VISUAL_LAYOUT.freeSpin.intro.congrats.width,
		height: VISUAL_LAYOUT.freeSpin.intro.congrats.height,
		anchor: VISUAL_LAYOUT.freeSpin.intro.congrats.anchor,
	},
	numberSpine: {
		width: VISUAL_LAYOUT.freeSpin.intro.numberSpine.width,
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
		width: VISUAL_LAYOUT.freeSpin.outro.numberSpine.width,
		zIndex: VISUAL_LAYOUT.freeSpin.outro.numberSpine.zIndex,
		maxWidth: VISUAL_LAYOUT.freeSpin.outro.numberSpine.maxWidth,
	},
	bigWinCongratsSprite: {
		width: VISUAL_LAYOUT.freeSpin.outro.bigWinCongrats.width,
		height: VISUAL_LAYOUT.freeSpin.outro.bigWinCongrats.height,
		anchor: VISUAL_LAYOUT.freeSpin.outro.bigWinCongrats.anchor,
	},
	youWon: {
		anchor: VISUAL_LAYOUT.freeSpin.outro.youWon.anchor,
		width: VISUAL_LAYOUT.freeSpin.outro.youWon.width,
		height: VISUAL_LAYOUT.freeSpin.outro.youWon.height,
		x: VISUAL_LAYOUT.freeSpin.outro.youWon.x,
		y: VISUAL_LAYOUT.freeSpin.outro.youWon.y,
		zIndex: VISUAL_LAYOUT.freeSpin.outro.youWon.zIndex,
	},
	totalWin: {
		anchor: VISUAL_LAYOUT.freeSpin.outro.totalWin.anchor,
		width: VISUAL_LAYOUT.freeSpin.outro.totalWin.width,
		height: VISUAL_LAYOUT.freeSpin.outro.totalWin.height,
		x: VISUAL_LAYOUT.freeSpin.outro.totalWin.x,
		y: VISUAL_LAYOUT.freeSpin.outro.totalWin.y,
		zIndex: VISUAL_LAYOUT.freeSpin.outro.totalWin.zIndex,
		bigWidth: VISUAL_LAYOUT.freeSpin.outro.totalWin.big.width,
		bigHeight: VISUAL_LAYOUT.freeSpin.outro.totalWin.big.height,
	},
} as const;

/** @deprecated Use FREE_SPIN_OUTRO */
export const FREE_SPIN_OUTRO_LABELS = {
	youWon: FREE_SPIN_OUTRO.youWon,
	totalWin: FREE_SPIN_OUTRO.totalWin,
};

export const FREE_SPIN_COUNTER = getFreeSpinCounterLayout('desktop');

export const PRESS_TO_CONTINUE = getPressToContinueLayout('desktop');

export const LOADING_SCREEN = getLoadingScreenLayout('desktop');

export const WIN_LAYOUT = VISUAL_LAYOUT.win.layout;

export const TEXT_LAYOUT = VISUAL_LAYOUT.fonts.textLayout;

export const FONT_SCALE_BY_TYPE = VISUAL_LAYOUT.fonts.scaleByType;

/** @deprecated Use FREE_SPIN_MODAL */
export const FREE_SPIN_ANIMATION = {
	yOffsetFromBoard: FREE_SPIN_MODAL.yOffsetFromBoard,
};

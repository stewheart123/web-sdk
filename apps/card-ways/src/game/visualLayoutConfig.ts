import type { Language } from 'state-shared';

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
	/** fsModal spine origin within the modal (local space). */
	spine: VirtualOffset;
	/** Intro/outro content panel origin within the modal (local space). */
	panel: VirtualOffset;
	/** Display width for the fsModal spine (height follows skeleton aspect). */
	spineWidth: number;
};

export type AspectFitSpriteLayout = {
	label: string;
	maxWidth: number;
	maxHeight?: number;
	x?: number;
	y?: number;
	anchor: { x: number; y: number };
	zIndex?: number;
};

/** Per-layout overrides for free-spin modal number text sizing. */
export type FreeSpinNumberTextLayoutByType = {
	fontSizeRatio?: number;
	maxWidthRatio?: number;
};

/** layoutSpace: modal-local — static bitmap number in FreeSpinNumberDisplay.svelte */
export type FreeSpinNumberTextLayout = {
	label: string;
	x?: number;
	y?: number;
	zIndex?: number;
	anchor: { x: number; y: number };
	/** Fine vertical nudge after y. Negative moves up. */
	offsetY?: number;
	/** Font size as a fraction of modal width (see fonts.textLayout sizeMode widthRatio). */
	fontSizeRatio: number;
	/** Max display width as a fraction of modal width (outro ResponsiveBitmapText). */
	maxWidthRatio?: number;
	layoutByType?: Partial<Record<LayoutType, FreeSpinNumberTextLayoutByType>>;
};

export type ResolvedFreeSpinNumberTextLayout = {
	label: string;
	x: number;
	y: number;
	zIndex?: number;
	anchor: { x: number; y: number };
	offsetY: number;
	fontSizeRatio: number;
	maxWidth?: number;
};

export type ResolvedAspectFitSprite = Omit<AspectFitSpriteLayout, 'label'>;

export type ResolvedFreeSpinTotalWinLayout = ResolvedAspectFitSprite & {
	bigMaxWidth: number;
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

export type FreeSpinCounterTitleLabelSettings = {
	maxWidth: number;
	maxHeight: number;
	anchor: { x: number; y: number };
	scale: number;
	x?: number;
	y?: number;
};

export type FreeSpinCounterLayoutSettings = {
	/** Gap between board edge and counter anchor point (virtual pixels). */
	gapFromBoard: number;
	scale: number;
	titleLabel: FreeSpinCounterTitleLabelSettings;
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

/** layoutSpace: modal-local — PressToContinue inside free-spin intro/outro panel */
export type FreeSpinPressToContinueLayout = {
	label: string;
	x?: number;
	y: number;
	/** Display width as a fraction of modal width. */
	widthRatio: number;
	anchor: { x: number; y: number };
	zIndex?: number;
};

export type ResolvedFreeSpinPressToContinueLayout = {
	label: string;
	x: number;
	y: number;
	width: number;
	anchor: { x: number; y: number };
	zIndex?: number;
};

/** Shared resolved layout for PressToContinue rendered inside a parent container. */
export type EmbeddedPressToContinueLayout = ResolvedFreeSpinPressToContinueLayout;

/** layoutSpace: loading-local — PressToContinue inside LoadingScreen root container */
export type LoadingPressToContinueLayout = {
	label: string;
	x?: number;
	y: number;
	/** Display width as a fraction of the loading progress bar width. */
	widthRatio: number;
	anchor: { x: number; y: number };
};

/** layoutSpace: board-local — PressToContinue inside Win/Root; offsets from board pivot */
export type WinPressToContinueLayout = {
	label: string;
	/** Horizontal offset from board pivot.x */
	x?: number;
	/** Vertical offset from board pivot.y. Positive moves down. */
	y: number;
	/** Display width as a fraction of board width. */
	widthRatio: number;
	anchor: { x: number; y: number };
	zIndex?: number;
};

export type BoardLayoutRect = VirtualSize & {
	pivot: VirtualOffset;
};

export type LoadingScreenLayoutSettings = VirtualOffset & {
	logoWidth: number;
	progressBar: VirtualOffset & VirtualSize;
};

export type ResolvedLoadingScreenLayout = LoadingScreenLayoutSettings & {
	pressToContinue: EmbeddedPressToContinueLayout;
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

export type BitmapFontId = 'gold';

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
// fsModal skeleton is 1024×1536 (portrait); height = spineWidth * 1.5
const FREE_SPIN_MODAL_LAYOUT_BY_TYPE: Record<LayoutType, ModalLayoutSettings> = {
	desktop: {
		width: 600,
		height: 900,
		offsetFromBoard: { x: 0, y: -60 },
		spine: { x: 361, y: 510 },
		panel: { x: 308, y: 460 },
		spineWidth: 600 * 0.26,
	},
	landscape: {
		width: 700,
		height: 1050,
		offsetFromBoard: { x: 0, y: 20 },
		spine: { x: 429, y: 508 },
		panel: { x: 353, y: 465 },
		spineWidth: 700 * 0.285,
	},
	portrait: {
		width: 600,
		height: 900,
		offsetFromBoard: { x: 0, y: -60 },
		spine: { x: 364, y: 509 },
		panel: { x: 300, y: 450 },
		spineWidth: 600 * 0.28,
	},
	tablet: {
		width: 600,
		height: 900,
		offsetFromBoard: { x: 0, y: -60 },
		spine: { x: 364, y: 508 },
		panel: { x: 300, y: 450 },
		spineWidth: 600 * 0.255,
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
			spineScale: { width: 0.62 * 2.55, height: 0.66 * 2.2 },
			positionAdjustment: { x: 1.008, y: 1 },
			fadeDuration: 500,
		},
		layoutByType: {
			desktop: {
				symbolScale: 1.1,
				boardXOffset: 0,
				boardYOffset: 20,
				frame: { offsetX: 6, offsetY: 75, width: 832, height: 700 },
			},
			landscape: {
				symbolScale: 1.4,
				boardXOffset: -250,
				boardYOffset: 40,
				frame: { offsetX: 8, offsetY: 100, width: 1060, height: 688 * 1.28 },
			},
			portrait: {
				symbolScale: 1.18,
				boardXOffset: 0,
				boardYOffset: -100,
				frame: { offsetX: 2, offsetY: 85, width: 706 * 1.255, height: 550 * 1.36 },
			},
			tablet: {
				symbolScale: 1.09,
				boardXOffset: 0,
				boardYOffset: -80,
				frame: { offsetX: 6, offsetY: 76, width: 820, height: 688 * 1 },
			},
		} satisfies Record<LayoutType, LayoutBoardSettings>,
	},
	// layoutSpace: virtual — GameLogo.svelte inside MainContainer
	logo: {
		root: { label: 'Logo/Root' },
		spine: { label: 'Logo/Spine' },
		layoutByType: {
			desktop: { width: 140, x: 55, y: 145, align: 'topLeft', offset: { x: 24, y: 0 } },
			landscape: { width: 120, x: 1314, y: 40, align: 'topRight' },
			portrait: { width: 150, x: 108, y: 100, align: 'topLeft' },
			tablet: { width: 120, x: 150, y: 65, align: 'topLeft' },
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
				x: 240,
				y: 294,
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
			spine: { label: 'FreeSpin/Modal/Spine' },
			panel: { label: 'FreeSpin/Modal/Panel' },
			/** Delay before intro/outro panel content fades in (ms). Spine starts immediately. */
			panelFadeDelayMs: 1100,
			/** Panel text/sprite fade-out before FS-MODAL-OUTRO. */
			panelFadeOutDurationMs: 300,
			/** Native FS-MODAL-OUTRO duration from spine (ms), before timeScale. */
			outroDurationMs: 533,
			/** Playback rate for FS-MODAL-OUTRO (1 = spine default). */
			outroTimeScale: 0.55,
			/** Start outer fade after this fraction of the wall-clock OUTRO. */
			fadeOutStartRatio: 0.2,
			/** Fade-out duration overlapping the second half of OUTRO (ms). */
			fadeOutDurationMs: 500,
			layoutByType: FREE_SPIN_MODAL_LAYOUT_BY_TYPE,
		},
		// layoutSpace: modal-local — children positioned inside modal panel
		intro: {
			congrats: {
				label: 'FreeSpin/Intro/Congrats',
				maxWidth: 682 * 0.8,
				maxHeight: 160 * 0.8,
				y: 0,
				anchor: { x: 0.5, y: 1.5 },
			},
			numberText: {
				label: 'FreeSpin/Intro/NumberText',
				x: 0,
				y: 0,
				zIndex: 1,
				anchor: { x: 0.5, y: 0.5 },
				offsetY: -8,
				fontSizeRatio: 0.25 * 0.7,
			},
			freeSpinsLabel: {
				label: 'FreeSpin/Intro/FreeSpinsLabel',
				maxWidth: 700 * 0.8,
				maxHeight: 150 * 0.8,
				anchor: { x: 0.5, y: -1 },
			},
			pressToContinue: {
				label: 'FreeSpin/Intro/PressToContinue',
				x: 0,
				y: 190,
				widthRatio: 0.8,
				anchor: { x: 0.5, y: -1 },
			},
		},
		// layoutSpace: modal-local — children positioned inside modal panel
		outro: {
			numberText: {
				label: 'FreeSpin/Outro/NumberText',
				x: 0,
				y: 0,
				zIndex: 1,
				anchor: { x: 0.5, y: 0.5 },
				offsetY: -0,
				fontSizeRatio: 0.2,
				maxWidthRatio: 0.85,
				layoutByType: {
					desktop: { fontSizeRatio: 0.2, maxWidthRatio: 0.85 },
					tablet: { fontSizeRatio: 0.18, maxWidthRatio: 0.85 },
					portrait: { fontSizeRatio: 0.14, maxWidthRatio: 0.85 },
					landscape: { fontSizeRatio: 0.15, maxWidthRatio: 0.85 },
				} satisfies Record<LayoutType, FreeSpinNumberTextLayoutByType>,
			},
			bigWinCongrats: {
				label: 'FreeSpin/Outro/BigWinCongrats',
				maxWidth: 682 * 0.8,
				maxHeight: 360 * 0.8,
				y: 80,
				anchor: { x: 0.5, y: 1.8 },
			},
			youWon: {
				label: 'FreeSpin/Outro/YouWon',
				anchor: { x: 0.5, y: 0.5 },
				maxWidth: 714 * 0.8,
				maxHeight: 120 * 0.8,
				x: 0,
				y: -120,
				zIndex: 2,
			},
			totalWin: {
				label: 'FreeSpin/Outro/TotalWin',
				anchor: { x: 0.5, y: 0.5 },
				maxWidth: 561,
				bigMaxWidth: 408,
				maxHeight: 80,
				x: 0,
				y: 182,
				zIndex: 2,
			},
			pressToContinue: {
				label: 'FreeSpin/Outro/PressToContinue',
				x: 0,
				y: 180,
				widthRatio: 0.9,
				anchor: { x: 0.5, y: -1 },
				zIndex: 3,
			},
		},
		// layoutSpace: board — FreeSpinCounter.svelte; position computed from boardLayout
		counter: {
			text: { label: 'FreeSpin/Counter/Text' },
			title: { label: 'FreeSpin/Counter/Title' },
			count: { label: 'FreeSpin/Counter/Count' },
			titleLabel: { label: 'FreeSpin/Counter/TitleLabel' },
			layoutByType: {
				desktop: {
					gapFromBoard: 41,
					scale: 1,
					titleLabel: {
						maxWidth: 290,
						maxHeight: 100,
						anchor: { x: 0, y: 0 },
						scale: 1,
					},
					text: {
						x: 0,
						y: 150,
						containerAnchor: { x: 1, y: 0 },
						counterTextAnchor: { x: 0.55, y: 1 },
						lineGap: 30,
					},
				},
				landscape: {
					gapFromBoard: 0,
					scale: 1.7,
					titleLabel: {
						maxWidth: 280,
						maxHeight: 110,
						anchor: { x: 0, y: 0.1 },
						scale: 0.9,
					},
					text: {
						x: 900,
						y: 0,
						containerAnchor: { x: 1.05, y: 0 },
						counterTextAnchor: { x: 0.55, y: 1.1 },
						lineGap: 30,
					},
				},
				portrait: {
					gapFromBoard: 41,
					scale: 1.2,
					titleLabel: {
						maxWidth: 500,
						maxHeight: 170,
						anchor: { x: 0.2, y: 0 },
						scale: 0.6,
					},
					text: {
						x: 400,
						y: -300,
						containerAnchor: { x: 1, y: 0 },
						counterTextAnchor: { x: 1.2, y: 1 },
						lineGap: 30,
					},
				},
				tablet: {
					gapFromBoard: 41,
					scale: 1.2,
					titleLabel: {
						maxWidth: 750,
						maxHeight: 110,
						anchor: { x: -0.2, y: 0.8 },
						scale: 0.85,
					},
					text: {
						x: 0,
						y: -100,
						containerAnchor: { x: 0.37, y: 0 },
						counterTextAnchor: { x: 0, y: 1.9 },
						lineGap: 10,
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
		layout: {
			bigWinTextContainerScale: 0.5,
			bigWinTextMaxWidthByType: {
				desktop: 2130,
				tablet: 1800,
				landscape: 1600,
				portrait: 1400,
			} satisfies Record<LayoutType, number>,
			/** Do not shrink big-win amount text below this fraction of winBig font size. */
			bigWinMinFitScale: 0.35,
			normalWinTextMaxWidthRatio: 0.95,
			/** Fraction of canvas width available for win text after layout + board scale. */
			canvasWidthPaddingRatio: 0.88,
			animationScale: 0.45,
			countUpCompleteDelayMs: 300,
		},
		// layoutSpace: board-local — offsets from board pivot inside Win/Root
		pressToContinue: {
			bigWin: {
				label: 'Win/BigWin/PressToContinue',
				x: 0,
				y: 220,
				widthRatio: 0.7,
				anchor: { x: 0.5, y: 0.5 },
				zIndex: 10,
			},
			normalWin: {
				label: 'Win/NormalWin/PressToContinue',
				x: 0,
				y: 140,
				widthRatio: 0.6,
				anchor: { x: 0.5, y: 0.5 },
				zIndex: 10,
			},
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
		// layoutSpace: loading-local — offset from Loading/Root (same origin as progress bar)
		pressToContinue: {
			label: 'Loading/PressToContinue',
			x: 0,
			y: 220,
			widthRatio: 1.6,
			anchor: { x: 0.5, y: 0.5 },
		},
	},
	// layoutSpace: n/a — MainContainer scene labels only
	layout: {
		frameLayer: { label: 'Layout/FrameLayer' },
		boardLayer: { label: 'Layout/BoardLayer' },
		freeSpinModal: { label: 'Layout/FreeSpinModal' },
		pressToContinue: { label: 'Layout/PressToContinue' },
		win: { label: 'Layout/Win' },
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
			desktop: { xRatio: 0.5, yRatio: 0.5, heightScale: 1 },
			landscape: { xRatio: 0.5, yRatio: 0.5, heightScale: 1.7 },
			portrait: { xRatio: 0.5, yRatio: 0.9, heightScale: 1.9 },
			tablet: { xRatio: 0.5, yRatio: 0.9, heightScale: 2 },
		} satisfies Record<LayoutType, BonusTransitionLayoutSettings>,
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
			portrait: 0.9,
			tablet: 1,
		} satisfies Record<LayoutType, number>,
	},
} as const;

// ---------------------------------------------------------------------------
// Dynamic scene labels (symbols)
// ---------------------------------------------------------------------------

export const sceneLabel = {
	symbol: (reel: number, row: number) => `Board/Symbol/R${reel}C${row}`,
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

const resolveNumberTextLayout = (
	text: FreeSpinNumberTextLayout,
	modalWidth: number,
	layoutType: LayoutType = 'desktop',
): ResolvedFreeSpinNumberTextLayout => {
	const layoutOverride = text.layoutByType?.[layoutType];
	const fontSizeRatio = layoutOverride?.fontSizeRatio ?? text.fontSizeRatio;
	const maxWidthRatio = layoutOverride?.maxWidthRatio ?? text.maxWidthRatio;

	return {
		label: text.label,
		x: text.x ?? 0,
		y: text.y ?? 0,
		zIndex: text.zIndex,
		anchor: text.anchor,
		offsetY: text.offsetY ?? 0,
		fontSizeRatio,
		maxWidth:
			maxWidthRatio !== undefined ? modalWidth * maxWidthRatio : undefined,
	};
};

const resolveAspectFitSprite = ({
	label: _label,
	...layout
}: AspectFitSpriteLayout): ResolvedAspectFitSprite => layout;

const resolveFreeSpinPressToContinueLayout = (
	layout: FreeSpinPressToContinueLayout,
	modalWidth: number,
): ResolvedFreeSpinPressToContinueLayout => ({
	label: layout.label,
	x: layout.x ?? 0,
	y: layout.y,
	width: modalWidth * layout.widthRatio,
	anchor: layout.anchor,
	zIndex: layout.zIndex,
});

/** Per-language tweaks for free-spin press-to-continue (sprite size/padding varies by locale). */
const FREE_SPIN_PRESS_TO_CONTINUE_LANG_OVERRIDES: Partial<
	Record<Language, Partial<FreeSpinPressToContinueLayout>>
> = {
	ko: {
		y: 100,
		widthRatio: 0.85,
	},
	vi: {
		y: 100,
		widthRatio: 0.85,
	},
};

export const resolveFreeSpinIntroLayout = (modalSizes: VirtualSize, lang?: Language) => {
	const { intro } = VISUAL_LAYOUT.freeSpin;
	const pressToContinueOverride = lang
		? FREE_SPIN_PRESS_TO_CONTINUE_LANG_OVERRIDES[lang]
		: undefined;

	return {
		congrats: resolveAspectFitSprite(intro.congrats),
		freeSpinsLabel: resolveAspectFitSprite(intro.freeSpinsLabel),
		numberText: resolveNumberTextLayout(intro.numberText, modalSizes.width),
		pressToContinue: resolveFreeSpinPressToContinueLayout(
			{ ...intro.pressToContinue, ...pressToContinueOverride },
			modalSizes.width,
		),
	};
};

export const resolveFreeSpinOutroLayout = (
	modalSizes: VirtualSize,
	lang?: Language,
	layoutType: LayoutType = 'desktop',
) => {
	const { outro } = VISUAL_LAYOUT.freeSpin;
	const pressToContinueOverride = lang
		? FREE_SPIN_PRESS_TO_CONTINUE_LANG_OVERRIDES[lang]
		: undefined;

	return {
		numberText: resolveNumberTextLayout(outro.numberText, modalSizes.width, layoutType),
		bigWinCongrats: resolveAspectFitSprite(outro.bigWinCongrats),
		youWon: resolveAspectFitSprite(outro.youWon),
		totalWin: {
			...resolveAspectFitSprite(outro.totalWin),
			bigMaxWidth: outro.totalWin.bigMaxWidth,
		} satisfies ResolvedFreeSpinTotalWinLayout,
		pressToContinue: resolveFreeSpinPressToContinueLayout(
			{ ...outro.pressToContinue, ...pressToContinueOverride },
			modalSizes.width,
		),
	};
};

export const getPressToContinueLayout = (layoutType: LayoutType) =>
	VISUAL_LAYOUT.ui.pressToContinue.layoutByType[layoutType];

export const getLoadingScreenLayout = (layoutType: LayoutType) =>
	VISUAL_LAYOUT.loading.screen.layoutByType[layoutType];

export const resolveLoadingScreenLayout = (
	layoutType: LayoutType,
): ResolvedLoadingScreenLayout => {
	const screen = getLoadingScreenLayout(layoutType);
	const { pressToContinue } = VISUAL_LAYOUT.loading;

	return {
		...screen,
		pressToContinue: {
			label: pressToContinue.label,
			x: pressToContinue.x ?? 0,
			y: pressToContinue.y,
			width: screen.progressBar.width * pressToContinue.widthRatio,
			anchor: pressToContinue.anchor,
		},
	};
};

export type WinTextMaxWidthContext = {
	canvasWidth: number;
	mainLayoutScale: number;
	boardScale: number;
};

export const resolveWinTextMaxWidth = (
	variant: 'bigWin' | 'normalWin',
	layoutType: LayoutType,
	boardLayout: BoardLayoutRect,
	context?: WinTextMaxWidthContext,
) => {
	const { layout } = VISUAL_LAYOUT.win;
	const boardScale = context?.boardScale ?? 1;
	const canvasLocalMax =
		context !== undefined
			? (context.canvasWidth * layout.canvasWidthPaddingRatio) /
				(context.mainLayoutScale * boardScale)
			: undefined;

	if (variant === 'normalWin') {
		const boardMax = boardLayout.width * layout.normalWinTextMaxWidthRatio;
		return canvasLocalMax !== undefined ? Math.min(boardMax, canvasLocalMax) : boardMax;
	}

	const configuredMax = layout.bigWinTextMaxWidthByType[layoutType];
	const bigWinScale = layout.bigWinTextContainerScale * layout.animationScale;
	const canvasDerivedMax =
		canvasLocalMax !== undefined ? canvasLocalMax / bigWinScale : undefined;

	// Canvas budget accounts for spine animation + container scale; use it when available.
	return canvasDerivedMax ?? configuredMax;
};

export const resolveWinPressToContinueLayout = (
	variant: 'bigWin' | 'normalWin',
	boardLayout: BoardLayoutRect,
): EmbeddedPressToContinueLayout => {
	const layout = VISUAL_LAYOUT.win.pressToContinue[variant];

	return {
		label: layout.label,
		x: boardLayout.pivot.x + (layout.x ?? 0),
		y: boardLayout.pivot.y + layout.y,
		width: boardLayout.width * layout.widthRatio,
		anchor: layout.anchor,
		zIndex: layout.zIndex,
	};
};

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
			spine: VISUAL_LAYOUT.freeSpin.modal.spine.label,
			panel: VISUAL_LAYOUT.freeSpin.modal.panel.label,
		},
		intro: {
			congrats: VISUAL_LAYOUT.freeSpin.intro.congrats.label,
			numberText: VISUAL_LAYOUT.freeSpin.intro.numberText.label,
			freeSpinsLabel: VISUAL_LAYOUT.freeSpin.intro.freeSpinsLabel.label,
			pressToContinue: VISUAL_LAYOUT.freeSpin.intro.pressToContinue.label,
		},
		outro: {
			numberText: VISUAL_LAYOUT.freeSpin.outro.numberText.label,
			bigWinCongrats: VISUAL_LAYOUT.freeSpin.outro.bigWinCongrats.label,
			youWon: VISUAL_LAYOUT.freeSpin.outro.youWon.label,
			totalWin: VISUAL_LAYOUT.freeSpin.outro.totalWin.label,
			pressToContinue: VISUAL_LAYOUT.freeSpin.outro.pressToContinue.label,
		},
		counter: {
			text: VISUAL_LAYOUT.freeSpin.counter.text.label,
			title: VISUAL_LAYOUT.freeSpin.counter.title.label,
			count: VISUAL_LAYOUT.freeSpin.counter.count.label,
			titleLabel: VISUAL_LAYOUT.freeSpin.counter.titleLabel.label,
		},
	},
	win: {
		root: VISUAL_LAYOUT.win.root.label,
		dim: VISUAL_LAYOUT.win.dim.label,
		bigText: VISUAL_LAYOUT.win.bigText.label,
		normalText: VISUAL_LAYOUT.win.normalText.label,
		bigAnimation: VISUAL_LAYOUT.win.bigAnimation.label,
		pressToContinue: {
			bigWin: VISUAL_LAYOUT.win.pressToContinue.bigWin.label,
			normalWin: VISUAL_LAYOUT.win.pressToContinue.normalWin.label,
		},
	},
	loading: {
		root: VISUAL_LAYOUT.loading.root.label,
		logo: VISUAL_LAYOUT.loading.logo.label,
		progress: VISUAL_LAYOUT.loading.progress.label,
		progressBg: VISUAL_LAYOUT.loading.progressBg.label,
		progressFill: VISUAL_LAYOUT.loading.progressFill.label,
		pressToContinue: VISUAL_LAYOUT.loading.pressToContinue.label,
	},
	layout: {
		frameLayer: VISUAL_LAYOUT.layout.frameLayer.label,
		boardLayer: VISUAL_LAYOUT.layout.boardLayer.label,
		freeSpinModal: VISUAL_LAYOUT.layout.freeSpinModal.label,
		pressToContinue: VISUAL_LAYOUT.layout.pressToContinue.label,
		win: VISUAL_LAYOUT.layout.win.label,
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

export const BONUS_TRANSITION_LAYOUT_BY_TYPE = VISUAL_LAYOUT.transition.layoutByType;

export const FREE_SPIN_MODAL = {
	yOffsetFromBoard: FREE_SPIN_MODAL_LAYOUT_BY_TYPE.desktop.offsetFromBoard.y,
	panelFadeDelayMs: VISUAL_LAYOUT.freeSpin.modal.panelFadeDelayMs,
	panelFadeOutDurationMs: VISUAL_LAYOUT.freeSpin.modal.panelFadeOutDurationMs,
	outroDurationMs: VISUAL_LAYOUT.freeSpin.modal.outroDurationMs,
	outroTimeScale: VISUAL_LAYOUT.freeSpin.modal.outroTimeScale,
	fadeOutStartRatio: VISUAL_LAYOUT.freeSpin.modal.fadeOutStartRatio,
	fadeOutDurationMs: VISUAL_LAYOUT.freeSpin.modal.fadeOutDurationMs,
	/** Wall-clock delay before fade starts (half of scaled OUTRO by default). */
	outroFadeStartDelayMs: Math.round(
		(VISUAL_LAYOUT.freeSpin.modal.outroDurationMs /
			VISUAL_LAYOUT.freeSpin.modal.outroTimeScale) *
			VISUAL_LAYOUT.freeSpin.modal.fadeOutStartRatio,
	),
} as const;

/** @deprecated Use resolveFreeSpinIntroLayout(modalSizes) */
export const FREE_SPIN_INTRO = resolveFreeSpinIntroLayout(
	getFreeSpinModalSizes('desktop'),
);

/** @deprecated Use resolveFreeSpinOutroLayout(modalSizes, lang, layoutType) */
export const FREE_SPIN_OUTRO = resolveFreeSpinOutroLayout(
	getFreeSpinModalSizes('desktop'),
	undefined,
	'desktop',
);

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

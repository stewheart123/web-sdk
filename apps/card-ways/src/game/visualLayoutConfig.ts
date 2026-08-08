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
	/** Display width for the fsModal spine (height follows skeleton aspect). */
	spineWidth: number;
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

export type ModifierLayoutSettings = {
	/** Display width for the SLAB spine (height follows skeleton aspect ~245×130). */
	spineWidth: number;
	/** Container scale in board-local space. */
	scale: number;
	/** Board-local position (origin = board top-left). */
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

/** Shared resolved layout for PressToContinue rendered inside a parent container. */
export type EmbeddedPressToContinueLayout = {
	label: string;
	x: number;
	y: number;
	width: number;
	anchor: { x: number; y: number };
	zIndex?: number;
};

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
	/** Logo Y offset from Loading/Root (negative places it above the how-to panels). */
	logoY: number;
	progressBar: VirtualOffset & VirtualSize;
};

export type ResolvedLoadingScreenLayout = LoadingScreenLayoutSettings & {
	pressToContinue: EmbeddedPressToContinueLayout;
};

export type HowToPlayPanelLayoutSettings = {
	/** Panel card size. */
	panelWidth: number;
	panelHeight: number;
	/** Gap between panels in the 3-across row / carousel stride. */
	gap: number;
	/** Offset of the how-to root from Loading/Root. */
	y: number;
	/** Foreground illustration max size inside a panel. */
	fgSize: number;
	/** Y of FG relative to panel center (negative = above center). */
	fgY: number;
	/** Text block max width and style. */
	textMaxWidth: number;
	fontSize: number;
	/** Y of text relative to panel center. */
	textY: number;
	/** Page-dot row Y relative to how-to root (carousel only). */
	dotsY: number;
	dotDiameter: number;
	dotGap: number;
};

export type ResolvedHowToPlayLayout = HowToPlayPanelLayoutSettings & {
	carousel: boolean;
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

export type BitmapFontId = 'cinzYellow';

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
// FREE_SPINS_MODAL skeleton is ~721×1176 (portrait)
const FREE_SPIN_MODAL_LAYOUT_BY_TYPE: Record<LayoutType, ModalLayoutSettings> = {
	desktop: {
		width: 600,
		height: 900,
		offsetFromBoard: { x: 0, y: 0 },
		spine: { x: 300, y: 720 },
		spineWidth: 250,
	},
	landscape: {
		width: 600,
		height: 900,
		offsetFromBoard: { x: 0, y: 0 },
		spine: { x: 300, y: 760 },
		spineWidth: 250,
	},
	portrait: {
		width: 600,
		height: 900,
		offsetFromBoard: { x: 0, y: 0 },
		spine: { x: 300, y: 900 },
		spineWidth: 350,
	},
	tablet: {
		width: 600,
		height: 900,
		offsetFromBoard: { x: 0, y: 0 },
		spine: { x: 300, y: 720 },
		spineWidth: 250,
	},
};

export const VISUAL_LAYOUT = {
	// layoutSpace: canvas — Background.svelte; centeredBackgroundLayout on window
	background: {
		backdrop: { label: 'Background/Backdrop', zIndex: -3 },
		intro: { label: 'Background/Intro', zIndex: -2 },
		base: { label: 'Background/Base', zIndex: -2 },
		feature: { label: 'Background/Feature', zIndex: -1 },
		/** Free-spin FX in front of BoardFrame (ForegroundAnimation.svelte). */
		foreground: { label: 'Background/Foreground' },
		ratio: {
			normal: 1264 / 842,
			portrait: 1242 / 2208,
		},
		artSize: { width: 1264, height: 842 },
		offset: { x: 0, y: 0 },
		/** Multiplier on cover scale. <1 zooms out (may show backdrop at edges). */
		scale: 1, // BACKGROUND SCALE? 
	},
	// layoutSpace: virtual — board origin derived in stateGame; frame.offset* is board-local
	board: {
		root: { label: 'Board/Root' },
		mask: {
			label: 'Board/Mask',
			/** Horizontal mask padding as a multiple of SYMBOL_SIZE (applied left and right). */
			horizontalPadding: 1,
			/** Vertical mask padding as a multiple of SYMBOL_SIZE (applied top and bottom). */
			verticalPadding: 0,
			/**
			 * Extra vertical bleed for the animate (land/win) layer so FX aren't clipped.
			 * Frame art covers the overflow.
			 */
			animateVerticalPadding: 0.35,
		},
		maskDebug: { label: 'Board/MaskDebug' },
		frame: { label: 'Board/Frame' },
		layoutByType: {
			desktop: {
				symbolScale: 1.18,
				boardXOffset: 0,
				boardYOffset: -50,
				frame: { offsetX: 24, offsetY: 80, width: 1185, height: 1014 },
			},
			landscape: {
				symbolScale: 1.18,
				boardXOffset: 0,
				boardYOffset: -10,
				frame: { offsetX: 24, offsetY: 80, width: 1185, height: 1014},
			},
			portrait: {
				symbolScale: 1.18,
				boardXOffset: -8,
				boardYOffset: 0,
				frame: { offsetX: 24, offsetY: 80, width: 1185, height: 1014},
			},
			tablet: {
				symbolScale: 1.09,
				boardXOffset: 0,
				boardYOffset: -50,
				frame: { offsetX: 22, offsetY: 74, width: 1090, height: 933 },
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
	// layoutSpace: board-local — ModifierReel.svelte; top-right of board/frame (tunable)
	modifier: {
		root: { label: 'Modifier/Root' },
		spine: { label: 'Modifier/Spine' },
		layoutByType: {
			desktop: {
				spineWidth: 220,
				scale: 0.8,
				x: 620,
				y: -40,
			},
			landscape: {
				spineWidth: 220,
				scale: 0.8,
				x: 620,
				y: -50,
			},
			portrait: {
				spineWidth: 200,
				scale: 0.65,
				x: 600,
				y: -50,
			},
			tablet: {
				spineWidth: 220,
				scale: 0.8,
				x: 620,
				y: -50,
			},
		} satisfies Record<LayoutType, ModifierLayoutSettings>,
	},
	freeSpin: {
		// layoutSpace: board — see FREE_SPIN_MODAL_LAYOUT_BY_TYPE
		modal: {
			root: { label: 'FreeSpin/Modal/Root' },
			spine: { label: 'FreeSpin/Modal/Spine' },
			/** Native INTRO-OUT / SUMMARY-OUT duration from spine (ms), before timeScale. */
			outroDurationMs: 867,
			/** Playback rate for OUT animations (1 = spine default). */
			outroTimeScale: 0.55,
			/** Start outer fade after this fraction of the wall-clock OUT. */
			fadeOutStartRatio: 0.2,
			/** Fade-out duration overlapping the second half of OUT (ms). */
			fadeOutDurationMs: 500,
			layoutByType: FREE_SPIN_MODAL_LAYOUT_BY_TYPE,
		},
		// layoutSpace: slot-local — FreeSpinNumberDisplay inside FS_MODAL_PLACEHOLDER_VALUE
		intro: {
			numberText: {
				label: 'FreeSpin/Intro/NumberText',
				x: 0,
				y: 0,
				zIndex: 1,
				anchor: { x: 0.5, y: 0.5 },
				offsetY: 90,
				fontSizeRatio: 0.25,
			},
		},
		// layoutSpace: slot-local — FreeSpinNumberDisplay inside FS_MODAL_PLACEHOLDER_VALUE
		outro: {
			numberText: {
				label: 'FreeSpin/Outro/NumberText',
				x: 0,
				y: 0,
				zIndex: 1,
				anchor: { x: 0.5, y: 0.5 },
				offsetY: 0,
				fontSizeRatio: 0.2,
				maxWidthRatio: 0.85,
				layoutByType: {
					desktop: { fontSizeRatio: 0.2, maxWidthRatio: 0.85 },
					tablet: { fontSizeRatio: 0.18, maxWidthRatio: 0.85 },
					portrait: { fontSizeRatio: 0.14, maxWidthRatio: 0.85 },
					landscape: { fontSizeRatio: 0.15, maxWidthRatio: 0.85 },
				} satisfies Record<LayoutType, FreeSpinNumberTextLayoutByType>,
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
			/** Scale of amount text inside WIN-AMOUNT-SLOT (slot-local). */
			bigWinTextContainerScale: 1,
			/**
			 * Slot-local offset for amount text relative to WIN-AMOUNT bone.
			 * Seeded from PLACEHOLDER-WIN-AMOUNT attachment position in the spine.
			 */
			bigWinTextOffset: { x: -80, y: 350 },
			bigWinTextMaxWidthByType: {
				desktop: 2130,
				tablet: 1800,
				landscape: 1600,
				portrait: 1400,
			} satisfies Record<LayoutType, number>,
			/** Do not shrink big-win amount text below this fraction of winBig font size. */
			bigWinMinFitScale: 0.35,
			normalWinTextMaxWidthRatio: 0.95,
			/** Board-local Y offset from pivot; negative moves up toward the gap between visible rows. */
			normalWinTextOffsetY: -18,
			/** Fraction of canvas width available for win text after layout + board scale. */
			canvasWidthPaddingRatio: 0.88,
			animationScale: 0.45,
			/** Board-local offset for the big-win spine from board pivot. Positive Y moves down. */
			animationOffset: { x: 0, y: -60 },
			countUpCompleteDelayMs: 1000,
		},
		// layoutSpace: board-local — offsets from board pivot inside Win/Root
		pressToContinue: {
			bigWin: {
				label: 'Win/BigWin/PressToContinue',
				x: 0,
				y: 220,
				widthRatio: 0.5,
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
		dim: { label: 'Loading/Dim' },
		progress: { label: 'Loading/Progress' },
		progressBg: { label: 'Loading/ProgressBg' },
		progressFill: { label: 'Loading/ProgressFill' },
		howToPlay: {
			root: { label: 'Loading/HowToPlay' },
			panel: { label: 'Loading/HowToPlay/Panel' },
			panelBg: { label: 'Loading/HowToPlay/PanelBg' },
			panelFg: { label: 'Loading/HowToPlay/PanelFg' },
			panelText: { label: 'Loading/HowToPlay/PanelText' },
			track: { label: 'Loading/HowToPlay/Track' },
			dots: { label: 'Loading/HowToPlay/Dots' },
			layoutByType: {
				desktop: {
					panelWidth: 300,
					panelHeight: 420,
					gap: 28,
					y: 80,
					fgSize: 160,
					fgY: -70,
					textMaxWidth: 240,
					fontSize: 18,
					textY: 65,
					dotsY: 250,
					dotDiameter: 14,
					dotGap: 16,
				},
				tablet: {
					panelWidth: 260,
					panelHeight: 380,
					gap: 20,
					y: 70,
					fgSize: 140,
					fgY: -60,
					textMaxWidth: 210,
					fontSize: 16,
					textY: 55,
					dotsY: 230,
					dotDiameter: 14,
					dotGap: 16,
				},
				landscape: {
					panelWidth: 340 * 0.8,
					panelHeight: 360 * 0.8,
					gap: 24,
					y: 50,
					fgSize: 140,
					fgY: -55,
					textMaxWidth: 280,
					fontSize: 16,
					textY: 50,
					dotsY: 210,
					dotDiameter: 16,
					dotGap: 18,
				},
				portrait: {
					panelWidth: 420,
					panelHeight: 520,
					gap: 28,
					y: 60,
					fgSize: 200,
					fgY: -90,
					textMaxWidth: 340,
					fontSize: 22,
					textY: 80,
					dotsY: 300,
					dotDiameter: 18,
					dotGap: 20,
				},
			} satisfies Record<LayoutType, HowToPlayPanelLayoutSettings>,
		},
		screen: {
			layoutByType: {
				desktop: {
					x: 711,
					y: 390,
					logoWidth: 150,
					logoY: -260,
					progressBar: { x: 0, y: 360, width: 393, height: 69 },
				},
				landscape: {
					x: 800,
					y: 340,
					logoWidth: 160,
					logoY: -220,
					progressBar: { x: 0, y: 280, width: 393, height: 69 },
				},
				portrait: {
					x: 400,
					y: 620,
					logoWidth: 180,
					logoY: -360,
					progressBar: { x: 0, y: 420, width: 393, height: 69 },
				},
				tablet: {
					x: 500,
					y: 440,
					logoWidth: 180,
					logoY: -240,
					progressBar: { x: 0, y: 320, width: 393, height: 69 },
				},
			} satisfies Record<LayoutType, LoadingScreenLayoutSettings>,
		},
		// layoutSpace: loading-local — offset from Loading/Root (same origin as progress bar)
		pressToContinue: {
			label: 'Loading/PressToContinue',
			x: 0,
			y: -30,
			widthRatio: 1.0,
			anchor: { x: 0.5, y: 0.5 },
		},
	},
	// layoutSpace: n/a — MainContainer scene labels only
	layout: {
		frameLayer: { label: 'Layout/FrameLayer' },
		boardLayer: { label: 'Layout/BoardLayer' },
		modifierLayer: { label: 'Layout/ModifierLayer' },
		uiLayer: { label: 'Layout/UiLayer' },
		freeSpinModal: { label: 'Layout/FreeSpinModal' },
		pressToContinue: { label: 'Layout/PressToContinue' },
		win: { label: 'Layout/Win' },
		freeSpinCounter: { label: 'Layout/FreeSpinCounter' },
		loading: { label: 'Layout/Loading' },
	},
	/**
	 * App-root sibling draw order (pixi-svelte addChild + sortChildren).
	 * UI is always highest so remounting game FX cannot cover controls.
	 */
	sceneLayers: {
		modifier: 0,
		frame: 1,
		foreground: 2,
		board: 3,
		overlay: 50,
		ui: 100,
	},
	// layoutSpace: n/a — FadeContainer scene labels only
	fade: {
		backgroundIntro: { label: 'Fade/Background/Intro' },
		backgroundBase: { label: 'Fade/Background/Base' },
		backgroundFeature: { label: 'Fade/Background/Feature' },
		backgroundForeground: { label: 'Fade/Background/Foreground' },
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
			winBig: { font: 'cinzYellow', sizeMode: 'symbolMultiplier', size: 1.6, align: 'center' },
			winNormal: {
				font: 'cinzYellow',
				sizeMode: 'symbolMultiplier',
				size: 0.2,
				letterSpacing: 0,
				align: 'center',
			},
			symbolMultiplier: { font: 'cinzYellow', sizeMode: 'absolute', size: 50 },
			freeSpinCounter: { font: 'cinzYellow', sizeMode: 'symbolMultiplier', size: 0.275 },
			freeSpinIntro: { font: 'cinzYellow', sizeMode: 'widthRatio', size: 0.05 },
			freeSpinOutro: { font: 'cinzYellow', sizeMode: 'widthRatio', size: 0.08 },
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

export const resolveFreeSpinIntroLayout = (modalSizes: VirtualSize) => {
	const { intro } = VISUAL_LAYOUT.freeSpin;

	return {
		numberText: resolveNumberTextLayout(intro.numberText, modalSizes.width),
	};
};

export const resolveFreeSpinOutroLayout = (
	modalSizes: VirtualSize,
	layoutType: LayoutType = 'desktop',
) => {
	const { outro } = VISUAL_LAYOUT.freeSpin;

	return {
		numberText: resolveNumberTextLayout(outro.numberText, modalSizes.width, layoutType),
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
			y: screen.progressBar.y + (pressToContinue.y ?? 0),
			width: screen.progressBar.width * pressToContinue.widthRatio,
			anchor: pressToContinue.anchor,
		},
	};
};

export const getHowToPlayLayout = (layoutType: LayoutType) =>
	VISUAL_LAYOUT.loading.howToPlay.layoutByType[layoutType];

export const resolveHowToPlayLayout = (layoutType: LayoutType): ResolvedHowToPlayLayout => {
	const layout = getHowToPlayLayout(layoutType);
	return {
		...layout,
		carousel: layoutType === 'portrait' || layoutType === 'landscape',
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
		intro: VISUAL_LAYOUT.background.intro.label,
		base: VISUAL_LAYOUT.background.base.label,
		feature: VISUAL_LAYOUT.background.feature.label,
		foreground: VISUAL_LAYOUT.background.foreground.label,
	},
	board: {
		root: VISUAL_LAYOUT.board.root.label,
		mask: VISUAL_LAYOUT.board.mask.label,
		maskDebug: VISUAL_LAYOUT.board.maskDebug.label,
		frame: VISUAL_LAYOUT.board.frame.label,
	},
	logo: {
		root: VISUAL_LAYOUT.logo.root.label,
		spine: VISUAL_LAYOUT.logo.spine.label,
	},
	modifier: {
		root: VISUAL_LAYOUT.modifier.root.label,
		spine: VISUAL_LAYOUT.modifier.spine.label,
	},
	freeSpin: {
		modal: {
			root: VISUAL_LAYOUT.freeSpin.modal.root.label,
			spine: VISUAL_LAYOUT.freeSpin.modal.spine.label,
		},
		intro: {
			numberText: VISUAL_LAYOUT.freeSpin.intro.numberText.label,
		},
		outro: {
			numberText: VISUAL_LAYOUT.freeSpin.outro.numberText.label,
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
		dim: VISUAL_LAYOUT.loading.dim.label,
		progress: VISUAL_LAYOUT.loading.progress.label,
		progressBg: VISUAL_LAYOUT.loading.progressBg.label,
		progressFill: VISUAL_LAYOUT.loading.progressFill.label,
		pressToContinue: VISUAL_LAYOUT.loading.pressToContinue.label,
		howToPlay: {
			root: VISUAL_LAYOUT.loading.howToPlay.root.label,
			panel: VISUAL_LAYOUT.loading.howToPlay.panel.label,
			panelBg: VISUAL_LAYOUT.loading.howToPlay.panelBg.label,
			panelFg: VISUAL_LAYOUT.loading.howToPlay.panelFg.label,
			panelText: VISUAL_LAYOUT.loading.howToPlay.panelText.label,
			track: VISUAL_LAYOUT.loading.howToPlay.track.label,
			dots: VISUAL_LAYOUT.loading.howToPlay.dots.label,
		},
	},
	layout: {
		frameLayer: VISUAL_LAYOUT.layout.frameLayer.label,
		boardLayer: VISUAL_LAYOUT.layout.boardLayer.label,
		modifierLayer: VISUAL_LAYOUT.layout.modifierLayer.label,
		uiLayer: VISUAL_LAYOUT.layout.uiLayer.label,
		freeSpinModal: VISUAL_LAYOUT.layout.freeSpinModal.label,
		pressToContinue: VISUAL_LAYOUT.layout.pressToContinue.label,
		win: VISUAL_LAYOUT.layout.win.label,
		freeSpinCounter: VISUAL_LAYOUT.layout.freeSpinCounter.label,
		loading: VISUAL_LAYOUT.layout.loading.label,
	},
	fade: {
		backgroundIntro: VISUAL_LAYOUT.fade.backgroundIntro.label,
		backgroundBase: VISUAL_LAYOUT.fade.backgroundBase.label,
		backgroundFeature: VISUAL_LAYOUT.fade.backgroundFeature.label,
		backgroundForeground: VISUAL_LAYOUT.fade.backgroundForeground.label,
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

export const BACKGROUND_SCALE = VISUAL_LAYOUT.background.scale;

export const BACKGROUND_LAYERS = {
	backdrop: VISUAL_LAYOUT.background.backdrop.zIndex,
	intro: VISUAL_LAYOUT.background.intro.zIndex,
	normal: VISUAL_LAYOUT.background.base.zIndex,
	feature: VISUAL_LAYOUT.background.feature.zIndex,
} as const;

export const SCENE_LAYERS = VISUAL_LAYOUT.sceneLayers;

export const OVERLAY = {
	backgroundColor: VISUAL_LAYOUT.overlay.backgroundColor,
	backgroundAlpha: VISUAL_LAYOUT.overlay.backgroundAlpha,
	fadeDurationMs: VISUAL_LAYOUT.overlay.fadeDurationMs,
} as const;

export const BOARD_LAYOUT_BY_TYPE = VISUAL_LAYOUT.board.layoutByType;

export const BOARD_MASK = {
	horizontalPadding: VISUAL_LAYOUT.board.mask.horizontalPadding,
	verticalPadding: VISUAL_LAYOUT.board.mask.verticalPadding,
	animateVerticalPadding: VISUAL_LAYOUT.board.mask.animateVerticalPadding,
} as const;

export const LOGO_LAYOUT_BY_TYPE = VISUAL_LAYOUT.logo.layoutByType;

export const MODIFIER_LAYOUT_BY_TYPE = VISUAL_LAYOUT.modifier.layoutByType;

export const BONUS_TRANSITION_LAYOUT_BY_TYPE = VISUAL_LAYOUT.transition.layoutByType;

export const FREE_SPIN_MODAL = {
	yOffsetFromBoard: FREE_SPIN_MODAL_LAYOUT_BY_TYPE.desktop.offsetFromBoard.y,
	outroDurationMs: VISUAL_LAYOUT.freeSpin.modal.outroDurationMs,
	outroTimeScale: VISUAL_LAYOUT.freeSpin.modal.outroTimeScale,
	fadeOutStartRatio: VISUAL_LAYOUT.freeSpin.modal.fadeOutStartRatio,
	fadeOutDurationMs: VISUAL_LAYOUT.freeSpin.modal.fadeOutDurationMs,
	/** Wall-clock delay before fade starts (fraction of scaled OUT by default). */
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

/** @deprecated Use resolveFreeSpinOutroLayout(modalSizes, layoutType) */
export const FREE_SPIN_OUTRO = resolveFreeSpinOutroLayout(
	getFreeSpinModalSizes('desktop'),
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

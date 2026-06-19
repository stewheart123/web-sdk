import _ from 'lodash';

import type { RawSymbol, SymbolState } from './types';

export const normalizeRawSymbol = (symbol: RawSymbol): RawSymbol => {
	if (symbol.name === 'N') {
		return { ...symbol, non_winnable: true };
	}
	return symbol;
};

export const normalizeBoard = (board: RawSymbol[][]) =>
	board.map((reel) => reel.map(normalizeRawSymbol));

/** Scales card size and row/column spacing together. Avoid using sizeRatios.height for scale. */
export const SYMBOL_SCALE = 2;
const SYMBOL_BASE_SIZE = 120;
export const SYMBOL_SIZE = SYMBOL_BASE_SIZE * SYMBOL_SCALE;
const CARD_ASPECT = 225 / 338;
export const SYMBOL_WIDTH = SYMBOL_SIZE * CARD_ASPECT;

export const REEL_PADDING = 0.53;
const GAP_SCALE = 0;
/** Extra pixels between reel columns. */
export const REEL_GAP = (SYMBOL_SIZE - SYMBOL_WIDTH) * GAP_SCALE;

// initial board (4 rows per reel; rows 0 and 3 are hidden padding)
export const INITIAL_BOARD: RawSymbol[][] = [
	[
		{ name: 'K' },
		{ name: 'Q' },
		{ name: 'N', non_winnable: true },
		{ name: '10' },
	],
	[
		{ name: '9' },
		{ name: 'S', scatter: true },
		{ name: '10' },
		{ name: '10' },
	],
	[
		{ name: 'Q' },
		{ name: '10' },
		{ name: 'W', wild: true },
		{ name: 'Q' },
	],
	[
		{ name: 'K' },
		{ name: 'A' },
		{ name: '9' },
		{ name: 'N', non_winnable: true },
	],
	[
		{ name: 'N', non_winnable: true },
		{ name: 'S', scatter: true },
		{ name: 'N', non_winnable: true },
		{ name: 'W', wild: true },
	],
];

export const BOARD_DIMENSIONS = { x: INITIAL_BOARD.length, y: INITIAL_BOARD[0].length - 2 };

export const BOARD_SIZES = {
	width: SYMBOL_WIDTH * BOARD_DIMENSIONS.x + REEL_GAP * (BOARD_DIMENSIONS.x - 1),
	height: SYMBOL_SIZE * BOARD_DIMENSIONS.y,
};

export const BACKGROUND_RATIO = 2039 / 1000;
export const PORTRAIT_BACKGROUND_RATIO = 1242 / 2208;
const PORTRAIT_RATIO = 800 / 1422;
const LANDSCAPE_RATIO = 1600 / 900;
const DESKTOP_RATIO = 1422 / 800;

const DESKTOP_HEIGHT = 800;
const LANDSCAPE_HEIGHT = 900;
const PORTRAIT_HEIGHT = 1422;
export const DESKTOP_MAIN_SIZES = { width: DESKTOP_HEIGHT * DESKTOP_RATIO, height: DESKTOP_HEIGHT };
export const LANDSCAPE_MAIN_SIZES = {
	width: LANDSCAPE_HEIGHT * LANDSCAPE_RATIO,
	height: LANDSCAPE_HEIGHT,
};
export const PORTRAIT_MAIN_SIZES = {
	width: PORTRAIT_HEIGHT * PORTRAIT_RATIO,
	height: PORTRAIT_HEIGHT,
};

export const INITIAL_SYMBOL_STATE: SymbolState = 'static';

const SPIN_OPTIONS_SHARED = {
	reelFallInDelay: 80,
	reelPaddingMultiplierNormal: 1.25,
	reelPaddingMultiplierAnticipated: 18,
	reelFallOutDelay: 145,
};

export const SPIN_OPTIONS_DEFAULT = {
	...SPIN_OPTIONS_SHARED,
	symbolFallInSpeed: 3.5,
	symbolFallInInterval: 30,
	symbolFallInBounceSpeed: 0.15,
	symbolFallInBounceSizeMulti: 0,
	symbolFallOutSpeed: 3.5,
	symbolFallOutInterval: 20,
};

export const SPIN_OPTIONS_FAST = {
	...SPIN_OPTIONS_SHARED,
	symbolFallInSpeed: 7,
	symbolFallInInterval: 0,
	symbolFallInBounceSpeed: 0.3,
	symbolFallInBounceSizeMulti: 0,
	symbolFallOutSpeed: 7,
	symbolFallOutInterval: 0,
};

export const MOTION_BLUR_VELOCITY = 31;

export const zIndexes = {
	background: {
		backdrop: -3,
		normal: -2,
		feature: -1,
	},
};

const createCardSymbol = (suffix: string, hasWin = true) => {
	const idle = {
		type: 'spine' as const,
		assetKey: 'cardSymbols',
		animationName: `IDLE_${suffix}`,
		sizeRatios: { width: CARD_ASPECT, height: 1 },
		loop: true,
	};
	const win = hasWin
		? {
				type: 'spine' as const,
				assetKey: 'cardSymbols',
				animationName: `WIN_${suffix}`,
				sizeRatios: { width: CARD_ASPECT, height: 1 },
				loop: false,
			}
		: idle;

	return { static: idle, spin: idle, land: idle, postWinStatic: idle, win };
};

export const SYMBOL_INFO_MAP = {
	'8': createCardSymbol('9'),
	'9': createCardSymbol('9'),
	'10': createCardSymbol('10'),
	A: createCardSymbol('A'),
	J: createCardSymbol('J'),
	K: createCardSymbol('K'),
	Q: createCardSymbol('Q'),
	S: createCardSymbol('SCATTER'),
	W: createCardSymbol('W'),
	N: createCardSymbol('NW', false),
	X1: createCardSymbol('X1'),
	X2: createCardSymbol('X2'),
	X3: createCardSymbol('X3'),
};

export const SCATTER_LAND_SOUND_MAP = {
	1: 'sfx_scatter_stop_1',
	2: 'sfx_scatter_stop_2',
	3: 'sfx_scatter_stop_3',
	4: 'sfx_scatter_stop_4',
	5: 'sfx_scatter_stop_5',
} as const;

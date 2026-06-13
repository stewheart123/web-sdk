import type { BetType } from 'rgs-requests';

import type { SymbolName, RawSymbol, GameType, Position } from './types';

type BookEventReveal = {
	index: number;
	type: 'reveal';
	board: RawSymbol[][];
	paddingPositions: number[];
	anticipation: number[];
	gameType: GameType;
};

type BookEventModifierReveal = {
	index: number;
	type: 'modifierReveal';
	modifier: RawSymbol & { multiplier: number };
	multiplier: number;
	modifierReelId: string;
	modifierPosition: number;
	persists: boolean;
};

type BookEventWinInfo = {
	index: number;
	type: 'winInfo';
	totalWin: number;
	wins: {
		symbol: SymbolName;
		kind: number;
		win: number;
		positions: Position[];
		meta: {
			ways: number;
			globalMult: number;
			winWithoutMult: number;
			symbolMult: number;
			modifierMult?: number;
		};
	}[];
};

type BookEventSetTotalWin = { index: number; type: 'setTotalWin'; amount: number };
type BookEventFinalWin = { index: number; type: 'finalWin'; amount: number };
type BookEventFreeSpinTrigger = {
	index: number;
	type: 'freeSpinTrigger';
	totalFs: number;
	positions: Position[];
};
type BookEventUpdateFreeSpin = { index: number; type: 'updateFreeSpin'; amount: number; total: number };
type BookEventSetWin = { index: number; type: 'setWin'; amount: number; winLevel: number };
type BookEventFreeSpinEnd = { index: number; type: 'freeSpinEnd'; amount: number; winLevel: number };
type BookEventWincap = { index: number; type: 'wincap'; amount: number };

export type BookEvent =
	| BookEventReveal
	| BookEventModifierReveal
	| BookEventWinInfo
	| BookEventSetTotalWin
	| BookEventFinalWin
	| BookEventFreeSpinTrigger
	| BookEventUpdateFreeSpin
	| BookEventSetWin
	| BookEventFreeSpinEnd
	| BookEventWincap;

export type Bet = BetType<BookEvent>;
export type BookEventOfType<T> = Extract<BookEvent, { type: T }>;
export type BookEventContext = { bookEvents: BookEvent[] };

import type { BetType } from 'rgs-requests';

type BookEventWinInfo = {
	index: number;
	type: 'winInfo';
	numberRolled: number;
	totalWin: number;
};

type BookEventFinalWin = {
	index: number;
	type: 'finalWin';
	amount: number;
};

export type BookEvent = BookEventWinInfo | BookEventFinalWin;

export type Bet = BetType<BookEvent>;
export type BookEventOfType<T> = Extract<BookEvent, { type: T }>;
export type BookEventContext = { bookEvents: BookEvent[] };

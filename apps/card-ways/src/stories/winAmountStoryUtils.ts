import { stateBet } from 'state-shared';
import { BOOK_AMOUNT_MULTIPLIER, SMALLEST_FIAT_UNIT } from 'constants-shared/bet';
import {
	bookEventAmountToCurrencyString,
	bookEventAmountToNormalisedAmount,
} from 'utils-shared/amount';

import { playBookEvent } from '../game/utils';

export const MIN_BET = 0.1;

export type WinAmountCase = {
	label: string;
	bookAmount: number;
	winLevel: number;
	currency?: string;
	betAmount?: number;
};

export const seedWinAmountCase = (testCase: WinAmountCase) => {
	stateBet.betAmount = testCase.betAmount ?? MIN_BET;
	stateBet.wageredBetAmount = testCase.betAmount ?? MIN_BET;
	stateBet.winBookEventAmount = 0;
	stateBet.currency = testCase.currency ?? 'USD';
};

/** Pure formatter for HUD preview — must not mutate reactive state (Svelte 5 template safe). */
export const previewWinAmountCurrencyString = (testCase: WinAmountCase) => {
	const betAmount = testCase.betAmount ?? MIN_BET;
	const currency = testCase.currency ?? 'USD';
	const normalisedAmount = betAmount * (testCase.bookAmount / BOOK_AMOUNT_MULTIPLIER);
	const displayValue =
		normalisedAmount > 0 && normalisedAmount < SMALLEST_FIAT_UNIT
			? SMALLEST_FIAT_UNIT
			: normalisedAmount;

	return new Intl.NumberFormat('en', {
		minimumFractionDigits: 2,
		maximumFractionDigits: 2,
		style: 'currency',
		currency,
	}).format(displayValue);
};

export const logWinAmountCase = (testCase: WinAmountCase) => {
	seedWinAmountCase(testCase);
	const actual = bookEventAmountToNormalisedAmount(testCase.bookAmount);
	const displayed = bookEventAmountToCurrencyString(testCase.bookAmount);

	console.group(`[win amount test] ${testCase.label}`);
	console.log('Currency:', stateBet.currency);
	console.log('Bet:', stateBet.betAmount);
	console.log('Book amount:', testCase.bookAmount);
	console.log('Win level:', testCase.winLevel);
	console.log('Actual payout:', actual);
	console.log('Displayed:', displayed);
	console.log('Display length:', displayed.length);
	console.groupEnd();

	return { actual, displayed };
};

export const playWinAmountCase = async (testCase: WinAmountCase) => {
	const preview = logWinAmountCase(testCase);

	await playBookEvent(
		{
			index: 0,
			type: 'setWin',
			amount: testCase.bookAmount,
			winLevel: testCase.winLevel,
		},
		{ bookEvents: [] },
	);

	return preview;
};

export const largeWinCases: WinAmountCase[] = [
	{
		label: 'NGN 262k normal win (mobile overflow repro)',
		currency: 'NGN',
		betAmount: 1,
		bookAmount: 26290320,
		winLevel: 4,
	},
	{
		label: 'USD 1 million normal win',
		currency: 'USD',
		betAmount: 1,
		bookAmount: 100000000,
		winLevel: 4,
	},
	{
		label: 'USD 12.3 million normal win',
		currency: 'USD',
		betAmount: 1,
		bookAmount: 1234567890,
		winLevel: 4,
	},
	{
		label: 'NGN 262k big win (uncommon animation)',
		currency: 'NGN',
		betAmount: 1,
		bookAmount: 26290320,
		winLevel: 6,
	},
	{
		label: 'NOK 557k legendary win (big win modal)',
		currency: 'NOK',
		betAmount: 1,
		bookAmount: 55756012,
		winLevel: 9,
	},
	{
		label: 'IDR large normal win',
		currency: 'IDR',
		betAmount: 1,
		bookAmount: 50000000000,
		winLevel: 4,
	},
];

import type { BaseBet } from 'utils-bet';
import { stateConfig } from './stateConfig.svelte';
import { stateMeta } from './stateMeta.svelte';

export type Currency = string;
export type BetToResume = BaseBet | null;
export type BetModeKey = string;

export const stateBet = $state({
	currency: 'USD' as Currency,
	balanceAmount: 0,
	betAmount: 1,
	wageredBetAmount: 1,
	betToResume: null as BetToResume,
	replayRoundCache: null as BetToResume,
	activeBetModeKey: 'BASE' as BetModeKey,
	winBookEventAmount: 0,
	autoSpinsLoss: 0,
	autoSpinsCounter: 0,
	autoSpinsLossLimitAmount: Infinity,
	autoSpinsSingleWinLimitAmount: Infinity,
	isSpaceHold: false,
	isTurbo: false,
});

const correctBetAmount = (value: number) => {
	if (value <= 0) return 0;
	const costMultiplier = betCostMultiplier();
	if (costMultiplier === 0) return 0;
	const max = stateBet.balanceAmount / costMultiplier;
	if (value >= max) return max;
	return value;
};

const setBetAmount = (value: number) => {
	stateBet.betAmount = correctBetAmount(value);
};

const updateBetAmount = (update: (value: number) => number) => {
	stateBet.betAmount = correctBetAmount(update(stateBet.betAmount));
};

let isTurboLocked = false;

const updateIsTurbo = (value: boolean, options: { persistent: boolean }) => {
	const { persistent } = options;

	if (!persistent && isTurboLocked) return;
	if (persistent) isTurboLocked = value;

	stateBet.isTurbo = value;
};

const activeBetMode = () => stateMeta.betModeMeta?.[stateBet.activeBetModeKey.toUpperCase()]
	?? stateMeta.betModeMeta?.[stateBet.activeBetModeKey.toLowerCase()]
	?? null;
const isContinuousBet = () => stateBet.autoSpinsCounter > 1 || stateBet.isSpaceHold;
const timeScale = () => (stateBet.isTurbo ? 2 : 1);
const betCostMultiplier = () =>
	stateBetDerived.activeBetMode().type === 'activate'
		? stateBetDerived.activeBetMode().costMultiplier
		: 1;
const betCost = () => stateBet.betAmount * betCostMultiplier();
const isBetCostAvailable = () => betCost() > 0 && betCost() <= stateBet.balanceAmount;
const hasAutoBetCounter = () => stateBet.autoSpinsCounter !== 0;

/** Index of the current bet in {@link stateConfig.betAmountOptions}, or nearest lower option. */
const getBetAmountOptionIndex = () => {
	const options = stateConfig.betAmountOptions;
	if (!options.length) return 0;

	const exactIndex = options.indexOf(stateBet.betAmount);
	if (exactIndex !== -1) return exactIndex;

	for (let i = options.length - 1; i >= 0; i--) {
		if (options[i] <= stateBet.betAmount) return i;
	}

	return 0;
};

const stepBetAmountOption = (delta: -1 | 1) => {
	const options = stateConfig.betAmountOptions;
	if (!options.length) return;

	const index = getBetAmountOptionIndex();
	const nextIndex = Math.max(0, Math.min(options.length - 1, index + delta));
	stateBet.betAmount = options[nextIndex];
};

const canStepBetAmount = (delta: -1 | 1) => {
	const options = stateConfig.betAmountOptions;
	if (!options.length) return false;

	const index = getBetAmountOptionIndex();
	if (delta === -1) return index > 0;

	return index < options.length - 1;
};

export const stateBetDerived = {
	setBetAmount,
	updateBetAmount,
	updateIsTurbo,
	activeBetMode,
	isContinuousBet,
	timeScale,
	betCost,
	isBetCostAvailable,
	hasAutoBetCounter,
	getBetAmountOptionIndex,
	stepBetAmountOption,
	canStepBetAmount,
};

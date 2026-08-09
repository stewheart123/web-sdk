export const SMALLEST_FIAT_UNIT = 0.01;
export const API_AMOUNT_MULTIPLIER = 1000000; // In API, amount 1000000 is 1 dollar.
export const BOOK_AMOUNT_MULTIPLIER = 100; // In books, amount 100 is 1 dollar.

export const apiAmountToBetAmount = (apiAmount: number) => apiAmount / API_AMOUNT_MULTIPLIER;

/** RGS amounts must be integers; round after float conversion. */
export const betAmountToApiAmount = (betAmount: number) =>
	Math.round(betAmount * API_AMOUNT_MULTIPLIER);

export const resolveInitialBetApiAmount = (config: {
	defaultBetLevel?: number;
	betLevels?: number[];
}): number | null => {
	const betLevels = config.betLevels ?? [];
	if (!betLevels.length) return null;

	if (config.defaultBetLevel && config.defaultBetLevel > 0) {
		return config.defaultBetLevel;
	}

	return betLevels[0];
};

export const snapBetAmountToOptions = (amount: number, options: readonly number[]) => {
	if (!options.length) return amount;
	if (options.includes(amount)) return amount;
	return options[0];
};

/** Insert amount into the ladder if missing so the current/default bet stays selectable. */
export const ensureBetAmountInOptions = (amount: number, options: readonly number[]) => {
	if (!(amount > 0) || options.includes(amount)) return [...options];
	return [...options, amount].sort((a, b) => a - b);
};

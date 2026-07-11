export const BONUS_BUY_TIERS = [
	{ mode: 'bonus_3', scatters: 3, freeSpins: 10 },
	{ mode: 'bonus_4', scatters: 4, freeSpins: 15 },
	{ mode: 'bonus_5', scatters: 5, freeSpins: 20 },
] as const;

export type BonusBuyTier = (typeof BONUS_BUY_TIERS)[number];

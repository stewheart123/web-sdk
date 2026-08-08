import { toAbsoluteAssetUrl } from 'pixi-svelte';

export const BONUS_BUY_TIERS = [
	{ mode: 'bonus_3', scatters: 3, freeSpins: 10, image: 'BONUS-BUY-1.png' },
	{ mode: 'bonus_4', scatters: 4, freeSpins: 15, image: 'BONUS-BUY-2.png' },
	{ mode: 'bonus_5', scatters: 5, freeSpins: 20, image: 'BONUS-BUY-3.png' },
] as const;

export type BonusBuyTier = (typeof BONUS_BUY_TIERS)[number];

/** Fan-of-scatter art for each bonus-buy tier (HTML UI + game rules). */
export const BONUS_BUY_IMAGES = {
	'BONUS-BUY-1.png': toAbsoluteAssetUrl(
		new URL('../../assets/sprites/bonusBuy/BONUS-BUY-1.png', import.meta.url).href,
	),
	'BONUS-BUY-2.png': toAbsoluteAssetUrl(
		new URL('../../assets/sprites/bonusBuy/BONUS-BUY-2.png', import.meta.url).href,
	),
	'BONUS-BUY-3.png': toAbsoluteAssetUrl(
		new URL('../../assets/sprites/bonusBuy/BONUS-BUY-3.png', import.meta.url).href,
	),
} as const satisfies Record<BonusBuyTier['image'], string>;

export const bonusBuyImageForTier = (tier: BonusBuyTier) => BONUS_BUY_IMAGES[tier.image];

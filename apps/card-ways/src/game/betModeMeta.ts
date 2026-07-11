import { DEFAULT_BET_MODE_META } from 'state-shared/src/constants';
import type { BetModeMeta } from 'state-shared';

import { t } from '../i18n/translate';
import { BONUS_BUY_TIERS } from './bonusBuyTiers';
import config from './config';

const buildBonusBuyMeta = () =>
	Object.fromEntries(
		BONUS_BUY_TIERS.map((tier) => {
			const betMode = config.betModes[tier.mode as keyof typeof config.betModes];
			const bonusCost = betMode.cost;
			const tierValues = {
				scatterCount: String(tier.scatters),
				freeSpins: String(tier.freeSpins),
				bonusCost: String(bonusCost),
			};

			return [
				tier.mode,
				{
					...DEFAULT_BET_MODE_META.BONUS,
					mode: tier.mode,
					type: 'buy' as const,
					costMultiplier: bonusCost,
					maxWin: betMode.max_win,
					text: {
						...DEFAULT_BET_MODE_META.BONUS.text,
						title: t('UI.BONUS_BUY.TIER.TITLE', tierValues),
						dialog: t('UI.BONUS_BUY.TIER.DIALOG', tierValues),
						description: t('UI.BONUS_BUY.TIER.DESCRIPTION', tierValues),
						button: t('BUY'),
						tickerSpin: t('UI.BONUS_BUY.TIER.TICKER', tierValues),
					},
				},
			];
		}),
	);

export const buildCardWaysBetModeMeta = (): BetModeMeta => ({
	BASE: {
		...DEFAULT_BET_MODE_META.BASE,
		type: 'default' as const,
	},
	...buildBonusBuyMeta(),
});

export { buildCardWaysGameRuleMeta } from './gameRuleMeta';

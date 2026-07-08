import { DEFAULT_BET_MODE_META } from 'state-shared/src/constants';
import type { BetModeMeta } from 'state-shared';

import { t } from '../i18n/translate';
import config from './config';

const bonusCost = config.betModes.bonus.cost;

export const buildCardWaysBetModeMeta = (): BetModeMeta => ({
	BASE: {
		...DEFAULT_BET_MODE_META.BASE,
		type: 'default' as const,
	},
	BONUS: {
		...DEFAULT_BET_MODE_META.BONUS,
		type: 'buy' as const,
		costMultiplier: bonusCost,
		text: {
			...DEFAULT_BET_MODE_META.BONUS.text,
			title: t('FREE SPINS'),
			dialog: t('UI.BONUS_BUY.DIALOG', { bonusCost: String(bonusCost) }),
			description: t('UI.BONUS_BUY.DESCRIPTION'),
			button: t('BUY'),
			tickerSpin: t('BONUS BUY ACTIVATED'),
		},
	},
});

export { buildCardWaysGameRuleMeta } from './gameRuleMeta';

import { DEFAULT_BET_MODE_META } from 'state-shared/src/constants';
import type { BetModeMeta } from 'state-shared';

import config from './config';
import { CARD_WAYS_GAME_RULE_META } from './gameRuleMeta';

const bonusCost = config.betModes.bonus.cost;

export const CARD_WAYS_BET_MODE_META = {
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
			title: 'FREE SPINS',
			dialog: `Purchase FREE SPINS for ${bonusCost}× your bet.`,
			description: 'Triggers the FREE SPINS feature instantly.',
			button: 'BUY',
			tickerSpin: 'BONUS BUY ACTIVATED',
		},
	},
} satisfies BetModeMeta;

export { CARD_WAYS_GAME_RULE_META };

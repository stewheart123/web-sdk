import { DEFAULT_BET_MODE_META, DEFAULT_GAME_RULE_META } from 'state-shared/src/constants';
import type { BetModeMeta } from 'state-shared';

import config from './config';

const bonusCost = config.betModes.bonus.cost;
const baseRtp = config.betModes.base.rtp * 100;
const bonusRtp = config.betModes.bonus.rtp * 100;
const maxWin = config.betModes.base.max_win;

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

export const CARD_WAYS_GAME_RULE_META = {
	...DEFAULT_GAME_RULE_META,
	gameRules: DEFAULT_GAME_RULE_META.gameRules.map((section) =>
		section.title === 'BET MODES'
			? {
					...section,
					containers: section.containers.map((container) => ({
						...container,
						text: `The normal mode of this game has a theoretical expected return of ${baseRtp.toFixed(1)}%.\n\nThe player also has the option to buy FREE SPINS. This costs ${bonusCost}× the underlying bet. The FREE SPINS buy mode has a theoretical expected return of ${bonusRtp.toFixed(1)}%.\n\nThe maximum win in each Bet Mode is ${maxWin}× the underlying bet.`,
					})),
				}
			: section,
	),
} as typeof DEFAULT_GAME_RULE_META;

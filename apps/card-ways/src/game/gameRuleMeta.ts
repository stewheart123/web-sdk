import { DEFAULT_GAME_RULE_META } from 'state-shared/src/constants';
import type { GameRuleContainer, GameRuleData } from 'state-shared';

import config from './config';

const bonusCost = config.betModes.bonus.cost;
const baseRtp = config.betModes.base.rtp * 100;
const bonusRtp = config.betModes.bonus.rtp * 100;
const maxWin = config.betModes.base.max_win;

const GAME_RULES_BASE = '/assets/sprites/gameRules';

const GAME_RULE_IMAGE = {
	ace: `${GAME_RULES_BASE}/ACE.png`,
	king: `${GAME_RULES_BASE}/KING.png`,
	queen: `${GAME_RULES_BASE}/QUEEN.png`,
	jack: `${GAME_RULES_BASE}/JACK.png`,
	ten: `${GAME_RULES_BASE}/TEN.png`,
	nine: `${GAME_RULES_BASE}/NINE.png`,
	wild: `${GAME_RULES_BASE}/WILD.png`,
	scatter: `${GAME_RULES_BASE}/SCATTER.png`,
	modifier: `${GAME_RULES_BASE}/X1.png`,
	autoplay: `${GAME_RULES_BASE}/autoplay_interact_hover.png`,
	bonusBuy: `${GAME_RULES_BASE}/bonus_buy_interact_hover.png`,
	turbo: `${GAME_RULES_BASE}/turbo_interact_hover.png`,
} as const;

const FALLBACK_IMAGE = {
	winWays: 'https://staging-1-0.twist-game.app/_app/immutable/assets/winWays.be45a8a4.png',
	rtp97: 'https://staging-1-0.twist-game.app/_app/immutable/assets/rtp97.d2febd7d.svg',
} as const;

const SYMBOL_IMAGE_MAP: Record<string, string> = {
	A: GAME_RULE_IMAGE.ace,
	K: GAME_RULE_IMAGE.king,
	Q: GAME_RULE_IMAGE.queen,
	J: GAME_RULE_IMAGE.jack,
	'10': GAME_RULE_IMAGE.ten,
	'9': GAME_RULE_IMAGE.nine,
};

const SPECIAL_SYMBOL_IMAGE_MAP: Record<string, string> = {
	WILD: GAME_RULE_IMAGE.wild,
	SCATTER: GAME_RULE_IMAGE.scatter,
	MODIFIER: GAME_RULE_IMAGE.modifier,
};

const UI_ROW_IMAGES: Record<number, string> = {
	7: GAME_RULE_IMAGE.autoplay,
	9: GAME_RULE_IMAGE.turbo,
};

const PAYING_SYMBOL_ORDER = ['A', 'K', 'Q', 'J', '10', '9'] as const;

type ConfigSymbol = {
	paytable: Array<Record<string, number>> | null;
};

const formatPaytableText = (paytable: Array<Record<string, number>>): string => {
	const pays: Record<string, number> = {};
	for (const entry of paytable) {
		Object.assign(pays, entry);
	}

	return ['5', '4', '3']
		.filter((kind) => pays[kind] !== undefined)
		.map((kind) => `${kind}\t|\t${pays[kind]}x`)
		.join('\n');
};

const buildSymbolContainers = (): GameRuleContainer[] => {
	const containers: GameRuleContainer[] = PAYING_SYMBOL_ORDER.map((symbolName, index) => {
		const symbol = config.symbols[symbolName as keyof typeof config.symbols] as ConfigSymbol;
		const row = Math.floor(index / 3);
		const column = index % 3;

		return {
			title: '',
			text: formatPaytableText(symbol.paytable ?? []),
			image: SYMBOL_IMAGE_MAP[symbolName],
			imagePosition: 'left' as const,
			row,
			column,
		};
	});

	const specialSymbols: Array<{ title: string; text: string; row: number; column: number }> = [
		{
			title: 'WILD',
			text: 'Substitutes for all paying symbols.',
			row: 2,
			column: 1,
		},
		{
			title: 'SCATTER',
			text: '3 or more Scatters award 10 Free Spins.',
			row: 2,
			column: 2,
		},
		{
			title: 'MODIFIER',
			text: '×1, ×2, or ×3 cards apply to ways wins. No direct pay.',
			row: 3,
			column: 0,
		},
	];

	for (const special of specialSymbols) {
		containers.push({
			title: special.title,
			text: special.text,
			image: SPECIAL_SYMBOL_IMAGE_MAP[special.title],
			imagePosition: 'left',
			row: special.row,
			column: special.column,
		});
	}

	return containers;
};

const buildUiGuideContainers = (): GameRuleContainer[] => {
	const defaultUiGuide = DEFAULT_GAME_RULE_META.gameRules.find(
		(section) => section.title === 'USER INTERFACE GUIDE',
	)!;

	return [
		...defaultUiGuide.containers.map((container) => ({
			...container,
			image: UI_ROW_IMAGES[container.row] ?? container.image,
		})),
		{
			title: '',
			text: 'BUY BONUS | Opens the Bonus Buy menu to purchase Free Spins.',
			image: GAME_RULE_IMAGE.bonusBuy,
			imagePosition: 'left' as const,
			row: 8,
			column: 0,
		},
	];
};

const payTableSections: GameRuleData[] = [
	{
		title: 'PAYTABLE',
		rows: 6,
		columns: 1,
		containers: [
			{
				title: 'GAME OVERVIEW',
				text: 'CARD WAYS is a 5-reel, 2-row ways slot with a playing-card theme. Wins are formed by matching symbols on adjacent reels from left to right. A Modifier Reel beside the board can boost wins with multipliers up to ×3.',
				image: '',
				imagePosition: 'left',
				row: 0,
				column: 0,
			},
			{
				title: 'WILD SYMBOL',
				text: 'The Wild substitutes for all paying symbols. Wild does not substitute for Scatter.',
				image: GAME_RULE_IMAGE.wild,
				imagePosition: 'left',
				row: 1,
				column: 0,
			},
			{
				title: 'SCATTER / FREE SPINS',
				text: 'Scatter symbols appear on all reels. Landing 3 or more Scatters in a single spin awards 10 Free Spins. Scatter wins are evaluated separately from ways wins.',
				image: GAME_RULE_IMAGE.scatter,
				imagePosition: 'left',
				row: 2,
				column: 0,
			},
			{
				title: 'MODIFIER REEL (BASE GAME)',
				text: 'On each base-game spin, the Modifier Reel reveals a multiplier card: ×1, ×2, or ×3. When a win occurs, the active modifier multiplier is applied to that win. The modifier may change on the next spin. If a ×1 card is revealed after a higher multiplier, the multiplier resets.',
				image: GAME_RULE_IMAGE.modifier,
				imagePosition: 'left',
				row: 3,
				column: 0,
			},
			{
				title: 'MODIFIER REEL (FREE SPINS)',
				text: 'During Free Spins, the Modifier Reel is active on every spin. The revealed multiplier persists for the entire bonus until the feature ends. All wins during Free Spins are multiplied by the active modifier value. When Free Spins end, the modifier resets to ×1.',
				image: GAME_RULE_IMAGE.modifier,
				imagePosition: 'left',
				row: 4,
				column: 0,
			},
			{
				title: 'MAX WIN',
				text: `The maximum win in any bet mode is ${maxWin.toLocaleString()}× the underlying bet. Once reached, the round ends and the win cap is awarded.`,
				image: '',
				imagePosition: 'left',
				row: 5,
				column: 0,
			},
		],
	},
	{
		title: 'SYMBOLS',
		rows: 4,
		columns: 3,
		containers: buildSymbolContainers(),
	},
	{
		title: 'WIN WAYS',
		rows: 1,
		columns: 1,
		containers: [
			{
				title: '',
				text: 'All symbols pay from left to right on adjacent reels, starting from the leftmost reel. Only symbols on consecutive reels form a valid way. This does not apply to Scatter symbols. Multiple ways for the same symbol are added together. Wild symbols substitute to complete ways.',
				image: FALLBACK_IMAGE.winWays,
				imagePosition: 'top',
				row: 0,
				column: 0,
			},
		],
	},
];

const gameRulesSections: GameRuleData[] = [
	{
		title: 'BET MODES',
		rows: 1,
		columns: 1,
		containers: [
			{
				title: '',
				text: `The normal mode of this game has a theoretical expected return of ${baseRtp.toFixed(1)}%.\n\nThe player also has the option to buy Free Spins for ${bonusCost}× the underlying bet. The Free Spins buy mode has a theoretical expected return of ${bonusRtp.toFixed(1)}%. Purchasing Free Spins triggers the bonus feature immediately.\n\nThe maximum win in each bet mode is ${maxWin.toLocaleString()}× the underlying bet.`,
				image: FALLBACK_IMAGE.rtp97,
				imagePosition: 'top',
				row: 0,
				column: 0,
			},
		],
	},
	{
		title: 'BONUS BUY',
		rows: 1,
		columns: 1,
		containers: [
			{
				title: 'BONUS BUY — FREE SPINS',
				text: `Cost: ${bonusCost}× total bet\nInstantly awards the Free Spins feature (10 spins)\nTheoretical RTP: ${bonusRtp.toFixed(1)}%\nMaximum win: ${maxWin.toLocaleString()}× bet\nBonus Buy may be disabled in certain jurisdictions`,
				image: GAME_RULE_IMAGE.bonusBuy,
				imagePosition: 'left',
				row: 0,
				column: 0,
			},
		],
	},
	{
		title: 'LEGAL NOTICE',
		rows: 1,
		columns: 1,
		containers: [
			{
				title: '',
				text: 'Malfunction voids all pays and plays. A consistent internet connection is required. In the event of a disconnection, reload the game to finish any uncompleted bets. The theoretical expected return is calculated over many spins. Movement of reels are not representative of any physical device, and is for illustrative purposes only. TM and © Stake Engine.',
				image: '',
				imagePosition: 'left',
				row: 0,
				column: 0,
			},
		],
	},
	{
		title: 'USER INTERFACE GUIDE',
		rows: 17,
		columns: 1,
		containers: buildUiGuideContainers(),
	},
];

export const CARD_WAYS_GAME_RULE_META = {
	payTable: payTableSections,
	gameRules: gameRulesSections,
	splashScreen: [],
} as typeof DEFAULT_GAME_RULE_META;

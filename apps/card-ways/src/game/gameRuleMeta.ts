import { DEFAULT_GAME_RULE_META } from 'state-shared/src/constants';
import type { GameRuleContainer, GameRuleData } from 'state-shared';

import { t } from '../i18n/translate';
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
	nonWin: `${GAME_RULES_BASE}/NON-WIN.png`,
	x1: `${GAME_RULES_BASE}/X1.png`,
	x2: `${GAME_RULES_BASE}/X2.png`,
	x3: `${GAME_RULES_BASE}/X3.png`,
	autoplay: `${GAME_RULES_BASE}/autoplay_interact_hover.png`,
	bonusBuy: `${GAME_RULES_BASE}/bonus_buy_interact_hover.png`,
	turbo: `${GAME_RULES_BASE}/turbo_interact_hover.png`,
} as const;

const MODIFIER_IMAGES = [GAME_RULE_IMAGE.x1, GAME_RULE_IMAGE.x2, GAME_RULE_IMAGE.x3] as const;

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
	'NON-WIN': GAME_RULE_IMAGE.nonWin,
	WILD: GAME_RULE_IMAGE.wild,
	SCATTER: GAME_RULE_IMAGE.scatter,
	'×1': GAME_RULE_IMAGE.x1,
	'×2': GAME_RULE_IMAGE.x2,
	'×3': GAME_RULE_IMAGE.x3,
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

	const specialSymbols: Array<{ title: string; textKey: string; row: number; column: number }> = [
		{ title: 'NON-WIN', textKey: 'GR.SYMBOL.NON_WIN', row: 2, column: 0 },
		{ title: 'WILD', textKey: 'GR.SYMBOL.WILD', row: 2, column: 1 },
		{ title: 'SCATTER', textKey: 'GR.SYMBOL.SCATTER', row: 2, column: 2 },
		{ title: '×1', textKey: 'GR.SYMBOL.MODIFIER', row: 3, column: 0 },
		{ title: '×2', textKey: 'GR.SYMBOL.MODIFIER', row: 3, column: 1 },
		{ title: '×3', textKey: 'GR.SYMBOL.MODIFIER', row: 3, column: 2 },
	];

	for (const special of specialSymbols) {
		containers.push({
			title: special.title,
			text: t(special.textKey),
			image: SPECIAL_SYMBOL_IMAGE_MAP[special.title],
			imagePosition: 'left',
			row: special.row,
			column: special.column,
		});
	}

	return containers;
};

const buildUiGuideContainers = (): GameRuleContainer[] => [
	{
		title: '',
		text: t('GR.UI.AUTO_SPIN'),
		image: GAME_RULE_IMAGE.autoplay,
		imagePosition: 'left',
		row: 0,
		column: 0,
	},
	{
		title: '',
		text: t('GR.UI.BUY_BONUS'),
		image: GAME_RULE_IMAGE.bonusBuy,
		imagePosition: 'left',
		row: 1,
		column: 0,
	},
	{
		title: '',
		text: t('GR.UI.TURBO'),
		image: GAME_RULE_IMAGE.turbo,
		imagePosition: 'left',
		row: 2,
		column: 0,
	},
];

const numericValues = {
	maxWin: maxWin.toLocaleString(),
	baseRtp: baseRtp.toFixed(1),
	bonusRtp: bonusRtp.toFixed(1),
	bonusCost: String(bonusCost),
};

export const buildCardWaysGameRuleMeta = () => {
	const payTableSections: GameRuleData[] = [
		{
			title: '',
			rows: 6,
			columns: 1,
			containers: [
				{
					title: t('GR.GAME_OVERVIEW.TITLE'),
					text: t('GR.GAME_OVERVIEW.TEXT'),
					image: '',
					imagePosition: 'left',
					row: 0,
					column: 0,
				},
				{
					title: t('GR.WILD_SYMBOL.TITLE'),
					text: t('GR.WILD_SYMBOL.TEXT'),
					image: GAME_RULE_IMAGE.wild,
					imagePosition: 'left',
					row: 1,
					column: 0,
				},
				{
					title: t('GR.SCATTER_FREE_SPINS.TITLE'),
					text: t('GR.SCATTER_FREE_SPINS.TEXT'),
					image: GAME_RULE_IMAGE.scatter,
					imagePosition: 'left',
					row: 2,
					column: 0,
				},
				{
					title: t('GR.MODIFIER_BASE.TITLE'),
					text: t('GR.MODIFIER_BASE.TEXT'),
					image: '',
					images: [...MODIFIER_IMAGES],
					imagePosition: 'left',
					row: 3,
					column: 0,
				},
				{
					title: t('GR.MODIFIER_FREE_SPINS.TITLE'),
					text: t('GR.MODIFIER_FREE_SPINS.TEXT'),
					image: '',
					images: [...MODIFIER_IMAGES],
					imagePosition: 'left',
					row: 4,
					column: 0,
				},
				{
					title: t('GR.MAX_WIN.TITLE'),
					text: t('GR.MAX_WIN.TEXT', numericValues),
					image: '',
					imagePosition: 'left',
					row: 5,
					column: 0,
				},
			],
		},
		{
			title: t('GR.SECTION.PAYTABLE'),
			rows: 4,
			columns: 3,
			containers: buildSymbolContainers(),
		},
		{
			title: t('GR.SECTION.WIN_WAYS'),
			rows: 1,
			columns: 1,
			containers: [
				{
					title: '',
					text: t('GR.WIN_WAYS.TEXT'),
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
			title: t('GR.SECTION.BET_MODES'),
			rows: 1,
			columns: 1,
			containers: [
				{
					title: '',
					text: t('GR.BET_MODES.TEXT', numericValues),
					image: FALLBACK_IMAGE.rtp97,
					imagePosition: 'top',
					row: 0,
					column: 0,
				},
			],
		},
		{
			title: t('GR.SECTION.BONUS_BUY'),
			rows: 1,
			columns: 1,
			containers: [
				{
					title: t('GR.BONUS_BUY.TITLE'),
					text: t('GR.BONUS_BUY.TEXT', numericValues),
					image: GAME_RULE_IMAGE.bonusBuy,
					imagePosition: 'left',
					row: 0,
					column: 0,
				},
			],
		},
		{
			title: t('GR.SECTION.UI_GUIDE'),
			rows: 3,
			columns: 1,
			containers: buildUiGuideContainers(),
		},
		{
			title: t('GR.SECTION.LEGAL_NOTICE'),
			rows: 1,
			columns: 1,
			containers: [
				{
					title: '',
					text: t('GR.LEGAL_NOTICE.TEXT'),
					image: '',
					imagePosition: 'left',
					row: 0,
					column: 0,
				},
			],
		},
	];

	return {
		payTable: payTableSections,
		gameRules: gameRulesSections,
		splashScreen: [],
	} as typeof DEFAULT_GAME_RULE_META;
};

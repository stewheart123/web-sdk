import { DEFAULT_GAME_RULE_META } from 'state-shared/src/constants';
import type { GameRuleContainer, GameRuleData } from 'state-shared';
import { toAbsoluteAssetUrl } from 'pixi-svelte';

import { t } from '../i18n/translate';
import config from './config';

const bonusCost = config.betModes.bonus.cost;
const baseRtp = config.betModes.base.rtp * 100;
const bonusRtp = config.betModes.bonus.rtp * 100;
const maxWin = config.betModes.base.max_win;

type GameRuleImages = {
	ace: string;
	king: string;
	queen: string;
	jack: string;
	ten: string;
	nine: string;
	wild: string;
	scatter: string;
	nonWin: string;
	x1: string;
	x2: string;
	x3: string;
	autoplay: string;
	bonusBuy: string;
	turbo: string;
};

/** Resolve hashed Vite asset paths against the live game origin at runtime. */
const createGameRuleImages = (): GameRuleImages => {
	const images = {
		ace: new URL('../../assets/sprites/gameRules/ACE.png', import.meta.url).href,
		king: new URL('../../assets/sprites/gameRules/KING.png', import.meta.url).href,
		queen: new URL('../../assets/sprites/gameRules/QUEEN.png', import.meta.url).href,
		jack: new URL('../../assets/sprites/gameRules/JACK.png', import.meta.url).href,
		ten: new URL('../../assets/sprites/gameRules/TEN.png', import.meta.url).href,
		nine: new URL('../../assets/sprites/gameRules/NINE.png', import.meta.url).href,
		wild: new URL('../../assets/sprites/gameRules/WILD.png', import.meta.url).href,
		scatter: new URL('../../assets/sprites/gameRules/SCATTER.png', import.meta.url).href,
		nonWin: new URL('../../assets/sprites/gameRules/NON-WIN.png', import.meta.url).href,
		x1: new URL('../../assets/sprites/gameRules/X1.png', import.meta.url).href,
		x2: new URL('../../assets/sprites/gameRules/X2.png', import.meta.url).href,
		x3: new URL('../../assets/sprites/gameRules/X3.png', import.meta.url).href,
		autoplay: new URL('../../assets/sprites/gameRules/autoplay_interact_hover.png', import.meta.url)
			.href,
		bonusBuy: new URL(
			'../../assets/sprites/gameRules/bonus_buy_interact_hover.png',
			import.meta.url,
		).href,
		turbo: new URL('../../assets/sprites/gameRules/turbo_interact_hover.png', import.meta.url).href,
	} satisfies GameRuleImages;

	return Object.fromEntries(
		Object.entries(images).map(([key, url]) => [key, toAbsoluteAssetUrl(url)]),
	) as GameRuleImages;
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

const buildSymbolContainers = (images: GameRuleImages): GameRuleContainer[] => {
	const symbolImageMap: Record<string, string> = {
		A: images.ace,
		K: images.king,
		Q: images.queen,
		J: images.jack,
		'10': images.ten,
		'9': images.nine,
	};

	const specialSymbolImageMap: Record<string, string> = {
		'NON-WIN': images.nonWin,
		WILD: images.wild,
		SCATTER: images.scatter,
		'×1': images.x1,
		'×2': images.x2,
		'×3': images.x3,
	};

	const containers: GameRuleContainer[] = PAYING_SYMBOL_ORDER.map((symbolName, index) => {
		const symbol = config.symbols[symbolName as keyof typeof config.symbols] as ConfigSymbol;
		const row = Math.floor(index / 3);
		const column = index % 3;

		return {
			title: '',
			text: formatPaytableText(symbol.paytable ?? []),
			image: symbolImageMap[symbolName],
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
			image: specialSymbolImageMap[special.title],
			imagePosition: 'left',
			row: special.row,
			column: special.column,
		});
	}

	return containers;
};

const buildUiGuideContainers = (images: GameRuleImages): GameRuleContainer[] => [
	{
		title: '',
		text: t('GR.UI.AUTO_SPIN'),
		image: images.autoplay,
		imagePosition: 'left',
		row: 0,
		column: 0,
	},
	{
		title: '',
		text: t('GR.UI.BUY_BONUS'),
		image: images.bonusBuy,
		imagePosition: 'left',
		row: 1,
		column: 0,
	},
	{
		title: '',
		text: t('GR.UI.TURBO'),
		image: images.turbo,
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
	const images = createGameRuleImages();
	const modifierImages = [images.x1, images.x2, images.x3] as const;

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
					image: images.wild,
					imagePosition: 'left',
					row: 1,
					column: 0,
				},
				{
					title: t('GR.SCATTER_FREE_SPINS.TITLE'),
					text: t('GR.SCATTER_FREE_SPINS.TEXT'),
					image: images.scatter,
					imagePosition: 'left',
					row: 2,
					column: 0,
				},
				{
					title: t('GR.MODIFIER_BASE.TITLE'),
					text: t('GR.MODIFIER_BASE.TEXT'),
					image: '',
					images: [...modifierImages],
					imagePosition: 'left',
					row: 3,
					column: 0,
				},
				{
					title: t('GR.MODIFIER_FREE_SPINS.TITLE'),
					text: t('GR.MODIFIER_FREE_SPINS.TEXT'),
					image: '',
					images: [...modifierImages],
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
			containers: buildSymbolContainers(images),
		},
		{
			title: t('GR.SECTION.WIN_WAYS'),
			rows: 1,
			columns: 1,
			containers: [
				{
					title: '',
					text: t('GR.WIN_WAYS.TEXT'),
					image: images.nonWin,
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
					image: images.scatter,
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
					image: images.bonusBuy,
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
			containers: buildUiGuideContainers(images),
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

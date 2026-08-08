import { DEFAULT_GAME_RULE_META } from 'state-shared/src/constants';
import type { GameRuleContainer, GameRuleData } from 'state-shared';
import { toAbsoluteAssetUrl } from 'pixi-svelte';

import { t, tSocial } from '../i18n/translate';
import { BONUS_BUY_TIERS, BONUS_BUY_IMAGES } from './bonusBuyTiers';
import config from './config';

const baseRtp = config.betModes.base.rtp * 100;
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
	/** Stacked X3/X2/X1 intro card used for modifier overview rows. */
	multipliers: string;
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
		multipliers: new URL('../../assets/sprites/introCards/CARD-2-FG.png', import.meta.url).href,
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
			text: tSocial(special.textKey, `${special.textKey}.SOCIAL`),
			image: specialSymbolImageMap[special.title],
			imagePosition: 'top',
			row: special.row,
			column: special.column,
		});
	}

	return containers;
};

const buildUiGuideContainers = (): GameRuleContainer[] => [
	{
		title: '',
		text: tSocial('GR.UI.SPIN', 'GR.UI.SPIN.SOCIAL'),
		image: '',
		icon: 'spin',
		imagePosition: 'left',
		row: 0,
		column: 0,
	},
	{
		title: '',
		text: t('GR.UI.AUTO_SPIN'),
		image: '',
		icon: 'auto',
		imagePosition: 'left',
		row: 1,
		column: 0,
	},
	{
		title: '',
		text: tSocial('GR.UI.BUY_BONUS', 'GR.UI.BUY_BONUS.SOCIAL'),
		image: '',
		icon: 'bonus',
		imagePosition: 'left',
		row: 2,
		column: 0,
	},
	{
		title: '',
		text: t('GR.UI.TURBO'),
		image: '',
		icon: 'turbo',
		imagePosition: 'left',
		row: 3,
		column: 0,
	},
	{
		title: '',
		text: t('GR.UI.MUSIC'),
		image: '',
		icon: 'music',
		imagePosition: 'left',
		row: 4,
		column: 0,
	},
	{
		title: '',
		text: t('GR.UI.SOUND'),
		image: '',
		icon: 'sound',
		imagePosition: 'left',
		row: 5,
		column: 0,
	},
];

const numericValues = {
	maxWin: maxWin.toLocaleString(),
	baseCost: String(config.betModes.base.cost),
	baseRtp: baseRtp.toFixed(1),
	bonusCost3: String(config.betModes.bonus_3.cost),
	bonusCost4: String(config.betModes.bonus_4.cost),
	bonusCost5: String(config.betModes.bonus_5.cost),
	bonusRtp3: (config.betModes.bonus_3.rtp * 100).toFixed(1),
	bonusRtp4: (config.betModes.bonus_4.rtp * 100).toFixed(1),
	bonusRtp5: (config.betModes.bonus_5.rtp * 100).toFixed(1),
	freeSpins3: String(BONUS_BUY_TIERS[0].freeSpins),
	freeSpins4: String(BONUS_BUY_TIERS[1].freeSpins),
	freeSpins5: String(BONUS_BUY_TIERS[2].freeSpins),
};

export const buildCardWaysGameRuleMeta = () => {
	const images = createGameRuleImages();

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
					text: tSocial('GR.WILD_SYMBOL.TEXT', 'GR.WILD_SYMBOL.TEXT.SOCIAL'),
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
					images: [images.multipliers],
					imagePosition: 'left',
					row: 3,
					column: 0,
				},
				{
					title: t('GR.MODIFIER_FREE_SPINS.TITLE'),
					text: t('GR.MODIFIER_FREE_SPINS.TEXT'),
					image: '',
					images: [images.multipliers],
					imagePosition: 'left',
					row: 4,
					column: 0,
				},
				{
					title: t('GR.MAX_WIN.TITLE'),
					text: tSocial('GR.MAX_WIN.TEXT', 'GR.MAX_WIN.TEXT.SOCIAL', numericValues),
					image: '',
					imagePosition: 'left',
					row: 5,
					column: 0,
				},
			],
		},
		{
			title: tSocial('GR.SECTION.PAYTABLE', 'GR.SECTION.WIN_TABLE'),
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
					text: tSocial('GR.WIN_WAYS.TEXT', 'GR.WIN_WAYS.TEXT.SOCIAL'),
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
			title: tSocial('GR.SECTION.BET_MODES', 'GR.SECTION.SPIN_MODES'),
			rows: 1,
			columns: 1,
			containers: [
				{
					title: '',
					text: tSocial('GR.BET_MODES.TEXT', 'GR.BET_MODES.TEXT.SOCIAL', numericValues),
					image: images.scatter,
					imagePosition: 'top',
					row: 0,
					column: 0,
				},
			],
		},
		{
			title: tSocial('GR.SECTION.BONUS_BUY', 'GR.SECTION.BONUS_SELECT'),
			rows: 1,
			columns: 1,
			containers: [
				{
					title: tSocial('GR.BONUS_BUY.TITLE', 'GR.BONUS_BUY.TITLE.SOCIAL'),
					text: tSocial('GR.BONUS_BUY.TEXT', 'GR.BONUS_BUY.TEXT.SOCIAL', numericValues),
					image: '',
					images: Object.values(BONUS_BUY_IMAGES),
					imagePosition: 'top',
					row: 0,
					column: 0,
				},
			],
		},
		{
			title: t('GR.SECTION.UI_GUIDE'),
			rows: 6,
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

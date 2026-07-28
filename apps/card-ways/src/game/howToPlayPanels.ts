import type { LayoutType } from './visualLayoutConfig';

export type HowToPlayPanelDef = {
	id: string;
	text: string;
	/** Preloaded sprite key for the panel card background. */
	bgKey: string;
	/** Preloaded sprite key for the foreground illustration. */
	fgKey: string;
};

export const HOW_TO_PLAY_PANELS: HowToPlayPanelDef[] = [
	{
		id: 'ways',
		text: 'Connect identical symbols from leftmost to right. 5000 potential ways to win',
		bgKey: 'howToPlayPanelBg',
		fgKey: 'howToPlayWays',
	},
	{
		id: 'multiplier',
		text: 'A multiplier ranging from 1 - 3 applies to every win',
		bgKey: 'howToPlayPanelBg',
		fgKey: 'howToPlayMultiplier',
	},
	{
		id: 'freeSpins',
		text: 'Multiplier value locks at the start of free spins, trigger by landing 3 or more scatter symbols',
		bgKey: 'howToPlayPanelBg',
		fgKey: 'howToPlayFreeSpins',
	},
];

export const isHowToPlayCarouselLayout = (layoutType: LayoutType) =>
	layoutType === 'portrait' || layoutType === 'landscape';

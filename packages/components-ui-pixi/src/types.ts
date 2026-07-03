import type { Snippet } from 'svelte';

import type { ButtonProps } from 'components-pixi';

export type EmitterEventUi =
	| { type: 'hotKeySpace' }
	| { type: 'hotKeyEscape' }
	| { type: 'stopButtonClick' }
	| { type: 'stopButtonEnable' }
	| { type: 'uiShow' }
	| { type: 'uiHide' }
	| { type: 'drawerUnfold' }
	| { type: 'drawerFold' }
	| { type: 'drawerButtonShow' }
	| { type: 'drawerButtonHide' }
	// sound
	| { type: 'soundBetMode'; betModeKey: string }
	| { type: 'soundPressGeneral' }
	| { type: 'soundPressBet' }
	// bet services
	| { type: 'resumeBet' }
	| { type: 'autoBet' }
	| { type: 'bet' };

export type ButtonIcon =
	| 'decrease'
	| 'increase'
	| 'menu'
	| 'turbo'
	| 'autoSpin'
	| 'payTable'
	| 'info'
	| 'settings'
	| 'sound'
	| 'music'
	| 'soundOn'
	| 'soundOff'
	| 'menuExit';

export type LabelUiProps = {
	stacked?: boolean;
	variant?: 'default' | 'win';
	size?: 'default' | 'bar';
	width?: number;
	maxHeight?: number;
};

export type LayoutUiProps = {
	gameName: Snippet;
	logo: Snippet;
	amountBalance: Snippet<[LabelUiProps]>;
	amountWin: Snippet<[LabelUiProps]>;
	amountBet: Snippet<[LabelUiProps]>;
	buttonBuyBonus: Snippet<[Partial<ButtonProps>]>;
	buttonBet: Snippet<[Partial<ButtonProps>]>;
	buttonTurbo: Snippet<[Partial<ButtonProps>]>;
	buttonAutoSpin: Snippet<[Partial<ButtonProps>]>;
	buttonIncrease: Snippet<[Partial<ButtonProps>]>;
	buttonDecrease: Snippet<[Partial<ButtonProps>]>;
	buttonMenu: Snippet<[Partial<ButtonProps>]>;
	buttonGameRules: Snippet<[Partial<ButtonProps>]>;
	buttonSoundSwitch: Snippet<[Partial<ButtonProps>]>;
	buttonMusicSwitch: Snippet<[Partial<ButtonProps>]>;
};

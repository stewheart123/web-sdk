export type EmitterEventModal =
	| { type: 'soundPressGeneral' }
	| { type: 'buyBonusConfirm' }
	| { type: 'bet' }
	| { type: 'autoBet' };

/** Events the HTML HUD subscribes to / broadcasts (subset of PIXI EmitterEventUi). */
export type EmitterEventHud =
	| { type: 'hotKeySpace' }
	| { type: 'hotKeyEscape' }
	| { type: 'stopButtonClick' }
	| { type: 'stopButtonEnable' }
	| { type: 'uiShow' }
	| { type: 'uiHide' }
	| { type: 'soundPressGeneral' }
	| { type: 'soundPressBet' }
	| { type: 'resumeBet' }
	| { type: 'autoBet' }
	| { type: 'bet' }
	| { type: 'spinStart' }
	| { type: 'winFloatShow'; amount: number }
	| { type: 'winShow' }
	| { type: 'winHide' }
	| { type: 'freeSpinIntroShow' }
	| { type: 'freeSpinIntroHide' }
	| { type: 'freeSpinOutroShow' }
	| { type: 'freeSpinOutroHide' }
	| { type: 'replayRestart' };

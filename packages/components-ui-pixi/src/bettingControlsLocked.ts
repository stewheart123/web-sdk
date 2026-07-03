import { stateUi } from 'state-shared';

export const isBettingControlsLocked = (isIdle: boolean) =>
	!isIdle ||
	stateUi.isBoardAnimating ||
	stateUi.freeSpinCounterShow ||
	stateUi.isFreeSpinIntroActive ||
	stateUi.isFreeSpinOutroActive ||
	stateUi.isWinOverlayActive ||
	stateUi.isWinFloatShowing;
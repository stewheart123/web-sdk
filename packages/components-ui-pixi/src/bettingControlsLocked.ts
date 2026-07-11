import { stateBet, stateBetDerived, stateUi } from 'state-shared';

export const isBettingControlsLocked = (isIdle: boolean) =>
	!isIdle ||
	stateUi.isBoardAnimating ||
	stateUi.freeSpinCounterShow ||
	stateUi.isFreeSpinIntroActive ||
	stateUi.isFreeSpinOutroActive ||
	stateUi.isWinOverlayActive;

export const canCancelAutoplay = () =>
	stateBetDerived.hasAutoBetCounter() && !stateBet.isSpaceHold;
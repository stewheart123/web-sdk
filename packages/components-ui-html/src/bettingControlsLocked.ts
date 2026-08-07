import { stateBet, stateBetDerived, stateUi } from 'state-shared';

export const isBettingControlsLocked = (isIdle: boolean) =>
	stateUi.config.mode === 'replay' ||
	!isIdle ||
	stateUi.isBoardAnimating ||
	stateUi.freeSpinCounterShow ||
	stateUi.isFreeSpinIntroActive ||
	stateUi.isFreeSpinOutroActive ||
	stateUi.isWinOverlayActive;

export const canCancelAutoplay = () =>
	stateBetDerived.hasAutoBetCounter() && !stateBet.isSpaceHold;

import type { BaseBet } from 'utils-bet';
import { stateBet, stateModal, stateUi } from 'state-shared';

type ReplayEventEmitter = {
	broadcast: (event: { type: string }) => void;
};

export const prepareReplayRound = <TBet extends BaseBet>(data: TBet, mode: string): TBet =>
	({
		...data,
		event: '0',
		active: true,
		mode,
	}) as TBet;

export const restartReplay = ({
	eventEmitter,
	isIdle,
}: {
	eventEmitter: ReplayEventEmitter;
	isIdle: boolean;
}) => {
	if (!isIdle || !stateBet.replayRoundCache) return;

	stateUi.replayFinished = false;
	stateModal.modal = null;
	stateUi.isWinOverlayActive = false;
	stateUi.isWinFloatShowing = false;
	stateUi.isFreeSpinIntroActive = false;
	stateUi.isFreeSpinOutroActive = false;
	stateUi.freeSpinCounterShow = false;
	stateUi.freeSpinCounterCurrent = 0;
	stateUi.freeSpinCounterTotal = 0;
	stateBet.winBookEventAmount = 0;

	eventEmitter.broadcast({ type: 'winHide' });
	eventEmitter.broadcast({ type: 'freeSpinIntroHide' });
	eventEmitter.broadcast({ type: 'freeSpinOutroHide' });

	stateBet.betToResume = structuredClone(stateBet.replayRoundCache);
	eventEmitter.broadcast({ type: 'resumeBet' });
};

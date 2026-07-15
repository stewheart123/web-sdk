import type { BaseBet } from 'utils-bet';
import { stateBet, stateModal, stateUi, stateUrlDerived } from 'state-shared';

type ReplayEventEmitter = {
	broadcast: (event: { type: string }) => void;
};

/** RGS replay data is plain JSON; JSON clone avoids Svelte $state proxy structuredClone errors. */
export const cloneReplayRound = <TBet extends BaseBet>(bet: TBet): TBet =>
	JSON.parse(JSON.stringify(bet)) as TBet;

export const clearReplayState = () => {
	stateBet.replayRoundCache = null;
	stateUi.replayFinished = false;
};

export const prepareReplayRound = <TBet extends BaseBet>(data: TBet, mode: string): TBet =>
	({
		...cloneReplayRound(data),
		event: '0',
		active: true,
		mode,
	}) as TBet;

/** Resume an active round or start replay. No-op when there is nothing to resume. */
export const tryStartInitialResume = ({
	eventEmitter,
}: {
	eventEmitter: ReplayEventEmitter;
}) => {
	if (stateUrlDerived.replay() && !stateBet.betToResume && stateBet.replayRoundCache) {
		stateBet.betToResume = cloneReplayRound(stateBet.replayRoundCache);
	}

	if (!stateBet.betToResume) return;

	if (stateBet.betToResume.active && stateBet.betToResume.mode) {
		stateBet.activeBetModeKey = stateBet.betToResume.mode;
	}

	eventEmitter.broadcast({ type: 'resumeBet' });
};

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
	eventEmitter.broadcast({ type: 'replayRestart' });

	stateBet.betToResume = cloneReplayRound(stateBet.replayRoundCache);
	eventEmitter.broadcast({ type: 'resumeBet' });
};

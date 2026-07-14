<script lang="ts">
	import { stateUi } from 'state-shared';

	import { getContext } from '../context';

	const context = getContext();
	let replayStarted = $state(false);

	const isReplayBusy = () =>
		stateUi.isBoardAnimating ||
		stateUi.isWinOverlayActive ||
		stateUi.isFreeSpinIntroActive ||
		stateUi.isFreeSpinOutroActive;

	context.eventEmitter.subscribeOnMount({
		resumeBet: () => {
			if (stateUi.config.mode !== 'replay') return;
			replayStarted = true;
			stateUi.replayFinished = false;
		},
	});

	$effect(() => {
		if (stateUi.config.mode !== 'replay' || !replayStarted) return;

		const isIdle = context.stateXstateDerived.isIdle;
		const busy = isReplayBusy();

		stateUi.replayFinished = isIdle && !busy;
	});
</script>

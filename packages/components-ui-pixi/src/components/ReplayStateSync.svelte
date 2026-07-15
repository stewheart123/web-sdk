<script lang="ts">
	import { onMount, tick } from 'svelte';

	import { stateBet, stateUi } from 'state-shared';

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

	// ResumeBet may broadcast resumeBet before this component subscribes (sibling onMount order).
	// betToResume is cleared synchronously when resumeGame starts, so use replayRoundCache.
	onMount(async () => {
		await tick();
		if (stateUi.config.mode === 'replay' && stateBet.replayRoundCache && !replayStarted) {
			replayStarted = true;
		}
	});

	$effect(() => {
		if (stateUi.config.mode !== 'replay' || !replayStarted) return;

		const isIdle = context.stateXstateDerived.isIdle;
		const busy = isReplayBusy();

		stateUi.replayFinished = isIdle && !busy;
	});

	$effect(() => {
		if (stateUi.replayFinished) {
			context.eventEmitter.broadcast({ type: 'uiShow' });
		}
	});
</script>

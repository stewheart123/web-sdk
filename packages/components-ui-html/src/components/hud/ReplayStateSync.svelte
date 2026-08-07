<script lang="ts">
	import { onMount, tick } from 'svelte';
	import { stateBet, stateUi } from 'state-shared';
	import { getContextEventEmitter } from 'utils-event-emitter';
	import { getContextXstate } from 'utils-xstate';

	import type { EmitterEventHud } from '../../types';

	const { eventEmitter } = getContextEventEmitter<EmitterEventHud>();
	const { stateXstateDerived } = getContextXstate();

	let replayStarted = $state(false);

	const isReplayBusy = () =>
		stateUi.isBoardAnimating ||
		stateUi.isWinOverlayActive ||
		stateUi.isFreeSpinIntroActive ||
		stateUi.isFreeSpinOutroActive;

	eventEmitter.subscribeOnMount({
		resumeBet: () => {
			if (stateUi.config.mode !== 'replay') return;
			replayStarted = true;
			stateUi.replayFinished = false;
		},
	});

	onMount(async () => {
		await tick();
		if (stateUi.config.mode === 'replay' && stateBet.replayRoundCache && !replayStarted) {
			replayStarted = true;
		}
	});

	$effect(() => {
		if (stateUi.config.mode !== 'replay' || !replayStarted) return;

		const isIdle = stateXstateDerived.isIdle;
		const busy = isReplayBusy();

		stateUi.replayFinished = isIdle && !busy;
	});

	$effect(() => {
		if (stateUi.replayFinished) {
			eventEmitter.broadcast({ type: 'uiShow' });
		}
	});
</script>

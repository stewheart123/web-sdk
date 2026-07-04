<script lang="ts">
	import { PUBLIC_CHROMATIC } from 'envs';
	import { stateBet } from 'state-shared';
	import { getContext } from '../game/context';
	import { onMount } from 'svelte';

	const context = getContext();

	onMount(() => {
		if (PUBLIC_CHROMATIC) return;

		if (stateBet.betToResume?.active && stateBet.betToResume.mode) {
			stateBet.activeBetModeKey = stateBet.betToResume.mode;
		}
		context.eventEmitter.broadcast({ type: 'resumeBet' });
	});
</script>

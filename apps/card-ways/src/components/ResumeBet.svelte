<script lang="ts">
	import { PUBLIC_CHROMATIC } from 'envs';
	import { tryStartInitialResume } from 'components-shared';
	import { getContext } from '../game/context';
	import { onMount, tick } from 'svelte';

	const context = getContext();

	onMount(async () => {
		if (PUBLIC_CHROMATIC) return;

		await tick();
		tryStartInitialResume({ eventEmitter: context.eventEmitter });
	});
</script>

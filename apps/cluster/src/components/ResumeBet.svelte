<script lang="ts">
	import { tryStartInitialResume } from 'components-shared';
	import { getContext } from '../game/context';
	import { onMount, tick } from 'svelte';

	const context = getContext();

	onMount(async () => {
		await tick();
		tryStartInitialResume({ eventEmitter: context.eventEmitter });
	});
</script>

<script lang="ts">
	import { onMount, type Snippet } from 'svelte';

	import { initLocale } from '../game/syncLocale';

	type Props = {
		children: Snippet;
	};

	const props: Props = $props();

	let loaded = $state(false);

	onMount(() => {
		initLocale();
		loaded = true;
	});
</script>

{#if loaded}
	{@render props.children()}
{/if}

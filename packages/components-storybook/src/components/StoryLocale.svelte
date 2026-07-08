<script lang="ts">
	import { i18n } from '@lingui/core';
	import { onMount, type Snippet } from 'svelte';

	import { stateUrlOverride, type Language } from 'state-shared';

	type Props = {
		lang?: Language;
		children: Snippet;
	};

	const props: Props = $props();

	onMount(() => {
		i18n.activate(stateUrlOverride.lang ?? props.lang ?? 'en');
	});
</script>

{@render props.children()}

<script lang="ts">
	import type { Snippet } from 'svelte';
	import { EnableSpaceHold } from 'components-shared';

	import BettingControlsLockSync from './BettingControlsLockSync.svelte';
	import HudFade from './HudFade.svelte';
	import HudBar from './HudBar.svelte';

	type Props = {
		gameName?: Snippet;
	};

	const props: Props = $props();
</script>

<EnableSpaceHold />
<BettingControlsLockSync />

<HudFade>
	<HudBar>
		{#snippet gameName()}
			{#if props.gameName}
				{@render props.gameName()}
			{/if}
		{/snippet}
	</HudBar>
</HudFade>

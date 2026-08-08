<script lang="ts">
	import type { Snippet } from 'svelte';
	import { stateUi } from 'state-shared';
	import { zIndex } from 'constants-shared/zIndex';

	import HudDefault from './HudDefault.svelte';
	import HudReplay from './HudReplay.svelte';
	import HudReplayPlayAgain from './HudReplayPlayAgain.svelte';

	type Props = {
		gameName?: Snippet;
	};

	const props: Props = $props();

	const UI_COMPONENT_MAP = {
		default: HudDefault,
		replay: HudReplay,
	} as const;

	const UIComponent = $derived(UI_COMPONENT_MAP[stateUi.config.mode]);
</script>

<div class="html-ui" style:z-index={zIndex.hud}>
	<UIComponent>
		{#snippet gameName()}
			{#if props.gameName}
				{@render props.gameName()}
			{/if}
		{/snippet}
	</UIComponent>

	{#if stateUi.config.mode === 'replay' && stateUi.replayFinished}
		<HudReplayPlayAgain />
	{/if}
</div>

<style lang="scss">
	.html-ui {
		position: fixed;
		inset: 0;
		pointer-events: none;
		font-family: 'Noto Sans KR', system-ui, sans-serif;

		:global(button),
		:global(.hud-label) {
			pointer-events: auto;
		}
	}
</style>

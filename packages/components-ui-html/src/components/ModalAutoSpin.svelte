<script lang="ts">
	import { zIndex } from 'constants-shared/zIndex';
	import { stateModal } from 'state-shared';
	import { scrollIntoView } from 'utils-shared/scroll';

	import HudPanel from './HudPanel.svelte';
	import AutoSpinsOptions from './AutoSpinsOptions.svelte';
	import AutoSpinsAdvanced from './AutoSpinsAdvanced.svelte';
	import AutoSpinsStartButton from './AutoSpinsStartButton.svelte';
	import { i18nDerived } from '../i18n/i18nDerived';

	let scrollRoot = $state<HTMLDivElement | null>(null);
</script>

{#if stateModal.modal?.name === 'autoSpin'}
	<HudPanel
		title={i18nDerived.autoSpins}
		zIndex={zIndex.modal}
		onclose={() => (stateModal.modal = null)}
	>
		<div class="auto-spin-body" bind:this={scrollRoot}>
			<AutoSpinsOptions />
			<AutoSpinsAdvanced
				ontoggle={(duration) => {
					if (scrollRoot) {
						scrollIntoView({ element: scrollRoot, duration });
					}
				}}
			/>
		</div>

		{#snippet footer()}
			<AutoSpinsStartButton />
		{/snippet}
	</HudPanel>
{/if}

<style lang="scss">
	.auto-spin-body {
		display: flex;
		flex-direction: column;
		gap: 0.75rem;
		width: 100%;
	}
</style>

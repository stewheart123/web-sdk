<script lang="ts">
	import { stateUi, AUTO_SPINS_TEXT_OPTIONS } from 'state-shared';
	import { getContextLayout } from 'utils-layout';

	import HudPanelRow from './HudPanelRow.svelte';

	const { stateLayoutDerived } = getContextLayout();
	const AUTO_SPINS_TEXT_OPTIONS_COMPACT = AUTO_SPINS_TEXT_OPTIONS.filter(
		(value) => value !== '1000',
	);

	const options = $derived(
		stateLayoutDerived.layoutType() === 'landscape'
			? AUTO_SPINS_TEXT_OPTIONS_COMPACT
			: AUTO_SPINS_TEXT_OPTIONS,
	);
</script>

<div class="auto-spins-list">
	{#each options as option (option)}
		<HudPanelRow
			selected={option === stateUi.autoSpinsText}
			onclick={() => (stateUi.autoSpinsText = option)}
		>
			<span class:infinity={option === '∞'} data-test="round-options">{option}</span>
		</HudPanelRow>
	{/each}
</div>

<style lang="scss">
	.auto-spins-list {
		display: flex;
		flex-direction: column;
		gap: 0.45rem;
		width: 100%;
	}

	.infinity {
		font-size: 1.35rem;
		line-height: 1;
	}
</style>

<script lang="ts">
	import { slide } from 'svelte/transition';
	import { stateBetDerived } from 'state-shared';
	import { DropdownToggle } from 'components-shared';
	import { getContextEventEmitter } from 'utils-event-emitter';

	import AutoSpinsLossLimit from './AutoSpinsLossLimit.svelte';
	import AutoSpinsSingleWinLimit from './AutoSpinsSingleWinLimit.svelte';
	import type { EmitterEventModal } from '../types';
	import { i18nDerived } from '../i18n/i18nDerived';

	type Props = {
		ontoggle: (duration: number) => void;
	};

	const props: Props = $props();
	const { eventEmitter } = getContextEventEmitter<EmitterEventModal>();
	const SLIDE_DURATION = 100;

	let open = $state(false);

	$effect(() => {
		if (open) props.ontoggle(SLIDE_DURATION);
	});
</script>

<div class="advanced-section">
	<DropdownToggle
		{open}
		disabled={stateBetDerived.activeBetMode().type === 'activate'}
		onchange={(value) => {
			open = value;
			eventEmitter.broadcast({ type: 'soundPressGeneral' });
		}}
	>
		<span>{i18nDerived.advanced}</span>
	</DropdownToggle>

	{#if open}
		<div class="advanced-panel" transition:slide={{ duration: SLIDE_DURATION }}>
			<AutoSpinsLossLimit />
			<AutoSpinsSingleWinLimit />
		</div>
	{/if}
</div>

<style lang="scss">
	.advanced-section {
		width: 100%;
		max-width: 100%;
		display: flex;
		flex-direction: column;
		align-items: stretch;
		gap: 0.5rem;
		margin-top: 0.25rem;
		opacity: 0.85;
	}

	.advanced-panel {
		width: 100%;
		max-width: 100%;
		box-sizing: border-box;
		border: 1px solid rgba(255, 255, 255, 0.12);
		border-radius: 0.65rem;
		padding: 0.75rem;
		background: rgba(0, 0, 0, 0.25);

		:global(.wrap) {
			min-width: unset;
			width: 100%;
			max-width: 100%;
		}

		:global(.grid) {
			width: 100%;
			max-width: 100%;
		}
	}
</style>

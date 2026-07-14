<script lang="ts">
	import type { Snippet } from 'svelte';

	import BaseContent from './BaseContent.svelte';

	type Props = {
		maxListLength: number;
		showActivateRow: boolean;
		betAmount: Snippet;
		bonusCardsActivate: Snippet;
		bonusCardsBuy: Snippet;
	};

	const props: Props = $props();
	const scrollRow = $derived(props.maxListLength > 3);
</script>

<BaseContent maxWidth="100%">
	<div class="mini-bonus-panel scrollY scroll-mini">
		<div class="bet-row">
			{@render props.betAmount()}
		</div>

		{#if props.showActivateRow}
			<div class="bonus-row" class:scroll-x={scrollRow}>
				{@render props.bonusCardsActivate()}
			</div>
		{/if}

		<div class="bonus-row" class:scroll-x={scrollRow}>
			{@render props.bonusCardsBuy()}
		</div>
	</div>
</BaseContent>

<style lang="scss">
	.mini-bonus-panel {
		--mini-scale: 0.6;
		display: flex;
		flex-direction: column;
		align-items: stretch;
		width: 100%;
		max-height: 100%;
		gap: calc(0.5rem * var(--mini-scale));
		padding: calc(0.35rem * var(--mini-scale)) 0.15rem;
		box-sizing: border-box;
		min-height: 0;
	}

	.bet-row {
		flex-shrink: 0;
		width: 100%;
		max-width: calc(100% - 2rem);
		margin: 0 auto;
		display: flex;
		justify-content: center;
	}

	.bonus-row {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		gap: calc(0.35rem * var(--mini-scale));
		width: 100%;
		flex-shrink: 0;
	}

	.bonus-row.scroll-x {
		display: flex;
		overflow-x: auto;
		overflow-y: hidden;
		scroll-snap-type: x mandatory;
		scrollbar-width: none;

		&::-webkit-scrollbar {
			display: none;
		}
	}

	.bonus-row.scroll-x :global(.bonus-card-wrap) {
		flex: 0 0 calc(100% / 3);
		scroll-snap-align: start;
	}

	.bonus-row :global(.bonus-card-wrap) {
		min-width: unset;
		max-width: unset;
		width: 100%;
		box-sizing: border-box;
		padding: calc(0.5rem * var(--mini-scale));
		gap: calc(0.35rem * var(--mini-scale));
	}

	.bonus-row :global(.title) {
		font-size: calc(1rem * var(--mini-scale));
		line-height: 1.2;
		text-align: center;
		font-weight: 700;
	}

	.bonus-row :global(.description) {
		font-size: calc(0.75rem * var(--mini-scale));
		line-height: 1.2;
		min-height: unset;
		text-align: center;
		display: -webkit-box;
		-webkit-box-orient: vertical;
		-webkit-line-clamp: 3;
		overflow: hidden;
		white-space: pre-line;
	}

	.bonus-row :global(.description:empty) {
		display: none;
	}

	.bonus-row :global(.price) {
		font-size: calc(1rem * var(--mini-scale));
		line-height: 1.1;
		text-align: center;
		font-weight: 700;
	}

	.bonus-row :global(.purchase-label) {
		font-size: calc(1rem * var(--mini-scale));
		line-height: 1;
	}

	.bonus-row :global(.purchase-wrap .rectangle) {
		height: calc(3rem * var(--mini-scale));
	}
</style>

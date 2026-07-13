<script lang="ts">
	import type { Snippet } from 'svelte';

	import BaseContent from './BaseContent.svelte';

	type Props = {
		maxListLength: number;
		betAmount: Snippet;
		bonusCardsActivate: Snippet;
		bonusCardsBuy: Snippet;
	};

	const props: Props = $props();
</script>

<BaseContent maxWidth="100%">
	<div class="portrait-wrap">
		<div class="bet-amount">
			{@render props.betAmount()}
		</div>

		<div class="bonus-stack">
			{@render props.bonusCardsActivate()}
			{@render props.bonusCardsBuy()}
		</div>
	</div>
</BaseContent>

<style lang="scss">
	.portrait-wrap {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 1rem;
		width: min(96vw, 24rem);
	}

	.bet-amount {
		flex-shrink: 0;
		width: 100%;
	}

	.bonus-stack {
		display: flex;
		flex-direction: column;
		align-items: stretch;
		gap: 0.85rem;
		width: 100%;
	}

	.bonus-stack :global(.bonus-card-wrap) {
		min-width: unset;
		max-width: none;
		width: 100%;
		padding: 0.85rem 1rem;
	}

	.bonus-stack :global(.title) {
		font-size: 1.2rem;
		line-height: 1.3;
		font-weight: 700;
	}

	.bonus-stack :global(.description) {
		font-size: 1rem;
		line-height: 1.4;
		min-height: auto;
	}

	.bonus-stack :global(.price) {
		font-size: 1.15rem;
		line-height: 1.25;
		font-weight: 700;
	}

	.bonus-stack :global(.purchase-label) {
		font-size: 1.05rem;
	}

	.bonus-stack :global(.purchase-wrap .rectangle) {
		height: 3rem;
	}
</style>

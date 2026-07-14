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
		--bonus-option-width: min(88vw, 20rem);
	}

	.bet-amount {
		flex-shrink: 0;
		width: var(--bonus-option-width);
	}

	.bonus-stack {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 0.85rem;
		width: 100%;
	}

	.bonus-stack :global(.bonus-card-wrap) {
		min-width: unset;
		max-width: var(--bonus-option-width);
		width: var(--bonus-option-width);
		padding: 0.85rem 1rem;
		box-sizing: border-box;
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
		height: 2.75rem;
	}

	@media (orientation: portrait) and (max-height: 740px),
		(orientation: portrait) and (max-width: 400px) {
		.bonus-stack :global(.purchase-wrap .rectangle) {
			height: 2.5rem;
		}

		.bet-amount :global(.rectangle) {
			width: 2.75rem;
			height: 2.75rem;
		}

		.bet-amount :global(.stepper-symbol) {
			font-size: 2rem;
		}
	}
</style>

<script lang="ts">
	import type { Snippet } from 'svelte';

	import BaseContent from './BaseContent.svelte';
	import BaseScrollable from './BaseScrollable.svelte';

	type Props = {
		maxListLength: number;
		betAmount: Snippet;
		bonusCardsActivate: Snippet;
		bonusCardsBuy: Snippet;
	};

	const props: Props = $props();
</script>

<BaseContent maxWidth="100%">
	<div class="landscape-wrap">
		<div class="bet-row">
			{@render props.betAmount()}
		</div>

		<div class="bonuses">
			<BaseScrollable type="row" noScroll>
				{@render props.bonusCardsActivate()}
			</BaseScrollable>

			<BaseScrollable type="row" noScroll>
				{@render props.bonusCardsBuy()}
			</BaseScrollable>
		</div>
	</div>
</BaseContent>

<style lang="scss">
	.landscape-wrap {
		display: flex;
		flex-direction: column;
		align-items: center;
		width: 100%;
		gap: 1rem;
		padding: 0.5rem;
		box-sizing: border-box;
	}

	.bet-row {
		flex-shrink: 0;
		width: 100%;
		max-width: calc(100% - 2rem);
		margin: 0 auto;
		display: flex;
		justify-content: center;
	}

	.bonuses {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 1rem;
		width: 100%;
	}

	.bonuses :global(.content.row) {
		flex-wrap: wrap;
		justify-content: center;
		gap: 0.75rem;
		width: 100%;
	}
</style>

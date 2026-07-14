<script lang="ts">
	import { stateBet, stateModal, type BetModeData } from 'state-shared';
	import { Button } from 'components-shared';
	import { getContextEventEmitter } from 'utils-event-emitter';
	import { numberToCurrencyString } from 'utils-shared/amount';

	import BaseIcon from './BaseIcon.svelte';
	import BonusCard from './BonusCard.svelte';
	import BaseButtonContent from './BaseButtonContent.svelte';
	import { stateBonus } from '../stateBonus.svelte';
	import type { EmitterEventModal } from '../types';

	type Props = {
		list: BetModeData[];
	};

	const props: Props = $props();
	const { eventEmitter } = getContextEventEmitter<EmitterEventModal>();
</script>

{#each props.list as betModeData}
	{#if betModeData.type !== 'default'}
		<BonusCard>
			{#snippet title()}
				<div class="title">
					{betModeData.text.title}
				</div>
			{/snippet}

			{#snippet description()}
				{#if betModeData?.text?.description}
					<div class="description">
						{betModeData.text.description}
					</div>
				{/if}
			{/snippet}

			{#snippet price()}
				<div class="price">
					{`${numberToCurrencyString(stateBet.betAmount * betModeData.costMultiplier)}`}
				</div>
			{/snippet}

			{#snippet button()}
				<div class="purchase-wrap">
					<Button
						onclick={() => {
							stateBonus.selectedBetModeKey = betModeData.mode;
							eventEmitter.broadcast({ type: 'buyBonusConfirm' });
							eventEmitter.broadcast({ type: 'soundPressGeneral' });
						}}
						disabled={stateBet.betAmount <= 0 ||
							stateBet.balanceAmount < stateBet.betAmount * betModeData.costMultiplier}
					>
						<BaseIcon width="100%" height="2rem" border="2px solid white;" />
						<BaseButtonContent>
							<span class="purchase-label">{betModeData.text.button}</span>
						</BaseButtonContent>
					</Button>
				</div>
			{/snippet}
		</BonusCard>
	{/if}
{/each}

<style lang="scss">
	.title {
		font-size: 1rem;
		line-height: 1rem;
		text-align: center;
	}

	.description {
		font-size: 0.75rem;
		text-align: center;
		min-height: 4rem;
		white-space: pre-line;
		display: inline-flex;
		align-items: center;
	}

	.description:empty {
		display: none;
	}

	.price {
		font-size: 1rem;
		line-height: 1rem;
		text-align: center;
		white-space: nowrap;
	}

	.purchase-wrap :global(.rectangle) {
		height: 2rem;
	}

	.purchase-label {
		font-size: 1rem;
	}

	@media (max-width: 500px) {
		.price {
			max-width: 100%;
			overflow: hidden;
			text-overflow: ellipsis;
		}

		.purchase-wrap :global(.rectangle) {
			height: 3rem;
		}
	}
</style>

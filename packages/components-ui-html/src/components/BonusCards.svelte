<script lang="ts">
	import { stateBet, stateModal, type BetModeData } from 'state-shared';
	import { getContextEventEmitter } from 'utils-event-emitter';
	import { numberToCurrencyString } from 'utils-shared/amount';

	import HudPanelCta from './HudPanelCta.svelte';
	import BonusCard from './BonusCard.svelte';
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
				<HudPanelCta
					onclick={() => {
						stateBonus.selectedBetModeKey = betModeData.mode;
						eventEmitter.broadcast({ type: 'buyBonusConfirm' });
						eventEmitter.broadcast({ type: 'soundPressGeneral' });
					}}
					disabled={stateBet.betAmount <= 0 ||
						stateBet.balanceAmount < stateBet.betAmount * betModeData.costMultiplier}
				>
					{betModeData.text.button}
				</HudPanelCta>
			{/snippet}
		</BonusCard>
	{/if}
{/each}

<style lang="scss">
	.title {
		font-size: 1rem;
		font-weight: 700;
		line-height: 1.2;
		text-align: left;
	}

	.description {
		font-size: 0.8rem;
		line-height: 1.35;
		text-align: left;
		color: rgba(255, 255, 255, 0.65);
		white-space: pre-line;
	}

	.description:empty {
		display: none;
	}

	.price {
		font-size: 1.15rem;
		font-weight: 700;
		line-height: 1.2;
		text-align: left;
		white-space: nowrap;
	}
</style>

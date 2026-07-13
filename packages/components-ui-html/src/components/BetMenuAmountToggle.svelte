<script lang="ts">
	import { stateBet, stateConfig } from 'state-shared';
	import { Button, OptionsToggle } from 'components-shared';
	import { getContextEventEmitter } from 'utils-event-emitter';
	import { numberToCurrencyString } from 'utils-shared/amount';

	import BaseIcon from './BaseIcon.svelte';
	import BaseButtonContent from './BaseButtonContent.svelte';
	import type { EmitterEventModal } from '../types';

	const { eventEmitter } = getContextEventEmitter<EmitterEventModal>();
</script>

<OptionsToggle
	value={stateBet.betAmount}
	options={stateConfig.betAmountOptions}
	onchange={(value) => {
		stateBet.betAmount = value;
		eventEmitter.broadcast({ type: 'soundPressGeneral' });
	}}
>
	{#snippet children({ disabledDown, disabledUp, toggleDown, toggleUp })}
		<div class="toggle-wrap">
			<Button data-test="down-button" disabled={disabledDown} onclick={toggleDown}>
				<BaseIcon width="2.5rem" height="2.5rem" />
				<BaseButtonContent>
					<span class="stepper-symbol">-</span>
				</BaseButtonContent>
			</Button>

			<span class="amount">{numberToCurrencyString(stateBet.betAmount)}</span>

			<Button data-test="up-button" disabled={disabledUp} onclick={toggleUp}>
				<BaseIcon width="2.5rem" height="2.5rem" />
				<BaseButtonContent>
					<span class="stepper-symbol">+</span>
				</BaseButtonContent>
			</Button>
		</div>
	{/snippet}
</OptionsToggle>

<style lang="scss">
	.toggle-wrap {
		display: flex;
		flex-direction: row;
		align-items: center;
		gap: 0.5rem;
	}

	.stepper-symbol {
		font-size: 2rem;
	}

	.toggle-wrap :global(.rectangle) {
		width: 2.5rem;
		height: 2.5rem;
	}

	@media (max-width: 500px) {
		.stepper-symbol {
			font-size: 2.5rem;
		}

		.toggle-wrap :global(.rectangle) {
			width: 3.5rem;
			height: 3.5rem;
		}
	}
</style>

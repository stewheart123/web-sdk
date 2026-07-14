<script lang="ts">
	import { stateBet, stateConfig } from 'state-shared';
	import { Button, OptionsToggle } from 'components-shared';
	import { getContextEventEmitter } from 'utils-event-emitter';
	import { getContextLayout } from 'utils-layout';
	import { numberToCurrencyString } from 'utils-shared/amount';

	import BaseIcon from './BaseIcon.svelte';
	import BaseButtonContent from './BaseButtonContent.svelte';
	import type { EmitterEventModal } from '../types';

	const { eventEmitter } = getContextEventEmitter<EmitterEventModal>();
	const { stateLayoutDerived } = getContextLayout();
	const isMiniPlayer = $derived(stateLayoutDerived.isMiniPlayerViewport());
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
		<div class="toggle-wrap" class:mini={isMiniPlayer}>
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
		width: 100%;
		max-width: 100%;
	}

	.stepper-symbol {
		font-size: 2rem;
		line-height: 1;
	}

	.amount {
		font-size: inherit;
		flex: 1;
		min-width: 0;
		text-align: center;
		line-height: 1.1;
	}

	.toggle-wrap :global(.rectangle) {
		width: 2.5rem;
		height: 2.5rem;
	}

	.toggle-wrap :global(.button) {
		flex-shrink: 0;
		width: auto;
	}

	@media (max-width: 500px) and (min-height: 301px) {
		.stepper-symbol {
			font-size: 2.5rem;
		}

		.toggle-wrap :global(.rectangle) {
			width: 3.5rem;
			height: 3.5rem;
		}
	}

	.toggle-wrap.mini {
		gap: calc(0.5rem * var(--mini-scale));
	}

	.toggle-wrap.mini .stepper-symbol {
		font-size: calc(2.5rem * var(--mini-scale));
	}

	.toggle-wrap.mini .amount {
		font-size: calc(1rem * var(--mini-scale));
	}

	.toggle-wrap.mini :global(.rectangle) {
		width: calc(3.5rem * var(--mini-scale));
		height: calc(3.5rem * var(--mini-scale));
	}
</style>

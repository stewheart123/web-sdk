<script lang="ts">
	import { stateBet, stateConfig } from 'state-shared';
	import { OptionsToggle } from 'components-shared';
	import { getContextEventEmitter } from 'utils-event-emitter';
	import { numberToCurrencyString } from 'utils-shared/amount';

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
		<div class="bet-toggle">
			<button
				type="button"
				class="bet-toggle__step"
				data-test="down-button"
				disabled={disabledDown}
				onclick={toggleDown}
			>
				−
			</button>

			<span class="bet-toggle__amount">{numberToCurrencyString(stateBet.betAmount)}</span>

			<button
				type="button"
				class="bet-toggle__step"
				data-test="up-button"
				disabled={disabledUp}
				onclick={toggleUp}
			>
				+
			</button>
		</div>
	{/snippet}
</OptionsToggle>

<style lang="scss">
	.bet-toggle {
		display: flex;
		flex-direction: row;
		align-items: center;
		gap: 0.5rem;
		width: 100%;
		box-sizing: border-box;
		padding: 0.35rem;
		border-radius: 0.75rem;
		background: #12151c;
		border: 1px solid rgba(255, 255, 255, 0.1);
	}

	.bet-toggle__step {
		appearance: none;
		flex-shrink: 0;
		width: 2.75rem;
		height: 2.75rem;
		border: none;
		border-radius: 0.55rem;
		background: #1f2430;
		color: #fff;
		font-size: 1.5rem;
		font-weight: 700;
		line-height: 1;
		cursor: pointer;

		&:disabled {
			opacity: 0.4;
			cursor: not-allowed;
		}
	}

	.bet-toggle__amount {
		flex: 1;
		min-width: 0;
		text-align: center;
		font-size: 1.05rem;
		font-weight: 700;
		line-height: 1.1;
	}
</style>

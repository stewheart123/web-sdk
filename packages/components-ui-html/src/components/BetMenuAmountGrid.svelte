<script lang="ts">
	import { stateBet, stateConfig, stateI18n } from 'state-shared';
	import { getCurrencyDisplaySymbol } from 'utils-shared/amount';

	import HudPanelRow from './HudPanelRow.svelte';
	import { i18nDerived } from '../i18n/i18nDerived';

	const options = $derived(stateConfig.betMenuOptions);

	const isMaxValue = (value: number) => value === options[options.length - 1];
	const currencySymbol = $derived.by(() => {
		stateI18n.locale;
		stateBet.currency;
		return getCurrencyDisplaySymbol();
	});
	const formatValue = (value: number) => {
		let amount: string;
		if (Math.abs(value) > 999999) {
			amount = `${(Math.abs(value) / 1000000).toFixed(2)}M`;
		} else if (Math.abs(value) > 999) {
			amount = `${(Math.abs(value) / 1000).toFixed(2)}K`;
		} else {
			amount = Math.abs(value).toFixed(2);
		}
		return `${currencySymbol}${amount}`;
	};
</script>

<div class="bet-amount-grid">
	{#each options as option (option)}
		<HudPanelRow
			selected={option === stateBet.betAmount}
			onclick={() => (stateBet.betAmount = option)}
		>
			{isMaxValue(option) ? i18nDerived.max : formatValue(option)}
		</HudPanelRow>
	{/each}
</div>

<style lang="scss">
	.bet-amount-grid {
		display: grid;
		grid-template-columns: repeat(3, minmax(0, 1fr));
		gap: 0.35rem;
		width: min(100%, 28rem);
		margin-inline: auto;

		@media (min-width: 420px) {
			grid-template-columns: repeat(4, minmax(0, 1fr));
			width: min(100%, 32rem);
		}

		@media (orientation: landscape) and (min-width: 700px) {
			grid-template-columns: repeat(5, minmax(0, 1fr));
			width: min(100%, 36rem);
		}
	}

	.bet-amount-grid :global(.hud-panel-row) {
		padding: 0.5rem 0.35rem;
		font-size: 0.82rem;
		border-radius: 0.45rem;
	}
</style>

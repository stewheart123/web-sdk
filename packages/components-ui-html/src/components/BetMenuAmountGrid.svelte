<script lang="ts">
	import { getContextLayout } from 'utils-layout';
	import { stateBet, stateConfig, stateI18n } from 'state-shared';
	import { getCurrencyDisplaySymbol } from 'utils-shared/amount';

	import HudPanelRow from './HudPanelRow.svelte';
	import { i18nDerived } from '../i18n/i18nDerived';

	const { stateLayoutDerived } = getContextLayout();
	const count = $derived(stateLayoutDerived.layoutType() === 'landscape' ? 15 : 18);
	const options = $derived(
		[
			...stateConfig.betMenuOptions.slice(0, count - 1),
			...stateConfig.betMenuOptions.slice(-1),
		].filter((value, index, array) => array.indexOf(value) === index),
	);

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

<div class="bet-amount-list">
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
	.bet-amount-list {
		display: flex;
		flex-direction: column;
		gap: 0.45rem;
		width: 100%;
	}
</style>

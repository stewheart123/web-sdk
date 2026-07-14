<script lang="ts">
	import { OptionsGrid } from 'components-shared';
	import { getContextLayout } from 'utils-layout';
	import { stateBet, stateConfig } from 'state-shared';

	import BaseIcon from './BaseIcon.svelte';
	import BaseButtonContent from './BaseButtonContent.svelte';
	import { i18nDerived } from '../i18n/i18nDerived';

	const { stateLayoutDerived } = getContextLayout();
	const isMiniPlayer = $derived(stateLayoutDerived.isMiniPlayerViewport());
	const count = $derived(stateLayoutDerived.layoutType() === 'landscape' ? 15 : 18);
	const options = $derived(
		[
			...stateConfig.betMenuOptions.slice(0, count - 1),
			...stateConfig.betMenuOptions.slice(-1),
		].filter((value, index, array) => array.indexOf(value) === index),
	); //always includes last, and without duplicate

	const isMaxValue = (value: number) => value === options[options.length - 1];
	const formatValue = (value: number) => {
		if (Math.abs(value) > 999999) {
			return `${(Math.abs(value) / 1000000).toFixed(2)}M`;
		}
		if (Math.abs(value) > 999) {
			return `${(Math.abs(value) / 1000).toFixed(2)}K`;
		}
		return Math.abs(value).toFixed(2);
	};
</script>

<div class="bet-amount-grid" class:mini={isMiniPlayer}>
	<OptionsGrid
		value={stateBet.betAmount}
		{options}
		miniSize={isMiniPlayer}
		onchange={(value) => (stateBet.betAmount = value)}
	>
		{#snippet option({ option })}
			<BaseIcon
				width="100%"
				height="2rem"
				border={option === stateBet.betAmount ? '2px white solid' : '2px black solid'}
			/>
			<BaseButtonContent>
				<span class="option-label"
					>{isMaxValue(option) ? i18nDerived.max : formatValue(option)}</span
				>
			</BaseButtonContent>
		{/snippet}
	</OptionsGrid>
</div>

<style lang="scss">
	.bet-amount-grid :global(.rectangle) {
		height: 2rem;
	}

	.option-label {
		font-size: 1rem;
		line-height: 1;
		white-space: nowrap;
	}

	@media (max-width: 500px) and (min-height: 301px) {
		.bet-amount-grid :global(.rectangle) {
			height: 3rem;
		}

		.option-label {
			font-size: 1.125rem;
		}
	}

	.bet-amount-grid.mini {
		width: 100%;
	}

	.bet-amount-grid.mini :global(.rectangle) {
		height: calc(3rem * var(--mini-scale));
	}

	.bet-amount-grid.mini .option-label {
		font-size: calc(1.125rem * var(--mini-scale));
	}
</style>

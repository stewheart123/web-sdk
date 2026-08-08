<script lang="ts">
	import { zIndex } from 'constants-shared/zIndex';
	import { stateModal, stateMetaDerived } from 'state-shared';

	import HudPanel from './HudPanel.svelte';
	import BonusCards from './BonusCards.svelte';
	import BetMenuAmountToggle from './BetMenuAmountToggle.svelte';
	import { i18nDerived } from '../i18n/i18nDerived';

	const activateList = $derived(
		stateMetaDerived.betModeMetaList().filter((item) => item.type === 'activate'),
	);

	const buyList = $derived(
		stateMetaDerived.betModeMetaList().filter((item) => item.type === 'buy'),
	);
</script>

{#if stateModal.modal?.name === 'buyBonus'}
	<HudPanel
		title={i18nDerived.buyBonus}
		zIndex={zIndex.modal}
		onclose={() => (stateModal.modal = null)}
	>
		<div class="buy-bonus-body">
			{#if activateList.length > 0}
				<div class="card-stack">
					<BonusCards list={activateList} />
				</div>
			{/if}
			{#if buyList.length > 0}
				<div class="card-stack">
					<BonusCards list={buyList} />
				</div>
			{/if}
		</div>

		{#snippet footer()}
			<div class="bet-bar">
				<span class="bet-bar__label">{i18nDerived.bet}</span>
				<BetMenuAmountToggle />
			</div>
		{/snippet}
	</HudPanel>
{/if}

<style lang="scss">
	.buy-bonus-body {
		display: flex;
		flex-direction: column;
		gap: 0.75rem;
		width: 100%;
	}

	.card-stack {
		display: flex;
		flex-direction: column;
		gap: 0.65rem;
		width: 100%;
	}

	.bet-bar {
		display: flex;
		flex-direction: column;
		gap: 0.45rem;
		width: 100%;
	}

	.bet-bar__label {
		font-size: 0.7rem;
		font-weight: 700;
		letter-spacing: 0.1em;
		text-transform: uppercase;
		color: rgba(255, 255, 255, 0.55);
	}
</style>

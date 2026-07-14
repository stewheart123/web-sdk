<script lang="ts">
	import { Popup } from 'components-shared';
	import { zIndex } from 'constants-shared/zIndex';
	import { getContextLayout } from 'utils-layout';
	import { stateModal, stateMetaDerived } from 'state-shared';

	import BonusCards from './BonusCards.svelte';
	import BetMenuAmountToggle from './BetMenuAmountToggle.svelte';
	import BonusContentWrapLarge from './BonusContentWrapLarge.svelte';
	import BonusContentWrapPortrait from './BonusContentWrapPortrait.svelte';
	import BonusContentWrapLandscape from './BonusContentWrapLandscape.svelte';
	import BonusContentWrapMiniPlayer from './BonusContentWrapMiniPlayer.svelte';

	const { stateLayoutDerived } = getContextLayout();

	const activateList = $derived(
		stateMetaDerived.betModeMetaList().filter((item) => item.type === 'activate'),
	);

	const buyList = $derived(
		stateMetaDerived.betModeMetaList().filter((item) => item.type === 'buy'),
	);

	const isMiniPlayer = $derived(stateLayoutDerived.isMiniPlayerViewport());
	const maxListLength = $derived(Math.max(activateList.length, buyList.length));

	const COMPONENT_MAP = {
		desktop: BonusContentWrapLarge,
		tablet: BonusContentWrapLarge,
		portrait: BonusContentWrapPortrait,
		landscape: BonusContentWrapLandscape,
	} as const;

	const BonusContentWrap = $derived(COMPONENT_MAP[stateLayoutDerived.layoutType()]);
</script>

{#if stateModal.modal?.name === 'buyBonus'}
	<Popup zIndex={zIndex.modal} onclose={() => (stateModal.modal = null)}>
		<div class="buy-bonus-content scrollY scroll-mini">
			{#if isMiniPlayer}
				<BonusContentWrapMiniPlayer
					{maxListLength}
					showActivateRow={activateList.length > 0}
				>
					{#snippet betAmount()}
						<BetMenuAmountToggle />
					{/snippet}

					{#snippet bonusCardsActivate()}
						<BonusCards list={activateList} />
					{/snippet}

					{#snippet bonusCardsBuy()}
						<BonusCards list={buyList} />
					{/snippet}
				</BonusContentWrapMiniPlayer>
			{:else}
				<BonusContentWrap {maxListLength}>
					{#snippet betAmount()}
						<BetMenuAmountToggle />
					{/snippet}

					{#snippet bonusCardsActivate()}
						<BonusCards list={activateList} />
					{/snippet}

					{#snippet bonusCardsBuy()}
						<BonusCards list={buyList} />
					{/snippet}
				</BonusContentWrap>
			{/if}
		</div>
	</Popup>
{/if}

<style lang="scss">
	:global(.pop-up-wrap:has(.buy-bonus-content) .top-layer) {
		justify-content: center;
		align-items: center;
		padding: 3.25rem 0.5rem 0.5rem;
		box-sizing: border-box;
	}

	:global(.pop-up-wrap:has(.buy-bonus-content) .ui-popup-standard-content-wrap) {
		width: 100%;
		max-width: 100%;
		max-height: 100%;
		min-height: 0;
	}

	.buy-bonus-content {
		width: 100%;
		max-height: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		min-height: 0;
	}

	@media (max-width: 500px) and (min-height: 301px) {
		:global(.pop-up-wrap:has(.buy-bonus-content) .top-layer) {
			padding: 3rem 0.5rem 0.5rem;
		}
	}

	@media (max-width: 450px) and (max-height: 300px) {
		:global(.pop-up-wrap:has(.buy-bonus-content) .top-layer) {
			padding: 2rem 0.35rem 0.35rem;
		}
	}
</style>

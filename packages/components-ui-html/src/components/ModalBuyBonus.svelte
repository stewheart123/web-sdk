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
	</Popup>
{/if}

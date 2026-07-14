<script lang="ts">
	import { Button, Popup } from 'components-shared';
	import { zIndex } from 'constants-shared/zIndex';
	import { stateModal, stateUi } from 'state-shared';
	import { getContextLayout } from 'utils-layout';

	import BaseIcon from './BaseIcon.svelte';
	import BaseTitle from './BaseTitle.svelte';
	import BaseContent from './BaseContent.svelte';
	import BaseScrollable from './BaseScrollable.svelte';
	import BaseButtonWrap from './BaseButtonWrap.svelte';
	import BaseButtonContent from './BaseButtonContent.svelte';
	import BetMenuAmountToggle from './BetMenuAmountToggle.svelte';
	import BetMenuAmountGrid from './BetMenuAmountGrid.svelte';
	import { i18nDerived } from '../i18n/i18nDerived';

	const { stateLayoutDerived } = getContextLayout();
	const isMiniPlayer = $derived(stateLayoutDerived.isMiniPlayerViewport());

	const confirm = () => {
		stateModal.modal = null;
	};
</script>

{#if stateModal.modal?.name === 'betAmountMenu' && stateUi.config.mode !== 'replay'}
	<Popup zIndex={zIndex.modal} onclose={() => (stateModal.modal = null)}>
		<BaseContent maxWidth="100%">
			<div class="bet-menu-panel" class:mini={isMiniPlayer}>
				<BaseTitle>
					<span class="bet-menu-title">{i18nDerived.betMenu}</span>
				</BaseTitle>

				{#if isMiniPlayer}
					<div class="mini-fixed">
						<BetMenuAmountToggle />
					</div>
					<div class="bet-grid-scroll scrollY scroll-mini">
						<BetMenuAmountGrid />
					</div>
				{:else}
					<BaseScrollable type="column">
						<span class="bet-menu-subtitle">{i18nDerived.selectYourBet}</span>
						<BetMenuAmountToggle />
						<BetMenuAmountGrid />
					</BaseScrollable>
				{/if}

				<BaseButtonWrap type="full-width">
					<div class="confirm-wrap">
						<Button data-test="confirm-button" onclick={confirm}>
							<BaseIcon width="100%" height="3rem" />
							<BaseButtonContent>
								<span class="confirm-label">{i18nDerived.confirm}</span>
							</BaseButtonContent>
						</Button>
					</div>
				</BaseButtonWrap>
			</div>
		</BaseContent>
	</Popup>
{/if}

<style lang="scss">
	.bet-menu-panel {
		display: flex;
		flex-direction: column;
		align-items: center;
		width: 100%;
		gap: 1rem;
	}

	.bet-menu-panel.mini {
		--mini-scale: 0.6;
		height: 100dvh;
		max-height: 100%;
		width: 100%;
		align-items: stretch;
		gap: calc(0.5rem * var(--mini-scale));
		padding: 0.3rem 0.15rem 0.35rem;
		box-sizing: border-box;
	}

	:global(.pop-up-wrap:has(.bet-menu-panel.mini) .top-layer) {
		align-items: stretch;
		justify-content: stretch;
	}

	:global(.pop-up-wrap:has(.bet-menu-panel.mini) .ui-popup-standard-content-wrap) {
		width: 100%;
		max-width: 100%;
		align-items: stretch;
		flex: 1;
		min-height: 0;
	}

	.bet-menu-title {
		font-size: inherit;
		flex-shrink: 0;
	}

	.bet-menu-panel.mini .bet-menu-title {
		font-size: calc(1rem * var(--mini-scale));
	}

	.mini-fixed {
		flex-shrink: 0;
		width: 100%;
	}

	.bet-grid-scroll {
		flex: 1;
		min-height: 0;
		width: 100%;
	}

	.confirm-wrap {
		flex-shrink: 0;
		width: 100%;
	}

	.confirm-wrap :global(.rectangle) {
		height: 3rem;
	}

	.confirm-label {
		font-size: 1rem;
	}

	@media (max-width: 500px) and (min-height: 301px) {
		.confirm-wrap :global(.rectangle) {
			height: 3.5rem;
		}
	}

	.bet-menu-panel.mini .confirm-wrap :global(.rectangle) {
		height: calc(3.5rem * var(--mini-scale));
	}

	.bet-menu-panel.mini .confirm-label {
		font-size: calc(1rem * var(--mini-scale));
	}
</style>

<script lang="ts">
	import { zIndex } from 'constants-shared/zIndex';
	import { stateModal, stateUi } from 'state-shared';

	import HudPanel from './HudPanel.svelte';
	import HudPanelCta from './HudPanelCta.svelte';
	import BetMenuAmountGrid from './BetMenuAmountGrid.svelte';
	import { i18nDerived } from '../i18n/i18nDerived';

	const confirm = () => {
		stateModal.modal = null;
	};
</script>

{#if stateModal.modal?.name === 'betAmountMenu' && stateUi.config.mode !== 'replay'}
	<HudPanel
		title={i18nDerived.betMenu}
		zIndex={zIndex.modal}
		onclose={() => (stateModal.modal = null)}
	>
		<div class="bet-list">
			<BetMenuAmountGrid />
		</div>

		{#snippet footer()}
			<HudPanelCta onclick={confirm}>{i18nDerived.confirm}</HudPanelCta>
		{/snippet}
	</HudPanel>
{/if}

<style lang="scss">
	.bet-list {
		display: flex;
		flex-direction: column;
		gap: 0.45rem;
		width: 100%;
	}
</style>

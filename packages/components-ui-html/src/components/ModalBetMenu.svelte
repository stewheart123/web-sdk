<script lang="ts">
	import { zIndex } from 'constants-shared/zIndex';
	import { stateModal, stateUi } from 'state-shared';

	import HudPanel from './HudPanel.svelte';
	import BetMenuAmountGrid from './BetMenuAmountGrid.svelte';
	import { i18nDerived } from '../i18n/i18nDerived';
</script>

{#if stateModal.modal?.name === 'betAmountMenu' && stateUi.config.mode !== 'replay'}
	<HudPanel
		title={i18nDerived.betMenu}
		zIndex={zIndex.modal}
		onclose={() => (stateModal.modal = null)}
	>
		<div class="bet-menu">
			<BetMenuAmountGrid />
		</div>
	</HudPanel>
{/if}

<style lang="scss">
	.bet-menu {
		flex: 1 1 auto;
		display: flex;
		align-items: center;
		justify-content: center;
		width: 100%;
		min-height: 100%;
		box-sizing: border-box;
	}
</style>

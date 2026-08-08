<script lang="ts">
	import type { Snippet } from 'svelte';

	import { zIndex } from 'constants-shared/zIndex';
	import { stateModal, stateUi } from 'state-shared';

	import HudPanel from './HudPanel.svelte';
	import { i18nDerived } from '../i18n/i18nDerived';

	type Props = {
		payTable: Snippet;
		gameRules: Snippet;
		version: Snippet;
	};

	const props: Props = $props();

	const infoTitle = $derived(i18nDerived.info);
	const payTableTitle = $derived(i18nDerived.payTable);
	const gameRulesTitle = $derived(i18nDerived.gameRules);
</script>

{#if stateModal.modal?.name === 'gameInfo' && stateUi.config.mode !== 'replay'}
	<HudPanel title={infoTitle} zIndex={zIndex.modal} onclose={() => (stateModal.modal = null)}>
		<div class="info-panel">
			<div class="info-scroll scrollY scroll-micro">
				<section class="section">
					{#if payTableTitle}
						<h2 class="section-title">{payTableTitle}</h2>
					{/if}
					<div class="section-body">
						{@render props.payTable()}
					</div>
				</section>

				<section class="section">
					<h2 class="section-title">{gameRulesTitle}</h2>
					<div class="section-body">
						{@render props.gameRules()}
					</div>
				</section>
			</div>

			<footer class="info-footer">
				{@render props.version()}
			</footer>
		</div>
	</HudPanel>
{/if}

<style lang="scss">
	.info-panel {
		display: flex;
		flex-direction: column;
		box-sizing: border-box;
		width: 100%;
		height: 100%;
		min-height: 0;
		flex: 1 1 auto;
		overflow: hidden;
		text-align: left;
		color: rgba(255, 255, 255, 0.92);
	}

	.info-scroll {
		flex: 1 1 auto;
		min-height: 0;
	}

	.section {
		display: flex;
		flex-direction: column;
		gap: 0.75rem;
		padding-bottom: 1.25rem;
		margin-bottom: 1.25rem;
		border-bottom: 1px solid rgba(255, 255, 255, 0.08);

		&:last-child {
			padding-bottom: 0;
			margin-bottom: 0;
			border-bottom: none;
		}
	}

	.section-title {
		margin: 0;
		font-size: 1rem;
		font-weight: 700;
		letter-spacing: 0.06em;
		text-transform: uppercase;
		color: #fff;
		padding-bottom: 0.35rem;
		border-bottom: 2px solid rgba(255, 255, 255, 0.18);
	}

	.section-body {
		display: flex;
		flex-direction: column;
		gap: 0.75rem;
	}

	.info-footer {
		flex-shrink: 0;
		margin-top: 0.5rem;
		padding-top: 0.65rem;
		border-top: 1px solid rgba(255, 255, 255, 0.08);
		text-align: center;
		font-size: 0.75rem;
		color: rgba(255, 255, 255, 0.45);
	}
</style>

<script lang="ts">

	import type { Snippet } from 'svelte';



	import { Popup } from 'components-shared';

	import { zIndex } from 'constants-shared/zIndex';

	import { stateModal, stateUi } from 'state-shared';



	import BaseContent from './BaseContent.svelte';

	import BaseTitle from './BaseTitle.svelte';

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

	<Popup zIndex={zIndex.modal} onclose={() => (stateModal.modal = null)}>

		<BaseContent maxWidth="100%">

			<div class="info-panel">

				<BaseTitle>{infoTitle}</BaseTitle>



				<div class="info-scroll scrollY">

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

		</BaseContent>

	</Popup>

{/if}



<style lang="scss">

	.info-panel {

		display: flex;

		flex-direction: column;

		box-sizing: border-box;

		width: min(42rem, 92vw);

		max-height: min(85vh, 52rem);

		overflow: hidden;

		padding: 1.25rem 1.5rem 1rem;

		background: rgba(14, 14, 20, 0.94);

		border: 1px solid rgba(255, 255, 255, 0.12);

		border-radius: 0.75rem;

		box-shadow: 0 1rem 2.5rem rgba(0, 0, 0, 0.45);

		text-align: left;

		color: rgba(255, 255, 255, 0.92);

	}



	.info-scroll {

		flex: 1;

		min-height: 0;

		margin-top: 0.75rem;

		padding-right: 0.35rem;

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



	@media (orientation: portrait) {
		:global(.ui-popup-standard-content-wrap) {
			width: 100%;
			max-width: 100% !important;
			align-items: stretch;
		}

		.info-panel {
			width: 100%;
			max-width: 100%;
			max-height: 100dvh;
			border-radius: 0;
			border-left: none;
			border-right: none;
			padding: 0.85rem 0.65rem 0.75rem;
		}

		.info-scroll {
			padding-right: 0;
		}

		.section {
			padding-bottom: 1rem;
			margin-bottom: 1rem;
		}

		.section-body {
			width: 100%;
		}

		.section-title {
			font-size: 16px;
		}

		.info-footer {
			font-size: 12px;
		}
	}

	@media (max-width: 500px) and (orientation: landscape) {

		.info-panel {

			width: 96vw;

			max-height: 90vh;

			padding: 1rem 1rem 0.85rem;

		}



		.section-title {

			font-size: 16px;

		}



		.info-footer {

			font-size: 12px;

		}

	}



	@media (min-width: 501px) and (max-width: 1024px) {

		.info-panel {

			width: min(56rem, 96vw);

			max-height: min(90vh, 60rem);

		}

	}



	@media (min-aspect-ratio: 3/4) and (max-aspect-ratio: 5/4) and (min-width: 501px) {

		.info-panel {

			width: 96vw;

		}

	}

</style>


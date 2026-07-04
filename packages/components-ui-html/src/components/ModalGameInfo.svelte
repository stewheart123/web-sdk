<script lang="ts">
	import type { Snippet } from 'svelte';

	import { Popup } from 'components-shared';
	import { zIndex } from 'constants-shared/zIndex';
	import { stateModal } from 'state-shared';

	import BaseContent from './BaseContent.svelte';
	import BaseTitle from './BaseTitle.svelte';
	import { i18nDerived } from '../i18n/i18nDerived';

	type Props = {
		payTable: Snippet;
		gameRules: Snippet;
		version: Snippet;
	};

	const props: Props = $props();
</script>

{#if stateModal.modal?.name === 'gameInfo'}
	<Popup zIndex={zIndex.modal} onclose={() => (stateModal.modal = null)}>
		<BaseContent maxWidth="100%">
			<div class="info-panel">
				<BaseTitle>{i18nDerived.info()}</BaseTitle>

				<div class="info-scroll scrollY">
					<section class="section">
						<h2 class="section-title">{i18nDerived.payTable()}</h2>
						<div class="section-body">
							{@render props.payTable()}
						</div>
					</section>

					<section class="section">
						<h2 class="section-title">{i18nDerived.gameRules()}</h2>
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
</style>

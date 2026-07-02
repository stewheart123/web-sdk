<script lang="ts">
	import type { Snippet } from 'svelte';

	import { Popup } from 'components-shared';
	import { zIndex } from 'constants-shared/zIndex';
	import { stateModal } from 'state-shared';

	import BaseContent from './BaseContent.svelte';
	import BaseScrollable from './BaseScrollable.svelte';
	import BaseTitle from './BaseTitle.svelte';
	import { i18nDerived } from '../i18n/i18nDerived';

	type Props = {
		payTable: Snippet;
		gameRules: Snippet;
	};

	const props: Props = $props();
</script>

{#if stateModal.modal?.name === 'gameInfo'}
	<Popup zIndex={zIndex.modal} onclose={() => (stateModal.modal = null)}>
		<BaseContent maxWidth="100%">
			<BaseTitle>{i18nDerived.info()}</BaseTitle>
			<BaseScrollable type="column">
				<section class="section">
					<h2 class="section-title">{i18nDerived.payTable()}</h2>
					<div class="section-body">
						<span class="placeholder">ADD YOUR PAY TABLE</span>
						{@render props.payTable()}
					</div>
				</section>

				<section class="section">
					<h2 class="section-title">{i18nDerived.gameRules()}</h2>
					<div class="section-body">
						<span class="placeholder">ADD YOUR GAME RULES</span>
						{@render props.gameRules()}
					</div>
				</section>
			</BaseScrollable>
		</BaseContent>
	</Popup>
{/if}

<style lang="scss">
	.section {
		display: flex;
		flex-direction: column;
		gap: 0.75rem;
		margin-bottom: 1.5rem;
	}

	.section-title {
		margin: 0;
		font-size: 1.1rem;
		font-weight: 600;
		text-transform: uppercase;
	}

	.section-body {
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
	}

	.placeholder {
		opacity: 0.6;
		font-size: 0.9rem;
	}
</style>

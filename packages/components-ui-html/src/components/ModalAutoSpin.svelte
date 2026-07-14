<script lang="ts">
	import { Popup } from 'components-shared';
	import { zIndex } from 'constants-shared/zIndex';
	import { stateModal } from 'state-shared';
	import { scrollIntoView } from 'utils-shared/scroll';

	import BaseContent from './BaseContent.svelte';
	import BaseTitle from './BaseTitle.svelte';
	import BaseScrollable from './BaseScrollable.svelte';
	import BaseButtonWrap from './BaseButtonWrap.svelte';
	import AutoSpinsOptions from './AutoSpinsOptions.svelte';
	import AutoSpinsAdvanced from './AutoSpinsAdvanced.svelte';
	import AutoSpinsStartButton from './AutoSpinsStartButton.svelte';
	import { i18nDerived } from '../i18n/i18nDerived';
</script>

{#if stateModal.modal?.name === 'autoSpin'}
	<Popup zIndex={zIndex.modal} onclose={() => (stateModal.modal = null)}>
		<BaseContent maxWidth="100%">
			<div class="auto-spin-panel">
				<BaseTitle>
					{i18nDerived.autoSpins}
				</BaseTitle>
				<div class="auto-spin-scroll">
					<BaseScrollable type="column">
						{#snippet children({ element })}
							<div class="subtitle" data-test="number-of-rounds">{i18nDerived.numberOfRounds}</div>
							<AutoSpinsOptions />
							<AutoSpinsAdvanced
								ontoggle={(duration) => {
									if (element) {
										scrollIntoView({ element, duration });
									}
								}}
							/>
						{/snippet}
					</BaseScrollable>
				</div>
				<BaseButtonWrap type="full-width">
					<AutoSpinsStartButton />
				</BaseButtonWrap>
			</div>
		</BaseContent>
	</Popup>
{/if}

<style lang="scss">
	.auto-spin-panel {
		display: flex;
		flex-direction: column;
		align-items: center;
		width: fit-content;
		max-width: 100%;
		max-height: min(90dvh, 100%);
		margin: 0 auto;
		box-sizing: border-box;
	}

	.auto-spin-scroll {
		width: 100%;
		flex: 1 1 auto;
		min-height: 0;
		overflow: hidden;

		:global(.content.column) {
			width: 100%;
			max-width: 100%;
			align-items: center;
		}
	}
</style>

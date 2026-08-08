<script lang="ts">
	import { Button, Popup } from 'components-shared';
	import { zIndex } from 'constants-shared/zIndex';
	import { stateBet, stateModal, stateUi, INFINITY_MARK } from 'state-shared';
	import { getContextEventEmitter } from 'utils-event-emitter';

	import BaseIcon from './BaseIcon.svelte';
	import BaseTitle from './BaseTitle.svelte';
	import BaseContent from './BaseContent.svelte';
	import BaseScrollable from './BaseScrollable.svelte';
	import BaseButtonWrap from './BaseButtonWrap.svelte';
	import BaseButtonContent from './BaseButtonContent.svelte';
	import { stateBonus, stateBonusDerived } from '../stateBonus.svelte';
	import { i18nDerived } from '../i18n/i18nDerived';
	import type { EmitterEventModal } from '../types';

	const { eventEmitter } = getContextEventEmitter<EmitterEventModal>();

	const confirm = () => {
		stateBet.activeBetModeKey = stateBonus.selectedBetModeKey;

		if (stateBonusDerived.selectedBetModeData().type === 'buy') {
			eventEmitter.broadcast({ type: 'bet' });
		}

		if (stateBonusDerived.selectedBetModeData().type === 'activate') {
			stateUi.autoSpinsLossLimitText = INFINITY_MARK;
			stateUi.autoSpinsSingleWinLimitText = INFINITY_MARK;
		}
	};
</script>

{#if stateModal.modal?.name === 'buyBonusConfirm'}
	<Popup zIndex={zIndex.dialog} onclose={() => (stateModal.modal = { name: 'buyBonus' })}>
		<BaseContent maxWidth="500px">
			<BaseTitle>
				{stateBonusDerived.selectedBetModeData().text.title}
			</BaseTitle>
			<BaseScrollable type="column">
				{#if stateBonusDerived.selectedBetModeData().assets.dialogImage}
					<img
						class="confirm-image"
						src={stateBonusDerived.selectedBetModeData().assets.dialogImage}
						alt=""
					/>
				{/if}
				{stateBonusDerived.selectedBetModeData().text.dialog}
			</BaseScrollable>
			<BaseButtonWrap type="max-width">
				<div class="confirm-wrap">
					<Button
						data-test="confirm-button"
						onclick={() => {
							confirm();
							eventEmitter.broadcast({ type: 'soundPressGeneral' });
							stateModal.modal = null;
						}}
					>
						<BaseIcon width="100%" height="3rem" />
						<BaseButtonContent>
							<span class="confirm-label">{i18nDerived.confirm}</span>
						</BaseButtonContent>
					</Button>
				</div>
			</BaseButtonWrap>
		</BaseContent>
	</Popup>
{/if}

<style lang="scss">
	.confirm-wrap :global(.rectangle) {
		height: 3rem;
	}

	.confirm-label {
		font-size: 1rem;
	}

	.confirm-image {
		display: block;
		width: 100%;
		max-width: 22rem;
		height: auto;
		margin: 0 auto 0.75rem;
		border-radius: 0.5rem;
		object-fit: contain;
		background: #000;
	}

	@media (max-width: 500px) {
		.confirm-wrap :global(.rectangle) {
			height: 3.5rem;
		}
	}
</style>

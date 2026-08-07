<script lang="ts">
	import { stateBetDerived, stateModal, stateI18n, stateUrlDerived } from 'state-shared';
	import { formatLabelWithCurrency, numberToAmountString } from 'utils-shared/amount';
	import { getContextEventEmitter } from 'utils-event-emitter';
	import { getContextXstate } from 'utils-xstate';

	import { isBettingControlsLocked } from '../../bettingControlsLocked';
	import { i18nDerived } from '../../i18n/i18nDerived';
	import type { EmitterEventHud } from '../../types';
	import HudLabel from './HudLabel.svelte';

	const { eventEmitter } = getContextEventEmitter<EmitterEventHud>();
	const { stateXstateDerived } = getContextXstate();

	const label = $derived.by(() => {
		stateI18n.locale;
		void stateUrlDerived.social();
		const baseLabel = stateBetDerived.activeBetMode()?.text.betAmountLabel || i18nDerived.bet;
		return formatLabelWithCurrency(baseLabel);
	});
	const value = $derived(numberToAmountString(stateBetDerived.betCost()));
	const disabled = $derived(isBettingControlsLocked(stateXstateDerived.isIdle));

	const onpress = () => {
		if (disabled) return;
		eventEmitter.broadcast({ type: 'soundPressGeneral' });
		stateModal.modal = { name: 'betAmountMenu' };
	};
</script>

<HudLabel {label} {value} bordered {disabled} onclick={onpress} />

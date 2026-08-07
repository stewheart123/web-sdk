<script lang="ts">
	import { stateModal, stateBet, stateBetDerived } from 'state-shared';
	import { getContextEventEmitter } from 'utils-event-emitter';
	import { getContextXstate } from 'utils-xstate';

	import { isBettingControlsLocked } from '../../bettingControlsLocked';
	import { i18nDerived } from '../../i18n/i18nDerived';
	import type { EmitterEventHud } from '../../types';
	import HudButton from './HudButton.svelte';

	const { eventEmitter } = getContextEventEmitter<EmitterEventHud>();
	const { stateXstateDerived } = getContextXstate();

	const disabled = $derived(isBettingControlsLocked(stateXstateDerived.isIdle));
	const active = $derived(stateBetDerived.activeBetMode()?.type === 'activate');
	const label = $derived(active ? i18nDerived.disable : i18nDerived.buyBonus);

	const onpress = () => {
		eventEmitter.broadcast({ type: 'soundPressGeneral' });

		if (active) {
			stateBet.activeBetModeKey = 'BASE';
		} else {
			stateModal.modal = { name: 'buyBonus' };
		}
	};
</script>

<HudButton
	ariaLabel={label}
	variant="buy"
	size="md"
	{disabled}
	{active}
	onclick={onpress}
>
	<span>{label}</span>
</HudButton>

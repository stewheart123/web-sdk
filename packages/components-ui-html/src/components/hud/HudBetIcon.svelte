<script lang="ts">
	import { stateModal } from 'state-shared';
	import { getContextEventEmitter } from 'utils-event-emitter';
	import { getContextXstate } from 'utils-xstate';

	import { isBettingControlsLocked } from '../../bettingControlsLocked';
	import { i18nDerived } from '../../i18n/i18nDerived';
	import type { EmitterEventHud } from '../../types';
	import HudButton from './HudButton.svelte';
	import HudIcon from './HudIcon.svelte';

	const { eventEmitter } = getContextEventEmitter<EmitterEventHud>();
	const { stateXstateDerived } = getContextXstate();
	const disabled = $derived(isBettingControlsLocked(stateXstateDerived.isIdle));

	const onpress = () => {
		if (disabled) return;
		eventEmitter.broadcast({ type: 'soundPressGeneral' });
		stateModal.modal = { name: 'betAmountMenu' };
	};
</script>

<HudButton ariaLabel={i18nDerived.bet} variant="icon" size="sm" {disabled} onclick={onpress}>
	<HudIcon name="bet" />
</HudButton>

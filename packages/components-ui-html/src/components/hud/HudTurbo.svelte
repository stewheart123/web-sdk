<script lang="ts">
	import { stateBet, stateBetDerived } from 'state-shared';
	import { getContextEventEmitter } from 'utils-event-emitter';
	import { getContextXstate } from 'utils-xstate';

	import { isBettingControlsLocked } from '../../bettingControlsLocked';
	import { i18nDerived } from '../../i18n/i18nDerived';
	import type { EmitterEventHud } from '../../types';
	import HudButton from './HudButton.svelte';
	import HudIcon from './HudIcon.svelte';

	const { eventEmitter } = getContextEventEmitter<EmitterEventHud>();
	const { stateXstateDerived } = getContextXstate();

	const active = $derived(stateBet.isTurbo);
	const controlsLocked = $derived(isBettingControlsLocked(stateXstateDerived.isIdle));
	const disabled = $derived(stateBet.isSpaceHold || controlsLocked);

	const onpress = () => {
		eventEmitter.broadcast({ type: 'soundPressGeneral' });
		stateBetDerived.updateIsTurbo(!stateBet.isTurbo, { persistent: true });
	};

	eventEmitter.subscribeOnMount({
		stopButtonClick: () => stateBetDerived.updateIsTurbo(true, { persistent: false }),
		stopButtonEnable: () => stateBetDerived.updateIsTurbo(false, { persistent: false }),
	});
</script>

<HudButton
	ariaLabel={i18nDerived.turbo}
	variant="icon"
	size="sm"
	{active}
	{disabled}
	onclick={onpress}
>
	<HudIcon name="turbo" />
</HudButton>

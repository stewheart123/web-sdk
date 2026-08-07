<script lang="ts">
	import { OnHotkey } from 'components-shared';
	import { stateBet, stateBetDerived } from 'state-shared';
	import { getContextEventEmitter } from 'utils-event-emitter';
	import { getContextXstate } from 'utils-xstate';

	import { canCancelAutoplay, isBettingControlsLocked } from '../../bettingControlsLocked';
	import { i18nDerived } from '../../i18n/i18nDerived';
	import type { EmitterEventHud } from '../../types';
	import HudButton from './HudButton.svelte';

	const { eventEmitter } = getContextEventEmitter<EmitterEventHud>();
	const { stateXstateDerived } = getContextXstate();

	let stopDisabled = $state(false);
	const controlsLocked = $derived(isBettingControlsLocked(stateXstateDerived.isIdle));
	const disabled = $derived(
		(controlsLocked && !canCancelAutoplay()) ||
			(!stateBetDerived.isBetCostAvailable() && !canCancelAutoplay()),
	);

	const isSpin = $derived(stateXstateDerived.isIdle);
	const label = $derived(isSpin ? i18nDerived.bet : i18nDerived.stop);

	const bet = () => {
		if (stateBetDerived.activeBetMode()?.type === 'buy') stateBet.activeBetModeKey = 'BASE';
		eventEmitter.broadcast({ type: 'bet' });
	};

	const stop = () => {
		if (!stopDisabled) {
			if (stateBetDerived.hasAutoBetCounter()) {
				stateBet.autoSpinsCounter = 0;
				return;
			}
			eventEmitter.broadcast({ type: 'stopButtonClick' });
		}
	};

	const onpress = () => {
		if (controlsLocked && !canCancelAutoplay()) return;

		eventEmitter.broadcast({ type: 'soundPressBet' });

		if (stateXstateDerived.isIdle) {
			bet();
		} else {
			stop();
		}
	};

	eventEmitter.subscribeOnMount({
		stopButtonClick: () => (stopDisabled = true),
		stopButtonEnable: () => (stopDisabled = false),
	});
</script>

<OnHotkey hotkey="Space" {disabled} onpress={onpress} />
<HudButton
	ariaLabel={label}
	variant="spin"
	size="lg"
	{disabled}
	onclick={onpress}
>
	<span>{label}</span>
</HudButton>

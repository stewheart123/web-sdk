<script lang="ts">
	import { stateBet, stateBetDerived, stateModal } from 'state-shared';
	import { getContextEventEmitter } from 'utils-event-emitter';
	import { getContextXstate } from 'utils-xstate';

	import { canCancelAutoplay, isBettingControlsLocked } from '../../bettingControlsLocked';
	import { i18nDerived } from '../../i18n/i18nDerived';
	import type { EmitterEventHud } from '../../types';
	import HudButton from './HudButton.svelte';

	const { eventEmitter } = getContextEventEmitter<EmitterEventHud>();
	const { stateXstateDerived } = getContextXstate();

	const active = $derived(stateBetDerived.hasAutoBetCounter());
	const controlsLocked = $derived(isBettingControlsLocked(stateXstateDerived.isIdle));
	const disabled = $derived.by(() => {
		if (canCancelAutoplay()) return false;
		if (stateBet.isSpaceHold) return true;
		if (controlsLocked) return true;
		if (!stateBetDerived.isBetCostAvailable()) return true;
		return false;
	});
	const counterText = $derived(
		stateBet.autoSpinsCounter === Infinity ? '∞' : String(stateBet.autoSpinsCounter),
	);

	const onpress = () => {
		eventEmitter.broadcast({ type: 'soundPressGeneral' });
		if (stateBetDerived.hasAutoBetCounter()) {
			stateBet.autoSpinsCounter = 0;
		} else {
			stateModal.modal = { name: 'autoSpin' };
		}
	};
</script>

<HudButton
	ariaLabel={i18nDerived.autoSpin}
	variant="circle"
	size="sm"
	{active}
	{disabled}
	onclick={onpress}
>
	{#if stateBet.autoSpinsCounter > 0}
		<span class="hud-auto__counter">{counterText}</span>
	{:else}
		<span>A</span>
	{/if}
</HudButton>

<style lang="scss">
	.hud-auto__counter {
		font-size: 0.85rem;
		font-weight: 800;
	}
</style>

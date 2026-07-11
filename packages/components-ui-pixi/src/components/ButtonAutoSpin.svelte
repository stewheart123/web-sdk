<script lang="ts">
	import { Container } from 'pixi-svelte';
	import type { ButtonProps } from 'components-pixi';
	import { stateBet, stateBetDerived, stateModal } from 'state-shared';

	import UiCircularButton from './UiCircularButton.svelte';
	import { getContext } from '../context';
	import { canCancelAutoplay, isBettingControlsLocked } from '../bettingControlsLocked';
	import { UI_BASE_SIZE } from '../constants';
	import ButtonBetAutoSpinsCounter from './ButtonBetAutoSpinsCounter.svelte';

	const props: Partial<Omit<ButtonProps, 'children'>> = $props();
	const context = getContext();
	const sizes = { width: UI_BASE_SIZE, height: UI_BASE_SIZE };
	const active = $derived(stateBetDerived.hasAutoBetCounter());
	const controlsLocked = $derived(isBettingControlsLocked(context.stateXstateDerived.isIdle));
	const disabled = $derived.by(() => {
		if (canCancelAutoplay()) return false;
		if (stateBet.isSpaceHold) return true;
		if (controlsLocked) return true;
		if (!stateBetDerived.isBetCostAvailable()) return true;
		return false;
	});

	const stopAutoSpin = () => (stateBet.autoSpinsCounter = 0);
	const openModal = () => (stateModal.modal = { name: 'autoSpin' });
	const onpress = () => {
		context.eventEmitter.broadcast({ type: 'soundPressGeneral' });
		stateBetDerived.hasAutoBetCounter() ? stopAutoSpin() : openModal();
	};
</script>

<UiCircularButton
	{...props}
	skin="autoplay"
	{sizes}
	{active}
	{onpress}
	{disabled}
	fallbackIcon="autoSpin"
>
	<Container x={sizes.width * 0.5} y={sizes.height * 0.5}>
		<ButtonBetAutoSpinsCounter />
	</Container>
</UiCircularButton>

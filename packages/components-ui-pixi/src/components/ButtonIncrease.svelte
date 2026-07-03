<script lang="ts">
	import type { ButtonProps } from 'components-pixi';

	import UiButton from './UiButton.svelte';
	import { getContext } from '../context';
	import { stateBetDerived } from 'state-shared';
	import { UI_BET_STEPPER_SIZE } from '../uiLayoutConfig';

	const props: Partial<Omit<ButtonProps, 'children'>> = $props();
	const context = getContext();
	const sizes = { width: UI_BET_STEPPER_SIZE, height: UI_BET_STEPPER_SIZE };
	const disabled = $derived(
		!context.stateXstateDerived.isIdle() || !stateBetDerived.canStepBetAmount(1),
	);

	const onpress = () => {
		context.eventEmitter.broadcast({ type: 'soundPressGeneral' });
		stateBetDerived.stepBetAmountOption(1);
	};
</script>

<UiButton {...props} {sizes} {onpress} {disabled} icon="increase" />

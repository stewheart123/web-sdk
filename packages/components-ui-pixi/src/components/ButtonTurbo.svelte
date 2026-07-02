<script lang="ts">
	import type { ButtonProps } from 'components-pixi';
	import { stateBet, stateBetDerived } from 'state-shared';

	import UiMenuButton from './UiMenuButton.svelte';
	import { UI_MENU_BUTTON_SIZE } from '../uiLayoutConfig';
	import { getContext } from '../context';
	import { i18nDerived } from '../i18n/i18nDerived';

	const props: Partial<Omit<ButtonProps, 'children'>> = $props();
	const context = getContext();
	const sizes = { width: UI_MENU_BUTTON_SIZE, height: UI_MENU_BUTTON_SIZE };
	const active = $derived(stateBet.isTurbo);
	const disabled = $derived(stateBet.isSpaceHold);

	const onpress = () => {
		context.eventEmitter.broadcast({ type: 'soundPressGeneral' });
		stateBetDerived.updateIsTurbo(!stateBet.isTurbo, { persistent: true });
	};

	context.eventEmitter.subscribeOnMount({
		stopButtonClick: () => stateBetDerived.updateIsTurbo(true, { persistent: false }),
		stopButtonEnable: () => stateBetDerived.updateIsTurbo(false, { persistent: false }),
	});
</script>

<UiMenuButton
	{...props}
	{sizes}
	{active}
	{onpress}
	{disabled}
	label={i18nDerived.turbo()}
	variant="light"
/>

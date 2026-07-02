<script lang="ts">
	import type { ButtonProps } from 'components-pixi';
	import { stateModal, stateUi } from 'state-shared';

	import UiMenuButton from './UiMenuButton.svelte';
	import { getContext } from '../context';
	import { UI_MENU_BUTTON_SIZE } from '../uiLayoutConfig';
	import { i18nDerived } from '../i18n/i18nDerived';

	const props: Partial<Omit<ButtonProps, 'children'>> = $props();
	const context = getContext();
	const sizes = { width: UI_MENU_BUTTON_SIZE, height: UI_MENU_BUTTON_SIZE };

	const onpress = () => {
		context.eventEmitter.broadcast({ type: 'soundPressGeneral' });
		stateUi.menuOpen = false;
		stateModal.modal = { name: 'gameInfo' };
	};
</script>

<UiMenuButton
	{...props}
	{sizes}
	{onpress}
	label={i18nDerived.info()}
	variant="light"
/>

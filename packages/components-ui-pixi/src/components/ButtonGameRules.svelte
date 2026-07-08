<script lang="ts">
	import type { ButtonProps } from 'components-pixi';
	import { stateModal, stateUi } from 'state-shared';

	import UiMenuButton from './UiMenuButton.svelte';
	import { getContext } from '../context';
	import { UI_MENU_TOGGLE_SIZES } from '../uiLayoutConfig';
	import { UI_BESPOKE_ICON_KEYS } from '../uiButtonSkins';
	import { i18nDerived } from '../i18n/i18nDerived';

	const props: Partial<Omit<ButtonProps, 'children'>> = $props();
	const context = getContext();

	const onpress = () => {
		context.eventEmitter.broadcast({ type: 'soundPressGeneral' });
		stateUi.menuOpen = false;
		stateModal.modal = { name: 'gameInfo' };
	};
</script>

<UiMenuButton
	{...props}
	sizes={UI_MENU_TOGGLE_SIZES}
	{onpress}
	label={i18nDerived.info()}
	iconKey={UI_BESPOKE_ICON_KEYS.info}
	iconTint={0xffffff}
	variant="light"
/>

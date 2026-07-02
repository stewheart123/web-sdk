<script lang="ts">
	import type { ButtonProps } from 'components-pixi';
	import { stateSound } from 'state-shared';

	import UiMenuButton from './UiMenuButton.svelte';
	import { getContext } from '../context';
	import { UI_MENU_BUTTON_SIZE } from '../uiLayoutConfig';
	import { i18nDerived } from '../i18n/i18nDerived';

	const props: Partial<Omit<ButtonProps, 'children'>> = $props();
	const context = getContext();
	const sizes = { width: UI_MENU_BUTTON_SIZE, height: UI_MENU_BUTTON_SIZE };
	const active = $derived(stateSound.volumeValueMusic > 0);

	const onpress = () => {
		context.eventEmitter.broadcast({ type: 'soundPressGeneral' });

		if (stateSound.volumeValueMusic === 0) {
			stateSound.volumeValueMusic = 50;
		} else {
			stateSound.volumeValueMusic = 0;
		}
	};
</script>

<UiMenuButton
	{...props}
	{sizes}
	{onpress}
	{active}
	label={i18nDerived.music()}
	variant="light"
/>

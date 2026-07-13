<script lang="ts">
	import type { ButtonProps } from 'components-pixi';
	import { stateUi } from 'state-shared';
	import { getContextLayout } from 'utils-layout';

	import UiButton from './UiButton.svelte';
	import { getContext } from '../context';
	import { getUiBarButtonSize, type UiLayoutType } from '../uiLayoutConfig';
	import { UI_BESPOKE_ICON_KEYS } from '../uiButtonSkins';

	const props: Partial<Omit<ButtonProps, 'children'>> = $props();
	const context = getContext();
	const { stateLayoutDerived } = getContextLayout();
	const layoutType = $derived(stateLayoutDerived.layoutType() as UiLayoutType);
	const sizes = $derived(getUiBarButtonSize(layoutType));

	const onpress = () => {
		context.eventEmitter.broadcast({ type: 'soundPressGeneral' });
		stateUi.menuOpen = true;
	};
</script>

<UiButton {...props} {sizes} {onpress} icon="menu" iconKey={UI_BESPOKE_ICON_KEYS.menu} />

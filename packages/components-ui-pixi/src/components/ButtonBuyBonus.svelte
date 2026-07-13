<script lang="ts">
	import type { ButtonProps } from 'components-pixi';
	import { stateModal, stateBet, stateBetDerived } from 'state-shared';
	import { getContextLayout } from 'utils-layout';

	import UiCircularButton from './UiCircularButton.svelte';
	import { getContext } from '../context';
	import { isBettingControlsLocked } from '../bettingControlsLocked';
	import { getUiBarButtonSize, type UiLayoutType } from '../uiLayoutConfig';
	import { i18nDerived } from '../i18n/i18nDerived';

	const props: Partial<Omit<ButtonProps, 'children'>> = $props();
	const context = getContext();
	const { stateLayoutDerived } = getContextLayout();
	const layoutType = $derived(stateLayoutDerived.layoutType() as UiLayoutType);
	const sizes = $derived(getUiBarButtonSize(layoutType));
	const disabled = $derived(isBettingControlsLocked(context.stateXstateDerived.isIdle));
	const active = $derived(stateBetDerived.activeBetMode()?.type === 'activate');

	const openModal = () => (stateModal.modal = { name: 'buyBonus' });
	const disableActiveBetMode = () => (stateBet.activeBetModeKey = 'BASE');
	const onpress = () => {
		context.eventEmitter.broadcast({ type: 'soundPressGeneral' });

		if (active) {
			disableActiveBetMode();
		} else {
			openModal();
		}
	};
</script>

<UiCircularButton
	{...props}
	skin="bonus_buy"
	{sizes}
	{disabled}
	{onpress}
	{active}
	fallbackVariant="buyBonus"
	fallbackText={active ? i18nDerived.disable : i18nDerived.buyBonus}
/>

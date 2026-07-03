<script lang="ts">
	import { Text } from 'pixi-svelte';
	import { Button, type ButtonProps } from 'components-pixi';
	import { stateModal, stateBet, stateBetDerived } from 'state-shared';

	import UiSprite from './UiSprite.svelte';
	import { UI_BASE_FONT_SIZE, UI_BASE_SIZE } from '../constants';
	import { getUiFontScale, getUiFontWeight, type UiLayoutType } from '../uiLayoutConfig';
	import { getContext } from '../context';
	import { isBettingControlsLocked } from '../bettingControlsLocked';
	import { i18nDerived } from '../i18n/i18nDerived';

	const props: Partial<Omit<ButtonProps, 'children'>> = $props();
	const context = getContext();
	const sizes = { width: UI_BASE_SIZE, height: UI_BASE_SIZE };
	const disabled = $derived(isBettingControlsLocked(context.stateXstateDerived.isIdle));
	const active = $derived(stateBetDerived.activeBetMode()?.type === 'activate');
	const layoutType = $derived(context.stateLayoutDerived.layoutType() as UiLayoutType);
	const fontSize = $derived(
		UI_BASE_FONT_SIZE * 0.9 * getUiFontScale(layoutType),
	);
	const fontWeight = $derived(getUiFontWeight(layoutType));

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

	const getState = (value: {
		active: boolean;
		disabled: boolean;
		hovered: boolean;
		pressed: boolean;
	}) => {
		if (value.disabled) return 'disabled' as const;
		if (value.pressed) return 'pressed' as const;
		if (value.hovered) return 'hovered' as const;
		if (value.active) return 'active' as const;
		return 'default' as const;
	};
</script>

<Button {...props} {sizes} {disabled} {onpress}>
	{#snippet children({ center, hovered, pressed })}
		{@const state = getState({
			active,
			disabled,
			hovered,
			pressed,
		})}

		<UiSprite
			key="buyBonus"
			{...center}
			anchor={0.5}
			width={sizes.width}
			height={sizes.height}
			variant="buyBonus"
			{...disabled
				? {
						backgroundColor: 0xaaaaaa,
					}
				: {}}
			{...active
				? {
						borderWidth: 10,
						borderColor: 0xffffff,
					}
				: {}}
		/>

		<Text
			{...center}
			anchor={0.5}
			text={state === 'active' ? i18nDerived.disable() : i18nDerived.buyBonus()}
			style={{
				align: 'center',
				wordWrap: true,
				wordWrapWidth: 200,
				fontFamily: 'proxima-nova',
				fontWeight,
				fontSize,
				fill: 0xffffff,
			}}
		/>
	{/snippet}
</Button>

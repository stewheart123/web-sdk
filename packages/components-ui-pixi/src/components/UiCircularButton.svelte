<script lang="ts">
	import * as PIXI from 'pixi.js';
	import { Text, Sprite } from 'pixi-svelte';
	import { Button, type ButtonProps } from 'components-pixi';
	import type { Snippet } from 'svelte';

	import UiSprite from './UiSprite.svelte';
	import type { ButtonIcon } from '../types';
	import { getContext } from '../context';
	import { UI_BASE_FONT_SIZE, UI_BASE_SIZE, UI_COLORS } from '../constants';
	import { getUiFontScale, getUiFontWeight, type UiLayoutType } from '../uiLayoutConfig';
	import {
		getUiButtonSkinActiveFrame,
		getUiButtonSkinFrame,
		getUiButtonSkinRotation,
		type UiCircularButtonSkin,
	} from '../uiButtonSkins';
	import { i18nDerived } from '../i18n/i18nDerived';

	type Props = Partial<Omit<ButtonProps, 'children' | 'onpress' | 'sizes'>> & {
		skin: UiCircularButtonSkin;
		sizes: { width: number; height: number };
		onpress: () => void;
		active?: boolean;
		disabled?: boolean;
		fallbackIcon?: ButtonIcon;
		fallbackText?: string;
		fallbackVariant?: 'button' | 'buyBonus';
		children?: Snippet;
	};

	const {
		skin,
		sizes,
		onpress,
		active = false,
		disabled = false,
		fallbackIcon,
		fallbackText,
		fallbackVariant = 'button',
		children: childrenFromParent,
		...buttonProps
	}: Props = $props();

	const context = getContext();
	const layoutType = $derived(context.stateLayoutDerived.layoutType() as UiLayoutType);
	const fontScale = $derived(getUiFontScale(layoutType));
	const fontWeight = $derived(getUiFontWeight(layoutType));
	const fontSize = $derived(UI_BASE_FONT_SIZE * 0.9 * fontScale);
	const isCompact = $derived(sizes.width < UI_BASE_SIZE * 0.75);
	const wordWrapWidth = $derived(isCompact ? sizes.width : 200);

	const hasSkin = $derived.by(() => {
		const frameKey = getUiButtonSkinActiveFrame(skin);
		const texture = context.stateApp.loadedAssets?.[frameKey];
		return texture != null && texture !== PIXI.Texture.EMPTY;
	});
</script>

<Button {...buttonProps} {sizes} {disabled} {onpress} hitShape="circle">
	{#snippet children({ center, hovered, pressed })}
		{@const frameKey = getUiButtonSkinFrame(skin, {
			hovered,
			pressed,
			active,
			disabled,
		})}
		{@const alpha = disabled ? 0.5 : 1}
		{@const rotation = getUiButtonSkinRotation(frameKey)}

		{#if hasSkin}
			<Sprite
				key={frameKey}
				{...center}
				anchor={0.5}
				width={sizes.width}
				height={sizes.height}
				{alpha}
				{rotation}
			/>
		{:else if fallbackIcon}
			<UiSprite
				{...center}
				anchor={0.5}
				width={sizes.width}
				height={sizes.height}
				variant="button"
				{...disabled
					? {
							backgroundColor: UI_COLORS.disabled,
							backgroundAlpha: UI_COLORS.disabledAlpha,
						}
					: {}}
				{...active
					? {
							borderWidth: isCompact ? 4 : 10,
							borderColor: 0xffffff,
						}
					: {}}
			/>
			<Text
				{...center}
				anchor={0.5}
				text={i18nDerived[fallbackIcon]}
				style={{
					align: 'center',
					wordWrap: true,
					wordWrapWidth,
					fontFamily: 'Noto Sans KR',
					fontWeight,
					fontSize,
					fill: 0xffffff,
				}}
			/>
		{:else}
			<UiSprite
				{...center}
				anchor={0.5}
				width={sizes.width}
				height={sizes.height}
				variant={fallbackVariant}
				{...disabled
					? {
							backgroundColor: UI_COLORS.disabled,
							backgroundAlpha: UI_COLORS.disabledAlpha,
						}
					: {}}
				{...active
					? {
							borderWidth: 10,
							borderColor: 0xffffff,
						}
					: {}}
			/>
			{#if fallbackText}
				<Text
					{...center}
					anchor={0.5}
					text={fallbackText}
					style={{
						align: 'center',
						wordWrap: true,
						wordWrapWidth: 200,
						fontFamily: 'Noto Sans KR',
						fontWeight,
						fontSize,
						fill: 0xffffff,
					}}
				/>
			{/if}
		{/if}

		{@render childrenFromParent?.()}
	{/snippet}
</Button>

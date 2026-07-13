<script lang="ts">
	import * as PIXI from 'pixi.js';
	import { Text, Sprite } from 'pixi-svelte';
	import { Button, type ButtonProps } from 'components-pixi';

	import UiSprite from './UiSprite.svelte';
	import type { ButtonIcon } from '../types';
	import type { Snippet } from 'svelte';
	import { getContextLayout } from 'utils-layout';

	import { getContext } from '../context';
	import { i18nDerived } from '../i18n/i18nDerived';
	import { UI_BASE_FONT_SIZE, UI_BASE_SIZE, UI_COLORS } from '../constants';
	import { getUiFontScale, getUiFontWeight, type UiLayoutType } from '../uiLayoutConfig';

	const { stateLayoutDerived } = getContextLayout();
	const context = getContext();

	type Props = Omit<ButtonProps, 'children'> & {
		icon: ButtonIcon;
		sizes: { width: number; height: number };
		iconFontSize?: number;
		iconKey?: string;
		active?: boolean;
		children?: Snippet;
		variant?: 'dark' | 'light';
	};

	const {
		icon,
		active,
		variant = 'dark',
		iconFontSize,
		iconKey,
		children: childrenFromParent,
		...buttonProps
	}: Props = $props();

	const isCompact = $derived(buttonProps.sizes.width < UI_BASE_SIZE * 0.75);
	const layoutType = $derived(stateLayoutDerived.layoutType() as UiLayoutType);
	const fontScale = $derived(getUiFontScale(layoutType));
	const fontWeight = $derived(getUiFontWeight(layoutType));
	const baseFontSize = $derived(
		iconFontSize ??
			(isCompact ? buttonProps.sizes.width * 0.5 : UI_BASE_FONT_SIZE * 0.9),
	);
	const fontSize = $derived(baseFontSize * fontScale);
	const wordWrapWidth = $derived(isCompact ? buttonProps.sizes.width : 200);
	const iconSize = $derived(Math.min(buttonProps.sizes.width, buttonProps.sizes.height) * 0.65);
	const iconTint = $derived(variant === 'light' ? 0x000000 : 0xffffff);
	const iconAlpha = $derived(active === false ? 0.45 : 1);

	const hasIcon = $derived.by(() => {
		if (!iconKey) return false;
		const texture = context.stateApp.loadedAssets?.[iconKey];
		return texture != null && texture !== PIXI.Texture.EMPTY;
	});
</script>

<Button {...buttonProps}>
	{#snippet children({ center, hovered, pressed })}
		<UiSprite
			{...center}
			anchor={0.5}
			width={buttonProps.sizes.width}
			height={buttonProps.sizes.height}
			variant={variant === 'dark' ? 'button' : 'buttonLight'}
			{...buttonProps.disabled
				? {
						backgroundColor: UI_COLORS.disabled,
						backgroundAlpha: UI_COLORS.disabledAlpha,
					}
				: {}}
			{...active
				? {
						borderWidth: isCompact ? 4 : 10,
						borderColor: variant === 'dark' ? 0xffffff : 0x000000,
					}
				: {}}
		/>

		{#if hasIcon}
			<Sprite
				key={iconKey}
				{...center}
				anchor={0.5}
				width={iconSize}
				height={iconSize}
				tint={iconTint}
				alpha={iconAlpha}
			/>
		{:else}
			<Text
				{...center}
				anchor={0.5}
				text={i18nDerived[icon]}
				style={{
					align: 'center',
					wordWrap: true,
					wordWrapWidth,
					fontFamily: 'Noto Sans KR',
					fontWeight,
					fontSize,
					fill: variant === 'dark' ? 0xffffff : 0x000000,
				}}
			/>
		{/if}

		{@render childrenFromParent?.()}
	{/snippet}
</Button>

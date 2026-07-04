<script lang="ts">
	import * as PIXI from 'pixi.js';
	import { Text, Sprite } from 'pixi-svelte';
	import { Button, type ButtonProps } from 'components-pixi';
	import { getContextLayout } from 'utils-layout';

	import UiSprite from './UiSprite.svelte';
	import { getContext } from '../context';
	import { getUiFontWeight, getUiMenuButtonFontSize, type UiLayoutType } from '../uiLayoutConfig';
	import { UI_COLORS } from '../constants';

	type Props = Omit<ButtonProps, 'children'> & {
		label: string;
		sizes: { width: number; height: number };
		active?: boolean;
		variant?: 'dark' | 'light';
		iconKey?: string;
	};

	const {
		label,
		active,
		variant = 'light',
		iconKey,
		sizes,
		...buttonProps
	}: Props = $props();

	const context = getContext();
	const { stateLayoutDerived } = getContextLayout();
	const layoutType = $derived(stateLayoutDerived.layoutType() as UiLayoutType);
	const fontSize = $derived(getUiMenuButtonFontSize(sizes, layoutType));
	const fontWeight = $derived(getUiFontWeight(layoutType));
	const iconSize = $derived(Math.min(sizes.width, sizes.height) * 0.65);
	const iconTint = $derived(variant === 'light' ? 0x000000 : 0xffffff);
	const iconAlpha = $derived(active === false ? 0.45 : 1);

	const hasIcon = $derived.by(() => {
		if (!iconKey) return false;
		const texture = context.stateApp.loadedAssets?.[iconKey];
		return texture != null && texture !== PIXI.Texture.EMPTY;
	});
</script>

<Button {...buttonProps} {sizes}>
	{#snippet children({ center })}
		<UiSprite
			{...center}
			anchor={0.5}
			width={sizes.width}
			height={sizes.height}
			variant={variant === 'light' ? 'menuItem' : 'button'}
			{...buttonProps.disabled
				? {
						backgroundColor: UI_COLORS.disabled,
						backgroundAlpha: UI_COLORS.disabledAlpha,
					}
				: {}}
			{...active
				? {
						borderWidth: Math.max(2, sizes.width * 0.1),
						borderColor: 0xffffff,
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
				text={label}
				style={{
					align: 'center',
					wordWrap: true,
					wordWrapWidth: sizes.width * 0.9,
					fontFamily: 'proxima-nova',
					fontWeight,
					fontSize,
					fill: variant === 'light' ? 0x000000 : 0xffffff,
				}}
			/>
		{/if}
	{/snippet}
</Button>

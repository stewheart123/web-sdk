<script lang="ts">
	import { Text } from 'pixi-svelte';
	import { Button, type ButtonProps } from 'components-pixi';

	import UiSprite from './UiSprite.svelte';
	import type { ButtonIcon } from '../types';
	import type { Snippet } from 'svelte';
	import { getContextLayout } from 'utils-layout';

	import { i18nDerived } from '../i18n/i18nDerived';
	import { UI_BASE_FONT_SIZE, UI_BASE_SIZE } from '../constants';
	import { getUiFontScale, getUiFontWeight, type UiLayoutType } from '../uiLayoutConfig';

	const { stateLayoutDerived } = getContextLayout();

	type Props = Omit<ButtonProps, 'children'> & {
		icon: ButtonIcon;
		sizes: { width: number; height: number };
		iconFontSize?: number;
		active?: boolean;
		children?: Snippet;
		variant?: 'dark' | 'light';
	};

	const {
		icon,
		active,
		variant = 'dark',
		iconFontSize,
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
						backgroundColor: 0xaaaaaa,
					}
				: {}}
			{...active
				? {
						borderWidth: isCompact ? 4 : 10,
						borderColor: variant === 'dark' ? 0xffffff : 0x000000,
					}
				: {}}
		/>

		<Text
			{...center}
			anchor={0.5}
			text={i18nDerived[icon]()}
			style={{
				align: 'center',
				wordWrap: true,
				wordWrapWidth,
				fontFamily: 'proxima-nova',
				fontWeight,
				fontSize,
				fill: variant === 'dark' ? 0xffffff : 0x000000,
			}}
		/>

		{@render childrenFromParent?.()}
	{/snippet}
</Button>

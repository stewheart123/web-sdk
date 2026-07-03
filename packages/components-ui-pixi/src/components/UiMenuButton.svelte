<script lang="ts">
	import { Text } from 'pixi-svelte';
	import { Button, type ButtonProps } from 'components-pixi';

	import UiSprite from './UiSprite.svelte';

	type Props = Omit<ButtonProps, 'children'> & {
		label: string;
		sizes: { width: number; height: number };
		active?: boolean;
		variant?: 'dark' | 'light';
	};

	const {
		label,
		active,
		variant = 'light',
		sizes,
		...buttonProps
	}: Props = $props();
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
						backgroundColor: 0xaaaaaa,
					}
				: {}}
			{...active
				? {
						borderWidth: Math.max(2, sizes.width * 0.1),
						borderColor: 0xffffff,
					}
				: {}}
		/>

		<Text
			{...center}
			anchor={0.5}
			text={label}
		style={{
			align: 'center',
			wordWrap: true,
			wordWrapWidth: sizes.width * 0.9,
			fontFamily: 'proxima-nova',
			fontWeight: '600',
			fontSize: sizes.width * 0.28,
			fill: variant === 'light' ? 0x000000 : 0xffffff,
		}}
		/>
	{/snippet}
</Button>

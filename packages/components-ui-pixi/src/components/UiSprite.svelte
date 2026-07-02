<script lang="ts" module>
	import { Rectangle, type RectangleProps } from 'pixi-svelte';

	export type Props = RectangleProps & {
		variant?: 'default' | 'bar' | 'win' | 'button' | 'buttonLight' | 'menuItem' | 'buyBonus';
	};
</script>

<script lang="ts">
	import { UI_COLORS } from '../constants';

	const { variant = 'default', backgroundColor, borderRadius, ...restProps }: Props = $props();

	const variantDefaults = {
		default: { backgroundColor: UI_COLORS.button, borderRadius: 50 },
		bar: { backgroundColor: UI_COLORS.bar, borderRadius: 40 },
		win: { backgroundColor: UI_COLORS.winTicker, borderRadius: 35 },
		button: { backgroundColor: UI_COLORS.button, borderRadius: 50 },
		buttonLight: { backgroundColor: UI_COLORS.buttonLight, borderRadius: 50 },
		menuItem: { backgroundColor: UI_COLORS.menuItem, borderRadius: 50 },
		buyBonus: { backgroundColor: UI_COLORS.buyBonus, borderRadius: 50 },
	} as const;

	const defaults = variantDefaults[variant];
</script>

<Rectangle
	{...defaults}
	{...restProps}
	backgroundColor={backgroundColor ?? defaults.backgroundColor}
	borderRadius={borderRadius ?? defaults.borderRadius}
/>

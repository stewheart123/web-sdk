<script lang="ts" module>
	import { Rectangle, type RectangleProps } from 'pixi-svelte';

	export type Props = RectangleProps & {
		variant?: 'default' | 'bar' | 'win' | 'button' | 'buttonLight' | 'menuItem' | 'buyBonus';
	};
</script>

<script lang="ts">
	import { UI_COLORS, UI_BORDER_RADIUS } from '../constants';

	const {
		variant = 'default',
		backgroundColor,
		backgroundAlpha,
		borderRadius,
		...restProps
	}: Props = $props();

	const variantDefaults = {
		default: {
			backgroundColor: UI_COLORS.button,
			backgroundAlpha: UI_COLORS.buttonAlpha,
			borderRadius: UI_BORDER_RADIUS.button,
		},
		bar: {
			backgroundColor: UI_COLORS.bar,
			backgroundAlpha: UI_COLORS.barAlpha,
			borderRadius: UI_BORDER_RADIUS.controlBar,
		},
		win: {
			backgroundColor: UI_COLORS.winTicker,
			backgroundAlpha: UI_COLORS.winAlpha,
			borderRadius: UI_BORDER_RADIUS.win,
		},
		button: {
			backgroundColor: UI_COLORS.button,
			backgroundAlpha: UI_COLORS.buttonAlpha,
			borderRadius: UI_BORDER_RADIUS.button,
		},
		buttonLight: {
			backgroundColor: UI_COLORS.buttonLight,
			backgroundAlpha: UI_COLORS.buttonLightAlpha,
			borderRadius: UI_BORDER_RADIUS.buttonLight,
		},
		menuItem: {
			backgroundColor: UI_COLORS.menuItem,
			backgroundAlpha: UI_COLORS.menuItemAlpha,
			borderRadius: UI_BORDER_RADIUS.menuItem,
		},
		buyBonus: {
			backgroundColor: UI_COLORS.buyBonus,
			backgroundAlpha: UI_COLORS.buyBonusAlpha,
			borderRadius: UI_BORDER_RADIUS.buyBonus,
		},
	} as const;

	const defaults = variantDefaults[variant];
</script>

<Rectangle
	{...defaults}
	{...restProps}
	backgroundColor={backgroundColor ?? defaults.backgroundColor}
	backgroundAlpha={backgroundAlpha ?? defaults.backgroundAlpha}
	borderRadius={borderRadius ?? defaults.borderRadius}
/>

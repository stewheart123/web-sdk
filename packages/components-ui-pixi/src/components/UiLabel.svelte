<script lang="ts">
	import { Text } from 'pixi-svelte';
	import { WHITE } from 'constants-shared/colors';

	import UiSprite from './UiSprite.svelte';
	import { UI_BASE_FONT_SIZE, UI_COLORS, UI_BORDER_RADIUS } from '../constants';
	import { UI_BAR_CONTENT_MAX_HEIGHT } from '../uiLayoutConfig';

	type Props = {
		label: string;
		value: string;
		tiled?: boolean;
		stacked?: boolean;
		variant?: 'default' | 'win';
		size?: 'default' | 'bar';
		width?: number;
		maxHeight?: number;
	};

	const props: Props = $props();

	const contentHeight = $derived(props.maxHeight ?? UI_BAR_CONTENT_MAX_HEIGHT);
	const contentWidth = $derived(props.width ?? UI_BASE_FONT_SIZE * 3 * (326 / 73));
	const fontSize = $derived(
		props.size === 'bar'
			? Math.min(contentHeight * 0.32, contentWidth * 0.16)
			: Math.min(UI_BASE_FONT_SIZE, contentHeight * 0.22, contentWidth * 0.12),
	);
	const lineGap = $derived(fontSize * 1.15);
	const tickerHeight = $derived(contentHeight * 0.95);
	const tickerWidth = $derived(contentWidth * 0.98);

	const labelStyle = $derived({
		fontFamily: 'proxima-nova',
		fontSize,
		fill: WHITE,
	} as const);

	const valueStyle = $derived({
		fontFamily: 'proxima-nova',
		fontSize,
		fill: WHITE,
	} as const);

	const tickerVariant = $derived(props.variant === 'win' ? 'win' : 'default');
</script>

{#if props.stacked}
	{#if props.tiled}
		<UiSprite
			anchor={{ x: 0.5, y: 0.5 }}
			variant={tickerVariant}
			width={tickerWidth}
			height={tickerHeight}
			borderRadius={UI_BORDER_RADIUS.label}
			{...props.variant === 'win' ? { backgroundColor: UI_COLORS.winTicker } : {}}
		/>
	{/if}
	<Text anchor={{ x: 0.5, y: 0.5 }} text={props.label} style={labelStyle} y={-lineGap * 0.5} />
	<Text anchor={{ x: 0.5, y: 0.5 }} text={props.value} style={valueStyle} y={lineGap * 0.5} />
{:else}
	{#if props.tiled}
		<UiSprite
			x={-contentWidth * 0.5}
			anchor={{ x: 0, y: 0.5 }}
			variant={tickerVariant}
			width={tickerWidth}
			height={tickerHeight}
			borderRadius={UI_BORDER_RADIUS.label}
			{...props.variant === 'win' ? { backgroundColor: UI_COLORS.winTicker } : {}}
		/>
	{/if}
	<Text anchor={{ x: 0, y: 0.5 }} text={props.label} style={labelStyle} />
	<Text
		anchor={{ x: 1, y: 0.5 }}
		text={props.value}
		style={valueStyle}
		x={contentWidth}
	/>
{/if}

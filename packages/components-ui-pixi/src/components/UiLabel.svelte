<script lang="ts">
	import { Text } from 'pixi-svelte';
	import { WHITE } from 'constants-shared/colors';

	import { getContextLayout } from 'utils-layout';

	import UiSprite from './UiSprite.svelte';
	import { UI_BASE_FONT_SIZE, UI_COLORS, UI_BORDER_RADIUS } from '../constants';
	import {
		UI_BAR_CONTENT_MAX_HEIGHT,
		getUiBarLabelFontSize,
		getUiFontScale,
		getUiFontWeight,
		type UiLayoutType,
	} from '../uiLayoutConfig';

	const { stateLayoutDerived } = getContextLayout();

	type Props = {
		label: string;
		value: string;
		tiled?: boolean;
		stacked?: boolean;
		variant?: 'default' | 'win';
		size?: 'default' | 'bar' | 'winFloat';
		width?: number;
		maxHeight?: number;
	};

	const props: Props = $props();

	const contentHeight = $derived(props.maxHeight ?? UI_BAR_CONTENT_MAX_HEIGHT);
	const contentWidth = $derived(props.width ?? UI_BASE_FONT_SIZE * 3 * (326 / 73));
	const layoutType = $derived(stateLayoutDerived.layoutType() as UiLayoutType);
	const fontScale = $derived(getUiFontScale(layoutType));
	const fontWeight = $derived(getUiFontWeight(layoutType));
	const baseFontSize = $derived(
		props.size === 'winFloat'
			? Math.min(contentHeight * 0.55, contentWidth * 0.08)
			: props.size === 'bar'
				? getUiBarLabelFontSize({ contentHeight, contentWidth, layoutType })
				: Math.min(UI_BASE_FONT_SIZE, contentHeight * 0.22, contentWidth * 0.12),
	);
	const fontSize = $derived(props.size === 'bar' ? baseFontSize : baseFontSize * fontScale);
	const lineGap = $derived(fontSize * 1.15);
	const tickerHeight = $derived(contentHeight * 0.95);
	const tickerWidth = $derived(contentWidth * 0.98);

	const labelStyle = $derived({
		fontFamily: 'proxima-nova',
		fontSize,
		fontWeight,
		fill: WHITE,
	} as const);

	const valueStyle = $derived({
		fontFamily: 'proxima-nova',
		fontSize,
		fontWeight,
		fill: WHITE,
	} as const);

	const tickerVariant = $derived(props.variant === 'win' ? 'win' : 'default');
	const winFloatPadding = $derived(contentWidth * 0.08);
	const winFloatLabelX = $derived(-contentWidth * 0.5 + winFloatPadding);
	const winFloatTextGap = $derived(fontSize * 0.45);
	const winFloatValueX = $derived(
		winFloatLabelX + props.label.length * fontSize * 0.55 + winFloatTextGap,
	);
	const winTickerBackground = $derived(
		props.variant === 'win'
			? {
					backgroundColor: UI_COLORS.winTicker,
					...(props.size === 'winFloat' ? { backgroundAlpha: UI_COLORS.winTickerAlpha } : {}),
				}
			: {},
	);
</script>

{#if props.stacked}
	{#if props.tiled}
		<UiSprite
			anchor={{ x: 0.5, y: 0.5 }}
			variant={tickerVariant}
			width={tickerWidth}
			height={tickerHeight}
			borderRadius={UI_BORDER_RADIUS.label}
			{...winTickerBackground}
		/>
	{/if}
	<Text anchor={{ x: 0.5, y: 0.5 }} text={props.label} style={labelStyle} y={-lineGap * 0.5} />
	<Text anchor={{ x: 0.5, y: 0.5 }} text={props.value} style={valueStyle} y={lineGap * 0.5} />
{:else}
	{#if props.tiled}
		<UiSprite
			x={props.size === 'winFloat' ? 0 : -contentWidth * 0.5}
			anchor={props.size === 'winFloat' ? { x: 0.5, y: 0.5 } : { x: 0, y: 0.5 }}
			variant={tickerVariant}
			width={tickerWidth}
			height={tickerHeight}
			borderRadius={UI_BORDER_RADIUS.label}
			{...winTickerBackground}
		/>
	{/if}
	{#if props.size === 'winFloat'}
		<Text
			anchor={{ x: 0, y: 0.5 }}
			text={props.label}
			style={labelStyle}
			x={winFloatLabelX}
		/>
		<Text
			anchor={{ x: 0, y: 0.5 }}
			text={props.value}
			style={valueStyle}
			x={winFloatValueX}
		/>
	{:else}
		<Text anchor={{ x: 0, y: 0.5 }} text={props.label} style={labelStyle} />
		<Text
			anchor={{ x: 1, y: 0.5 }}
			text={props.value}
			style={valueStyle}
			x={contentWidth}
		/>
	{/if}
{/if}

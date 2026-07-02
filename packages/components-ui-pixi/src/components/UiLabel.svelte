<script lang="ts">
	import { Text } from 'pixi-svelte';
	import { WHITE } from 'constants-shared/colors';

	import UiSprite from './UiSprite.svelte';
	import { UI_BASE_FONT_SIZE, UI_COLORS } from '../constants';

	type Props = {
		label: string;
		value: string;
		tiled?: boolean;
		stacked?: boolean;
		variant?: 'default' | 'win';
	};

	const props: Props = $props();

	const labelStyle = {
		fontFamily: 'proxima-nova',
		fontSize: UI_BASE_FONT_SIZE,
		fill: WHITE,
	} as const;

	const valueStyle = {
		fontFamily: 'proxima-nova',
		fontSize: UI_BASE_FONT_SIZE,
		fill: WHITE,
	} as const;

	const tickerVariant = $derived(props.variant === 'win' ? 'win' : 'default');
	const tickerWidth = UI_BASE_FONT_SIZE * 3 * (326 / 73);
	const tickerHeight = UI_BASE_FONT_SIZE * 3;
</script>

{#if props.stacked}
	{#if props.tiled}
		<UiSprite
			y={-20}
			anchor={{ x: 0.5, y: 0 }}
			variant={tickerVariant}
			width={tickerWidth}
			height={tickerHeight}
			borderRadius={35}
			{...props.variant === 'win' ? { backgroundColor: UI_COLORS.winTicker } : {}}
		/>
	{/if}
	<Text anchor={{ x: 0.5, y: 0 }} text={props.label} style={labelStyle} />
	<Text anchor={{ x: 0.5, y: 0 }} text={props.value} style={valueStyle} y={UI_BASE_FONT_SIZE} />
{:else}
	{#if props.tiled}
		<UiSprite
			x={-90}
			anchor={{ x: 0, y: 0.5 }}
			variant={tickerVariant}
			width={tickerWidth}
			height={tickerHeight}
			borderRadius={35}
			{...props.variant === 'win' ? { backgroundColor: UI_COLORS.winTicker } : {}}
		/>
	{/if}
	<Text anchor={{ x: 0, y: 0.5 }} text={props.label} style={labelStyle} />
	<Text
		anchor={{ x: 1, y: 0.5 }}
		text={props.value}
		style={valueStyle}
		x={UI_BASE_FONT_SIZE * 10}
	/>
{/if}

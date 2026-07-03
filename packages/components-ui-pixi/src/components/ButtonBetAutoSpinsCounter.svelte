<script lang="ts">
	import { Text, Rectangle } from 'pixi-svelte';
	import { stateBet } from 'state-shared';
	import { WHITE } from 'constants-shared/colors';
	import { getContextLayout } from 'utils-layout';

	import { UI_BASE_SIZE, UI_BORDER_RADIUS } from '../constants';
	import { getUiFontScale, getUiFontWeight, type UiLayoutType } from '../uiLayoutConfig';

	const { stateLayoutDerived } = getContextLayout();

	const fontSizeMultiplier = $derived.by(() => {
		if (stateBet.autoSpinsCounter === Infinity) return 3;
		if (stateBet.autoSpinsCounter > 99) return 1.5;
		if (stateBet.autoSpinsCounter > 9) return 2;
		return 2.5;
	});
	const layoutType = $derived(stateLayoutDerived.layoutType() as UiLayoutType);
	const fontSize = $derived(
		fontSizeMultiplier * UI_BASE_SIZE * 0.2 * getUiFontScale(layoutType),
	);
	const fontWeight = $derived(getUiFontWeight(layoutType));
</script>

{#if stateBet.autoSpinsCounter > 0}
	<Rectangle
		anchor={0.5}
		width={UI_BASE_SIZE * 0.9}
		height={UI_BASE_SIZE * 0.9}
		borderRadius={UI_BORDER_RADIUS.counter}
	/>
	<Text
		anchor={0.5}
		text={stateBet.autoSpinsCounter === Infinity ? '∞' : stateBet.autoSpinsCounter}
		style={{
			fontFamily: 'proxima-nova',
			fill: WHITE,
			fontWeight,
			fontSize,
		}}
	/>
{/if}

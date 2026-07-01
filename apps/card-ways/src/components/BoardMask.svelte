<script lang="ts">
	import { Rectangle } from 'pixi-svelte';

	import { getContext } from '../game/context';
	import { SYMBOL_SIZE } from '../game/constants';
	import { BOARD_MASK } from '../game/visualLayoutConfig';

	type Props = { debug?: boolean };

	const props: Props = $props();
	const context = getContext();
	const horizontalPadding = $derived(SYMBOL_SIZE * BOARD_MASK.horizontalPadding);
</script>

{#if props.debug}
	<Rectangle
		alpha={0.5}
		backgroundColor={0xffffff}
		width={context.stateGameDerived.boardLayout().width}
		height={context.stateGameDerived.boardLayout().height}
	/>
{/if}

<Rectangle
	isMask
	x={-horizontalPadding}
	width={context.stateGameDerived.boardLayout().width + horizontalPadding * 2}
	height={context.stateGameDerived.boardLayout().height}
/>

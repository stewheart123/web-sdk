<script lang="ts">
	import { Rectangle } from 'pixi-svelte';

	import { getContext } from '../game/context';
	import { SYMBOL_SIZE } from '../game/constants';
	import { BOARD_MASK, SCENE_LABELS } from '../game/visualLayoutConfig';

	type Props = {
		debug?: boolean;
		/** Override vertical padding (multiple of SYMBOL_SIZE). Defaults to BOARD_MASK.verticalPadding. */
		verticalPadding?: number;
	};

	const props: Props = $props();
	const context = getContext();
	const horizontalPadding = $derived(SYMBOL_SIZE * BOARD_MASK.horizontalPadding);
	const verticalPadding = $derived(
		SYMBOL_SIZE * (props.verticalPadding ?? BOARD_MASK.verticalPadding),
	);
	const board = $derived(context.stateGameDerived.boardLayout());
</script>

{#if props.debug}
	<Rectangle
		label={SCENE_LABELS.board.maskDebug}
		alpha={0.5}
		backgroundColor={0xffffff}
		x={-horizontalPadding}
		y={-verticalPadding}
		width={board.width + horizontalPadding * 2}
		height={board.height + verticalPadding * 2}
	/>
{/if}

<Rectangle
	label={SCENE_LABELS.board.mask}
	isMask
	x={-horizontalPadding}
	y={-verticalPadding}
	width={board.width + horizontalPadding * 2}
	height={board.height + verticalPadding * 2}
/>

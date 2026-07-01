<script lang="ts">
	import type { Snippet } from 'svelte';

	import { Container } from 'pixi-svelte';
	import { getContextBoard } from 'components-shared';

	import { SYMBOL_SIZE, BOARD_DIMENSIONS } from '../game/constants';
	import { sceneLabel } from '../game/visualLayoutConfig';

	type Props = {
		debug?: boolean;
		reelIndex: number;
		row: number;
		x: number;
		y: number;
		animating: boolean;
		children: Snippet;
	};

	const props: Props = $props();
	const boardContext = getContextBoard();
	const show = $derived(
		(boardContext.animate && props.animating) || (!boardContext.animate && !props.animating),
	);
	const top = 0;
	const bottom = SYMBOL_SIZE * BOARD_DIMENSIONS.y;
	const half = SYMBOL_SIZE * 0.5;
	const inFrame = $derived(props.y >= top - half && props.y <= bottom + half);
</script>

{#if props.debug || (show && inFrame)}
	<Container
		label={sceneLabel.symbol(props.reelIndex, props.row)}
		x={props.x}
		y={props.y}
	>
		{@render props.children()}
	</Container>
{/if}

<script lang="ts">
	import { Sprite } from 'pixi-svelte';

	import {
		getBoardLayoutSettings,
		resolveFrameLayout,
		SCENE_LABELS,
	} from '../game/visualLayoutConfig';
	import { getContext } from '../game/context';

	const context = getContext();

	const frame = $derived.by(() => {
		const board = context.stateGameDerived.boardLayout();
		const { frame: frameSettings } = getBoardLayoutSettings(
			context.stateLayoutDerived.layoutType(),
		);

		return resolveFrameLayout(board.x, board.y, frameSettings);
	});
</script>

<Sprite
	label={SCENE_LABELS.board.frame}
	key="reelsFrame"
	anchor={0.5}
	x={frame.x}
	y={frame.y}
	width={frame.width}
	height={frame.height}
/>

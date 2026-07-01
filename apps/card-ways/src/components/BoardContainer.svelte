<script lang="ts">
	import type { Snippet } from 'svelte';

	import { Container } from 'pixi-svelte';

	import { getContext } from '../game/context';
	import { SCENE_LABELS } from '../game/visualLayoutConfig';

	type Props = {
		children: Snippet;
	};

	const props: Props = $props();

	const context = getContext();
</script>

<Container
	label={SCENE_LABELS.board.root}
	x={context.stateGameDerived.boardLayout().x}
	y={context.stateGameDerived.boardLayout().y}
	pivot={context.stateGameDerived.boardLayout().pivot}
	scale={context.stateGameDerived.boardLayout().scale}
>
	{@render props.children()}
</Container>

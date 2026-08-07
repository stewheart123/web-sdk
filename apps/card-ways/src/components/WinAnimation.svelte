<script lang="ts">
	import type { Snippet } from 'svelte';

	import { SpineProvider, SpineTrack, SpineSlot } from 'pixi-svelte';

	import { getContext } from '../game/context';
	import { WIN_LAYOUT, SCENE_LABELS } from '../game/visualLayoutConfig';

	type Props = {
		animationName: 'COMMON-WIN' | 'MINT-WIN' | 'RARE-WIN' | 'LEGENDARY-WIN' | 'MAX-WIN';
		children: Snippet;
	};

	const props: Props = $props();
	const context = getContext();
</script>

<SpineProvider
	label={SCENE_LABELS.win.bigAnimation}
	width={context.stateGameDerived.boardLayout().width}
	scale={WIN_LAYOUT.animationScale}
	x={context.stateGameDerived.boardLayout().pivot.x + WIN_LAYOUT.animationOffset.x}
	y={context.stateGameDerived.boardLayout().pivot.y + WIN_LAYOUT.animationOffset.y}
	key="bigwin"
>
	<SpineTrack trackIndex={0} animationName={props.animationName} loop={true} />
	<SpineSlot slotName="WIN-AMOUNT-SLOT">
		{@render props.children()}
	</SpineSlot>
</SpineProvider>

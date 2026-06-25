<script lang="ts">
	import type { Snippet } from 'svelte';

	import { SpineProvider, SpineTrack, SpineSlot } from 'pixi-svelte';

	import { getContext } from '../game/context';

	type Props = {
		animationName: 'UNCOMMON-WIN' | 'RARE-WIN' | 'ULTRA-RARE-WIN' | 'LEGENDARY-WIN' | 'MAX-WIN';
		children: Snippet;
	};

	const props: Props = $props();
	const context = getContext();
</script>

<SpineProvider
	width={context.stateGameDerived.boardLayout().width}
	x={context.stateGameDerived.boardLayout().pivot.x}
	y={context.stateGameDerived.boardLayout().pivot.y}
	key="bigwin"
>
	<SpineTrack trackIndex={0} animationName={props.animationName} loop={true} />
	<SpineSlot slotName="slot_win_count">
		{@render props.children()}
	</SpineSlot>
</SpineProvider>

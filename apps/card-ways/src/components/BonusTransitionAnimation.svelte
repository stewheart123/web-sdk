<script lang="ts">
	import { SpineProvider, SpineTrack } from 'pixi-svelte';

	import { getContext } from '../game/context';
	import { getBonusTransitionLayoutSettings } from '../game/visualLayoutConfig';

	type Props = {
		oncomplete: () => void;
	};

	const props: Props = $props();
	const context = getContext();

	const canvas = $derived(context.stateLayoutDerived.canvasSizes());
	const layout = $derived(
		getBonusTransitionLayoutSettings(context.stateLayoutDerived.layoutType()),
	);
</script>

<SpineProvider
	key="bonusTransition"
	x={canvas.width * layout.xRatio}
	y={canvas.height * layout.yRatio}
	height={canvas.height * layout.heightScale}
	anchor={layout.anchor ?? 0.5}
	scale={layout.scale}
>
	<SpineTrack
		trackIndex={0}
		animationName="TRANSITION"
		listener={{
			complete: props.oncomplete,
		}}
	/>
</SpineProvider>

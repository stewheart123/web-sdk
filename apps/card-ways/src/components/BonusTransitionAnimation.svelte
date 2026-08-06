<script lang="ts">
	import { SpineProvider, SpineTrack } from 'pixi-svelte';

	import { getContext } from '../game/context';
	import { getBonusTransitionLayoutSettings, SCENE_LABELS, SCENE_LAYERS } from '../game/visualLayoutConfig';

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
	label={SCENE_LABELS.transition.bonus}
	key="bonusTransition"
	x={canvas.width * layout.xRatio}
	y={canvas.height * layout.yRatio}
	height={canvas.height * layout.heightScale}
	anchor={layout.anchor ?? 0.5}
	scale={layout.scale}
	zIndex={SCENE_LAYERS.overlay}
>
	<SpineTrack
		trackIndex={0}
		animationName="TRANSITION"
		listener={{
			complete: props.oncomplete,
		}}
	/>
</SpineProvider>

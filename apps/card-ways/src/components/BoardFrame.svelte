<script lang="ts" module>
	export type EmitterEventBoardFrame =
		| { type: 'boardFrameGlowShow' }
		| { type: 'boardFrameGlowHide' };
</script>

<script lang="ts">
	import { Tween } from 'svelte/motion';

	import { Sprite, SpineProvider, SpineTrack, Container } from 'pixi-svelte';

	import { getBoardLayoutSettings } from '../game/boardLayoutConfig';
	import { getContext } from '../game/context';

	const context = getContext();
	const SPINE_SCALE = { width: (0.62 * 2.5), height: (0.66 * 2) }; // TODO adjust to fit the frame
	const POSITION_ADJUSTMENT = 1.01;
	const GLOW_FADE_DURATION = 500;
	const frame = $derived(
		getBoardLayoutSettings(context.stateLayoutDerived.layoutType()).frame,
	);

	type AnimationName = 'FS-FRAME-GLOW';

	let animationName = $state<AnimationName | undefined>(undefined);
	let isHiding = $state(false);
	const glowAlpha = new Tween(1, { duration: GLOW_FADE_DURATION });

	context.eventEmitter.subscribeOnMount({
		boardFrameGlowShow: () => {
			isHiding = false;
			glowAlpha.set(1, { duration: 0 });
			animationName = 'FS-FRAME-GLOW';
		},
		boardFrameGlowHide: async () => {
			if (!animationName || isHiding) return;

			isHiding = true;
			await glowAlpha.set(0, { duration: GLOW_FADE_DURATION });
			animationName = undefined;
			isHiding = false;
		},
	});
</script>

{#if animationName}
	<Container
		alpha={glowAlpha.current}
		x={context.stateGameDerived.boardLayout().x * POSITION_ADJUSTMENT}
		y={context.stateGameDerived.boardLayout().y * POSITION_ADJUSTMENT}
		pivot={context.stateGameDerived.boardLayout().pivot}
		scale={context.stateGameDerived.boardLayout().scale}
	>
		<SpineProvider
			zIndex={-1}
			key="reelhouse"
			x={context.stateGameDerived.boardLayout().pivot.x}
			y={context.stateGameDerived.boardLayout().pivot.y}
			width={context.stateGameDerived.boardLayout().width * SPINE_SCALE.width}
			height={context.stateGameDerived.boardLayout().height * SPINE_SCALE.height}
		>
			<SpineTrack trackIndex={0} animationName="FS-FRAME-GLOW" loop={true} />
		</SpineProvider>
	</Container>
{/if}

<Sprite
	key="reelsFrame"
	anchor={0.5}
	x={frame.x}
	y={frame.y}
	width={frame.width}
	height={frame.height}
/>

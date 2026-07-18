<script lang="ts" module>
	export type EmitterEventBoardFrame =
		| { type: 'boardFrameGlowShow' }
		| { type: 'boardFrameGlowHide' };
</script>

<script lang="ts">
	import { Tween } from 'svelte/motion';

	import { Sprite, SpineProvider, SpineTrack, Container } from 'pixi-svelte';

	import {
		FRAME_GLOW,
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

	type AnimationName = 'FS-FRAME-GLOW';

	let animationName = $state<AnimationName | undefined>(undefined);
	let isHiding = $state(false);
	const glowAlpha = new Tween(1, { duration: FRAME_GLOW.fadeDuration });

	context.eventEmitter.subscribeOnMount({
		boardFrameGlowShow: () => {
			isHiding = false;
			glowAlpha.set(1, { duration: 0 });
			animationName = 'FS-FRAME-GLOW';
		},
		boardFrameGlowHide: async () => {
			if (!animationName || isHiding) return;

			isHiding = true;
			await glowAlpha.set(0, { duration: FRAME_GLOW.fadeDuration });
			animationName = undefined;
			isHiding = false;
		},
	});
</script>

{#if animationName}
	<Container
		label={SCENE_LABELS.board.frameGlow}
		alpha={glowAlpha.current}
		x={context.stateGameDerived.boardLayout().x * FRAME_GLOW.positionAdjustment.x}
		y={context.stateGameDerived.boardLayout().y * FRAME_GLOW.positionAdjustment.y}
		pivot={context.stateGameDerived.boardLayout().pivot}
		scale={context.stateGameDerived.boardLayout().scale}
	>
		<SpineProvider
			label={SCENE_LABELS.board.frameGlowSpine}
			zIndex={-1}
			key="reelhouse"
			x={context.stateGameDerived.boardLayout().pivot.x}
			y={context.stateGameDerived.boardLayout().pivot.y}
			width={context.stateGameDerived.boardLayout().width * FRAME_GLOW.spineScale.width}
			height={context.stateGameDerived.boardLayout().height * FRAME_GLOW.spineScale.height}
		>
			<SpineTrack trackIndex={0} animationName="FS-FRAME-GLOW" loop={true} />
		</SpineProvider>
	</Container>
{/if}

<Sprite
	label={SCENE_LABELS.board.frame}
	key="reelsFrame"
	anchor={0.5}
	x={frame.x}
	y={frame.y}
	width={frame.width}
	height={frame.height}
/>

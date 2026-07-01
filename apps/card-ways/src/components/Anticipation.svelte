<script lang="ts">
	import { SpineProvider, SpineTrack, Container } from 'pixi-svelte';
	import { stateBetDerived } from 'state-shared';

	import { getContext } from '../game/context';
	import type { Reel } from '../game/stateGame.svelte';
	import { REEL_GAP, REEL_PADDING, SYMBOL_WIDTH } from '../game/constants';
	import { ANTICIPATION, sceneLabel } from '../game/visualLayoutConfig';

	type Props = {
		reel: Reel;
		oncomplete: () => void;
	};

	const props: Props = $props();
	const context = getContext();

	type AnimationName = 'anticipation_intro' | 'anticipation_loop' | 'anticipation_out';

	let animationName = $state<AnimationName>('anticipation_intro');

	$effect(() => {
		if (props.reel.reelState.motion === 'stopped') {
			animationName = 'anticipation_out';
		}
	});
</script>

<Container
	label={sceneLabel.anticipation(props.reel.reelIndex)}
	x={context.stateGameDerived.boardLayout().x}
	y={context.stateGameDerived.boardLayout().y}
	pivot={context.stateGameDerived.boardLayout().pivot}
	scale={context.stateGameDerived.boardLayout().scale}
>
	<SpineProvider
		label={sceneLabel.anticipationSpine(props.reel.reelIndex)}
		key="anticipation"
		width={ANTICIPATION.width}
		height={ANTICIPATION.height}
		x={SYMBOL_WIDTH * (props.reel.reelIndex + REEL_PADDING) + REEL_GAP * props.reel.reelIndex}
		y={context.stateGameDerived.boardLayout().height * 0.5 - ANTICIPATION.yOffset}
	>
		<SpineTrack
			trackIndex={0}
			{animationName}
			loop={animationName === 'anticipation_loop'}
			timeScale={stateBetDerived.timeScale()}
			listener={{
				complete: () => {
					if (animationName === 'anticipation_intro') {
						animationName = 'anticipation_loop';
					}

					if (animationName === 'anticipation_out') {
						props.oncomplete();
					}
				},
			}}
		/>
	</SpineProvider>
</Container>

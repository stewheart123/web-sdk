<script lang="ts">
	import { Rectangle, SpineProvider, SpineTrack } from 'pixi-svelte';
	import { FadeContainer } from 'components-pixi';
	import { SECOND } from 'constants-shared/time';

	import { getContext } from '../game/context';
	import { BACKGROUND_ART_SIZE, BACKGROUND_OFFSET } from '../game/stateLayout';

	const context = getContext();
	const backgroundProps = $derived.by(() => {
		const layout = context.stateLayoutDerived.centeredBackgroundLayout({
			scale: 1,
			artSize: BACKGROUND_ART_SIZE,
		})();

		return {
			...layout,
			x: layout.x + BACKGROUND_OFFSET.x,
			y: layout.y + BACKGROUND_OFFSET.y,
		};
	});
	const showBaseBackground = $derived(context.stateGame.gameType === 'basegame');
	const showFeatureBackground = $derived(context.stateGame.gameType === 'freegame');
</script>

<Rectangle {...context.stateLayoutDerived.canvasSizes()} backgroundColor={0x000000} zIndex={-3} />

<FadeContainer show={showBaseBackground} duration={SECOND} zIndex={-2}>
	<SpineProvider key="foregroundAnimation" {...backgroundProps}>
		<SpineTrack trackIndex={0} animationName="BACKGROUND-BASE" loop />
	</SpineProvider>
</FadeContainer>

<FadeContainer show={showFeatureBackground} duration={SECOND} zIndex={-1}>
	<SpineProvider key="foregroundAnimation" {...backgroundProps}>
		<SpineTrack trackIndex={0} animationName="BACKGROUND-BONUS" loop />
	</SpineProvider>
</FadeContainer>

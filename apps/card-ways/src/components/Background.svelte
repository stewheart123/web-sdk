<script lang="ts">
	import { Rectangle, SpineProvider, SpineTrack, type LoadedSpine } from 'pixi-svelte';
	import { FadeContainer } from 'components-pixi';
	import { SECOND } from 'constants-shared/time';

	import { getContext } from '../game/context';
	import { BACKGROUND_ART_SIZE, BACKGROUND_OFFSET } from '../game/stateLayout';

	const context = getContext();

	const backgroundArtSize = $derived.by(() => {
		const spineData = context.stateApp.loadedAssets?.['foregroundAnimation'] as
			| LoadedSpine
			| undefined;

		if (spineData?.width && spineData?.height) {
			return { width: spineData.width, height: spineData.height };
		}

		return BACKGROUND_ART_SIZE;
	});

	const backgroundProps = $derived.by(() => {
		const layout = context.stateLayoutDerived.centeredBackgroundLayout({
			artSize: backgroundArtSize,
			fit: 'oriented',
		})();

		return {
			...layout,
			x: layout.x + BACKGROUND_OFFSET.x,
			y: layout.y + BACKGROUND_OFFSET.y,
		};
	});
	const showBaseBackground = $derived(context.stateGame.gameType === 'basegame');
	const showFeatureBackground = $derived(context.stateGame.gameType === 'freegame');

	$effect(() => {
		if (!import.meta.env.DEV) return;

		const canvas = context.stateLayoutDerived.canvasSizes();
		const spineData = context.stateApp.loadedAssets?.['foregroundAnimation'] as
			| LoadedSpine
			| undefined;
		const props = backgroundProps;
		const artSize = backgroundArtSize;

		const runtimeSpineBounds = spineData
			? { width: spineData.width, height: spineData.height, x: spineData.x, y: spineData.y }
			: null;

		const widthScale = canvas.width / artSize.width;
		const heightScale = canvas.height / artSize.height;
		const isTaller = canvas.height > canvas.width;
		const fitAxis = isTaller ? 'height' : 'width';
		const expectedScale = isTaller ? heightScale : widthScale;

		const onScreenSize = {
			width: artSize.width * props.scale,
			height: artSize.height * props.scale,
		};

		console.log('[Background layout debug]', {
			window: { innerWidth: canvas.width, innerHeight: canvas.height },
			canvasRatio: context.stateLayoutDerived.canvasRatio(),
			layoutType: context.stateLayoutDerived.layoutType(),
			artSizeUsedForScale: artSize,
			runtimeSpineBounds,
			scale: {
				fit: 'oriented',
				fitAxis,
				widthScale,
				heightScale,
				expectedScale,
				appliedScale: props.scale,
			},
			position: {
				center: { x: canvas.width / 2, y: canvas.height / 2 },
				offset: BACKGROUND_OFFSET,
				applied: { x: props.x, y: props.y },
				anchor: props.anchor,
				skeletonBoundsOffset: runtimeSpineBounds
					? { x: runtimeSpineBounds.x, y: runtimeSpineBounds.y }
					: null,
				expectedPivotAtAnchor: runtimeSpineBounds
					? {
							x: runtimeSpineBounds.x + runtimeSpineBounds.width * 0.5,
							y: runtimeSpineBounds.y + runtimeSpineBounds.height * 0.5,
						}
					: null,
			},
			onScreenSize,
			fitCheck: {
				matchesWindowWidth: fitAxis === 'width' && onScreenSize.width === canvas.width,
				matchesWindowHeight: fitAxis === 'height' && onScreenSize.height === canvas.height,
			},
		});
	});
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

<script lang="ts">
	import { Rectangle, SpineProvider, SpineTrack, type LoadedSpine } from 'pixi-svelte';
	import { FadeContainer } from 'components-pixi';
	import { SECOND } from 'constants-shared/time';

	import { getContext } from '../game/context';
	import { BACKGROUND_ART_SIZE, BACKGROUND_OFFSET } from '../game/stateLayout';
	import { BACKGROUND_LAYERS, SCENE_LABELS } from '../game/visualLayoutConfig';

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
		const limitingAxis = widthScale >= heightScale ? 'width' : 'height';
		const coverScale = Math.max(widthScale, heightScale);

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
				fit: 'cover',
				limitingAxis,
				widthScale,
				heightScale,
				coverScale,
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
			coverFillCheck: {
				fillsWidth: onScreenSize.width >= canvas.width,
				fillsHeight: onScreenSize.height >= canvas.height,
			},
		});
	});
</script>

<Rectangle
	{...context.stateLayoutDerived.canvasSizes()}
	label={SCENE_LABELS.background.backdrop}
	backgroundColor={0x000000}
	zIndex={BACKGROUND_LAYERS.backdrop}
/>

<FadeContainer
	label={SCENE_LABELS.fade.backgroundBase}
	show={showBaseBackground}
	duration={SECOND}
	zIndex={BACKGROUND_LAYERS.normal}
>
	<SpineProvider label={SCENE_LABELS.background.base} key="foregroundAnimation" {...backgroundProps}>
		<SpineTrack trackIndex={0} animationName="BACKGROUND-BASE" loop />
	</SpineProvider>
</FadeContainer>

<FadeContainer
	label={SCENE_LABELS.fade.backgroundFeature}
	show={showFeatureBackground}
	duration={SECOND}
	zIndex={BACKGROUND_LAYERS.feature}
>
	<SpineProvider label={SCENE_LABELS.background.feature} key="foregroundAnimation" {...backgroundProps}>
		<SpineTrack trackIndex={0} animationName="BACKGROUND-BONUS" loop />
	</SpineProvider>
</FadeContainer>

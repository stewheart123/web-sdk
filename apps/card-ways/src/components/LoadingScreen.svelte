<script lang="ts">
	import { onMount } from 'svelte';
	import { SpineProvider, SpineTrack, Container, Sprite, Rectangle } from 'pixi-svelte';
	import { FadeContainer, LoadingProgress } from 'components-pixi';
	import { MainContainer, OnPressFullScreen } from 'components-layout';
	import { OnHotkey } from 'components-shared';

	import { getContext } from '../game/context';
	import { stateSplash } from '../game/stateSplash.svelte';
	import { isHowToPlayCarouselLayout } from '../game/howToPlayPanels';
	import { resolveLoadingScreenLayout, SCENE_LABELS } from '../game/visualLayoutConfig';
	import BonusTransitionAnimation from './BonusTransitionAnimation.svelte';
	import HowToPlayPanels from './HowToPlayPanels.svelte';
	import PressToContinue from './PressToContinue.svelte';

	type Props = {
		onloaded: () => void;
		ontransitionstart?: () => void;
	};

	const props: Props = $props();
	const context = getContext();
	const layoutType = $derived(context.stateLayoutDerived.layoutType());
	const layout = $derived(resolveLoadingScreenLayout(layoutType));
	const carousel = $derived(isHowToPlayCarouselLayout(layoutType));

	let loadingType = $state<'start' | 'transition'>('start');

	onMount(() => {
		stateSplash.loadingScreenReady = true;
	});

	const handleContinue = () => {
		props.ontransitionstart?.();
		loadingType = 'transition';
	};
</script>

<FadeContainer show={loadingType === 'start'} label={SCENE_LABELS.fade.loadingStart}>
	<MainContainer label={SCENE_LABELS.layout.loading}>
		<Container label={SCENE_LABELS.loading.root} x={layout.x} y={layout.y}>
			<SpineProvider
				label={SCENE_LABELS.loading.logo}
				key="logo"
				width={layout.logoWidth}
				y={layout.logoY}
			>
				<SpineTrack trackIndex={0} animationName="INTRO" loop />
			</SpineProvider>

			<HowToPlayPanels />

			{#if !context.stateApp.loaded}
				<LoadingProgress
					label={SCENE_LABELS.loading.progress}
					y={layout.progressBar.y}
					width={layout.progressBar.width}
					height={layout.progressBar.height}
				>
					{#snippet background(sizes)}
						<Sprite label={SCENE_LABELS.loading.progressBg} key="LOADING-BG" {...sizes} />
					{/snippet}
					{#snippet progress(sizes)}
						<Sprite label={SCENE_LABELS.loading.progressFill} key="LOADING-PROGRESS" {...sizes} />
					{/snippet}
					{#snippet frame(sizes)}{/snippet}
				</LoadingProgress>
			{:else if carousel}
				<!-- Carousel owns the panel hit area; continue only via this control or Space. -->
				<Container
					eventMode="static"
					cursor="pointer"
					x={layout.pressToContinue.x}
					y={layout.pressToContinue.y}
					onpointerup={handleContinue}
				>
					<Rectangle
						width={layout.pressToContinue.width}
						height={layout.pressToContinue.width * 0.35}
						anchor={0.5}
						backgroundColor={0xffffff}
						backgroundAlpha={0.001}
					/>
					<PressToContinue
						embedded
						visualOnly
						layout={{ ...layout.pressToContinue, x: 0, y: 0 }}
						onpress={handleContinue}
					/>
				</Container>
			{:else}
				<PressToContinue
					embedded
					visualOnly
					layout={layout.pressToContinue}
					onpress={handleContinue}
				/>
			{/if}
		</Container>
	</MainContainer>
	{#if context.stateApp.loaded}
		<OnHotkey hotkey="Space" onpress={handleContinue} />
		{#if !carousel}
			<OnPressFullScreen onpress={handleContinue} />
		{/if}
	{/if}
</FadeContainer>

<FadeContainer show={loadingType === 'transition'} label={SCENE_LABELS.fade.loadingTransition}>
	<BonusTransitionAnimation oncomplete={props.onloaded} />
</FadeContainer>

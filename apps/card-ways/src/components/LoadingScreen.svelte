<script lang="ts">
	import { SpineProvider, SpineTrack, Container, Sprite } from 'pixi-svelte';
	import { FadeContainer, LoadingProgress } from 'components-pixi';
	import { MainContainer } from 'components-layout';

	import { getContext } from '../game/context';
	import { LOADING_SCREEN } from '../game/visualLayoutConfig';
	import BonusTransitionAnimation from './BonusTransitionAnimation.svelte';
	import PressToContinue from './PressToContinue.svelte';

	type Props = {
		onloaded: () => void;
	};

	const props: Props = $props();
	const context = getContext();

	const position = $derived({
		x: context.stateLayoutDerived.mainLayout().width * LOADING_SCREEN.xRatio,
		y: context.stateLayoutDerived.mainLayout().height * LOADING_SCREEN.yRatio,
	});

	let loadingType = $state<'start' | 'transition'>('start');
</script>

<FadeContainer show={loadingType === 'start'}>
	<MainContainer>
		<Container x={position.x} y={position.y}>
			<SpineProvider key="logo" width={LOADING_SCREEN.logoWidth}>
				<SpineTrack trackIndex={0} animationName="INTRO" loop />
			</SpineProvider>
			{#if !context.stateApp.loaded}
				<LoadingProgress
					y={LOADING_SCREEN.progressBar.y}
					width={LOADING_SCREEN.progressBar.width}
					height={LOADING_SCREEN.progressBar.height}
				>
					{#snippet background(sizes)}
						<Sprite key="LOADING-BG" {...sizes} />
					{/snippet}
					{#snippet progress(sizes)}
						<Sprite key="LOADING-PROGRESS" {...sizes} />
					{/snippet}
					{#snippet frame(sizes)}{/snippet}
				</LoadingProgress>
			{/if}
		</Container>
	</MainContainer>
</FadeContainer>

<FadeContainer show={loadingType === 'start' && context.stateApp.loaded}>
	<PressToContinue onpress={() => (loadingType = 'transition')} />
</FadeContainer>

<FadeContainer show={loadingType === 'transition'}>
	<BonusTransitionAnimation oncomplete={props.onloaded} />
</FadeContainer>

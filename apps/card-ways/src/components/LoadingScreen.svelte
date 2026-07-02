<script lang="ts">
	import { SpineProvider, SpineTrack, Container, Sprite } from 'pixi-svelte';
	import { FadeContainer, LoadingProgress } from 'components-pixi';
	import { MainContainer } from 'components-layout';

	import { getContext } from '../game/context';
	import { resolveLoadingScreenLayout, SCENE_LABELS } from '../game/visualLayoutConfig';
	import BonusTransitionAnimation from './BonusTransitionAnimation.svelte';
	import PressToContinue from './PressToContinue.svelte';

	type Props = {
		onloaded: () => void;
	};

	const props: Props = $props();
	const context = getContext();
	const layoutType = $derived(context.stateLayoutDerived.layoutType());
	const layout = $derived(resolveLoadingScreenLayout(layoutType));

	let loadingType = $state<'start' | 'transition'>('start');
</script>

<FadeContainer show={loadingType === 'start'} label={SCENE_LABELS.fade.loadingStart}>
	<MainContainer label={SCENE_LABELS.layout.loading}>
		<Container label={SCENE_LABELS.loading.root} x={layout.x} y={layout.y}>
			<SpineProvider label={SCENE_LABELS.loading.logo} key="logo" width={layout.logoWidth}>
				<SpineTrack trackIndex={0} animationName="INTRO" loop />
			</SpineProvider>
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
			{:else}
				<PressToContinue
					embedded
					layout={layout.pressToContinue}
					onpress={() => (loadingType = 'transition')}
				/>
			{/if}
		</Container>
	</MainContainer>
</FadeContainer>

<FadeContainer show={loadingType === 'transition'} label={SCENE_LABELS.fade.loadingTransition}>
	<BonusTransitionAnimation oncomplete={props.onloaded} />
</FadeContainer>

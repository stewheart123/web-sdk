<script lang="ts">
	import { onMount } from 'svelte';

	import { EnablePixiExtension } from 'components-pixi';
	import { EnableHotkey } from 'components-shared';
	import { MainContainer } from 'components-layout';
	import { App } from 'pixi-svelte';
	import { stateModal } from 'state-shared';

	import { GameVersion, HtmlUI, HudGameName, Modals } from 'components-ui-html';

	import { LOADING_TRANSITION_DURATION_MS } from '../game/audioConfig';
	import { getContext } from '../game/context';
	import { INITIAL_BOARD, normalizeBoard } from '../game/constants';
	import { stateGame } from '../game/stateGame.svelte';
	import { SCENE_LABELS, SCENE_LAYERS } from '../game/visualLayoutConfig';
	import EnableSound from './EnableSound.svelte';
	import EnableGameActor from './EnableGameActor.svelte';
	import ResumeBet from './ResumeBet.svelte';
	import Sound from './Sound.svelte';
	import Background from './Background.svelte';
	import ForegroundAnimation from './ForegroundAnimation.svelte';
	import LoadingScreen from './LoadingScreen.svelte';
	import BoardFrame from './BoardFrame.svelte';
	import Board from './Board.svelte';
	import Win from './Win.svelte';
	import FreeSpinIntro from './FreeSpinIntro.svelte';
	import FreeSpinOutro from './FreeSpinOutro.svelte';
	import Transition from './Transition.svelte';
	import ModifierReel from './ModifierReel.svelte';

	const context = getContext();

	let soundActive = $state(false);
	let initialMusicFadeInMs = $state<number | undefined>(undefined);

	const handleTransitionStart = () => {
		initialMusicFadeInMs = LOADING_TRANSITION_DURATION_MS;
		soundActive = true;
	};

	onMount(() => {
		context.stateLayout.showLoadingScreen = true;
	});

	$effect(() => {
		if (!context.stateLayout.showLoadingScreen && !soundActive) {
			soundActive = true;
		}
	});

	context.eventEmitter.subscribeOnMount({
		buyBonusConfirm: () => {
			stateModal.modal = { name: 'buyBonusConfirm' };
		},
		replayRestart: async () => {
			stateGame.gameType = 'basegame';
			stateGame.modifierPersists = false;
			stateGame.modifierMultiplier = 1;
			context.stateGameDerived.enhancedBoard.settle(normalizeBoard(INITIAL_BOARD));
			await context.eventEmitter.broadcastAsync({ type: 'modifierReelOutro' });
			context.eventEmitter.broadcast({ type: 'modifierReelHide' });
			context.eventEmitter.broadcast({ type: 'freeSpinCounterHide' });
		},
	});
</script>

<App>
	<EnableSound />
	<EnableHotkey />
	<EnableGameActor />
	<EnablePixiExtension />

	<Background />

	{#if context.stateLayout.showLoadingScreen}
		<LoadingScreen
			ontransitionstart={handleTransitionStart}
			onloaded={() => (context.stateLayout.showLoadingScreen = false)}
		/>
	{/if}

	{#if soundActive}
		<!--
			Mounted on press-to-continue (user gesture) so autoplay with sound is allowed.
			Ref: https://developer.chrome.com/blog/autoplay
		-->
		<Sound fadeInMs={initialMusicFadeInMs} />
	{/if}

	{#if !context.stateLayout.showLoadingScreen}
		<ResumeBet />

		<MainContainer label={SCENE_LABELS.layout.modifierLayer} zIndex={SCENE_LAYERS.modifier}>
			<ModifierReel />
		</MainContainer>

		<MainContainer label={SCENE_LABELS.layout.frameLayer} zIndex={SCENE_LAYERS.frame}>
			<BoardFrame />
		</MainContainer>

		<ForegroundAnimation />

		<MainContainer label={SCENE_LABELS.layout.boardLayer} zIndex={SCENE_LAYERS.board}>
			<Board />
		</MainContainer>

		<!-- <MainContainerDebugOverlay />  -->
		<!-- TODO remove this -->

		<Win />
		<FreeSpinIntro />
		<FreeSpinOutro />
		<Transition />
	{/if}
</App>

{#if !context.stateLayout.showLoadingScreen}
	<HtmlUI>
		{#snippet gameName()}
			<HudGameName name="BOOSTER BREAK WAYS" />
		{/snippet}
	</HtmlUI>
{/if}

<Modals>
	{#snippet version()}
		<GameVersion version="2.0.0" />
	{/snippet}
</Modals>

<script lang="ts">
	import { onMount, type Snippet } from 'svelte';

	import { getContextApp } from 'pixi-svelte';
	import { getContextLayout } from 'utils-layout';
	import { stateBet, stateBetDerived, stateUi, type UIConfigMode } from 'state-shared';

	type Props = {
		children: Snippet;
		balance?: number;
		betAmount?: number;
		uiMode?: UIConfigMode;
		winAmount?: number;
		freeSpinCounterShow?: boolean;
		freeSpinCounterCurrent?: number;
		freeSpinCounterTotal?: number;
		menuOpen?: boolean;
		replayFinished?: boolean;
	};

	const props: Props = $props();
	const appContext = getContextApp();
	const layoutContext = getContextLayout();

	const seedStoryUiState = () => {
		stateBet.balanceAmount = props.balance ?? 1000;
		stateBet.betToResume = null;
		// Keep ReplayStateSync from auto-marking replay as started in Storybook fixtures.
		stateBet.replayRoundCache = null;
		stateBetDerived.setBetAmount(props.betAmount ?? 1);
		stateBet.winBookEventAmount = props.winAmount ?? 0;
		stateUi.config.mode = props.uiMode ?? 'default';
		stateUi.isBoardAnimating = false;
		stateUi.freeSpinCounterShow = props.freeSpinCounterShow ?? false;
		stateUi.freeSpinCounterCurrent = props.freeSpinCounterCurrent ?? 0;
		stateUi.freeSpinCounterTotal = props.freeSpinCounterTotal ?? 0;
		stateUi.menuOpen = props.menuOpen ?? false;
		stateUi.isWinOverlayActive = false;
		stateUi.isWinFloatShowing = false;
		stateUi.isFreeSpinIntroActive = false;
		stateUi.isFreeSpinOutroActive = false;
		stateUi.replayFinished = props.replayFinished ?? false;
	};

	onMount(() => {
		seedStoryUiState();

		return () => {
			stateUi.config.mode = 'default';
			stateUi.menuOpen = false;
			stateUi.freeSpinCounterShow = false;
			stateUi.replayFinished = false;
			stateBet.replayRoundCache = null;
			stateBet.betToResume = null;
		};
	});

	// Re-seed whenever Storybook Controls change args (and when the app finishes loading).
	// Game.svelte onMount sets showLoadingScreen=true; keep forcing it off after that race.
	$effect(() => {
		const loaded = appContext.stateApp.loaded;
		void props.balance;
		void props.betAmount;
		void props.uiMode;
		void props.winAmount;
		void props.freeSpinCounterShow;
		void props.freeSpinCounterCurrent;
		void props.freeSpinCounterTotal;
		void props.menuOpen;
		void props.replayFinished;
		void layoutContext.stateLayout.showLoadingScreen;

		if (!loaded) return;

		layoutContext.stateLayout.showLoadingScreen = false;
		seedStoryUiState();
	});
</script>

{@render props.children()}

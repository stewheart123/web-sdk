<script lang="ts">
	import { onMount, type Snippet } from 'svelte';

	import { getContextApp } from 'pixi-svelte';
	import { getContextLayout } from 'utils-layout';
	import { stateBet, stateBetDerived, stateUi } from 'state-shared';

	type Props = {
		children: Snippet;
		balance?: number;
		betAmount?: number;
	};

	const props: Props = $props();
	const appContext = getContextApp();
	const layoutContext = getContextLayout();

	const seedStoryUiState = () => {
		stateBet.balanceAmount = props.balance ?? 1000;
		stateBet.betToResume = null;
		stateBetDerived.setBetAmount(props.betAmount ?? 1);
		stateUi.isBoardAnimating = false;
		stateUi.freeSpinCounterShow = false;
		stateUi.isWinOverlayActive = false;
		stateUi.isWinFloatShowing = false;
		stateUi.isFreeSpinIntroActive = false;
		stateUi.isFreeSpinOutroActive = false;
	};

	onMount(() => {
		seedStoryUiState();
	});

	$effect(() => {
		if (appContext.stateApp.loaded) {
			layoutContext.stateLayout.showLoadingScreen = false;
			seedStoryUiState();
		}
	});
</script>

{@render props.children()}

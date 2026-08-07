<script lang="ts">
	import { stateBet, stateUi } from 'state-shared';
	import { getContextEventEmitter } from 'utils-event-emitter';

	import type { EmitterEventHud } from '../../types';
	import HudWin from './HudWin.svelte';

	const { eventEmitter } = getContextEventEmitter<EmitterEventHud>();

	let showWin = $state(false);
	let displayAmount = $state(0);
	let lastCumulativeWin = $state(0);

	$effect(() => {
		stateUi.isWinFloatShowing = showWin;
	});

	$effect(() => {
		const cumulative = stateBet.winBookEventAmount;

		if (cumulative < lastCumulativeWin) {
			lastCumulativeWin = 0;
		}

		if (stateUi.freeSpinCounterShow) {
			if (cumulative > lastCumulativeWin) {
				lastCumulativeWin = cumulative;
			}
			return;
		}

		const delta = cumulative - lastCumulativeWin;

		if (delta > 0) {
			displayAmount = delta;
			showWin = true;
			lastCumulativeWin = cumulative;
		}
	});

	eventEmitter.subscribeOnMount({
		spinStart: () => {
			showWin = false;
		},
		bet: () => {
			lastCumulativeWin = 0;
			showWin = false;
		},
		winFloatShow: (emitterEvent) => {
			lastCumulativeWin = stateBet.winBookEventAmount;

			if (emitterEvent.amount > 0) {
				displayAmount = emitterEvent.amount;
				showWin = true;
			}
		},
	});
</script>

{#if showWin}
	<div class="hud-win-float">
		<HudWin amount={displayAmount} />
	</div>
{/if}

<style lang="scss">
	.hud-win-float {
		position: absolute;
		left: 50%;
		bottom: calc(100% + 0.75rem);
		transform: translateX(-50%);
		pointer-events: none;
		animation: hud-win-in 0.15s ease-out;
	}

	@keyframes hud-win-in {
		from {
			opacity: 0;
			transform: translateX(-50%) translateY(0.35rem);
		}
		to {
			opacity: 1;
			transform: translateX(-50%) translateY(0);
		}
	}
</style>

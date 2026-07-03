<script lang="ts">
	import { FadeContainer } from 'components-pixi';
	import { stateBet } from 'state-shared';

	import LabelWin from './LabelWin.svelte';
	import { getContext } from '../context';
	import type { LabelUiProps } from '../types';

	const props: LabelUiProps = $props();
	const context = getContext();

	let showWin = $state(false);
	let displayAmount = $state(0);
	let lastCumulativeWin = $state(0);

	$effect(() => {
		const cumulative = stateBet.winBookEventAmount;

		if (cumulative < lastCumulativeWin) {
			lastCumulativeWin = 0;
		}

		const delta = cumulative - lastCumulativeWin;

		if (delta > 0) {
			displayAmount = delta;
			showWin = true;
			lastCumulativeWin = cumulative;
		}
	});

	context.eventEmitter.subscribeOnMount({
		spinStart: () => {
			showWin = false;
		},
		bet: () => {
			lastCumulativeWin = 0;
			showWin = false;
		},
	});
</script>

<FadeContainer show={showWin} duration={150}>
	<LabelWin {...props} variant={props.variant ?? 'win'} amount={displayAmount} />
</FadeContainer>

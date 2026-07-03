<script lang="ts">
	import { FadeContainer } from 'components-pixi';
	import { stateBet } from 'state-shared';

	import LabelWin from './LabelWin.svelte';
	import { getContext } from '../context';
	import type { LabelUiProps } from '../types';

	const props: LabelUiProps = $props();
	const context = getContext();

	let showWin = $state(false);
	let wasIdle = $state(context.stateXstateDerived.isIdle());

	$effect(() => {
		if (stateBet.winBookEventAmount > 0) {
			showWin = true;
		}
	});

	$effect(() => {
		const isIdle = context.stateXstateDerived.isIdle();

		if (wasIdle && !isIdle) {
			showWin = false;
		}

		wasIdle = isIdle;
	});

	context.eventEmitter.subscribeOnMount({
		bet: () => {
			showWin = false;
		},
	});
</script>

<FadeContainer show={showWin} duration={150}>
	<LabelWin {...props} variant={props.variant ?? 'win'} />
</FadeContainer>

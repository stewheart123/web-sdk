<script lang="ts">
	import { Tween } from 'svelte/motion';

	import { stateBet } from 'state-shared';
	import { bookEventAmountToCurrencyString } from 'utils-shared/amount';

	import UiLabel from './UiLabel.svelte';
	import { i18nDerived } from '../i18n/i18nDerived';
	import type { LabelUiProps } from '../types';

	const props: LabelUiProps = $props();
	const winBookEventAmountTween = new Tween(stateBet.winBookEventAmount);
	const label = $derived(i18nDerived.win());
	const value = $derived(bookEventAmountToCurrencyString(winBookEventAmountTween.current));

	$effect(() => {
		winBookEventAmountTween.set(stateBet.winBookEventAmount);
	});
</script>

<UiLabel
	tiled
	{label}
	{value}
	stacked={props.stacked}
	variant={props.variant ?? 'win'}
	width={props.width}
	maxHeight={props.maxHeight}
/>

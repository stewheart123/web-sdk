<script lang="ts">
	import { Tween } from 'svelte/motion';

	import { stateBet, stateI18n } from 'state-shared';
	import { bookEventAmountToCurrencyString } from 'utils-shared/amount';

	import UiLabel from './UiLabel.svelte';
	import { i18nDerived } from '../i18n/i18nDerived';
	import type { LabelUiProps } from '../types';

	const props: LabelUiProps = $props();
	const sourceAmount = $derived(props.amount ?? stateBet.winBookEventAmount);
	const winBookEventAmountTween = new Tween(sourceAmount);
	const label = $derived.by(() => {
		stateI18n.locale;
		return i18nDerived.win;
	});
	const value = $derived(bookEventAmountToCurrencyString(winBookEventAmountTween.current));

	$effect(() => {
		winBookEventAmountTween.set(sourceAmount);
	});
</script>

<UiLabel
	tiled
	{label}
	{value}
	stacked={props.stacked}
	variant={props.variant ?? 'win'}
	size={props.size}
	width={props.width}
	maxHeight={props.maxHeight}
/>

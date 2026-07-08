<script lang="ts">
	import { Tween } from 'svelte/motion';

	import { stateBet, stateI18n } from 'state-shared';
	import { numberToCurrencyString } from 'utils-shared/amount';

	import UiLabel from './UiLabel.svelte';
	import { i18nDerived } from '../i18n/i18nDerived';
	import type { LabelUiProps } from '../types';

	const props: LabelUiProps = $props();
	const balanceTween = new Tween(stateBet.balanceAmount);
	const label = $derived.by(() => {
		stateI18n.locale;
		return i18nDerived.balance;
	});
	const value = $derived(numberToCurrencyString(balanceTween.current));

	$effect(() => {
		balanceTween.set(stateBet.balanceAmount);
	});
</script>

<UiLabel
	tiled
	{label}
	{value}
	stacked={props.stacked}
	size={props.size}
	width={props.width}
	maxHeight={props.maxHeight}
/>

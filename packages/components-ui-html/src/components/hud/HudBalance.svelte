<script lang="ts">
	import { Tween } from 'svelte/motion';
	import { stateBet, stateI18n } from 'state-shared';
	import { formatLabelWithCurrency, numberToAmountString } from 'utils-shared/amount';

	import { i18nDerived } from '../../i18n/i18nDerived';
	import HudLabel from './HudLabel.svelte';

	const balanceTween = new Tween(stateBet.balanceAmount);
	const label = $derived.by(() => {
		stateI18n.locale;
		return formatLabelWithCurrency(i18nDerived.balance);
	});
	const value = $derived(numberToAmountString(balanceTween.current));

	$effect(() => {
		balanceTween.set(stateBet.balanceAmount);
	});
</script>

<HudLabel {label} {value} />

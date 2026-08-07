<script lang="ts">
	import { Tween } from 'svelte/motion';
	import { stateBet, stateI18n } from 'state-shared';
	import { bookEventAmountToCurrencyString } from 'utils-shared/amount';

	import { i18nDerived } from '../../i18n/i18nDerived';
	import HudLabel from './HudLabel.svelte';

	type Props = {
		amount?: number;
	};

	const props: Props = $props();
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

<HudLabel {label} {value} variant="win" />

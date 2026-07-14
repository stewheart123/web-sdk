<script lang="ts">
	import { Container } from 'pixi-svelte';
	import { stateBetDerived, stateModal, stateI18n, stateUrlDerived } from 'state-shared';
	import { formatLabelWithCurrency, numberToAmountString } from 'utils-shared/amount';

	import UiLabel from './UiLabel.svelte';
	import { getContext } from '../context';
	import { isBettingControlsLocked } from '../bettingControlsLocked';
	import { i18nDerived } from '../i18n/i18nDerived';
	import type { LabelUiProps } from '../types';

	const props: LabelUiProps = $props();
	const context = getContext();
	const label = $derived.by(() => {
		stateI18n.locale;
		void stateUrlDerived.social();
		const baseLabel = stateBetDerived.activeBetMode()?.text.betAmountLabel || i18nDerived.bet;
		return formatLabelWithCurrency(baseLabel);
	});
	const value = $derived(numberToAmountString(stateBetDerived.betCost()));
	const fitCharCount = $derived(value.length);
	const disabled = $derived(isBettingControlsLocked(context.stateXstateDerived.isIdle));

	const onpress = () => {
		if (disabled) return;
		context.eventEmitter.broadcast({ type: 'soundPressGeneral' });
		stateModal.modal = { name: 'betAmountMenu' };
	};
</script>

<Container eventMode="static" cursor={disabled ? 'not-allowed' : 'pointer'} onpointerup={onpress}>
	<UiLabel
		tiled
		bordered
		borderAlpha={disabled ? 0.35 : 1}
		{label}
		{value}
		{fitCharCount}
		stacked={props.stacked}
		size={props.size}
		width={props.width}
		maxHeight={props.maxHeight}
	/>
</Container>

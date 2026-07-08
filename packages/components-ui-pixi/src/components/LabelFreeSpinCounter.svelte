<script lang="ts">
	import { stateUi, stateI18n } from 'state-shared';

	import UiLabel from './UiLabel.svelte';
	import { i18nDerived } from '../i18n/i18nDerived';

	type Props = {
		stacked?: boolean;
	};

	const props: Props = $props();
	const label = $derived.by(() => {
		stateI18n.locale;
		return i18nDerived.freeSpins;
	});
	const value = $derived(`${stateUi.freeSpinCounterCurrent} / ${stateUi.freeSpinCounterTotal}`);
</script>

<UiLabel tiled {label} {value} stacked={props.stacked} />

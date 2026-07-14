<script lang="ts">
	import { Container } from 'pixi-svelte';
	import { restartReplay } from 'components-shared';

	import UiLabel from './UiLabel.svelte';
	import { getContext } from '../context';
	import { i18nDerived } from '../i18n/i18nDerived';
	import type { LabelUiProps } from '../types';

	const props: LabelUiProps = $props();
	const context = getContext();
	const label = $derived(i18nDerived.watchReplayAgain);
	const fitCharCount = $derived(label.length);

	const onpress = () => {
		if (!context.stateXstateDerived.isIdle) return;
		context.eventEmitter.broadcast({ type: 'soundPressGeneral' });
		restartReplay({
			eventEmitter: context.eventEmitter,
			isIdle: context.stateXstateDerived.isIdle,
		});
	};
</script>

<Container eventMode="static" cursor="pointer" onpointerup={onpress}>
	<UiLabel
		tiled
		bordered
		label=""
		value={label}
		{fitCharCount}
		stacked={props.stacked}
		size={props.size}
		width={props.width}
		maxHeight={props.maxHeight}
	/>
</Container>

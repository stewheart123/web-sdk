<script lang="ts">
	import { SpineProvider, SpineTrack, type SpineTrackProps } from 'pixi-svelte';
	import { stateBetDerived } from 'state-shared';

	import { getSymbolInfo } from '../game/utils';
	import { SYMBOL_CONTENT_SCALE, SYMBOL_SIZE } from '../game/constants';

	type Props = {
		label?: string;
		symbolInfo: ReturnType<typeof getSymbolInfo>;
		x?: number;
		y?: number;
		height?: number;
		anchor?: number;
		listener: SpineTrackProps['listener'];
		loop?: boolean;
	};

	const props: Props = $props();
	const height = $derived(
		props.height ?? SYMBOL_SIZE * props.symbolInfo.sizeRatios.height,
	);
</script>

<SpineProvider
	label={props.label}
	x={props.x}
	y={props.y}
	key={props.symbolInfo.assetKey}
	anchor={props.anchor}
	{height}
	scale={SYMBOL_CONTENT_SCALE}
>
	<SpineTrack
		loop={props.loop ?? props.symbolInfo.loop ?? false}
		trackIndex={0}
		animationName={props.symbolInfo.animationName}
		timeScale={stateBetDerived.timeScale()}
		listener={props.listener}
	/>
</SpineProvider>

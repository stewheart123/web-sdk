<script lang="ts">
	import SymbolSpine from './SymbolSpine.svelte';
	import SymbolSprite from './SymbolSprite.svelte';
	import { getSymbolInfo } from '../game/utils';
	import type { SymbolState, RawSymbol } from '../game/types';
	import { BitmapText } from 'pixi-svelte';
	import { getBitmapFontStyle } from '../game/fontConfig';

	type Props = {
		x?: number;
		y?: number;
		state: SymbolState;
		rawSymbol: RawSymbol;
		oncomplete?: () => void;
		loop?: boolean;
	};

	const props: Props = $props();
	const symbolInfo = $derived(getSymbolInfo({ rawSymbol: props.rawSymbol, state: props.state }));
	const isSprite = $derived(symbolInfo.type === 'sprite');

	$effect(() => {
		if (props.state === 'land' && symbolInfo.type === 'spine' && symbolInfo.loop) {
			props.oncomplete?.();
		}
	});

	// WIN animations are ~1.6s; fallback so book events (e.g. free spin trigger) never hang.
	$effect(() => {
		if (props.state === 'win' && symbolInfo.type === 'spine' && !symbolInfo.loop) {
			let cancelled = false;
			waitForTimeout(1700).then(() => {
				if (!cancelled) props.oncomplete?.();
			});
			return () => {
				cancelled = true;
			};
		}
	});
</script>

{#if isSprite}
	<SymbolSprite {symbolInfo} x={props.x} y={props.y} oncomplete={props.oncomplete} />
{:else}
	<SymbolSpine
		loop={props.loop}
		{symbolInfo}
		x={props.x}
		y={props.y}
		listener={{
			complete: props.oncomplete,
		}}
	/>
{/if}

{#if props.rawSymbol.multiplier}
	<BitmapText
		anchor={0.5}
		x={props.x}
		y={props.y}
		text={`${props.rawSymbol.multiplier}X`}
		style={getBitmapFontStyle('symbolMultiplier')}
	/>
{/if}

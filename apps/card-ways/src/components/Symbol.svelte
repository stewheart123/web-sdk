<script lang="ts">
	import SymbolSpine from './SymbolSpine.svelte';
	import SymbolSprite from './SymbolSprite.svelte';
	import { getSymbolInfo } from '../game/utils';
	import type { SymbolState, RawSymbol } from '../game/types';
	import { BitmapText, SpineProvider, SpineTrack } from 'pixi-svelte';
	import { getBitmapFontStyle } from '../game/fontConfig';
	import { getContext } from '../game/context';
	import { SYMBOL_CONTENT_SCALE, SYMBOL_SIZE } from '../game/constants';
	import { sceneLabel } from '../game/visualLayoutConfig';
	import { waitForTimeout } from 'utils-shared/wait';

	type Props = {
		reelIndex: number;
		row: number;
		x?: number;
		y?: number;
		state: SymbolState;
		rawSymbol: RawSymbol;
		oncomplete?: () => void;
		loop?: boolean;
	};

	const WIN_PLAY_COUNT = 2;
	/** ~1.6s per play; buffer so book events never hang waiting on Spine complete. */
	const WIN_FALLBACK_MS = 1700 * WIN_PLAY_COUNT;

	const props: Props = $props();
	const context = getContext();
	const layoutType = $derived(context.stateLayoutDerived.layoutType());
	const symbolInfo = $derived(getSymbolInfo({ rawSymbol: props.rawSymbol, state: props.state }));
	const isSprite = $derived(symbolInfo.type === 'sprite');
	const symbolLabel = $derived(sceneLabel.symbol(props.reelIndex, props.row));
	const isWin = $derived(props.state === 'win');
	const showWinMarking = $derived(props.state === 'postWinStatic');

	let winPlaysCompleted = $state(0);

	$effect(() => {
		if (isWin) winPlaysCompleted = 0;
	});

	// Looping land (IDLE) never "finishes" meaningfully — complete immediately so settle → static.
	$effect(() => {
		if (props.state === 'land' && symbolInfo.type === 'spine' && symbolInfo.loop) {
			props.oncomplete?.();
		}
	});

	const handleSpineComplete = () => {
		if (isWin) {
			winPlaysCompleted += 1;
			if (winPlaysCompleted < WIN_PLAY_COUNT) return;
		}
		props.oncomplete?.();
	};

	// Fallback so book events (e.g. free spin trigger) never hang if Spine complete is missed.
	$effect(() => {
		if (isWin && symbolInfo.type === 'spine') {
			let cancelled = false;
			waitForTimeout(WIN_FALLBACK_MS).then(() => {
				if (!cancelled) props.oncomplete?.();
			});
			return () => {
				cancelled = true;
			};
		}
	});
</script>

{#if isSprite}
	<SymbolSprite label={symbolLabel} {symbolInfo} x={props.x} y={props.y} oncomplete={props.oncomplete} />
{:else}
	<SymbolSpine
		label={symbolLabel}
		loop={isWin ? true : props.loop}
		{symbolInfo}
		x={props.x}
		y={props.y}
		listener={{
			complete: handleSpineComplete,
		}}
	/>
{/if}

{#if showWinMarking}
	<SpineProvider
		x={props.x}
		y={props.y}
		key="cardSymbols"
		height={SYMBOL_SIZE}
		scale={SYMBOL_CONTENT_SCALE}
	>
		<SpineTrack trackIndex={0} animationName="WIN-MARKING-WEAK" loop={true} />
	</SpineProvider>
{/if}

{#if props.rawSymbol.multiplier}
	<BitmapText
		label={sceneLabel.symbolMultiplier(props.reelIndex, props.row)}
		anchor={0.5}
		x={props.x}
		y={props.y}
		text={`${props.rawSymbol.multiplier}X`}
		style={getBitmapFontStyle('symbolMultiplier', { layoutType })}
	/>
{/if}

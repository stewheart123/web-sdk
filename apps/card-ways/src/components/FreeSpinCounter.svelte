<script lang="ts" module>
	export type EmitterEventFreeSpinCounter =
		| { type: 'freeSpinCounterShow' }
		| { type: 'freeSpinCounterHide' }
		| { type: 'freeSpinCounterUpdate'; current?: number; total?: number };
</script>

<script lang="ts">
	import { MainContainer } from 'components-layout';
	import { FadeContainer } from 'components-pixi';

	import { getContext } from '../game/context';
	import { SYMBOL_SIZE } from '../game/constants';
	import { getBitmapFontStyle } from '../game/fontConfig';
	import { FREE_SPIN_COUNTER } from '../game/visualLayoutConfig';
	import { anchorToPivot, BitmapText, Container, Sprite, type Sizes } from 'pixi-svelte';

	const context = getContext();
	const layoutType = $derived(context.stateLayoutDerived.layoutType());
	const panelWidth = $derived(SYMBOL_SIZE * FREE_SPIN_COUNTER.widthMultiplier);
	const panelSizes = $derived({
		width: panelWidth,
		height: panelWidth / FREE_SPIN_COUNTER.panelRatio,
	});
	const position = $derived.by(() => {
		const boardLayout = context.stateGameDerived.boardLayout();
		const scaledBoardHalfWidth = boardLayout.width * 0.5 * boardLayout.scale;

		return {
			x:
				boardLayout.x -
				scaledBoardHalfWidth -
				panelSizes.width -
				SYMBOL_SIZE * FREE_SPIN_COUNTER.gapFromBoard,
			y: boardLayout.y - boardLayout.height * 0.5 * boardLayout.scale,
		};
	});

	const freeSpinCounterStyle = $derived(
		getBitmapFontStyle('freeSpinCounter', { symbolSize: SYMBOL_SIZE, layoutType }),
	);

	let show = $state(false);
	let current = $state(0);
	let total = $state(0);
	let titleSizes: Sizes = $state({ width: 0, height: 0 });
	let counterSizes: Sizes = $state({ width: 0, height: 0 });

	const textContainerSizes = $derived({
		width: titleSizes.width,
		height: titleSizes.height + counterSizes.height,
	});
	const counterPosition = $derived({ x: titleSizes.width / 2, y: titleSizes.height });

	context.eventEmitter.subscribeOnMount({
		freeSpinCounterShow: () => (show = true),
		freeSpinCounterHide: () => (show = false),
		freeSpinCounterUpdate: (emitterEvent) => {
			if (emitterEvent.current !== undefined) current = emitterEvent.current;
			if (emitterEvent.total !== undefined) total = emitterEvent.total;
		},
	});
</script>

<MainContainer>
	<FadeContainer show={show} {...position} scale={FREE_SPIN_COUNTER.scale}>
		<Sprite key={FREE_SPIN_COUNTER.panelKey} {...panelSizes} />
		<Container
			x={panelSizes.width * FREE_SPIN_COUNTER.textContainerXRatio}
			y={panelSizes.height * FREE_SPIN_COUNTER.textContainerYRatio}
			pivot={anchorToPivot({
				sizes: textContainerSizes,
				anchor: FREE_SPIN_COUNTER.textContainerAnchor,
			})}
		>
			<BitmapText
				text={'FREE SPIN'}
				style={{
					...freeSpinCounterStyle,
					wordWrap: false,
				}}
				onresize={(sizes) => (titleSizes = sizes)}
			/>
			<BitmapText
				text={`${current} OF ${total}`}
				{...counterPosition}
				anchor={FREE_SPIN_COUNTER.counterTextAnchor}
				style={freeSpinCounterStyle}
				onresize={(sizes) => (counterSizes = sizes)}
			/>
		</Container>
	</FadeContainer>
</MainContainer>

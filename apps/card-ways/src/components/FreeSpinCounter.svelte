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
	import { getFreeSpinCounterLayout, SCENE_LABELS } from '../game/visualLayoutConfig';
	import { anchorToPivot, BitmapText, Container, Sprite, type Sizes } from 'pixi-svelte';

	const context = getContext();
	const layoutType = $derived(context.stateLayoutDerived.layoutType());
	const counterLayout = $derived(getFreeSpinCounterLayout(layoutType));
	const panelSizes = $derived(counterLayout.panel);
	const position = $derived.by(() => {
		const boardLayout = context.stateGameDerived.boardLayout();
		const scaledBoardHalfWidth = boardLayout.width * 0.5 * boardLayout.scale;

		return {
			x:
				boardLayout.x -
				scaledBoardHalfWidth -
				panelSizes.width -
				counterLayout.gapFromBoard,
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

<MainContainer label={SCENE_LABELS.layout.freeSpinCounter}>
	<FadeContainer
		show={show}
		{...position}
		scale={counterLayout.scale}
		label={SCENE_LABELS.fade.freeSpinCounter}
	>
		<Sprite
			label={SCENE_LABELS.freeSpin.counter.panel}
			key={counterLayout.panelKey}
			{...panelSizes}
		/>
		<Container
			label={SCENE_LABELS.freeSpin.counter.text}
			x={counterLayout.text.x}
			y={counterLayout.text.y}
			pivot={anchorToPivot({
				sizes: textContainerSizes,
				anchor: counterLayout.text.containerAnchor,
			})}
		>
			<BitmapText
				label={SCENE_LABELS.freeSpin.counter.title}
				text={'FREE SPIN'}
				style={{
					...freeSpinCounterStyle,
					wordWrap: false,
				}}
				onresize={(sizes) => (titleSizes = sizes)}
			/>
			<BitmapText
				label={SCENE_LABELS.freeSpin.counter.count}
				text={`${current} OF ${total}`}
				{...counterPosition}
				anchor={counterLayout.text.counterTextAnchor}
				style={freeSpinCounterStyle}
				onresize={(sizes) => (counterSizes = sizes)}
			/>
		</Container>
	</FadeContainer>
</MainContainer>

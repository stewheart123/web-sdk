<script lang="ts" module>
	export type EmitterEventFreeSpinCounter =
		| { type: 'freeSpinCounterShow' }
		| { type: 'freeSpinCounterHide' }
		| { type: 'freeSpinCounterUpdate'; current?: number; total?: number };
</script>

<script lang="ts">
	import * as PIXI from 'pixi.js';
	import { MainContainer } from 'components-layout';
	import { AspectFitSprite, FadeContainer } from 'components-pixi';
	import { stateUi, stateUrlDerived } from 'state-shared';

	import { getContext } from '../game/context';
	import { SYMBOL_SIZE } from '../game/constants';
	import { getBitmapFontStyle } from '../game/fontConfig';
	import { resolveLocalizedSpriteKey, resolveSpriteLang } from '../game/syncLocale';
	import { getFreeSpinCounterLayout, SCENE_LABELS } from '../game/visualLayoutConfig';
	import { anchorToPivot, BitmapText, Container, type Sizes } from 'pixi-svelte';

	const context = getContext();
	const layoutType = $derived(context.stateLayoutDerived.layoutType());
	const counterLayout = $derived(getFreeSpinCounterLayout(layoutType));
	const titleLabel = $derived(counterLayout.titleLabel);
	const position = $derived.by(() => {
		const boardLayout = context.stateGameDerived.boardLayout();
		const scaledBoardHalfWidth = boardLayout.width * 0.5 * boardLayout.scale;

		return {
			x: boardLayout.x - scaledBoardHalfWidth - counterLayout.gapFromBoard,
			y: boardLayout.y - boardLayout.height * 0.5 * boardLayout.scale,
		};
	});

	const freeSpinCounterStyle = $derived(
		getBitmapFontStyle('freeSpinCounter', { symbolSize: SYMBOL_SIZE, layoutType }),
	);

	const show = $derived(stateUi.freeSpinCounterShow);
	const current = $derived(stateUi.freeSpinCounterCurrent);
	const total = $derived(stateUi.freeSpinCounterTotal);

	const spriteLang = $derived(resolveSpriteLang(stateUrlDerived.lang()));
	const textureKey = $derived(
		resolveLocalizedSpriteKey('freespinslabel', spriteLang, context.stateApp.loadedAssets),
	);
	const texture = $derived(
		(context.stateApp.loadedAssets?.[textureKey] ?? PIXI.Texture.EMPTY) as PIXI.Texture,
	);
	const titleSizes = $derived.by(() => {
		const nw = texture.width || 1;
		const nh = texture.height || 1;
		const scaleX = titleLabel.maxWidth / nw;
		const scaleY = titleLabel.maxHeight / nh;
		const fitScale = Math.min(scaleX, scaleY) * titleLabel.scale;
		return { width: nw * fitScale, height: nh * fitScale };
	});

	let counterSizes: Sizes = $state({ width: 0, height: 0 });

	const lineGap = $derived(counterLayout.text.lineGap);
	const textContainerSizes = $derived({
		width: titleSizes.width,
		height: titleSizes.height + lineGap + counterSizes.height,
	});
	const counterPosition = $derived({
		x: titleSizes.width / 2,
		y: titleSizes.height + lineGap,
	});
</script>

<MainContainer label={SCENE_LABELS.layout.freeSpinCounter}>
	<FadeContainer
		persistent
		{show}
		{...position}
		scale={counterLayout.scale}
		label={SCENE_LABELS.fade.freeSpinCounter}
	>
		<Container
			label={SCENE_LABELS.freeSpin.counter.text}
			x={counterLayout.text.x}
			y={counterLayout.text.y}
			pivot={anchorToPivot({
				sizes: textContainerSizes,
				anchor: counterLayout.text.containerAnchor,
			})}
		>
			<Container
				label={SCENE_LABELS.freeSpin.counter.titleLabel}
				x={titleLabel.x ?? 0}
				y={titleLabel.y ?? 0}
				scale={titleLabel.scale}
			>
				<AspectFitSprite
					label={SCENE_LABELS.freeSpin.counter.title}
					key={textureKey}
					anchor={titleLabel.anchor}
					maxWidth={titleLabel.maxWidth}
					maxHeight={titleLabel.maxHeight}
				/>
			</Container>
			<BitmapText
				label={SCENE_LABELS.freeSpin.counter.count}
				text={`${current}` + ` / ` + `${total}`}
				{...counterPosition}
				anchor={counterLayout.text.counterTextAnchor}
				style={freeSpinCounterStyle}
				onresize={(sizes) => (counterSizes = sizes)}
			/>
		</Container>
	</FadeContainer>
</MainContainer>

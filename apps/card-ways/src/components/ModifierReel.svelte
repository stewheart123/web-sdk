<script lang="ts" module>
	export type EmitterEventModifierReel =
		| { type: 'modifierReelShow' }
		| { type: 'modifierReelHide' }
		| { type: 'modifierReelWin' }
		| {
				type: 'modifierReelUpdate';
				multiplier: number;
				modifierName: string;
				persists: boolean;
		  };
</script>

<script lang="ts">
	import { Tween } from 'svelte/motion';

	import { BitmapText, Container, Rectangle, Sprite } from 'pixi-svelte';
	import { FadeContainer } from 'components-pixi';
	import { waitForTimeout } from 'utils-shared/wait';

	import BoardContainer from './BoardContainer.svelte';
	import { getContext } from '../game/context';
	import { getBitmapFontStyle } from '../game/fontConfig';
	import { getModifierLayoutSettings, SCENE_LABELS } from '../game/visualLayoutConfig';
	import { resolveModifierSymbolName, type ModifierSymbolName } from '../game/utils';

	const context = getContext();
	const layoutType = $derived(context.stateLayoutDerived.layoutType());
	const layout = $derived(getModifierLayoutSettings(layoutType));
	const position = $derived({
		x: context.stateGameDerived.boardLayout().width + layout.x,
		y: layout.y,
	});
	const textStyle = $derived(
		getBitmapFontStyle('winNormal', { symbolSize: layout.cardHeight, layoutType }),
	);

	const previousCardY = new Tween(0);
	const currentCardY = new Tween(0);

	let show = $state(false);
	let isAnimating = $state(false);
	let multiplier = $state(1);
	let previousMultiplier = $state(1);
	let incomingMultiplier = $state(1);
	let modifierName = $state<ModifierSymbolName>('X1');

	const formatMultiplier = (value: number) => `${value}X`;

	const playWinAnimation = async () => {
		const inBonus = context.stateGame.gameType === 'freegame';

		if (!show || isAnimating) return;
		if (!inBonus && multiplier <= 1) return;

		// Placeholder until multiplier cards have dedicated art / win anims.
		await waitForTimeout(400);
	};

	const playScrollAnimation = async () => {
		const { scrollDistance, scrollDuration } = getModifierLayoutSettings(
			context.stateLayoutDerived.layoutType(),
		);

		isAnimating = true;
		previousCardY.set(0, { duration: 0 });
		currentCardY.set(scrollDistance, { duration: 0 });

		await Promise.all([
			previousCardY.set(-scrollDistance, { duration: scrollDuration }),
			currentCardY.set(0, { duration: scrollDuration }),
		]);

		previousCardY.set(0, { duration: 0 });
		currentCardY.set(0, { duration: 0 });
		isAnimating = false;
	};

	context.eventEmitter.subscribeOnMount({
		modifierReelShow: () => (show = true),
		modifierReelHide: () => (show = false),
		modifierReelWin: async () => {
			await playWinAnimation();
		},
		modifierReelUpdate: async (emitterEvent) => {
			const nextName = resolveModifierSymbolName(
				emitterEvent.modifierName,
				emitterEvent.multiplier,
			);
			const nextMultiplier = emitterEvent.multiplier;

			const symbolChanged = nextName !== modifierName;

			if (symbolChanged) {
				if (nextMultiplier === 1 && multiplier !== 1) {
					await waitForTimeout(300);
				}
				previousMultiplier = multiplier;
				incomingMultiplier = nextMultiplier;
				multiplier = nextMultiplier;
				await playScrollAnimation();
				modifierName = nextName;
				previousMultiplier = multiplier;
			} else {
				multiplier = nextMultiplier;
				modifierName = nextName;
				previousMultiplier = multiplier;
				incomingMultiplier = nextMultiplier;
				previousCardY.set(0, { duration: 0 });
				currentCardY.set(0, { duration: 0 });
			}
		},
	});
</script>

<FadeContainer {show} label={SCENE_LABELS.fade.modifier}>
	<BoardContainer>
		<Container label={SCENE_LABELS.modifier.root} {...position} scale={layout.scale}>
			<Sprite
				label={SCENE_LABELS.modifier.slab}
				key="modifierSlabFrame"
				anchor={0.5}
				width={layout.slabWidth}
				height={layout.slabHeight}
			/>
			<Container label={SCENE_LABELS.modifier.cardWindow} y={layout.cardWindowY}>
				<Rectangle
					label={SCENE_LABELS.modifier.cardWindowMask}
					isMask
					anchor={0.5}
					width={layout.cardWindowWidth}
					height={layout.cardWindowHeight}
					backgroundAlpha={0}
				/>
				<Container label={SCENE_LABELS.modifier.card} y={layout.cardYOffset}>
					{#if isAnimating}
						<BitmapText
							label={SCENE_LABELS.modifier.cardSpine}
							anchor={0.5}
							y={previousCardY.current}
							text={formatMultiplier(previousMultiplier)}
							style={textStyle}
						/>
						<BitmapText
							label={SCENE_LABELS.modifier.cardSpine}
							anchor={0.5}
							y={currentCardY.current}
							text={formatMultiplier(incomingMultiplier)}
							style={textStyle}
						/>
					{:else}
						<BitmapText
							label={SCENE_LABELS.modifier.cardSpine}
							anchor={0.5}
							y={0}
							text={formatMultiplier(multiplier)}
							style={textStyle}
						/>
					{/if}
				</Container>
			</Container>
		</Container>
	</BoardContainer>
</FadeContainer>

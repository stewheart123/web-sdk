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

	import { Container, Rectangle, Sprite } from 'pixi-svelte';
	import { FadeContainer } from 'components-pixi';
	import { waitForResolve, waitForTimeout } from 'utils-shared/wait';

	import BoardContainer from './BoardContainer.svelte';
	import SymbolSpineMain from './SymbolSpineMain.svelte';
	import { getContext } from '../game/context';
	import { SYMBOL_SIZE } from '../game/constants';
	import { getModifierLayoutSettings } from '../game/modifierLayoutConfig';
	import {
		getSymbolInfo,
		resolveModifierSymbolName,
		type ModifierSymbolName,
	} from '../game/utils';
	import type { SymbolState } from '../game/types';

	const context = getContext();
	const layout = $derived(getModifierLayoutSettings(context.stateLayoutDerived.layoutType()));
	const scale = $derived(context.stateLayoutDerived.isStacked() ? 1.28 : 1);
	const desktopPosition = $derived({
		x: context.stateGameDerived.boardLayout().width + layout.slabWidth * 0.75,
		y: SYMBOL_SIZE * 1,
	});
	const portraitPosition = $derived({
		x: context.stateGameDerived.boardLayout().width - layout.slabWidth * 3.5,
		y: -SYMBOL_SIZE * 0.55,
	});
	const position = $derived(
		context.stateLayoutDerived.isStacked() ? portraitPosition : desktopPosition,
	);

	const getModifierSymbolInfo = (name: ModifierSymbolName, state: SymbolState = 'static') =>
		getSymbolInfo({ rawSymbol: { name }, state });

	const previousCardY = new Tween(0);
	const currentCardY = new Tween(0);

	let show = $state(false);
	let isAnimating = $state(false);
	let symbolState = $state<SymbolState>('static');
	let multiplier = $state(1);
	let modifierName = $state<ModifierSymbolName>('X1');
	let previousModifierName = $state<ModifierSymbolName>('X1');
	let incomingModifierName = $state<ModifierSymbolName>('X1');
	let onWinComplete = $state(() => {});

	const previousSymbolInfo = $derived(getModifierSymbolInfo(previousModifierName));
	const currentSymbolInfo = $derived(getModifierSymbolInfo(modifierName, symbolState));
	const incomingSymbolInfo = $derived(getModifierSymbolInfo(incomingModifierName));

	const playWinAnimation = async () => {
		if (!show || isAnimating || multiplier <= 1) return;

		symbolState = 'win';
		await Promise.race([
			waitForResolve((resolve) => (onWinComplete = resolve)),
			waitForTimeout(1700),
		]);
		symbolState = 'static';
		onWinComplete = () => {};
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

			let shouldAnimate = false;

			if (emitterEvent.multiplier === 1 && multiplier !== 1) {
				await waitForTimeout(300);
				shouldAnimate = true;
			} else if (emitterEvent.multiplier > multiplier) {
				shouldAnimate = true;
			}

			if (shouldAnimate) {
				previousModifierName = modifierName;
				incomingModifierName = nextName;
				multiplier = emitterEvent.multiplier;
				await playScrollAnimation();
				modifierName = nextName;
				previousModifierName = modifierName;
			} else {
				multiplier = emitterEvent.multiplier;
				modifierName = nextName;
				previousModifierName = modifierName;
				incomingModifierName = nextName;
				previousCardY.set(0, { duration: 0 });
				currentCardY.set(0, { duration: 0 });
			}
		},
	});
</script>

<FadeContainer {show}>
	<BoardContainer>
		<Container {...position} {scale}>
			<Sprite
				key="modifierSlabFrame"
				anchor={0.5}
				width={layout.slabWidth}
				height={layout.slabHeight}
			/>
			<Container y={layout.cardWindowY}>
				<Rectangle
					isMask
					anchor={0.5}
					width={layout.cardWindowWidth}
					height={layout.cardWindowHeight}
					backgroundAlpha={0}
				/>
				<Container y={layout.cardYOffset}>
					{#if isAnimating}
						{#key previousModifierName}
							<SymbolSpineMain
								symbolInfo={previousSymbolInfo}
								y={previousCardY.current}
								height={layout.cardHeight}
								anchor={0.5}
								loop
								listener={{}}
							/>
						{/key}
						{#key incomingModifierName}
							<SymbolSpineMain
								symbolInfo={incomingSymbolInfo}
								y={currentCardY.current}
								height={layout.cardHeight}
								anchor={0.5}
								loop
								listener={{}}
							/>
						{/key}
					{:else}
						{#key `${modifierName}-${symbolState}`}
							<SymbolSpineMain
								symbolInfo={currentSymbolInfo}
								y={0}
								height={layout.cardHeight}
								anchor={0.5}
								loop={symbolState === 'static'}
								listener={{
									complete: () => onWinComplete(),
								}}
							/>
						{/key}
					{/if}
				</Container>
			</Container>
		</Container>
	</BoardContainer>
</FadeContainer>

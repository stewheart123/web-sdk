<script lang="ts" module>
	import type { WinLevelData } from '../game/winLevelMap';

	export type EmitterEventWin =
		| { type: 'winShow' }
		| { type: 'winHide' }
		| { type: 'winUpdate'; amount: number; winLevelData: WinLevelData };
</script>

<script lang="ts">
	import { Container } from 'pixi-svelte';
	import { FadeContainer, WinCountUpProvider, ResponsiveBitmapText } from 'components-pixi';
	import { waitForResolve, waitForTimeout } from 'utils-shared/wait';
	import { bookEventAmountToCurrencyString } from 'utils-shared/amount';
	import { CanvasSizeRectangle, MainContainer, OnPressFullScreen } from 'components-layout';
	import { OnHotkey, OnMount } from 'components-shared';

	import WinAnimation from './WinAnimation.svelte';
	import PressToContinue from './PressToContinue.svelte';
	import { SYMBOL_SIZE } from '../game/constants';
	import { getBitmapFontStyle } from '../game/fontConfig';
	import { getContext } from '../game/context';
	import {
		OVERLAY,
		resolveWinPressToContinueLayout,
		resolveWinTextMaxWidth,
		WIN_LAYOUT,
		SCENE_LABELS,
		SCENE_LAYERS,
	} from '../game/visualLayoutConfig';

	const context = getContext();
	const layoutType = $derived(context.stateLayoutDerived.layoutType());
	const boardLayout = $derived(context.stateGameDerived.boardLayout());
	const mainLayout = $derived(context.stateLayoutDerived.mainLayout());
	const canvasSizes = $derived(context.stateLayoutDerived.canvasSizes());

	const stopCoinCountSound = () => {
		context.eventEmitter.broadcast({
			type: 'soundStop',
			name: 'sfx_bigwin_coinloop',
			afterCurrentLoop: true,
		});
	};

	let show = $state(false);
	let amount = $state(0);
	let winLevelData = $state<WinLevelData>();
	let oncomplete = $state(() => {});

	context.eventEmitter.subscribeOnMount({
		winShow: () => (show = true),
		winHide: () => (show = false),
		winUpdate: async (emitterEvent) => {
			amount = emitterEvent.amount;
			winLevelData = emitterEvent.winLevelData;
			await waitForResolve((resolve) => (oncomplete = resolve));
		},
	});
</script>

<FadeContainer {show} label={SCENE_LABELS.fade.win} zIndex={SCENE_LAYERS.overlay}>
	{#if winLevelData}
		{@const isBigWin = winLevelData.type === 'big'}
		{@const duration = winLevelData.presentDuration}
		<WinCountUpProvider {amount} {duration} oncomplete={stopCoinCountSound}>
			{#snippet children({ countUpAmount, startCountUp, finishCountUp, countUpCompleted })}
				{@const winTextVariant = winLevelData.animation ? 'bigWin' : 'normalWin'}
				{@const winTextMaxWidth = resolveWinTextMaxWidth(winTextVariant, layoutType, boardLayout, {
					canvasWidth: canvasSizes.width,
					mainLayoutScale: mainLayout.scale,
					boardScale: boardLayout.scale,
				})}
				{@const pressToContinueLayout = resolveWinPressToContinueLayout(
					winTextVariant,
					boardLayout,
				)}
				{@const handleContinue = () =>
					countUpCompleted ? oncomplete() : finishCountUp()}
				{#if isBigWin}
					<CanvasSizeRectangle
						label={SCENE_LABELS.win.dim}
						backgroundColor={OVERLAY.backgroundColor}
						backgroundAlpha={OVERLAY.backgroundAlpha}
					/>
				{/if}

				<OnMount
					onmount={async () => {
						await startCountUp();
						if (!context.stateXstateDerived.isAutoBetting) return;
						await waitForTimeout(WIN_LAYOUT.countUpCompleteDelayMs);
						oncomplete();
					}}
				/>

				<MainContainer label={SCENE_LABELS.layout.win}>
					<Container
						label={SCENE_LABELS.win.root}
						x={boardLayout.x}
						y={boardLayout.y}
						pivot={boardLayout.pivot}
						scale={boardLayout.scale}
					>
						{#if winLevelData?.animation}
							<WinAnimation animationName={winLevelData.animation}>
								<Container
									label={SCENE_LABELS.win.bigText}
									x={WIN_LAYOUT.bigWinTextOffset.x}
									y={WIN_LAYOUT.bigWinTextOffset.y}
									scale={WIN_LAYOUT.bigWinTextContainerScale}
								>
									<ResponsiveBitmapText
										label={SCENE_LABELS.win.bigText}
										anchor={0.5}
										maxWidth={winTextMaxWidth}
										minFitScale={WIN_LAYOUT.bigWinMinFitScale}
										text={bookEventAmountToCurrencyString(countUpAmount)}
										style={{
											...getBitmapFontStyle('winBig', {
												symbolSize: SYMBOL_SIZE,
												layoutType,
											}),
											fontWeight: 'bold',
										}}
									/>
								</Container>
							</WinAnimation>
						{:else}
							<ResponsiveBitmapText
								label={SCENE_LABELS.win.normalText}
								x={boardLayout.pivot.x}
								y={boardLayout.pivot.y + WIN_LAYOUT.normalWinTextOffsetY}
								anchor={0.5}
								maxWidth={winTextMaxWidth}
								text={bookEventAmountToCurrencyString(countUpAmount)}
								style={{
									...getBitmapFontStyle('winNormal', {
										symbolSize: SYMBOL_SIZE,
										layoutType,
									}),
									fontWeight: 'bold',
								}}
							/>
						{/if}

						<PressToContinue
							embedded
							visualOnly
							layout={pressToContinueLayout}
							onpress={handleContinue}
						/>
					</Container>
				</MainContainer>

				<OnHotkey hotkey="Space" onpress={handleContinue} />
				<OnPressFullScreen onpress={handleContinue} />
			{/snippet}
		</WinCountUpProvider>
	{/if}
</FadeContainer>

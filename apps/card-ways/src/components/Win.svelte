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
	import { CanvasSizeRectangle, MainContainer } from 'components-layout';
	import { OnMount } from 'components-shared';

	import WinAnimation from './WinAnimation.svelte';
	import PressToContinue from './PressToContinue.svelte';
	import { SYMBOL_SIZE } from '../game/constants';
	import { getBitmapFontStyle } from '../game/fontConfig';
	import { getContext } from '../game/context';
	import { OVERLAY, resolveWinPressToContinueLayout, WIN_LAYOUT, SCENE_LABELS } from '../game/visualLayoutConfig';

	const context = getContext();
	const layoutType = $derived(context.stateLayoutDerived.layoutType());
	const boardLayout = $derived(context.stateGameDerived.boardLayout());

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

<FadeContainer {show} label={SCENE_LABELS.fade.win}>
	{#if winLevelData}
		{@const isBigWin = winLevelData.type === 'big'}
		{@const duration = winLevelData.presentDuration}
		<WinCountUpProvider {amount} {duration} oncomplete={stopCoinCountSound}>
			{#snippet children({ countUpAmount, startCountUp, finishCountUp, countUpCompleted })}
				{@const pressToContinueLayout = resolveWinPressToContinueLayout(
					winLevelData.animation ? 'bigWin' : 'normalWin',
					boardLayout,
				)}
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
								<Container label={SCENE_LABELS.win.bigText} scale={WIN_LAYOUT.bigWinTextContainerScale}>
									<ResponsiveBitmapText
										label={SCENE_LABELS.win.bigText}
										anchor={0.5}
										maxWidth={WIN_LAYOUT.bigWinTextMaxWidth}
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
								y={boardLayout.pivot.y}
								anchor={0.5}
								maxWidth={context.stateLayoutDerived.canvasSizes().width /
									context.stateLayoutDerived.mainLayout().scale}
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
							layout={pressToContinueLayout}
							onpress={() => (countUpCompleted ? oncomplete() : finishCountUp())}
						/>
					</Container>
				</MainContainer>
			{/snippet}
		</WinCountUpProvider>
	{/if}
</FadeContainer>

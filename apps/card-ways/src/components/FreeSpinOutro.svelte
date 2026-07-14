<script lang="ts" module>
	import type { WinLevelData } from '../game/winLevelMap';

	export type EmitterEventFreeSpinOutro =
		| { type: 'freeSpinOutroShow' }
		| { type: 'freeSpinOutroHide' }
		| { type: 'freeSpinOutroCountUp'; amount: number; winLevelData: WinLevelData };
</script>

<script lang="ts">
	import { AspectFitSprite, FadeContainer, WinCountUpProvider } from 'components-pixi';
	import { bookEventAmountToCurrencyString } from 'utils-shared/amount';
	import { waitForResolve } from 'utils-shared/wait';
	import { CanvasSizeRectangle, OnPressFullScreen } from 'components-layout';
	import { OnHotkey, OnMount } from 'components-shared';
	import { stateUrlDerived } from 'state-shared';

	import { getBitmapFontStyle } from '../game/fontConfig';
	import { getContext } from '../game/context';
	import { resolveLocalizedSpriteKey, resolveSpriteLang } from '../game/syncLocale';
	import { OVERLAY, resolveFreeSpinOutroLayout, SCENE_LABELS } from '../game/visualLayoutConfig';
	import FreeSpinAnimation from './FreeSpinAnimation.svelte';
	import FreeSpinNumberDisplay from './FreeSpinNumberDisplay.svelte';
	import PressToContinue from './PressToContinue.svelte';

	const context = getContext();
	const layoutType = $derived(context.stateLayoutDerived.layoutType());

	let show = $state(true);
	let outroKey = $state(0);
	let amount = $state(0);
	let winLevelData = $state<WinLevelData>();
	let oncomplete = $state(() => {});
	let fadeOutResolve = $state<(() => void) | null>(null);

	const stopCoinCountSound = () => {
		context.eventEmitter.broadcast({
			type: 'soundStop',
			name: 'sfx_bigwin_coinloop',
			afterCurrentLoop: true,
		});
	};

	const handleFadeOutComplete = () => {
		if (!show && fadeOutResolve) {
			fadeOutResolve();
			fadeOutResolve = null;
		}
	};

	const handleContinue = async (countUpCompleted: boolean, finishCountUp: () => void) => {
		if (!countUpCompleted) {
			finishCountUp();
			return;
		}

		show = false;
		await waitForResolve((resolve) => (fadeOutResolve = resolve));
		oncomplete();
	};

	context.eventEmitter.subscribeOnMount({
		freeSpinOutroShow: () => {
			outroKey += 1;
			show = true;
		},
		freeSpinOutroHide: async () => (show = false),
		freeSpinOutroCountUp: async (emitterEvent) => {
			amount = emitterEvent.amount;
			winLevelData = emitterEvent.winLevelData;
			await waitForResolve((resolve) => (oncomplete = resolve));
		},
	});
</script>

<FadeContainer {show} duration={OVERLAY.fadeDurationMs} oncomplete={handleFadeOutComplete} label={SCENE_LABELS.fade.freeSpinOutro}>
	{#if winLevelData}
		{@const duration = winLevelData.presentDuration}
		{@const isBigWin = winLevelData.type === 'big'}
		<WinCountUpProvider {amount} {duration} oncomplete={stopCoinCountSound}>
			{#snippet children({ countUpAmount, startCountUp, finishCountUp, countUpCompleted })}
				<OnMount onmount={() => startCountUp()} />

				<CanvasSizeRectangle
					label={SCENE_LABELS.overlay.dim}
					backgroundColor={OVERLAY.backgroundColor}
					backgroundAlpha={OVERLAY.backgroundAlpha}
				/>

				{#key outroKey}
					<FreeSpinAnimation modalKey="FOIL-MODAL-RED.png">
						{#snippet children({ sizes })}
							{@const spriteLang = resolveSpriteLang(stateUrlDerived.lang())}
							{@const layout = resolveFreeSpinOutroLayout(sizes, spriteLang, layoutType)}

							<FreeSpinNumberDisplay
								layout={layout.numberText}
								layoutKey={layoutType}
								text={bookEventAmountToCurrencyString(countUpAmount)}
								responsive
								textStyle={getBitmapFontStyle('freeSpinOutro', {
									width: sizes.width,
									layoutType,
									sizeRatio: layout.numberText.fontSizeRatio,
								})}
							/>

							{#if isBigWin}
								<AspectFitSprite
									label={SCENE_LABELS.freeSpin.outro.bigWinCongrats}
									anchor={layout.bigWinCongrats.anchor}
									maxWidth={layout.bigWinCongrats.maxWidth}
									maxHeight={layout.bigWinCongrats.maxHeight}
									y={layout.bigWinCongrats.y}
									key={resolveLocalizedSpriteKey('freespins', spriteLang, context.stateApp.loadedAssets)}
									zIndex={layout.youWon.zIndex}
								/>
							{:else}
								<AspectFitSprite
									label={SCENE_LABELS.freeSpin.outro.youWon}
									anchor={layout.youWon.anchor}
									maxWidth={layout.youWon.maxWidth}
									maxHeight={layout.youWon.maxHeight}
									x={layout.youWon.x}
									y={layout.youWon.y}
									zIndex={layout.youWon.zIndex}
									key={resolveLocalizedSpriteKey('winsmall', spriteLang, context.stateApp.loadedAssets)}
								/>
							{/if}

							<AspectFitSprite
								label={SCENE_LABELS.freeSpin.outro.totalWin}
								anchor={layout.totalWin.anchor}
								maxWidth={isBigWin ? layout.totalWin.bigMaxWidth : layout.totalWin.maxWidth}
								maxHeight={layout.totalWin.maxHeight}
								x={layout.totalWin.x}
								y={layout.totalWin.y}
								zIndex={layout.totalWin.zIndex}
								key={resolveLocalizedSpriteKey('totalwin', spriteLang, context.stateApp.loadedAssets)}
							/>

							<PressToContinue
								embedded
								visualOnly
								layout={layout.pressToContinue}
								onpress={() => handleContinue(countUpCompleted, finishCountUp)}
							/>
						{/snippet}
					</FreeSpinAnimation>
				{/key}

				<OnHotkey
					hotkey="Space"
					onpress={() => handleContinue(countUpCompleted, finishCountUp)}
				/>
				<OnPressFullScreen
					onpress={() => handleContinue(countUpCompleted, finishCountUp)}
				/>
			{/snippet}
		</WinCountUpProvider>
	{/if}
</FadeContainer>

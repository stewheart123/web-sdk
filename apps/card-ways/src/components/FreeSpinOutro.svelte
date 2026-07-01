<script lang="ts" module>
	import type { WinLevelData } from '../game/winLevelMap';

	export type EmitterEventFreeSpinOutro =
		| { type: 'freeSpinOutroShow' }
		| { type: 'freeSpinOutroHide' }
		| { type: 'freeSpinOutroCountUp'; amount: number; winLevelData: WinLevelData };
</script>

<script lang="ts">
	import { Sprite, SpineProvider, SpineTrack, SpineSlot } from 'pixi-svelte';
	import { FadeContainer, WinCountUpProvider, ResponsiveBitmapText } from 'components-pixi';
	import { bookEventAmountToCurrencyString } from 'utils-shared/amount';
	import { waitForResolve } from 'utils-shared/wait';
	import { CanvasSizeRectangle } from 'components-layout';
	import { OnMount } from 'components-shared';
	import { stateUrlDerived } from 'state-shared';

	import { getBitmapFontStyle } from '../game/fontConfig';
	import { getContext } from '../game/context';
	import { FREE_SPIN_OUTRO, OVERLAY, SCENE_LABELS } from '../game/visualLayoutConfig';
	import FreeSpinAnimation from './FreeSpinAnimation.svelte';
	import PressToContinue from './PressToContinue.svelte';

	type AnimationName = 'intro' | 'idle';

	const context = getContext();
	const layoutType = $derived(context.stateLayoutDerived.layoutType());
	const YOU_WON_LABEL = FREE_SPIN_OUTRO.youWon;
	const TOTAL_WIN_LABEL = FREE_SPIN_OUTRO.totalWin;

	let show = $state(true);
	let outroKey = $state(0);
	let animationName = $state<AnimationName>('intro');
	let amount = $state(0);
	let winLevelData = $state<WinLevelData>();
	let oncomplete = $state(() => {});
	let onCountUpComplete = $state(() => {});
	let fadeOutResolve = $state<(() => void) | null>(null);

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
			animationName = 'intro';
		},
		freeSpinOutroHide: async () => (show = false),
		freeSpinOutroCountUp: async (emitterEvent) => {
			amount = emitterEvent.amount;
			winLevelData = emitterEvent.winLevelData;
			await waitForResolve((resolve) => (oncomplete = resolve));
		},
	});
</script>

<FadeContainer {show} duration={OVERLAY.fadeDurationMs} oncomplete={handleFadeOutComplete}>
	{#if winLevelData}
		{@const duration = winLevelData.presentDuration}
		{@const isBigWin = winLevelData.type === 'big'}
		<WinCountUpProvider {amount} {duration} oncomplete={() => onCountUpComplete()}>
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
							<SpineProvider
								label={SCENE_LABELS.freeSpin.outro.numberSpine}
								key="fsOutroNumber"
								width={sizes.width * FREE_SPIN_OUTRO.numberSpine.widthRatio}
								zIndex={FREE_SPIN_OUTRO.numberSpine.zIndex}
							>
								<SpineTrack
									trackIndex={0}
									{animationName}
									loop={animationName === 'idle'}
									listener={{
										complete: () => (animationName = 'idle'),
									}}
								/>
								<SpineSlot slotName="slot_number">
									<ResponsiveBitmapText
										label={SCENE_LABELS.freeSpin.outro.numberText}
										anchor={0.5}
										style={getBitmapFontStyle('freeSpinOutro', {
											width: sizes.width,
											layoutType,
										})}
										text={bookEventAmountToCurrencyString(countUpAmount)}
										maxWidth={sizes.width * FREE_SPIN_OUTRO.numberSpine.maxWidthRatio}
									/>
								</SpineSlot>
							</SpineProvider>

							{#if isBigWin}
								<Sprite
									label={SCENE_LABELS.freeSpin.outro.bigWinCongrats}
									anchor={FREE_SPIN_OUTRO.bigWinCongratsSprite.anchor}
									width={FREE_SPIN_OUTRO.bigWinCongratsSprite.width}
									height={FREE_SPIN_OUTRO.bigWinCongratsSprite.height}
									key="freespins_{stateUrlDerived.lang()}.png"
									zIndex={YOU_WON_LABEL.zIndex}
								/>
							{:else}
								<Sprite
									label={SCENE_LABELS.freeSpin.outro.youWon}
									anchor={YOU_WON_LABEL.anchor}
									width={sizes.width * YOU_WON_LABEL.widthScale}
									height={sizes.width * YOU_WON_LABEL.heightScale}
									x={YOU_WON_LABEL.x}
									y={sizes.height * YOU_WON_LABEL.yRatio}
									zIndex={YOU_WON_LABEL.zIndex}
									key="winsmall_{stateUrlDerived.lang()}.png"
								/>
							{/if}

							{@const totalWinWidthScale = isBigWin
								? TOTAL_WIN_LABEL.bigWidthScale
								: TOTAL_WIN_LABEL.widthScale}
							{@const totalWinHeightScale = isBigWin
								? TOTAL_WIN_LABEL.bigHeightScale
								: TOTAL_WIN_LABEL.heightScale}

							<Sprite
								label={SCENE_LABELS.freeSpin.outro.totalWin}
								anchor={TOTAL_WIN_LABEL.anchor}
								width={sizes.width * totalWinWidthScale}
								height={sizes.width * totalWinHeightScale}
								x={TOTAL_WIN_LABEL.x}
								y={sizes.height * TOTAL_WIN_LABEL.yRatio}
								zIndex={TOTAL_WIN_LABEL.zIndex}
								key="totalwin_{stateUrlDerived.lang()}.png"
							/>
						{/snippet}
					</FreeSpinAnimation>
				{/key}

				<PressToContinue
					onpress={() => handleContinue(countUpCompleted, finishCountUp)}
				/>
			{/snippet}
		</WinCountUpProvider>
	{/if}
</FadeContainer>

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

	import { HALF_SECOND } from 'constants-shared/time';

	import { waitForResolve } from 'utils-shared/wait';

	import { CanvasSizeRectangle } from 'components-layout';

	import { OnMount } from 'components-shared';

	import { stateUrlDerived } from 'state-shared';



	import { getBitmapFontStyle } from '../game/fontConfig';

	import { getContext } from '../game/context';

	import FreeSpinAnimation from './FreeSpinAnimation.svelte';

	import PressToContinue from './PressToContinue.svelte';



	type AnimationName = 'intro' | 'idle';



	const context = getContext();

	const FADE_DURATION = HALF_SECOND;

	// --- ADJUST FREE SPIN OUTRO LABELS (position / scale) ---
	const YOU_WON_LABEL = {
		anchor: { x: 0.5, y: 0.5 },
		widthScale: 0.7,
		heightScale: 0.07,
		x: 0,
		yRatio: -0.28,
		zIndex: 2,
	};

	const TOTAL_WIN_LABEL = {
		anchor: { x: 0.5, y: 0.5 },
		widthScale: 0.55,
		heightScale: 0.055,
		x: 0,
		yRatio: 0.28,
		zIndex: 2,
		bigWidthScale: 0.4,
		bigHeightScale: 0.045,
	};
	// --- END ADJUST ---

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



<FadeContainer {show} duration={FADE_DURATION} oncomplete={handleFadeOutComplete}>

	{#if winLevelData}

		{@const duration = winLevelData.presentDuration}

		{@const isBigWin = winLevelData.type === 'big'}

		<WinCountUpProvider {amount} {duration} oncomplete={() => onCountUpComplete()}>

			{#snippet children({ countUpAmount, startCountUp, finishCountUp, countUpCompleted })}

				<OnMount onmount={() => startCountUp()} />



				<CanvasSizeRectangle backgroundColor={0x000000} backgroundAlpha={0.5} />



				{#key outroKey}

					<FreeSpinAnimation modalKey="FOIL-MODAL-RED.png">

						{#snippet children({ sizes })}

							<SpineProvider key="fsOutroNumber" width={sizes.width * 0.4} zIndex={1}>

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

										anchor={0.5}

										style={getBitmapFontStyle('freeSpinOutro', { width: sizes.width })}

										text={bookEventAmountToCurrencyString(countUpAmount)}

										maxWidth={sizes.width}

									/>

								</SpineSlot>

							</SpineProvider>



							{#if isBigWin}

								<Sprite

									anchor={{ x: 0.5, y: 1.2 }}

									width={426 * 2.2}

									height={85 * 2.2}

									key="freespins_{stateUrlDerived.lang()}.png"

									zIndex={YOU_WON_LABEL.zIndex}

								/>

							{:else}

								<Sprite
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



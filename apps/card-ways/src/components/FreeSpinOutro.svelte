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

							{#if isBigWin}

								<Sprite

									anchor={{ x: 0.5, y: 1.2 }}

									width={426 * 2.2}

									height={85 * 2.2}

									key="freespins_{stateUrlDerived.lang()}.png"

								/>

							{:else}

								<Sprite

									anchor={{ x: 0.5, y: 1.2 }}

									width={500 * 4.5}

									height={80 * 4.5}

									key="winsmall_{stateUrlDerived.lang()}.png"

								/>

							{/if}



							<SpineProvider key="fsOutroNumber" width={sizes.width * 0.4}>

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



							<Sprite

								anchor={{ x: 0.5, y: isBigWin ? -3.2 : -2 }}

								width={(isBigWin ? 92 : 126) * (309 / 71)}

								height={isBigWin ? 92 : 126}

								key="totalwin.png"

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



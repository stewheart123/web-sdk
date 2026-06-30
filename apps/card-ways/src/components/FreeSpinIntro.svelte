<script lang="ts" module>

	export type EmitterEventFreeSpinIntro =

		| { type: 'freeSpinIntroShow' }

		| { type: 'freeSpinIntroHide' }

		| { type: 'freeSpinIntroUpdate'; totalFreeSpins: number };

</script>



<script lang="ts">

	import { CanvasSizeRectangle } from 'components-layout';

	import { stateUrlDerived } from 'state-shared';

	import { FadeContainer } from 'components-pixi';

	import { HALF_SECOND } from 'constants-shared/time';

	import { waitForResolve } from 'utils-shared/wait';

	import { BitmapText, SpineProvider, SpineSlot, SpineTrack, Sprite } from 'pixi-svelte';



	import { getBitmapFontStyle } from '../game/fontConfig';

	import { getContext } from '../game/context';

	import PressToContinue from './PressToContinue.svelte';

	import FreeSpinAnimation from './FreeSpinAnimation.svelte';



	type AnimationName = 'intro' | 'idle';



	const context = getContext();

	const FADE_DURATION = HALF_SECOND;



	let show = $state(false);

	let introKey = $state(0);

	let animationName = $state<AnimationName>('intro');

	let freeSpinsFromEvent = $state(0);

	let oncomplete = $state(() => {});

	let fadeOutResolve = $state<(() => void) | null>(null);



	const handleFadeOutComplete = () => {

		if (!show && fadeOutResolve) {

			fadeOutResolve();

			fadeOutResolve = null;

		}

	};



	const handleContinue = async () => {

		show = false;

		await waitForResolve((resolve) => (fadeOutResolve = resolve));

		oncomplete();

	};



	context.eventEmitter.subscribeOnMount({

		freeSpinIntroShow: () => {

			introKey += 1;

			show = true;

			animationName = 'intro';

		},

		freeSpinIntroHide: () => (show = false),

		freeSpinIntroUpdate: async (emitterEvent) => {

			freeSpinsFromEvent = emitterEvent.totalFreeSpins;

			await waitForResolve((resolve) => (oncomplete = resolve));

		},

	});

</script>



<FadeContainer {show} duration={FADE_DURATION} oncomplete={handleFadeOutComplete}>

	<CanvasSizeRectangle backgroundColor={0x000000} backgroundAlpha={0.5} />



	{#key introKey}

		<FreeSpinAnimation modalKey="FOIL-MODAL-BLUE.png">

			{#snippet children({ sizes })}

				<Sprite

					anchor={{ x: 0.5, y: 1.2 }}

					width={426 * 2.2}

					height={85 * 2.2}

					key="freespins_{stateUrlDerived.lang()}.png"

				/>



				<SpineProvider key="fsIntroNumber" width={sizes.width * 0.3}>

					<SpineTrack

						trackIndex={0}

						{animationName}

						loop={animationName === 'idle'}

						listener={{

							complete: () => (animationName = 'idle'),

						}}

					/>

					<SpineSlot slotName="slot_number">

						<BitmapText

							anchor={{ x: 0.5, y: 0.5 }}

							text={freeSpinsFromEvent}

							style={{

								...getBitmapFontStyle('freeSpinIntro', { width: sizes.width }),

								fontWeight: 'bold',

							}}

						/>

					</SpineSlot>

				</SpineProvider>



				<Sprite anchor={{ x: 0.5, y: 3 }} width={335 * 2.2} height={67 * 2.2} key="freespins.png" />

			{/snippet}

		</FreeSpinAnimation>

	{/key}



	<PressToContinue onpress={handleContinue} />

</FadeContainer>



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
	import { waitForResolve } from 'utils-shared/wait';
	import { BitmapText, SpineProvider, SpineSlot, SpineTrack, Sprite } from 'pixi-svelte';

	import { getBitmapFontStyle } from '../game/fontConfig';
	import { getContext } from '../game/context';
	import { FREE_SPIN_INTRO, OVERLAY, SCENE_LABELS } from '../game/visualLayoutConfig';
	import PressToContinue from './PressToContinue.svelte';
	import FreeSpinAnimation from './FreeSpinAnimation.svelte';

	type AnimationName = 'intro' | 'idle';

	const context = getContext();
	const layoutType = $derived(context.stateLayoutDerived.layoutType());

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

<FadeContainer
	{show}
	duration={OVERLAY.fadeDurationMs}
	oncomplete={handleFadeOutComplete}
>
	<CanvasSizeRectangle
		label={SCENE_LABELS.overlay.dim}
		backgroundColor={OVERLAY.backgroundColor}
		backgroundAlpha={OVERLAY.backgroundAlpha}
	/>

	{#key introKey}
		<FreeSpinAnimation modalKey="FOIL-MODAL-BLUE.png">
			{#snippet children({ sizes })}
				<Sprite
					label={SCENE_LABELS.freeSpin.intro.congrats}
					anchor={FREE_SPIN_INTRO.congratsSprite.anchor}
					width={FREE_SPIN_INTRO.congratsSprite.width}
					height={FREE_SPIN_INTRO.congratsSprite.height}
					key="freespins_{stateUrlDerived.lang()}.png"
				/>

				<SpineProvider
					label={SCENE_LABELS.freeSpin.intro.numberSpine}
					key="fsIntroNumber"
					width={sizes.width * FREE_SPIN_INTRO.numberSpine.widthRatio}
					y={FREE_SPIN_INTRO.numberSpine.y}
					zIndex={FREE_SPIN_INTRO.numberSpine.zIndex}
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
						<BitmapText
							label={SCENE_LABELS.freeSpin.intro.numberText}
							anchor={FREE_SPIN_INTRO.numberSpine.numberTextAnchor}
							text={freeSpinsFromEvent}
							style={{
								...getBitmapFontStyle('freeSpinIntro', {
									width: sizes.width,
									layoutType,
								}),
								fontWeight: 'bold',
							}}
						/>
					</SpineSlot>
				</SpineProvider>

				<Sprite
					label={SCENE_LABELS.freeSpin.intro.freeSpinsLabel}
					anchor={FREE_SPIN_INTRO.freeSpinsLabel.anchor}
					width={FREE_SPIN_INTRO.freeSpinsLabel.width}
					height={FREE_SPIN_INTRO.freeSpinsLabel.height}
					key="freespins.png"
				/>
			{/snippet}
		</FreeSpinAnimation>
	{/key}

	<PressToContinue onpress={handleContinue} />
</FadeContainer>

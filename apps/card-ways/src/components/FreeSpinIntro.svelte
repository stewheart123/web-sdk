<script lang="ts" module>
	export type EmitterEventFreeSpinIntro =
		| { type: 'freeSpinIntroShow' }
		| { type: 'freeSpinIntroHide' }
		| { type: 'freeSpinIntroUpdate'; totalFreeSpins: number };
</script>

<script lang="ts">
	import { CanvasSizeRectangle, OnPressFullScreen } from 'components-layout';
	import { OnHotkey } from 'components-shared';
	import { stateUrlDerived } from 'state-shared';
	import { AspectFitSprite, FadeContainer } from 'components-pixi';
	import { waitForResolve, waitForTimeout } from 'utils-shared/wait';

	import { getBitmapFontStyle } from '../game/fontConfig';
	import { getContext } from '../game/context';
	import { resolveLocalizedSpriteKey, resolveSpriteLang } from '../game/syncLocale';
	import {
		FREE_SPIN_MODAL,
		OVERLAY,
		resolveFreeSpinIntroLayout,
		SCENE_LABELS,
	} from '../game/visualLayoutConfig';
	import PressToContinue from './PressToContinue.svelte';
	import FreeSpinAnimation from './FreeSpinAnimation.svelte';
	import FreeSpinNumberDisplay from './FreeSpinNumberDisplay.svelte';

	const context = getContext();
	const layoutType = $derived(context.stateLayoutDerived.layoutType());

	let show = $state(false);
	let exiting = $state(false);
	let introKey = $state(0);
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
		if (exiting) return;

		// Play first half of OUTRO fully visible, then fade through the rest.
		exiting = true;
		await waitForTimeout(FREE_SPIN_MODAL.outroFadeStartDelayMs);
		show = false;
		await waitForResolve((resolve) => (fadeOutResolve = resolve));
		oncomplete();
	};

	context.eventEmitter.subscribeOnMount({
		freeSpinIntroShow: () => {
			introKey += 1;
			exiting = false;
			show = true;
		},
		freeSpinIntroHide: () => (show = false),
		freeSpinIntroUpdate: async (emitterEvent) => {
			freeSpinsFromEvent = emitterEvent.totalFreeSpins;
			await waitForResolve((resolve) => (oncomplete = resolve));
		},
	});
</script>

<FadeContainer
	label={SCENE_LABELS.fade.freeSpinIntro}
	{show}
	duration={OVERLAY.fadeDurationMs}
	outDuration={FREE_SPIN_MODAL.fadeOutDurationMs}
	oncomplete={handleFadeOutComplete}
>
	<CanvasSizeRectangle
		label={SCENE_LABELS.overlay.dim}
		backgroundColor={OVERLAY.backgroundColor}
		backgroundAlpha={OVERLAY.backgroundAlpha}
	/>

	{#key introKey}
		<FreeSpinAnimation {exiting}>
			{#snippet children({ sizes })}
				{@const spriteLang = resolveSpriteLang(stateUrlDerived.lang())}
				{@const layout = resolveFreeSpinIntroLayout(sizes, spriteLang)}

				<AspectFitSprite
					label={SCENE_LABELS.freeSpin.intro.congrats}
					anchor={layout.congrats.anchor}
					maxWidth={layout.congrats.maxWidth}
					maxHeight={layout.congrats.maxHeight}
					y={layout.congrats.y}
					key={resolveLocalizedSpriteKey('freespins', spriteLang, context.stateApp.loadedAssets)}
				/>

				<FreeSpinNumberDisplay
					layout={layout.numberText}
					layoutKey={layoutType}
					text={String(freeSpinsFromEvent)}
					pulse
					textStyle={getBitmapFontStyle('freeSpinIntro', {
						width: sizes.width,
						layoutType,
						sizeRatio: layout.numberText.fontSizeRatio,
					})}
				/>

				<AspectFitSprite
					label={SCENE_LABELS.freeSpin.intro.freeSpinsLabel}
					anchor={layout.freeSpinsLabel.anchor}
					maxWidth={layout.freeSpinsLabel.maxWidth}
					maxHeight={layout.freeSpinsLabel.maxHeight}
					key={resolveLocalizedSpriteKey('freespinslabel', spriteLang, context.stateApp.loadedAssets)}
				/>

				<PressToContinue
					embedded
					visualOnly
					layout={layout.pressToContinue}
					onpress={handleContinue}
				/>
			{/snippet}
		</FreeSpinAnimation>
	{/key}

	<OnHotkey hotkey="Space" onpress={handleContinue} />
	<OnPressFullScreen onpress={handleContinue} />
</FadeContainer>

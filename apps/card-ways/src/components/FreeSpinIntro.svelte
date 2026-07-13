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
	import { waitForResolve } from 'utils-shared/wait';

	import { getBitmapFontStyle } from '../game/fontConfig';
	import { getContext } from '../game/context';
	import { resolveLocalizedSpriteKey, resolveSpriteLang } from '../game/syncLocale';
	import { OVERLAY, resolveFreeSpinIntroLayout, SCENE_LABELS } from '../game/visualLayoutConfig';
	import PressToContinue from './PressToContinue.svelte';
	import FreeSpinAnimation from './FreeSpinAnimation.svelte';
	import FreeSpinNumberDisplay from './FreeSpinNumberDisplay.svelte';

	const context = getContext();
	const layoutType = $derived(context.stateLayoutDerived.layoutType());

	let show = $state(false);
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
		show = false;
		await waitForResolve((resolve) => (fadeOutResolve = resolve));
		oncomplete();
	};

	context.eventEmitter.subscribeOnMount({
		freeSpinIntroShow: () => {
			introKey += 1;
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

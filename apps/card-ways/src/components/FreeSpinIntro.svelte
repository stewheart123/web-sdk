<script lang="ts" module>
	export type EmitterEventFreeSpinIntro =
		| { type: 'freeSpinIntroShow' }
		| { type: 'freeSpinIntroHide' }
		| { type: 'freeSpinIntroUpdate'; totalFreeSpins: number };
</script>

<script lang="ts">
	import { CanvasSizeRectangle, OnPressFullScreen } from 'components-layout';
	import { OnHotkey } from 'components-shared';
	import { FadeContainer } from 'components-pixi';
	import { waitForResolve, waitForTimeout } from 'utils-shared/wait';

	import { getBitmapFontStyle } from '../game/fontConfig';
	import { getContext } from '../game/context';
	import {
		FREE_SPIN_MODAL,
		OVERLAY,
		resolveFreeSpinIntroLayout,
		SCENE_LABELS,
		SCENE_LAYERS,
	} from '../game/visualLayoutConfig';
	import FreeSpinAnimation from './FreeSpinAnimation.svelte';
	import FreeSpinNumberDisplay from './FreeSpinNumberDisplay.svelte';

	const context = getContext();
	const layoutType = $derived(context.stateLayoutDerived.layoutType());

	let show = $state(false);
	let exiting = $state(false);
	let introKey = $state(0);
	let freeSpinsFromEvent = $state(0);
	let oncomplete = $state(() => {});
	let outroStartedResolve = $state<(() => void) | null>(null);
	let fadeOutResolve = $state<(() => void) | null>(null);

	const handleFadeOutComplete = () => {
		if (!show && fadeOutResolve) {
			fadeOutResolve();
			fadeOutResolve = null;
		}
	};

	const handleOutroStarted = () => {
		outroStartedResolve?.();
		outroStartedResolve = null;
	};

	const handleContinue = async () => {
		if (exiting) return;

		exiting = true;
		await waitForResolve((resolve) => (outroStartedResolve = resolve));
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
	zIndex={SCENE_LAYERS.overlay}
>
	<CanvasSizeRectangle
		label={SCENE_LABELS.overlay.dim}
		backgroundColor={OVERLAY.backgroundColor}
		backgroundAlpha={OVERLAY.backgroundAlpha}
	/>

	{#key introKey}
		<FreeSpinAnimation mode="intro" {exiting} onOutroStarted={handleOutroStarted}>
			{#snippet children({ sizes })}
				{@const layout = resolveFreeSpinIntroLayout(sizes)}

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
			{/snippet}
		</FreeSpinAnimation>
	{/key}

	<OnHotkey hotkey="Space" onpress={handleContinue} />
	<OnPressFullScreen onpress={handleContinue} />
</FadeContainer>

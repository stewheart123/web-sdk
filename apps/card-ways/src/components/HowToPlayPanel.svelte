<script lang="ts">
	import * as PIXI from 'pixi.js';
	import { Container, Sprite, Text } from 'pixi-svelte';

	import { getContext } from '../game/context';
	import type { HowToPlayPanelDef } from '../game/howToPlayPanels';
	import { CINZEL_FONT_FAMILY } from '../game/preloadCinzelFont';
	import type { HowToPlayPanelLayoutSettings } from '../game/visualLayoutConfig';
	import { SCENE_LABELS } from '../game/visualLayoutConfig';

	type Props = {
		panel: HowToPlayPanelDef;
		layout: HowToPlayPanelLayoutSettings;
		x?: number;
		y?: number;
	};

	const props: Props = $props();
	const context = getContext();

	const bgTexture = $derived(
		(context.stateApp.loadedAssets?.[props.panel.bgKey] ?? PIXI.Texture.EMPTY) as PIXI.Texture,
	);
	const fgTexture = $derived(
		(context.stateApp.loadedAssets?.[props.panel.fgKey] ?? PIXI.Texture.EMPTY) as PIXI.Texture,
	);

	const panelHeight = $derived(
		bgTexture.width > 0
			? props.layout.panelWidth * (bgTexture.height / bgTexture.width)
			: props.layout.panelHeight,
	);

	/** Nearly card-width, preserving each FG's native aspect ratio. */
	const fgSizes = $derived.by(() => {
		const maxWidth = props.layout.panelWidth * 0.86;
		if (fgTexture.width <= 0 || fgTexture.height <= 0) {
			return { width: maxWidth, height: props.layout.fgSize };
		}
		const scale = maxWidth / fgTexture.width;
		return {
			width: maxWidth,
			height: fgTexture.height * scale,
		};
	});
</script>

<Container
	label={`${SCENE_LABELS.loading.howToPlay.panel}/${props.panel.id}`}
	x={props.x ?? 0}
	y={props.y ?? 0}
>
	<Sprite
		label={SCENE_LABELS.loading.howToPlay.panelBg}
		key={props.panel.bgKey}
		width={props.layout.panelWidth}
		height={panelHeight}
		anchor={0.5}
	/>
	<Sprite
		label={SCENE_LABELS.loading.howToPlay.panelFg}
		key={props.panel.fgKey}
		width={fgSizes.width}
		height={fgSizes.height}
		anchor={0.5}
		y={props.layout.fgY}
	/>
	<Text
		label={SCENE_LABELS.loading.howToPlay.panelText}
		text={props.panel.text}
		anchor={{ x: 0.5, y: 0 }}
		y={props.layout.textY}
		style={{
			fontFamily: CINZEL_FONT_FAMILY,
			fontSize: props.layout.fontSize,
			fontWeight: '600',
			fill: 0xffffff,
			align: 'center',
			wordWrap: true,
			wordWrapWidth: props.layout.textMaxWidth,
			lineHeight: props.layout.fontSize * 1.3,
			dropShadow: {
				alpha: 0.75,
				color: 0x000000,
				blur: 3,
				distance: 2,
				angle: Math.PI / 4,
			},
		}}
	/>
</Container>

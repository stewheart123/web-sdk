<script lang="ts">
	import * as PIXI from 'pixi.js';
	import { Container, Sprite, Text } from 'pixi-svelte';

	import { getContext } from '../game/context';
	import type { HowToPlayPanelDef } from '../game/howToPlayPanels';
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
	const panelHeight = $derived(
		bgTexture.width > 0
			? props.layout.panelWidth * (bgTexture.height / bgTexture.width)
			: props.layout.panelHeight,
	);
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
		width={props.layout.fgSize}
		anchor={0.5}
		y={props.layout.fgY}
	/>
	<Text
		label={SCENE_LABELS.loading.howToPlay.panelText}
		text={props.panel.text}
		anchor={{ x: 0.5, y: 0 }}
		y={props.layout.textY}
		style={{
			fontFamily: 'Arial, sans-serif',
			fontSize: props.layout.fontSize,
			fontWeight: '600',
			fill: 0xffffff,
			align: 'center',
			wordWrap: true,
			wordWrapWidth: props.layout.textMaxWidth,
			lineHeight: props.layout.fontSize * 1.3,
		}}
	/>
</Container>

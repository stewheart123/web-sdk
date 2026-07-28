<script lang="ts">
	import { Container, Sprite, Text, Rectangle } from 'pixi-svelte';

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
		height={props.layout.panelHeight}
		anchor={0.5}
	/>
	<Rectangle
		width={props.layout.panelWidth}
		height={props.layout.panelHeight}
		anchor={0.5}
		borderRadius={16}
		backgroundColor={0x1a1228}
		backgroundAlpha={0.55}
		borderColor={0xc9a227}
		borderWidth={2}
		borderAlpha={0.85}
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

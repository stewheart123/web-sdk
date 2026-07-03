<script lang="ts">
	import { Rectangle } from 'pixi-svelte';

	import { UI_BAR_HEIGHT, UI_BAR_WIDTH, UI_SCENE_LABELS } from '../uiLayoutConfig';
	import { UI_BORDER_RADIUS, UI_COLORS } from '../constants';

	type Props = {
		width?: number;
		height?: number;
	};

	const { width = UI_BAR_WIDTH, height = UI_BAR_HEIGHT }: Props = $props();
</script>

<Rectangle
	label={UI_SCENE_LABELS.controlBar.background}
	anchor={{ x: 0, y: 0.5 }}
	{width}
	{height}
	backgroundColor={UI_COLORS.bar}
	backgroundAlpha={UI_COLORS.barAlpha}
	borderRadius={UI_BORDER_RADIUS.controlBar}
/>

<script lang="ts">
	import { Rectangle } from 'pixi-svelte';
	import { BLACK } from 'constants-shared/colors';

	import { UI_BAR_HEIGHT, UI_BAR_WIDTH, UI_SCENE_LABELS } from '../uiLayoutConfig';

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
	backgroundColor={BLACK}
	borderRadius={height * 0.45}
/>

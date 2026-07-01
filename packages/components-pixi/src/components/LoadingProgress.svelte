<script lang="ts">
	import { Container, Rectangle, getContextApp, anchorToPivot, Sprite } from 'pixi-svelte';
	import type { Snippet } from 'svelte';

	type Props = {
		label?: string;
		x?: number;
		y?: number;
		width: number;
		height: number;
		background: Snippet<[{ width: number; height: number }]>;
		progress: Snippet<[{ width: number; height: number }]>;
		frame: Snippet<[{ width: number; height: number }]>;
	};

	const props: Props = $props();
	const context = getContextApp();

	const sizes = $derived({ width: props.width, height: props.height });
	const maskLabel = $derived(props.label ? `${props.label}/Mask` : undefined);
</script>

<Container
	label={props.label}
	x={props.x}
	y={props.y}
	pivot={anchorToPivot({ anchor: { x: 0.5, y: 0 }, sizes })}
>
	{@render props.background(sizes)}
	<Container label={maskLabel}>
		{@render props.progress(sizes)}

		<Rectangle
			isMask
			height={props.height}
			width={props.width * (context.stateApp.loadingProgress / 100)}
		/>
	</Container>
	{@render props.frame(sizes)}
</Container>

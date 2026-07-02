<script lang="ts">
	import { BitmapText, Container, type BitmapTextProps } from 'pixi-svelte';
	import { ResponsiveBitmapText } from 'components-pixi';

	import type { ResolvedFreeSpinNumberTextLayout } from '../game/visualLayoutConfig';

	type Props = {
		layout: ResolvedFreeSpinNumberTextLayout;
		text: string;
		responsive?: boolean;
		textStyle: BitmapTextProps['style'];
	};

	const props: Props = $props();
</script>

<Container
	label={props.layout.label}
	x={props.layout.x}
	y={props.layout.y}
	zIndex={props.layout.zIndex}
>
	<Container y={props.layout.offsetY}>
		{#if props.responsive && props.layout.maxWidth !== undefined}
			<ResponsiveBitmapText
				anchor={props.layout.anchor}
				style={props.textStyle}
				text={props.text}
				maxWidth={props.layout.maxWidth}
			/>
		{:else}
			<BitmapText
				anchor={props.layout.anchor}
				text={props.text}
				style={props.textStyle}
			/>
		{/if}
	</Container>
</Container>

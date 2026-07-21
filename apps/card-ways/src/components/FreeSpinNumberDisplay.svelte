<script lang="ts">
	import { Tween } from 'svelte/motion';
	import { sineInOut } from 'svelte/easing';

	import { BitmapText, Container, type BitmapTextProps } from 'pixi-svelte';
	import { ResponsiveBitmapText } from 'components-pixi';

	import type { ResolvedFreeSpinNumberTextLayout } from '../game/visualLayoutConfig';

	type Props = {
		layout: ResolvedFreeSpinNumberTextLayout;
		layoutKey: string;
		text: string;
		responsive?: boolean;
		/** Gentle looping scale pulse (intro free-spin count). */
		pulse?: boolean;
		textStyle: BitmapTextProps['style'];
	};

	const PULSE_SCALE = 1.05;
	const PULSE_DURATION_MS = 900;

	const props: Props = $props();
	const scale = new Tween(1, { duration: PULSE_DURATION_MS, easing: sineInOut });

	$effect(() => {
		if (!props.pulse) {
			scale.set(1, { duration: 0 });
			return;
		}

		let active = true;

		(async () => {
			while (active) {
				await scale.set(PULSE_SCALE, { duration: PULSE_DURATION_MS, easing: sineInOut });
				if (!active) break;
				await scale.set(1, { duration: PULSE_DURATION_MS, easing: sineInOut });
			}
		})();

		return () => {
			active = false;
		};
	});
</script>

<Container
	label={props.layout.label}
	x={props.layout.x}
	y={props.layout.y}
	zIndex={props.layout.zIndex}
>
	<Container y={props.layout.offsetY} scale={scale.current}>
		{#key props.layoutKey}
			{#if props.responsive && props.layout.maxWidth !== undefined}
				<ResponsiveBitmapText
					label={props.layout.label}
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
					roundPixels
				/>
			{/if}
		{/key}
	</Container>
</Container>

<script lang="ts">
	import { Container, BitmapText, type BitmapTextProps } from 'pixi-svelte';

	type Props = Omit<BitmapTextProps, 'scale' | 'onresize'> & { maxWidth: number };

	const { maxWidth, label, style, text, ...textProps }: Props = $props();
	let baseSizes = $state({ width: 0, height: 0 });

	const measureKey = $derived(
		`${text}-${style?.fontSize ?? 0}-${maxWidth}-${style?.fontFamily ?? ''}`,
	);
	const fitScale = $derived(Math.min(maxWidth / (baseSizes.width || 1), 1));
	const displayStyle = $derived({
		fill: 0xffffff,
		...style,
		fontSize: Math.max(1, Math.round((style?.fontSize ?? 0) * fitScale)),
	});
	const measureLabel = $derived(label ? `${label}/Measure` : undefined);
	const displayLabel = $derived(label ? `${label}/Display` : undefined);

	$effect(() => {
		measureKey;
		baseSizes = { width: 0, height: 0 };
	});
</script>

{#key measureKey}
	<Container label={measureLabel} visible={false}>
		<BitmapText {...textProps} {label} {text} {style} onresize={(sizes) => (baseSizes = sizes)} />
	</Container>

	<Container label={displayLabel}>
		<BitmapText {...textProps} {label} {text} style={displayStyle} roundPixels />
	</Container>
{/key}

<script lang="ts">
	import { Container, BitmapText, type BitmapTextProps } from 'pixi-svelte';

	type Props = Omit<BitmapTextProps, 'scale' | 'onresize'> & {
		maxWidth: number;
		minFitScale?: number;
	};

	const { maxWidth, minFitScale = 0, label, style, text, ...textProps }: Props = $props();
	let baseSizes = $state({ width: 0, height: 0 });

	const measureKey = $derived(
		`${text}-${style?.fontSize ?? 0}-${maxWidth}-${style?.fontFamily ?? ''}`,
	);

	/** Conservative width estimate for wide bitmap glyphs (e.g. gold currency font). */
	const estimateTextWidth = (value: string, fontSize: number, letterSpacing = 0) =>
		Math.max(value.length, 1) * fontSize * 1.55 +
		Math.max(value.length - 1, 0) * letterSpacing;

	const fitScale = $derived.by(() => {
		const fontSize = style?.fontSize ?? 0;
		const estimatedWidth = estimateTextWidth(text, fontSize, style?.letterSpacing ?? 0);
		const estimatedScale = Math.min(maxWidth / Math.max(estimatedWidth, 1), 1);
		const measuredScale =
			baseSizes.width > 0 ? Math.min(maxWidth / baseSizes.width, 1) : estimatedScale;

		return Math.max(minFitScale, Math.min(measuredScale, estimatedScale, 1));
	});

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

<script lang="ts">
	import { Container, BitmapText, type BitmapTextProps } from 'pixi-svelte';

	type Props = Omit<BitmapTextProps, 'scale' | 'onresize'> & { maxWidth: number };

	const { maxWidth, label, ...textProps }: Props = $props();
	let baseSizes = $state({ width: 0, height: 0 });
	const responsiveScale = $derived(maxWidth / (baseSizes.width || 1));
	const measureLabel = $derived(label ? `${label}/Measure` : undefined);
	const displayLabel = $derived(label ? `${label}/Display` : undefined);
</script>

<Container label={measureLabel} visible={false}>
	<BitmapText {...textProps} {label} onresize={(sizes) => (baseSizes = sizes)} />
</Container>

<Container label={displayLabel}>
	<BitmapText {...textProps} {label} scale={Math.min(responsiveScale, 1)} />
</Container>

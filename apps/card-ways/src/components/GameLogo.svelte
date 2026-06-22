<script lang="ts">
	import { Container, SpineProvider, SpineTrack } from 'pixi-svelte';

	import { getContext } from '../game/context';
	import { getLogoLayoutSettings, LOGO_UI_RIGHT_INSET } from '../game/logoLayoutConfig';

	const context = getContext();

	const layout = $derived(
		getLogoLayoutSettings(context.stateLayoutDerived.layoutType()),
	);

	const anchor = $derived(
		layout.align === 'topCenter' ? { x: 0.5, y: 0 } : { x: 1, y: 0 },
	);

	const position = $derived.by(() => {
		const canvas = context.stateLayoutDerived.canvasSizes();
		const parentX = canvas.width - LOGO_UI_RIGHT_INSET;

		const x =
			layout.align === 'topCenter'
				? canvas.width * 0.5 - parentX + layout.x
				: layout.x;

		return { x, y: layout.y };
	});
</script>

<Container x={position.x} y={position.y}>
	<SpineProvider key="logo" width={layout.width} {anchor}>
		<SpineTrack trackIndex={0} animationName="IDLE" loop />
	</SpineProvider>
</Container>

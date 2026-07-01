<script lang="ts">
	import { Container, SpineProvider, SpineTrack } from 'pixi-svelte';

	import { getContext } from '../game/context';
	import { getLogoLayoutSettings, SCENE_LABELS } from '../game/visualLayoutConfig';

	const context = getContext();

	const layout = $derived(
		getLogoLayoutSettings(context.stateLayoutDerived.layoutType()),
	);

	const anchorByAlign = {
		topLeft: { x: 0, y: 0 },
		topCenter: { x: 0.5, y: 0 },
		topRight: { x: 1, y: 0 },
	} as const;

	const anchor = $derived(anchorByAlign[layout.align]);
	const position = $derived({
		x: layout.x + (layout.offset?.x ?? 0),
		y: layout.y + (layout.offset?.y ?? 0),
	});
</script>

<Container label={SCENE_LABELS.logo.root} x={position.x} y={position.y}>
	<SpineProvider label={SCENE_LABELS.logo.spine} key="logo" width={layout.width} {anchor}>
		<SpineTrack trackIndex={0} animationName="IDLE" loop />
	</SpineProvider>
</Container>

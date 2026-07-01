<script lang="ts">
	import { Container, SpineProvider, SpineTrack } from 'pixi-svelte';

	import { getContext } from '../game/context';
	import { getLogoLayoutSettings } from '../game/visualLayoutConfig';

	const context = getContext();

	const layout = $derived(
		getLogoLayoutSettings(context.stateLayoutDerived.layoutType()),
	);

	const anchor = $derived(
		layout.align === 'topCenter' ? { x: 0.5, y: 0 } : { x: 1, y: 0 },
	);
</script>

<Container x={layout.x} y={layout.y}>
	<SpineProvider key="logo" width={layout.width} {anchor}>
		<SpineTrack trackIndex={0} animationName="IDLE" loop />
	</SpineProvider>
</Container>

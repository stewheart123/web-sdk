<script lang="ts">
	import { Container, SpineProvider, SpineTrack } from 'pixi-svelte';

	import { getContext } from '../game/context';
	import { getLogoLayoutSettings } from '../game/logoLayoutConfig';

	const context = getContext();

	const layout = $derived(
		getLogoLayoutSettings(context.stateLayoutDerived.layoutType()),
	);
</script>

<Container x={layout.x} y={layout.y}>
	<SpineProvider key="logo" width={layout.width} anchor={{ x: 1, y: 0 }}>
		<SpineTrack trackIndex={0} animationName="IDLE" loop />
	</SpineProvider>
</Container>

<script lang="ts">
	import { MainContainer } from 'components-layout';
	import { Rectangle } from 'pixi-svelte';
	import { getContextLayout } from 'utils-layout';

	const context = getContextLayout();
	const mainLayout = $derived.by(context.stateLayoutDerived.mainLayout);
</script>
 <!-- TODO REMOVE DEBUG OVERLAY -->
<MainContainer label="layout/debug">
	<Rectangle
		width={mainLayout.width}
		height={mainLayout.height}
		backgroundColor={0xff0000}
		backgroundAlpha={0.3}
	/>
</MainContainer>

<script lang="ts">
	import { MainContainer } from 'components-layout';
	import { Container } from 'pixi-svelte';
	import { getContextLayout } from 'utils-layout';

	import ButtonReplayAgain from './ButtonReplayAgain.svelte';
	import { getContext } from '../context';
	import {
		UI_BAR_LABEL_MAX_HEIGHT,
		getUiReplayLabelScale,
		getUiReplayLabelWidthRatio,
		type UiLayoutType,
	} from '../uiLayoutConfig';

	const context = getContext();
	const { stateLayoutDerived } = getContextLayout();

	const layoutType = $derived(stateLayoutDerived.layoutType() as UiLayoutType);
	const mainLayout = $derived(context.stateLayoutDerived.mainLayoutStandard());
	const labelScale = $derived(getUiReplayLabelScale(layoutType));
	const labelWidth = $derived(mainLayout.width * getUiReplayLabelWidthRatio(layoutType));
	const labelProps = $derived({
		stacked: true as const,
		size: 'bar' as const,
		maxHeight: UI_BAR_LABEL_MAX_HEIGHT,
		width: labelWidth,
	});
</script>

<MainContainer standard>
	<Container x={mainLayout.width * 0.5} y={mainLayout.height * 0.5} scale={labelScale}>
		<ButtonReplayAgain {...labelProps} />
	</Container>
</MainContainer>

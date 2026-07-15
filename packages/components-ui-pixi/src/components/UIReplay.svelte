<script lang="ts">
	import { EnableSpaceHold } from 'components-shared';
	import { getContextLayout } from 'utils-layout';

	import BettingControlsLockSync from './BettingControlsLockSync.svelte';
	import ReplayStateSync from './ReplayStateSync.svelte';
	import UiFadeContainer from './UiFadeContainer.svelte';
	import LabelWin from './LabelWin.svelte';
	import LabelBet from './LabelBet.svelte';
	import ButtonReplayAgain from './ButtonReplayAgain.svelte';
	import ButtonMenu from './ButtonMenu.svelte';
	import ButtonSoundSwitch from './ButtonSoundSwitch.svelte';
	import ButtonMusicSwitch from './ButtonMusicSwitch.svelte';
	import { stateUi } from 'state-shared';
	import { MainContainer } from 'components-layout';
	import { Container, Rectangle } from 'pixi-svelte';
	import { getContext } from '../context';
	import { UI_COLORS } from '../constants';
	import type { LayoutUiProps } from '../types';
	import LabelFreeSpinCounter from './LabelFreeSpinCounter.svelte';
	import {
		UI_BAR_LABEL_MAX_HEIGHT,
		UI_MENU_PANEL,
		getUiMenuPanelLayout,
		getUiReplayBetY,
		getUiReplayChromeScale,
		getUiReplayFreeSpinY,
		getUiReplayLabelScale,
		getUiReplayLabelWidthRatio,
		getUiReplayMenuScale,
		getUiReplayMenuX,
		getUiReplayMenuY,
		getUiReplayWinY,
		type UiLayoutType,
	} from '../uiLayoutConfig';

	type Props = {
		gameName: LayoutUiProps['gameName'];
		logo: LayoutUiProps['logo'];
	};

	const props: Props = $props();
	const context = getContext();
	const { stateLayoutDerived } = getContextLayout();

	const layoutType = $derived(stateLayoutDerived.layoutType() as UiLayoutType);
	const mainLayout = $derived(context.stateLayoutDerived.mainLayoutStandard());
	const labelScale = $derived(getUiReplayLabelScale(layoutType));
	const menuScale = $derived(getUiReplayMenuScale(layoutType));
	const chromeScale = $derived(getUiReplayChromeScale(layoutType));
	const labelWidth = $derived(mainLayout.width * getUiReplayLabelWidthRatio(layoutType));
	const labelProps = $derived({
		stacked: true as const,
		size: 'bar' as const,
		maxHeight: UI_BAR_LABEL_MAX_HEIGHT,
		width: labelWidth,
	});
	const menuX = $derived(getUiReplayMenuX({ layoutType, menuScale }));
	const winY = $derived(getUiReplayWinY(mainLayout.height, layoutType));
	const betY = $derived(getUiReplayBetY(mainLayout.height, layoutType));
	const menuY = $derived(getUiReplayMenuY(mainLayout.height, layoutType));
	const freeSpinY = $derived(getUiReplayFreeSpinY(mainLayout.height, layoutType));
	const menuPanel = $derived(getUiMenuPanelLayout(menuScale, 0, 0, layoutType));
</script>

<EnableSpaceHold />
<BettingControlsLockSync />
<ReplayStateSync />

<UiFadeContainer>
	<Container x={20} scale={chromeScale}>
		{@render props.gameName()}
	</Container>

	<Container x={context.stateLayoutDerived.canvasSizes().width - 20}>
		{@render props.logo()}
	</Container>

	<MainContainer standard alignVertical="bottom">
		{#if stateUi.freeSpinCounterShow && ['portrait', 'tablet'].includes(layoutType)}
			<Container x={mainLayout.width * 0.5} y={freeSpinY} scale={labelScale}>
				<LabelFreeSpinCounter {...labelProps} />
			</Container>
		{/if}

		<Container x={mainLayout.width * 0.5} y={winY} scale={labelScale}>
			<LabelWin {...labelProps} />
		</Container>

		<Container x={mainLayout.width * 0.5} y={betY} scale={labelScale}>
			<LabelBet {...labelProps} />
		</Container>

		<Container x={menuX} y={menuY} scale={menuScale}>
			<ButtonMenu />
		</Container>
	</MainContainer>

	{#if stateUi.replayFinished}
		<MainContainer standard>
			<Container x={mainLayout.width * 0.5} y={mainLayout.height * 0.5} scale={labelScale}>
				<ButtonReplayAgain {...labelProps} />
			</Container>
		</MainContainer>
	{/if}

	{#if stateUi.menuOpen}
		<Rectangle
			eventMode="static"
			cursor="pointer"
			alpha={1}
			anchor={0.5}
			backgroundColor={UI_COLORS.menuOverlay}
			backgroundAlpha={UI_COLORS.menuOverlayAlpha}
			width={context.stateLayoutDerived.canvasSizes().width}
			height={context.stateLayoutDerived.canvasSizes().height}
			x={context.stateLayoutDerived.canvasSizes().width * 0.5}
			y={context.stateLayoutDerived.canvasSizes().height * 0.5}
			onpointerup={() => (stateUi.menuOpen = false)}
		/>

		<MainContainer standard alignVertical="bottom">
			<Container x={menuX} y={menuY} scale={menuScale}>
				<Rectangle
					x={menuPanel.panelLeftX}
					y={menuPanel.panelTopY}
					anchor={{ x: 0, y: 0 }}
					width={menuPanel.panelWidth}
					height={menuPanel.panelHeight}
					backgroundColor={UI_COLORS.menuPanel}
					backgroundAlpha={UI_COLORS.menuPanelAlpha}
					borderRadius={UI_MENU_PANEL.borderRadius}
				/>

				<Container x={menuPanel.rowCenterX} y={menuPanel.soundY}>
					<ButtonSoundSwitch anchor={0.5} />
				</Container>

				<Container x={menuPanel.rowCenterX} y={menuPanel.musicY}>
					<ButtonMusicSwitch anchor={0.5} />
				</Container>
			</Container>
		</MainContainer>
	{/if}
</UiFadeContainer>

<script lang="ts">

	import { getContextLayout } from 'utils-layout';

	import { stateUi } from 'state-shared';

	import { BLACK } from 'constants-shared/colors';

	import { MainContainer } from 'components-layout';

	import { Container, Rectangle } from 'pixi-svelte';



	import UiControlBar from './UiControlBar.svelte';
	import WinFloatingTicker from './WinFloatingTicker.svelte';

	import { getContext } from '../context';

	import type { LayoutUiProps } from '../types';

	import {

		UI_BAR_LABEL_MAX_HEIGHT,

		UI_BAR_HEIGHT,

		UI_BAR_BACKGROUND_CENTER_Y,

		UI_BAR_SLOT_CENTER_Y,

		UI_BAR_SLOTS,

		UI_BUY_BONUS_OFFSET_X,

		UI_MENU_PANEL,

		UI_SCENE_LABELS,

		UI_SIDE_PADDING,

		UI_WIN_FLOAT_MAX_HEIGHT,

		getUiBarFlowLayout,

		getUiBarContentWidth,

		getUiBarY,

		getBetStepperButtonOffsetY,
		getAutoSpinTurboButtonOffsetY,

		getUiClusterPivot,

		getUiFitScale,

		getUiMenuPanelLayout,

		getUiWinFloatCenterX,

		getUiWinFloatWidth,

		getUiWinFloatY,

		type UiLayoutType,

	} from '../uiLayoutConfig';



	const props: LayoutUiProps = $props();

	const context = getContext();

	const { stateLayoutDerived } = getContextLayout();



	const layoutType = $derived(stateLayoutDerived.layoutType() as UiLayoutType);

	const mainLayout = $derived(context.stateLayoutDerived.mainLayoutStandard());

	const availableWidth = $derived(mainLayout.width - UI_SIDE_PADDING * 2);

	const fitScale = $derived(getUiFitScale({ layoutType, availableWidth }));

	const barY = $derived(getUiBarY({ mainLayoutHeight: mainLayout.height, layoutType }));

	const barCenterX = $derived(mainLayout.width * 0.5);

	const clusterPivot = $derived(getUiClusterPivot());

	const flow = getUiBarFlowLayout();

	const labelProps = {

		stacked: true as const,

		size: 'bar' as const,

		width: 0,

		maxHeight: UI_BAR_LABEL_MAX_HEIGHT,

	};

	const barContentWidth = getUiBarContentWidth();

	const menuPanel = $derived(getUiMenuPanelLayout(flow.menu.scale));

</script>



<Container label={UI_SCENE_LABELS.chrome.gameName} x={20}>

	{@render props.gameName()}

</Container>



<Container label={UI_SCENE_LABELS.chrome.logo} x={context.stateLayoutDerived.canvasSizes().width - 20}>

	{@render props.logo()}

</Container>



<MainContainer standard alignVertical="bottom" label={UI_SCENE_LABELS.layout}>

	<Container

		label={UI_SCENE_LABELS.controlBar.root}

		x={barCenterX}

		y={barY}

		scale={fitScale}

		pivot={clusterPivot}

	>

		<Container label={UI_SCENE_LABELS.controlBar.buyBonus} x={UI_BUY_BONUS_OFFSET_X} y={UI_BAR_SLOT_CENTER_Y}>

			{@render props.buttonBuyBonus({ anchor: 0.5 })}

		</Container>



		<UiControlBar x={0} y={UI_BAR_BACKGROUND_CENTER_Y} width={barContentWidth} />



		<Container

			label={UI_SCENE_LABELS.chrome.winFloat}

			x={getUiWinFloatCenterX()}

			y={getUiWinFloatY()}

		>

			<WinFloatingTicker

				stacked={false}

				variant="win"

				size="winFloat"

				width={getUiWinFloatWidth()}

				maxHeight={UI_WIN_FLOAT_MAX_HEIGHT}

			/>

		</Container>



		<Container

			label={UI_SCENE_LABELS.controlBar.menu}

			x={flow.menu.centerX}

			y={UI_BAR_SLOT_CENTER_Y}

			scale={flow.menu.scale}

		>

			{@render props.buttonMenu({ anchor: 0.5 })}

		</Container>



		<Container label={UI_SCENE_LABELS.controlBar.balance} x={flow.balance.centerX} y={UI_BAR_SLOT_CENTER_Y}>

			{@render props.amountBalance({

				...labelProps,

				width: flow.balance.width,

			})}

		</Container>



		<Container label={UI_SCENE_LABELS.controlBar.bet} x={flow.bet.centerX} y={UI_BAR_SLOT_CENTER_Y}>

			{@render props.amountBet({

				...labelProps,

				width: flow.bet.width,

			})}

		</Container>



		<Container

			label={UI_SCENE_LABELS.controlBar.betStepper}

			x={flow.betStepper.centerX}

			y={UI_BAR_SLOT_CENTER_Y}

			scale={flow.betStepper.scale}

		>

			<Container

				label={UI_SCENE_LABELS.controlBar.betStepperIncrease}

				y={getBetStepperButtonOffsetY('increase')}

			>

				{@render props.buttonIncrease({ anchor: 0.5 })}

			</Container>



			<Container

				label={UI_SCENE_LABELS.controlBar.betStepperDecrease}

				y={getBetStepperButtonOffsetY('decrease')}

			>

				{@render props.buttonDecrease({ anchor: 0.5 })}

			</Container>

		</Container>



		<Container

			label={UI_SCENE_LABELS.controlBar.spin}

			x={flow.spin.centerX}

			y={UI_BAR_SLOT_CENTER_Y}

			scale={flow.spin.scale}

		>

			{@render props.buttonBet({ anchor: 0.5 })}

		</Container>



		<Container

			label={UI_SCENE_LABELS.controlBar.autoSpin}

			x={flow.autoSpin.centerX}

			y={UI_BAR_SLOT_CENTER_Y}

			scale={flow.autoSpin.scale}

		>

			<Container

				label={UI_SCENE_LABELS.controlBar.turbo}

				y={getAutoSpinTurboButtonOffsetY('turbo')}

			>

				{@render props.buttonTurbo({ anchor: 0.5 })}

			</Container>



			<Container

				label={UI_SCENE_LABELS.controlBar.autoSpinButton}

				y={getAutoSpinTurboButtonOffsetY('autoSpin')}

			>

				{@render props.buttonAutoSpin({ anchor: 0.5 })}

			</Container>

		</Container>

	</Container>

</MainContainer>



{#if stateUi.menuOpen}

	<Rectangle

		label={UI_SCENE_LABELS.menu.overlay}

		eventMode="static"

		cursor="pointer"

		alpha={0.5}

		anchor={0.5}

		backgroundColor={BLACK}

		width={context.stateLayoutDerived.canvasSizes().width}

		height={context.stateLayoutDerived.canvasSizes().height}

		x={context.stateLayoutDerived.canvasSizes().width * 0.5}

		y={context.stateLayoutDerived.canvasSizes().height * 0.5}

		onpointerup={() => (stateUi.menuOpen = false)}

	/>



	<MainContainer standard alignVertical="bottom" label={UI_SCENE_LABELS.menu.root}>

		<Container label={UI_SCENE_LABELS.menu.root} x={barCenterX} y={barY} scale={fitScale} pivot={clusterPivot}>

			<Rectangle

				label={UI_SCENE_LABELS.menu.panel}

				x={menuPanel.panelLeftX}

				y={menuPanel.panelTopY}

				anchor={{ x: 0, y: 0 }}

				width={menuPanel.panelWidth}

				height={menuPanel.panelHeight}

				backgroundColor={BLACK}

				borderRadius={UI_MENU_PANEL.borderRadius}

			/>



			<Container label={UI_SCENE_LABELS.menu.sound} x={menuPanel.rowLeftX} y={menuPanel.soundY}>

				{@render props.buttonSoundSwitch({ anchor: { x: 0, y: 0.5 } })}

			</Container>



			<Container label={UI_SCENE_LABELS.menu.music} x={menuPanel.rowLeftX} y={menuPanel.musicY}>

				{@render props.buttonMusicSwitch({ anchor: { x: 0, y: 0.5 } })}

			</Container>



			<Container label={UI_SCENE_LABELS.menu.info} x={menuPanel.menuCenterX} y={menuPanel.infoY}>

				{@render props.buttonGameRules({ anchor: 0.5 })}

			</Container>

		</Container>

	</MainContainer>

{/if}



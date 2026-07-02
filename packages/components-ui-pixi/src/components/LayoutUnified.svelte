<script lang="ts">

	import { getContextLayout } from 'utils-layout';

	import { stateUi } from 'state-shared';

	import { BLACK } from 'constants-shared/colors';

	import { MainContainer } from 'components-layout';

	import { Container, Rectangle } from 'pixi-svelte';



	import UiControlBar from './UiControlBar.svelte';

	import { UI_BASE_SIZE } from '../constants';

	import { getContext } from '../context';

	import type { LayoutUiProps } from '../types';

	import {

		UI_BAR_CONTENT_MAX_HEIGHT,

		UI_BAR_HEIGHT,

		UI_BAR_BACKGROUND_CENTER_Y,

		UI_BAR_SLOT_CENTER_Y,

		UI_BAR_SLOTS,

		UI_BET_STEPPER_SIZE,

		UI_BUY_BONUS_OFFSET_X,

		UI_BUTTON_SIZE,

		UI_MENU_PANEL,

		UI_SCENE_LABELS,

		UI_SIDE_PADDING,

		UI_SPIN_BUTTON_SIZE,

		getUiBarSlotButtonScale,

		getUiBarSlotRegion,

		getUiBarY,

		getUiClusterPivot,

		getUiFitScale,

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



	const menuRegion = getUiBarSlotRegion('menu');

	const balanceRegion = getUiBarSlotRegion('balance');

	const winRegion = getUiBarSlotRegion('win');

	const betRegion = getUiBarSlotRegion('bet');

	const decreaseRegion = getUiBarSlotRegion('decrease');

	const increaseRegion = getUiBarSlotRegion('increase');

	const spinRegion = getUiBarSlotRegion('spin');

	const autoSpinRegion = getUiBarSlotRegion('autoSpin');



	const labelProps = {

		stacked: true as const,

		width: 0,

		maxHeight: UI_BAR_CONTENT_MAX_HEIGHT,

	};



	const menuScale = getUiBarSlotButtonScale({

		regionWidth: menuRegion.width,

		baseSize: UI_BASE_SIZE,

	});

	const decreaseScale = getUiBarSlotButtonScale({

		regionWidth: decreaseRegion.width,

		baseSize: UI_BET_STEPPER_SIZE,

	});

	const increaseScale = getUiBarSlotButtonScale({

		regionWidth: increaseRegion.width,

		baseSize: UI_BET_STEPPER_SIZE,

	});

	const spinScale = getUiBarSlotButtonScale({

		regionWidth: spinRegion.width,

		baseSize: UI_SPIN_BUTTON_SIZE,

	});

	const autoSpinScale = getUiBarSlotButtonScale({

		regionWidth: autoSpinRegion.width,

		baseSize: UI_BUTTON_SIZE,

	});



	const menuItemYs = $derived(

		Array.from({ length: 4 }, (_, index) => {

			const fromBottom = 4 - index;

			return (

				UI_BAR_SLOT_CENTER_Y -

				UI_MENU_PANEL.itemSpacing * fromBottom -

				UI_MENU_PANEL.itemSpacing * 0.5

			);

		}),

	);

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



		<UiControlBar x={0} y={UI_BAR_BACKGROUND_CENTER_Y} />



		<Container

			label={UI_SCENE_LABELS.controlBar.menu}

			x={menuRegion.centerX}

			y={UI_BAR_SLOT_CENTER_Y}

			scale={menuScale}

		>

			{@render props.buttonMenu({ anchor: 0.5 })}

		</Container>



		<Container label={UI_SCENE_LABELS.controlBar.balance} x={balanceRegion.centerX} y={UI_BAR_SLOT_CENTER_Y}>

			{@render props.amountBalance({

				...labelProps,

				width: balanceRegion.width,

			})}

		</Container>



		<Container label={UI_SCENE_LABELS.controlBar.win} x={winRegion.centerX} y={UI_BAR_SLOT_CENTER_Y}>

			{@render props.amountWin({

				...labelProps,

				width: winRegion.width,

				variant: 'win',

			})}

		</Container>



		<Container label={UI_SCENE_LABELS.controlBar.bet} x={betRegion.centerX} y={UI_BAR_SLOT_CENTER_Y}>

			{@render props.amountBet({

				...labelProps,

				width: betRegion.width,

			})}

		</Container>



		<Container

			label={UI_SCENE_LABELS.controlBar.decrease}

			x={decreaseRegion.centerX}

			y={UI_BAR_SLOT_CENTER_Y}

			scale={decreaseScale}

		>

			{@render props.buttonDecrease({ anchor: 0.5 })}

		</Container>



		<Container

			label={UI_SCENE_LABELS.controlBar.increase}

			x={increaseRegion.centerX}

			y={UI_BAR_SLOT_CENTER_Y}

			scale={increaseScale}

		>

			{@render props.buttonIncrease({ anchor: 0.5 })}

		</Container>



		<Container

			label={UI_SCENE_LABELS.controlBar.spin}

			x={spinRegion.centerX}

			y={UI_BAR_SLOT_CENTER_Y}

			scale={spinScale}

		>

			{@render props.buttonBet({ anchor: 0.5 })}

		</Container>



		<Container

			label={UI_SCENE_LABELS.controlBar.autoSpin}

			x={autoSpinRegion.centerX}

			y={UI_BAR_SLOT_CENTER_Y}

			scale={autoSpinScale}

		>

			{@render props.buttonAutoSpin({ anchor: 0.5 })}

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

				x={UI_BAR_SLOTS.menu - UI_MENU_PANEL.width * 0.15}

				y={menuItemYs[0] - UI_MENU_PANEL.itemSpacing * 0.5}

				anchor={{ x: 0, y: 0 }}

				width={UI_MENU_PANEL.width}

				height={UI_MENU_PANEL.height}

				backgroundColor={BLACK}

				borderRadius={UI_MENU_PANEL.borderRadius}

			/>



			<Container label={UI_SCENE_LABELS.menu.sound} x={UI_BAR_SLOTS.menu} y={menuItemYs[0]}>

				{@render props.buttonSoundSwitch({ anchor: 0.5 })}

			</Container>



			<Container label={UI_SCENE_LABELS.menu.music} x={UI_BAR_SLOTS.menu} y={menuItemYs[1]}>

				{@render props.buttonMusicSwitch({ anchor: 0.5 })}

			</Container>



			<Container label={UI_SCENE_LABELS.menu.turbo} x={UI_BAR_SLOTS.menu} y={menuItemYs[2]}>

				{@render props.buttonTurbo({ anchor: 0.5 })}

			</Container>



			<Container label={UI_SCENE_LABELS.menu.info} x={UI_BAR_SLOTS.menu} y={menuItemYs[3]}>

				{@render props.buttonGameRules({ anchor: 0.5 })}

			</Container>

		</Container>

	</MainContainer>

{/if}



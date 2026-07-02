<script lang="ts">
	import { getContextLayout } from 'utils-layout';
	import { stateUi } from 'state-shared';
	import { BLACK } from 'constants-shared/colors';
	import { MainContainer } from 'components-layout';
	import { Container, Rectangle, anchorToPivot } from 'pixi-svelte';

	import UiControlBar from './UiControlBar.svelte';
	import { UI_BASE_SIZE } from '../constants';
	import { getContext } from '../context';
	import type { LayoutUiProps } from '../types';
	import {
		UI_BAR_HEIGHT,
		UI_BAR_WIDTH,
		UI_BAR_SLOTS,
		UI_BET_STEPPER_SIZE,
		UI_BUY_BONUS_OFFSET_X,
		UI_BUTTON_SIZE,
		UI_LABEL_SCALE,
		UI_MENU_PANEL,
		UI_SPIN_BUTTON_SIZE,
		getUiBarBottomPadding,
		getUiLayoutScale,
		type UiLayoutType,
	} from '../uiLayoutConfig';

	const props: LayoutUiProps = $props();
	const context = getContext();
	const { stateLayoutDerived } = getContextLayout();

	const layoutType = $derived(stateLayoutDerived.layoutType() as UiLayoutType);
	const layoutScale = $derived(getUiLayoutScale(layoutType));
	const bottomPadding = $derived(getUiBarBottomPadding(layoutType));
	const barY = $derived(
		context.stateLayoutDerived.mainLayoutStandard().height - UI_BAR_HEIGHT * 0.5 - bottomPadding,
	);
	const barCenterX = $derived(context.stateLayoutDerived.mainLayoutStandard().width * 0.5);
	const menuPanelX = $derived(barCenterX - UI_BAR_WIDTH * 0.5 + UI_BAR_SLOTS.menu);

	const menuItemYs = $derived(
		Array.from({ length: 4 }, (_, index) => {
			const fromBottom = 4 - index;
			return UI_BAR_HEIGHT * 0.5 - UI_MENU_PANEL.itemSpacing * fromBottom - UI_MENU_PANEL.itemSpacing * 0.5;
		}),
	);
</script>

<Container x={20}>
	{@render props.gameName()}
</Container>

<Container x={context.stateLayoutDerived.canvasSizes().width - 20}>
	{@render props.logo()}
</Container>

<MainContainer standard alignVertical="bottom">
	<Container
		x={barCenterX}
		y={barY}
		scale={layoutScale}
		pivot={anchorToPivot({
			anchor: { x: 0.5, y: 0.5 },
			sizes: { width: UI_BAR_WIDTH, height: UI_BAR_HEIGHT },
		})}
	>
		<Container x={UI_BUY_BONUS_OFFSET_X} y={UI_BAR_HEIGHT * 0.5}>
			{@render props.buttonBuyBonus({ anchor: 0.5 })}
		</Container>

		<UiControlBar x={0} y={UI_BAR_HEIGHT * 0.5} />

		<Container x={UI_BAR_SLOTS.menu} y={UI_BAR_HEIGHT * 0.5}>
			{@render props.buttonMenu({ anchor: 0.5 })}
		</Container>

		<Container x={UI_BAR_SLOTS.balance} y={UI_BAR_HEIGHT * 0.5} scale={UI_LABEL_SCALE}>
			{@render props.amountBalance({ stacked: true })}
		</Container>

		<Container x={UI_BAR_SLOTS.win} y={UI_BAR_HEIGHT * 0.5} scale={UI_LABEL_SCALE}>
			{@render props.amountWin({ stacked: true, variant: 'win' })}
		</Container>

		<Container x={UI_BAR_SLOTS.bet} y={UI_BAR_HEIGHT * 0.5} scale={UI_LABEL_SCALE}>
			{@render props.amountBet({ stacked: true })}
		</Container>

		<Container x={UI_BAR_SLOTS.decrease} y={UI_BAR_HEIGHT * 0.5} scale={UI_BET_STEPPER_SIZE / UI_BUTTON_SIZE}>
			{@render props.buttonDecrease({ anchor: 0.5 })}
		</Container>

		<Container x={UI_BAR_SLOTS.increase} y={UI_BAR_HEIGHT * 0.5} scale={UI_BET_STEPPER_SIZE / UI_BUTTON_SIZE}>
			{@render props.buttonIncrease({ anchor: 0.5 })}
		</Container>

		<Container x={UI_BAR_SLOTS.spin} y={UI_BAR_HEIGHT * 0.5} scale={UI_SPIN_BUTTON_SIZE / UI_BASE_SIZE}>
			{@render props.buttonBet({ anchor: 0.5 })}
		</Container>

		<Container x={UI_BAR_SLOTS.autoSpin} y={UI_BAR_HEIGHT * 0.5}>
			{@render props.buttonAutoSpin({ anchor: 0.5 })}
		</Container>
	</Container>
</MainContainer>

{#if stateUi.menuOpen}
	<Rectangle
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

	<MainContainer standard alignVertical="bottom">
		<Container x={menuPanelX} y={barY} scale={layoutScale}>
			<Rectangle
				x={-UI_MENU_PANEL.width * 0.15}
				y={menuItemYs[0] - UI_MENU_PANEL.itemSpacing * 0.5}
				anchor={{ x: 0, y: 0 }}
				width={UI_MENU_PANEL.width}
				height={UI_MENU_PANEL.height}
				backgroundColor={BLACK}
				borderRadius={UI_MENU_PANEL.borderRadius}
			/>

			<Container x={0} y={menuItemYs[0]}>
				{@render props.buttonSoundSwitch({ anchor: 0.5 })}
			</Container>

			<Container x={0} y={menuItemYs[1]}>
				{@render props.buttonMusicSwitch({ anchor: 0.5 })}
			</Container>

			<Container x={0} y={menuItemYs[2]}>
				{@render props.buttonTurbo({ anchor: 0.5 })}
			</Container>

			<Container x={0} y={menuItemYs[3]}>
				{@render props.buttonGameRules({ anchor: 0.5 })}
			</Container>
		</Container>
	</MainContainer>
{/if}

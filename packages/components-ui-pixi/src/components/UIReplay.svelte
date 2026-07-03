<script lang="ts">
	import { EnableSpaceHold } from 'components-shared';

	import BettingControlsLockSync from './BettingControlsLockSync.svelte';
	import UiFadeContainer from './UiFadeContainer.svelte';
	import LabelWin from './LabelWin.svelte';
	import LabelBet from './LabelBet.svelte';
	import ButtonGameRules from './ButtonGameRules.svelte';
	import ButtonMenu from './ButtonMenu.svelte';
	import ButtonSoundSwitch from './ButtonSoundSwitch.svelte';
	import ButtonMusicSwitch from './ButtonMusicSwitch.svelte';
	import { stateUi } from 'state-shared';
	import { BLACK } from 'constants-shared/colors';
	import { MainContainer } from 'components-layout';
	import { Container, Rectangle } from 'pixi-svelte';
	import { getContext } from '../context';
	import type { LayoutUiProps } from '../types';
	import LabelFreeSpinCounter from './LabelFreeSpinCounter.svelte';
	import { UI_MENU_PANEL } from '../uiLayoutConfig';

	type Props = {
		gameName: LayoutUiProps['gameName'];
		logo: LayoutUiProps['logo'];
	};

	const props: Props = $props();
	const context = getContext();

	const menuItemYs = Array.from({ length: 3 }, (_, index) => {
		const fromBottom = 3 - index;
		return -UI_MENU_PANEL.itemSpacing * fromBottom - UI_MENU_PANEL.itemSpacing * 0.5;
	});
</script>

<EnableSpaceHold />
<BettingControlsLockSync />

<UiFadeContainer>
	<Container x={20}>
		{@render props.gameName()}
	</Container>

	<Container x={context.stateLayoutDerived.canvasSizes().width - 20}>
		{@render props.logo()}
	</Container>

	<MainContainer standard alignVertical="bottom">
		{#if stateUi.freeSpinCounterShow && ['portrait', 'tablet'].includes(context.stateLayoutDerived.layoutType())}
			<Container x={context.stateLayoutDerived.mainLayoutStandard().width * 0.5} y={120}>
				<LabelFreeSpinCounter stacked />
			</Container>
		{/if}

		<Container
			x={context.stateLayoutDerived.mainLayoutStandard().width * 0.5}
			y={context.stateLayoutDerived.mainLayoutStandard().height - 270}
			scale={0.8}
		>
			<LabelWin stacked />
		</Container>

		<Container
			x={context.stateLayoutDerived.mainLayoutStandard().width * 0.5}
			y={context.stateLayoutDerived.mainLayoutStandard().height - 150}
			scale={0.8}
		>
			<LabelBet stacked />
		</Container>

		<Container
			x={context.stateLayoutDerived.mainLayoutStandard().width * 0.5 - 350}
			y={context.stateLayoutDerived.mainLayoutStandard().height - 210}
			scale={0.7}
		>
			<ButtonMenu />
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
			<Container
				x={context.stateLayoutDerived.mainLayoutStandard().width * 0.5 - 350}
				y={context.stateLayoutDerived.mainLayoutStandard().height - 210}
			>
				<Rectangle
					x={-UI_MENU_PANEL.width * 0.5}
					y={menuItemYs[0] - UI_MENU_PANEL.itemSpacing * 0.5}
					anchor={{ x: 0, y: 0 }}
					width={UI_MENU_PANEL.width}
					height={UI_MENU_PANEL.height}
					backgroundColor={BLACK}
					borderRadius={UI_MENU_PANEL.borderRadius}
				/>

				<Container y={menuItemYs[0]}>
					<ButtonSoundSwitch anchor={0.5} />
				</Container>

				<Container y={menuItemYs[1]}>
					<ButtonMusicSwitch anchor={0.5} />
				</Container>

				<Container y={menuItemYs[2]}>
					<ButtonGameRules anchor={0.5} />
				</Container>
			</Container>
		</MainContainer>
	{/if}
</UiFadeContainer>

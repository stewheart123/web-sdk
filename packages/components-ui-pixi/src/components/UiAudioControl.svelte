<script lang="ts">
	import type { ButtonProps } from 'components-pixi';
	import { Container, Text } from 'pixi-svelte';

	import UiVolumeSlider from './UiVolumeSlider.svelte';
	import UiMenuButton from './UiMenuButton.svelte';
	import { getContext } from '../context';
	import {
		UI_MENU_AUDIO_SLIDER_WIDTH,
		UI_MENU_AUDIO_TOGGLE_SIZE,
		getUiMenuAudioRowLayout,
	} from '../uiLayoutConfig';
	import { UI_BASE_FONT_SIZE } from '../constants';

	type Props = Partial<Omit<ButtonProps, 'children'>> & {
		label: string;
		value: number;
	};

	let { label, value = $bindable(), ...buttonProps }: Props = $props();

	const context = getContext();
	const layout = getUiMenuAudioRowLayout();
	const toggleSizes = {
		width: UI_MENU_AUDIO_TOGGLE_SIZE,
		height: UI_MENU_AUDIO_TOGGLE_SIZE,
	};
	const active = $derived(value > 0);

	const onToggle = () => {
		context.eventEmitter.broadcast({ type: 'soundPressGeneral' });

		if (value === 0) {
			value = 50;
		} else {
			value = 0;
		}
	};

	const onSliderChange = () => {
		context.eventEmitter.broadcast({ type: 'soundPressGeneral' });
	};
</script>

<Container {...buttonProps}>
	<Text
		x={layout.labelCenterX}
		anchor={0.5}
		text={label}
		style={{
			align: 'center',
			fontFamily: 'proxima-nova',
			fontWeight: '600',
			fontSize: UI_BASE_FONT_SIZE * 0.42,
			fill: 0xffffff,
		}}
	/>

	<Container x={layout.toggleCenterX}>
		<UiMenuButton
			sizes={toggleSizes}
			{active}
			onpress={onToggle}
			label={active ? 'ON' : 'OFF'}
			variant="light"
		/>
	</Container>

	<Container x={layout.sliderCenterX}>
		<UiVolumeSlider bind:value width={UI_MENU_AUDIO_SLIDER_WIDTH} onchange={onSliderChange} />
	</Container>
</Container>

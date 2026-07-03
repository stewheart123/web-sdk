<script lang="ts">
	import type { ButtonProps } from 'components-pixi';
	import { Container } from 'pixi-svelte';

	import UiVolumeSlider from './UiVolumeSlider.svelte';
	import UiMenuButton from './UiMenuButton.svelte';
	import { getContext } from '../context';
	import {
		UI_MENU_AUDIO_LABEL_WIDTH,
		UI_MENU_AUDIO_SLIDER_WIDTH,
		UI_MENU_AUDIO_TOGGLE_HEIGHT,
		getUiMenuAudioRowLayout,
	} from '../uiLayoutConfig';

	type Props = Partial<Omit<ButtonProps, 'children'>> & {
		label: string;
		value: number;
	};

	let { label, value = $bindable(), ...buttonProps }: Props = $props();

	const context = getContext();
	const layout = getUiMenuAudioRowLayout();
	const toggleSizes = {
		width: UI_MENU_AUDIO_LABEL_WIDTH,
		height: UI_MENU_AUDIO_TOGGLE_HEIGHT,
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
	<Container x={layout.toggleCenterX}>
		<UiMenuButton sizes={toggleSizes} {active} onpress={onToggle} {label} variant="light" />
	</Container>

	<Container x={layout.sliderCenterX}>
		<UiVolumeSlider bind:value width={UI_MENU_AUDIO_SLIDER_WIDTH} onchange={onSliderChange} />
	</Container>
</Container>

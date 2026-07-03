<script lang="ts">
	import { Circle, Container, Rectangle } from 'pixi-svelte';

	import {
		UI_MENU_AUDIO_SLIDER_HEIGHT,
		UI_MENU_AUDIO_THUMB_SIZE,
	} from '../uiLayoutConfig';
	import { UI_BORDER_RADIUS } from '../constants';

	type Props = {
		value: number;
		width: number;
		onchange?: (value: number) => void;
	};

	let { value = $bindable(), width, onchange }: Props = $props();

	const hitHeight = Math.max(UI_MENU_AUDIO_SLIDER_HEIGHT, UI_MENU_AUDIO_THUMB_SIZE) + 16;
	const hitWidth = width + UI_MENU_AUDIO_THUMB_SIZE;

	let trackBounds = $state({ x: 0, width: 0 });

	const fillWidth = $derived((value / 100) * width);
	const thumbX = $derived(fillWidth);

	const setValueFromGlobalX = (globalX: number) => {
		if (trackBounds.width <= 0) return;

		const ratio = (globalX - trackBounds.x) / trackBounds.width;
		const nextValue = Math.round(Math.max(0, Math.min(1, ratio)) * 100);

		if (nextValue !== value) {
			value = nextValue;
			onchange?.(nextValue);
		}
	};

	const captureTrackBounds = (event: { currentTarget: { getBounds: () => { x: number; width: number } } }) => {
		const bounds = event.currentTarget.getBounds();
		trackBounds = {
			x: bounds.x + (bounds.width - width) * 0.5,
			width,
		};
	};

	const onWindowPointerMove = (event: PointerEvent) => {
		setValueFromGlobalX(event.clientX);
	};

	const stopDragging = () => {
		window.removeEventListener('pointermove', onWindowPointerMove);
		window.removeEventListener('pointerup', stopDragging);
		window.removeEventListener('pointercancel', stopDragging);
	};

	const onPointerDown = (event: { global: { x: number }; currentTarget: { getBounds: () => { x: number; width: number } } }) => {
		captureTrackBounds(event);
		setValueFromGlobalX(event.global.x);
		window.addEventListener('pointermove', onWindowPointerMove);
		window.addEventListener('pointerup', stopDragging);
		window.addEventListener('pointercancel', stopDragging);
	};
</script>

<Container>
	<Rectangle
		width={hitWidth}
		height={hitHeight}
		anchor={{ x: 0.5, y: 0.5 }}
		alpha={0}
		eventMode="static"
		cursor="pointer"
		onpointerdown={onPointerDown}
	/>

	<Rectangle
		width={width}
		height={UI_MENU_AUDIO_SLIDER_HEIGHT}
		anchor={{ x: 0.5, y: 0.5 }}
		backgroundColor={0x333333}
		borderRadius={UI_BORDER_RADIUS.button}
	/>

	{#if fillWidth > 0}
		<Rectangle
			x={-width * 0.5}
			width={fillWidth}
			height={UI_MENU_AUDIO_SLIDER_HEIGHT}
			anchor={{ x: 0, y: 0.5 }}
			backgroundColor={0xffffff}
			borderRadius={UI_BORDER_RADIUS.button}
		/>
	{/if}

	<Circle
		x={-width * 0.5 + thumbX}
		diameter={UI_MENU_AUDIO_THUMB_SIZE}
		anchor={0.5}
		backgroundColor={0xffffff}
		borderColor={0x333333}
		borderWidth={2}
	/>
</Container>

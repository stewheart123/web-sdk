<script lang="ts">
	import * as PIXI from 'pixi.js';
	import { Tween } from 'svelte/motion';

	import { Container, Circle } from 'pixi-svelte';

	import { getContext } from '../game/context';
	import {
		HOW_TO_PLAY_PANELS,
	} from '../game/howToPlayPanels';
	import {
		resolveHowToPlayLayout,
		SCENE_LABELS,
	} from '../game/visualLayoutConfig';
	import HowToPlayPanel from './HowToPlayPanel.svelte';

	const context = getContext();
	const layoutType = $derived(context.stateLayoutDerived.layoutType());
	const layout = $derived(resolveHowToPlayLayout(layoutType));
	const carousel = $derived(layout.carousel);
	const panels = HOW_TO_PLAY_PANELS;
	const panelCount = panels.length;

	const stride = $derived(layout.panelWidth + layout.gap);

	let activeIndex = $state(0);
	const trackX = new Tween(0);

	let dragStartX = 0;
	let dragOriginTrackX = 0;
	let dragging = false;
	const SWIPE_THRESHOLD = 40;

	// Wide hit band so peeks of neighboring panels are also draggable.
	const hitArea = $derived(
		new PIXI.Rectangle(
			-layout.panelWidth * 0.5 - stride,
			-layout.panelHeight * 0.5,
			layout.panelWidth + stride * 2,
			layout.panelHeight,
		),
	);

	const snapTo = (index: number, animate = true) => {
		const clamped = Math.max(0, Math.min(panelCount - 1, index));
		activeIndex = clamped;
		trackX.set(-clamped * stride, { duration: animate ? 180 : 0 });
	};

	$effect(() => {
		// Reset carousel when orientation / layout mode changes.
		layoutType;
		trackX.set(0, { duration: 0 });
		activeIndex = 0;
	});

	const onPointerDown = (event: PIXI.FederatedPointerEvent) => {
		if (!carousel) return;
		dragging = true;
		dragStartX = event.global.x;
		dragOriginTrackX = trackX.current;
		event.stopPropagation();
	};

	const onPointerMove = (event: PIXI.FederatedPointerEvent) => {
		if (!carousel || !dragging) return;
		const delta = event.global.x - dragStartX;
		const minX = -(panelCount - 1) * stride;
		const next = Math.min(0, Math.max(minX, dragOriginTrackX + delta));
		trackX.set(next, { duration: 0 });
	};

	const endDrag = (event: PIXI.FederatedPointerEvent) => {
		if (!carousel || !dragging) return;
		dragging = false;
		const delta = event.global.x - dragStartX;
		if (delta <= -SWIPE_THRESHOLD) {
			snapTo(activeIndex + 1);
		} else if (delta >= SWIPE_THRESHOLD) {
			snapTo(activeIndex - 1);
		} else {
			snapTo(activeIndex);
		}
		event.stopPropagation();
	};
</script>

<Container label={SCENE_LABELS.loading.howToPlay.root} y={layout.y}>
	{#if carousel}
		<Container
			eventMode="static"
			cursor="grab"
			{hitArea}
			onpointerdown={onPointerDown}
			onglobalpointermove={onPointerMove}
			onglobalpointerup={endDrag}
			onpointerupoutside={endDrag}
			onpointerup={endDrag}
		>
			<Container label={SCENE_LABELS.loading.howToPlay.track} x={trackX.current}>
				{#each panels as panel, index (panel.id)}
					<HowToPlayPanel {panel} layout={layout} x={index * stride} />
				{/each}
			</Container>
		</Container>

		<Container label={SCENE_LABELS.loading.howToPlay.dots} y={layout.dotsY}>
			{#each panels as panel, index (panel.id)}
				<Circle
					diameter={layout.dotDiameter}
					x={(index - (panelCount - 1) / 2) * (layout.dotDiameter + layout.dotGap)}
					anchor={0.5}
					backgroundColor={0xffffff}
					backgroundAlpha={index === activeIndex ? 1 : 0.35}
				/>
			{/each}
		</Container>
	{:else}
		<Container>
			{#each panels as panel, index (panel.id)}
				<HowToPlayPanel
					{panel}
					layout={layout}
					x={(index - (panelCount - 1) / 2) * stride}
				/>
			{/each}
		</Container>
	{/if}
</Container>

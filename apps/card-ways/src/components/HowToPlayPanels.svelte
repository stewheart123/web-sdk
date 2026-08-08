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
	const panelX = (index: number, centered: boolean) =>
		(centered ? (index - (panelCount - 1) / 2) * stride : index * stride) + layout.shadowBiasX;
	const panelY = $derived(layout.shadowBiasY);

	let activeIndex = $state(0);
	const trackX = new Tween(0);

	let dragHost: PIXI.Container | null = null;
	let dragStartLocalX = 0;
	let dragOriginTrackX = 0;
	let dragging = false;
	let lastMoveLocalX = 0;
	let lastMoveTime = 0;
	let velocityX = 0;

	/** Fraction of stride required to commit a page change (local space). */
	const SNAP_RATIO = 0.12;
	/** Local units / ms — a flick past this advances even with small distance. */
	const FLICK_VELOCITY = 0.55;

	// Wide hit band so peeks of neighboring panels are also draggable.
	const hitArea = $derived(
		new PIXI.Rectangle(
			-layout.panelWidth * 0.5 - stride,
			-layout.panelHeight * 0.55,
			layout.panelWidth + stride * 2,
			layout.panelHeight * 1.15,
		),
	);

	const clampTrackX = (value: number) => {
		const minX = -(panelCount - 1) * stride;
		return Math.min(0, Math.max(minX, value));
	};

	const snapTo = (index: number, animate = true) => {
		const clamped = Math.max(0, Math.min(panelCount - 1, index));
		activeIndex = clamped;
		trackX.set(-clamped * stride, { duration: animate ? 200 : 0 });
	};

	const detachDragListeners = () => {
		if (!dragHost) return;
		dragHost.off('globalpointermove', onDragMove);
		dragHost.off('globalpointerup', onDragEnd);
		dragHost.off('pointerupoutside', onDragEnd);
		dragHost = null;
	};

	const onDragMove = (event: PIXI.FederatedPointerEvent) => {
		if (!dragging || !dragHost) return;
		const localX = event.getLocalPosition(dragHost).x;
		const now = performance.now();
		const dt = Math.max(1, now - lastMoveTime);
		velocityX = (localX - lastMoveLocalX) / dt;
		lastMoveLocalX = localX;
		lastMoveTime = now;

		const delta = localX - dragStartLocalX;
		trackX.set(clampTrackX(dragOriginTrackX + delta), { duration: 0 });
	};

	const onDragEnd = (event: PIXI.FederatedPointerEvent) => {
		if (!dragging || !dragHost) return;
		dragging = false;

		const localX = event.getLocalPosition(dragHost).x;
		const delta = localX - dragStartLocalX;
		detachDragListeners();

		const threshold = Math.max(28, stride * SNAP_RATIO);
		const flicked = Math.abs(velocityX) >= FLICK_VELOCITY;
		if (delta <= -threshold || (flicked && velocityX < 0 && delta < 0)) {
			snapTo(activeIndex + 1);
		} else if (delta >= threshold || (flicked && velocityX > 0 && delta > 0)) {
			snapTo(activeIndex - 1);
		} else {
			snapTo(activeIndex);
		}

		velocityX = 0;
		event.stopPropagation();
	};

	const onPointerDown = (event: PIXI.FederatedPointerEvent) => {
		if (!carousel) return;

		detachDragListeners();
		dragging = true;
		dragHost = event.currentTarget as PIXI.Container;
		dragStartLocalX = event.getLocalPosition(dragHost).x;
		dragOriginTrackX = trackX.current;
		lastMoveLocalX = dragStartLocalX;
		lastMoveTime = performance.now();
		velocityX = 0;

		// Props like onglobalpointermove are not reliably wired by pixi-svelte;
		// bind global listeners on the live display object for the active drag.
		dragHost.on('globalpointermove', onDragMove);
		dragHost.on('globalpointerup', onDragEnd);
		dragHost.on('pointerupoutside', onDragEnd);

		event.stopPropagation();
	};

	$effect(() => {
		// Reset carousel when orientation / layout mode changes.
		layoutType;
		detachDragListeners();
		dragging = false;
		trackX.set(0, { duration: 0 });
		activeIndex = 0;
	});

	// Browser may steal horizontal touches when canvas touch-action is "auto".
	$effect(() => {
		const canvas = context.stateApp.pixiApplication?.canvas as HTMLCanvasElement | undefined;
		if (!carousel || !canvas) return;
		const previous = canvas.style.touchAction;
		canvas.style.touchAction = 'none';
		return () => {
			canvas.style.touchAction = previous;
		};
	});
</script>

<Container label={SCENE_LABELS.loading.howToPlay.root} y={layout.y}>
	{#if carousel}
		<Container
			eventMode="static"
			interactiveChildren={false}
			cursor="grab"
			{hitArea}
			onpointerdown={onPointerDown}
		>
			<Container label={SCENE_LABELS.loading.howToPlay.track} x={trackX.current}>
				{#each panels as panel, index (panel.id)}
					<HowToPlayPanel {panel} layout={layout} x={panelX(index, false)} y={panelY} />
				{/each}
			</Container>
		</Container>

		<Container label={SCENE_LABELS.loading.howToPlay.dots} y={layout.dotsY}>
			{#each panels as panel, index (panel.id)}
				<Circle
					diameter={layout.dotDiameter}
					x={(index - (panelCount - 1) / 2) * (layout.dotDiameter + layout.dotGap)}
					anchor={0.5}
					eventMode="static"
					cursor="pointer"
					backgroundColor={0xffffff}
					backgroundAlpha={index === activeIndex ? 1 : 0.35}
					onpointerup={() => snapTo(index)}
				/>
			{/each}
		</Container>
	{:else}
		<Container>
			{#each panels as panel, index (panel.id)}
				<HowToPlayPanel
					{panel}
					layout={layout}
					x={panelX(index, true)}
					y={panelY}
				/>
			{/each}
		</Container>
	{/if}
</Container>

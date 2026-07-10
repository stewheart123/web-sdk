<script lang="ts">
	import * as PIXI from 'pixi.js';
	import { Rectangle, type RectangleProps, getContextApp, getContextParent } from 'pixi-svelte';
	import { getContextLayout } from 'utils-layout';

	type Props = Omit<RectangleProps, 'width' | 'height' | 'x' | 'y'> & {
		/** When true (default), cover the canvas even inside scaled/centered parents. */
		alignToCanvas?: boolean;
	};

	const props: Props = $props();
	const context = getContextLayout();
	const appContext = getContextApp();
	const parentContext = getContextParent();

	const canvasRect = $derived.by(() => {
		const { width: canvasWidth, height: canvasHeight } = context.stateLayoutDerived.canvasSizes();
		const alignToCanvas = props.alignToCanvas ?? true;

		if (!alignToCanvas) {
			return { x: 0, y: 0, width: canvasWidth, height: canvasHeight };
		}

		const stage = appContext.stateApp.pixiApplication?.stage;
		if (!stage) {
			return { x: 0, y: 0, width: canvasWidth, height: canvasHeight };
		}

		const topLeft = parentContext.parent.toLocal(new PIXI.Point(0, 0), stage);
		const bottomRight = parentContext.parent.toLocal(
			new PIXI.Point(canvasWidth, canvasHeight),
			stage,
		);

		return {
			x: topLeft.x,
			y: topLeft.y,
			width: bottomRight.x - topLeft.x,
			height: bottomRight.y - topLeft.y,
		};
	});
</script>

<Rectangle
	{...props}
	x={canvasRect.x}
	y={canvasRect.y}
	width={canvasRect.width}
	height={canvasRect.height}
/>

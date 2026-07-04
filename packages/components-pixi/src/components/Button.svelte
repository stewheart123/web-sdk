<script lang="ts" module>
	import type { Snippet } from 'svelte';
	import { Circle as PixiCircle } from 'pixi.js';

	import {
		Container,
		Rectangle,
		Circle,
		anchorToPivot,
		type ContainerProps,
		type Sizes,
		type PixiPoint,
	} from 'pixi-svelte';

	type ContainerPropsToOmit =
		| 'eventMode'
		| 'cursor'
		| 'pivot'
		| 'children'
		| 'onpointerover'
		| 'onpointerout'
		| 'onpointerdown'
		| 'onpointerup'
		| 'hitArea';

	export type Props = Omit<ContainerProps, ContainerPropsToOmit> & {
		sizes: Sizes;
		onpress: () => void;
		disabled?: boolean;
		anchor?: PixiPoint;
		hitShape?: 'rect' | 'circle';
		children: Snippet<
			[
				{
					center: { x: number; y: number };
					hovered: boolean;
					pressed: boolean;
				},
			]
		>;
		debug?: boolean;
	};
</script>

<script lang="ts">
	const {
		children,
		sizes,
		anchor,
		disabled,
		onpress,
		debug,
		hitShape = 'rect',
		...containerProps
	}: Props = $props();
	const center = $derived({
		x: sizes.width * 0.5,
		y: sizes.height * 0.5,
	});
	const hitRadius = $derived(Math.min(sizes.width, sizes.height) * 0.5);
	const hitArea = $derived(
		hitShape === 'circle'
			? new PixiCircle(center.x, center.y, hitRadius)
			: undefined,
	);

	let hovered = $state(false);
	let pressed = $state(false);

	$effect(() => {
		if (disabled) {
			hovered = false;
			pressed = false;
		}
	});
</script>

<Container
	{...containerProps}
	{hitArea}
	eventMode="static"
	cursor={disabled ? 'not-allowed' : 'pointer'}
	pivot={anchorToPivot({ sizes, anchor })}
	onpointerover={() => {
		if (disabled) return;
		hovered = true;
	}}
	onpointerout={() => {
		if (disabled) return;
		hovered = false;
	}}
	onpointerdown={() => {
		if (disabled) return;
		pressed = true;
	}}
	onpointerup={() => {
		if (disabled) return;
		pressed = false;
		onpress();
	}}
>
	{#if debug}
		{#if hitShape === 'circle'}
			<Circle
				x={center.x}
				y={center.y}
				anchor={0.5}
				diameter={hitRadius * 2}
				backgroundAlpha={0}
				borderWidth={2}
				borderColor={0xffffff}
				borderAlpha={0.5}
			/>
		{:else}
			<Rectangle
				width={sizes.width}
				height={sizes.height}
				alpha={0.5}
				borderWidth={2}
				borderColor={0xffffff}
			/>
		{/if}
	{/if}
	{@render children({ center, hovered, pressed })}
</Container>

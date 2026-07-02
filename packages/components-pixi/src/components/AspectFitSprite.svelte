<script lang="ts" module>
	import type { Props as SpriteProps } from 'pixi-svelte';

	export type Props = Omit<SpriteProps, 'width' | 'height' | 'scale'> & {
		key: string;
		maxWidth: number;
		maxHeight?: number;
	};
</script>

<script lang="ts">
	import * as PIXI from 'pixi.js';

	import { Sprite, getContextApp, type LoadedSprite } from 'pixi-svelte';

	const { maxWidth, maxHeight, key, ...spriteProps }: Props = $props();
	const context = getContextApp();

	const texture = $derived(
		(context.stateApp.loadedAssets?.[key] || PIXI.Texture.EMPTY) as LoadedSprite,
	);

	const naturalSize = $derived({
		width: texture.width || 1,
		height: texture.height || 1,
	});

	const fitScale = $derived.by(() => {
		const scaleX = maxWidth / naturalSize.width;
		if (maxHeight === undefined) return scaleX;
		const scaleY = maxHeight / naturalSize.height;
		return Math.min(scaleX, scaleY);
	});
</script>

<Sprite {key} scale={fitScale} {...spriteProps} />

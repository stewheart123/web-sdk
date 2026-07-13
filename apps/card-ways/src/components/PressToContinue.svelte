<script lang="ts">
	import * as PIXI from 'pixi.js';
	import { MainContainer, OnPressFullScreen } from 'components-layout';
	import { OnHotkey } from 'components-shared';
	import { stateUrlDerived } from 'state-shared';
	import { Sprite } from 'pixi-svelte';

	import { getContext } from '../game/context';
	import { resolveLocalizedSpriteKey, resolveSpriteLang } from '../game/syncLocale';
	import {
		getPressToContinueLayout,
		SCENE_LABELS,
		type EmbeddedPressToContinueLayout,
	} from '../game/visualLayoutConfig';

	type Props = {
		onpress: () => void;
		/** When true, render inside a parent container (no MainContainer wrapper). */
		embedded?: boolean;
		/** When true with embedded, only render the label sprite; caller owns fullscreen input. */
		visualOnly?: boolean;
		layout?: EmbeddedPressToContinueLayout;
	};

	const props: Props = $props();
	const context = getContext();
	const layoutType = $derived(context.stateLayoutDerived.layoutType());
	const screenLayout = $derived(getPressToContinueLayout(layoutType));
	const spriteLayout = $derived(
		props.embedded && props.layout ? props.layout : screenLayout,
	);
	const spriteLabel = $derived(
		props.embedded && props.layout ? props.layout.label : SCENE_LABELS.ui.pressToContinue,
	);

	const spriteLang = $derived(resolveSpriteLang(stateUrlDerived.lang()));
	const textureKey = $derived(
		resolveLocalizedSpriteKey('pressToContinueText', spriteLang, context.stateApp.loadedAssets),
	);
	const texture = $derived(
		(context.stateApp.loadedAssets?.[textureKey] ?? PIXI.Texture.EMPTY) as PIXI.Texture,
	);
	const displayHeight = $derived(
		texture.width > 0
			? spriteLayout.width * (texture.height / texture.width)
			: spriteLayout.width,
	);
</script>

{#if props.embedded}
	<Sprite
		label={spriteLabel}
		key={textureKey}
		width={spriteLayout.width}
		height={displayHeight}
		anchor={spriteLayout.anchor}
		x={spriteLayout.x}
		y={spriteLayout.y}
		zIndex={spriteLayout.zIndex}
	/>
{:else}
	<MainContainer label={SCENE_LABELS.layout.pressToContinue} alignVertical="bottom">
		<Sprite
			label={spriteLabel}
			key={textureKey}
			width={spriteLayout.width}
			height={displayHeight}
			anchor={spriteLayout.anchor}
			x={spriteLayout.x}
			y={spriteLayout.y}
		/>
	</MainContainer>
{/if}
{#if !(props.embedded && props.visualOnly)}
	<OnHotkey hotkey="Space" onpress={() => props.onpress()} />
	<OnPressFullScreen onpress={() => props.onpress()} />
{/if}

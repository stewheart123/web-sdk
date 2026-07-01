<script lang="ts">
	import * as PIXI from 'pixi.js';
	import { MainContainer, OnPressFullScreen } from 'components-layout';
	import { OnHotkey } from 'components-shared';
	import { stateUrlDerived } from 'state-shared';
	import { Sprite } from 'pixi-svelte';

	import { getContext } from '../game/context';
	import { getPressToContinueLayout, SCENE_LABELS } from '../game/visualLayoutConfig';

	type Props = {
		onpress: () => void;
	};

	const props: Props = $props();
	const context = getContext();
	const layoutType = $derived(context.stateLayoutDerived.layoutType());
	const layout = $derived(getPressToContinueLayout(layoutType));

	const textureKey = $derived(`pressToContinueText_${stateUrlDerived.lang()}.png`);
	const texture = $derived(
		(context.stateApp.loadedAssets?.[textureKey] ?? PIXI.Texture.EMPTY) as PIXI.Texture,
	);
	const displayHeight = $derived(
		texture.width > 0 ? layout.width * (texture.height / texture.width) : layout.width,
	);
</script>

<MainContainer label={SCENE_LABELS.layout.pressToContinue} alignVertical="bottom">
	<Sprite
		label={SCENE_LABELS.ui.pressToContinue}
		key={textureKey}
		width={layout.width}
		height={displayHeight}
		anchor={layout.anchor}
		x={layout.x}
		y={layout.y}
	/>
</MainContainer>
<OnHotkey hotkey="Space" onpress={() => props.onpress()} />
<OnPressFullScreen onpress={() => props.onpress()} />

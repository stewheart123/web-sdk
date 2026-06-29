<script lang="ts">
	import * as PIXI from 'pixi.js';
	import { MainContainer, OnPressFullScreen } from 'components-layout';
	import { OnHotkey } from 'components-shared';
	import { stateUrlDerived } from 'state-shared';
	import { Sprite } from 'pixi-svelte';

	import { getContext } from '../game/context';

	type Props = {
		onpress: () => void;
	};

	const props: Props = $props();
	const context = getContext();

	const DISPLAY_WIDTH = 800;

	const textureKey = $derived(`pressToContinueText_${stateUrlDerived.lang()}.png`);
	const texture = $derived(
		(context.stateApp.loadedAssets?.[textureKey] ?? PIXI.Texture.EMPTY) as PIXI.Texture,
	);
	const displayHeight = $derived(
		texture.width > 0 ? DISPLAY_WIDTH * (texture.height / texture.width) : DISPLAY_WIDTH,
	);
</script>

<MainContainer alignVertical="bottom">
	<Sprite
		key={textureKey}
		width={DISPLAY_WIDTH}
		height={displayHeight}
		anchor={{ x: 0.5, y: 1 }}
		x={context.stateLayoutDerived.mainLayout().width * 0.5}
		y={context.stateLayoutDerived.mainLayout().height}
	/>
</MainContainer>
<OnHotkey hotkey="Space" onpress={() => props.onpress()} />
<OnPressFullScreen onpress={() => props.onpress()} />

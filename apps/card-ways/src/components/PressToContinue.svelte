<script lang="ts">
	import * as PIXI from 'pixi.js';
	import { MainContainer, OnPressFullScreen } from 'components-layout';
	import { OnHotkey } from 'components-shared';
	import { stateUrlDerived } from 'state-shared';
	import { Sprite } from 'pixi-svelte';

	import { getContext } from '../game/context';
	import { PRESS_TO_CONTINUE, SCENE_LABELS } from '../game/visualLayoutConfig';

	type Props = {
		onpress: () => void;
	};

	const props: Props = $props();
	const context = getContext();

	const textureKey = $derived(`pressToContinueText_${stateUrlDerived.lang()}.png`);
	const texture = $derived(
		(context.stateApp.loadedAssets?.[textureKey] ?? PIXI.Texture.EMPTY) as PIXI.Texture,
	);
	const displayHeight = $derived(
		texture.width > 0
			? PRESS_TO_CONTINUE.width * (texture.height / texture.width)
			: PRESS_TO_CONTINUE.width,
	);
	const position = $derived({
		x: context.stateLayoutDerived.mainLayout().width * PRESS_TO_CONTINUE.xRatio,
		y: context.stateLayoutDerived.mainLayout().height * PRESS_TO_CONTINUE.yRatio,
	});
</script>

<MainContainer label={SCENE_LABELS.layout.pressToContinue} alignVertical="bottom">
	<Sprite
		label={SCENE_LABELS.ui.pressToContinue}
		key={textureKey}
		width={PRESS_TO_CONTINUE.width}
		height={displayHeight}
		anchor={PRESS_TO_CONTINUE.anchor}
		x={position.x}
		y={position.y}
	/>
</MainContainer>
<OnHotkey hotkey="Space" onpress={() => props.onpress()} />
<OnPressFullScreen onpress={() => props.onpress()} />

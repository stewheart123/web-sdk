<script lang="ts">
	import { SpineProvider, SpineTrack } from 'pixi-svelte';
	import { FadeContainer } from 'components-pixi';
	import { SECOND } from 'constants-shared/time';

	import { getContext } from '../game/context';
	import {
		BACKGROUND_SPINE_LAYOUT_ARGS,
		resolveBackgroundSpineProps,
	} from '../game/stateLayout';
	import { SCENE_LABELS, SCENE_LAYERS } from '../game/visualLayoutConfig';

	const context = getContext();

	const backgroundProps = $derived.by(() =>
		resolveBackgroundSpineProps(
			context.stateLayoutDerived.centeredBackgroundLayout(BACKGROUND_SPINE_LAYOUT_ARGS)(),
		),
	);
	const showForeground = $derived(
		!context.stateLayout.showLoadingScreen && context.stateGame.gameType === 'freegame',
	);
</script>

<FadeContainer
	label={SCENE_LABELS.fade.backgroundForeground}
	show={showForeground}
	duration={SECOND}
	persistent
	zIndex={SCENE_LAYERS.foreground}
>
	<SpineProvider
		label={SCENE_LABELS.background.foreground}
		key="foregroundAnimation"
		{...backgroundProps}
	>
		<SpineTrack trackIndex={0} animationName="BACKGROUND-FOREGROUND" loop />
	</SpineProvider>
</FadeContainer>

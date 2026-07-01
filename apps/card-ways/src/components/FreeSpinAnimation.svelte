<script lang="ts">
	import type { Snippet } from 'svelte';

	import {
		anchorToPivot,
		Container,
		Sprite,
		SpineProvider,
		SpineTrack,
		type Sizes,
	} from 'pixi-svelte';
	import { MainContainer } from 'components-layout';

	import { getContext } from '../game/context';
	import { FREE_SPIN_MODAL, getFreeSpinModalSizes, SCENE_LABELS } from '../game/visualLayoutConfig';

	type ModalKey = 'FOIL-MODAL-BLUE.png' | 'FOIL-MODAL-RED.png';

	type Props = {
		modalKey: ModalKey;
		children: Snippet<[{ sizes: Sizes }]>;
	};

	const props: Props = $props();

	type AnimationName = 'NEW-SHINE-INTRO' | 'NEW-SHINE';

	const context = getContext();
	const modalSizes = $derived(getFreeSpinModalSizes());
	const backgroundSizes = $derived(modalSizes.background);
	const panelSizes = $derived(modalSizes.panel);
	const contentX = $derived(panelSizes.width * FREE_SPIN_MODAL.contentXRatio);
	const contentY = $derived(panelSizes.height * FREE_SPIN_MODAL.contentYRatio);

	let animationName = $state<AnimationName>('NEW-SHINE-INTRO');
</script>

<MainContainer>
	<Container
		label={SCENE_LABELS.freeSpin.modal.root}
		x={context.stateGameDerived.boardLayout().x}
		y={context.stateGameDerived.boardLayout().y + FREE_SPIN_MODAL.yOffsetFromBoard}
		pivot={anchorToPivot({ anchor: 0.5, sizes: backgroundSizes })}
	>
		<SpineProvider
			label={SCENE_LABELS.freeSpin.modal.shine}
			key="fsIntro"
			width={panelSizes.width}
			x={contentX}
			y={contentY}
		>
			<SpineTrack
				trackIndex={0}
				{animationName}
				loop={animationName === 'NEW-SHINE'}
				listener={{
					complete: () => (animationName = 'NEW-SHINE'),
				}}
			/>
		</SpineProvider>

		<Container label={SCENE_LABELS.freeSpin.modal.panel} x={contentX} y={contentY}>
			<Sprite
				label={SCENE_LABELS.freeSpin.modal.foil}
				key={props.modalKey}
				anchor={FREE_SPIN_MODAL.modalSpriteAnchor}
				width={backgroundSizes.width}
				height={backgroundSizes.height}
			/>
			{@render props.children({ sizes: backgroundSizes })}
		</Container>
	</Container>
</MainContainer>

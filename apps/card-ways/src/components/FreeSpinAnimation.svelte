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
	import {
		getFreeSpinModalLayout,
		SCENE_LABELS,
		VISUAL_LAYOUT,
	} from '../game/visualLayoutConfig';

	type ModalKey = 'FOIL-MODAL-BLUE.png' | 'FOIL-MODAL-RED.png';

	type Props = {
		modalKey: ModalKey;
		children: Snippet<[{ sizes: Sizes }]>;
	};

	const props: Props = $props();

	type AnimationName = 'NEW-SHINE-INTRO' | 'NEW-SHINE';

	const context = getContext();
	const layoutType = $derived(context.stateLayoutDerived.layoutType());
	const modalLayout = $derived(getFreeSpinModalLayout(layoutType));
	const modalSizes = $derived({ width: modalLayout.width, height: modalLayout.height });
	const boardLayout = $derived(context.stateGameDerived.boardLayout());

	let animationName = $state<AnimationName>('NEW-SHINE-INTRO');
</script>

<MainContainer label={SCENE_LABELS.layout.freeSpinModal}>
	<Container
		label={SCENE_LABELS.freeSpin.modal.root}
		x={boardLayout.x + modalLayout.offsetFromBoard.x}
		y={boardLayout.y + modalLayout.offsetFromBoard.y}
		pivot={anchorToPivot({ anchor: 0.5, sizes: modalSizes })}
	>
		<SpineProvider
			label={SCENE_LABELS.freeSpin.modal.shine}
			key="fsIntro"
			width={modalLayout.shineWidth}
			x={modalLayout.content.x}
			y={modalLayout.content.y}
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

		<Container
			label={SCENE_LABELS.freeSpin.modal.panel}
			x={modalLayout.content.x}
			y={modalLayout.content.y}
		>
			<Sprite
				label={SCENE_LABELS.freeSpin.modal.foil}
				key={props.modalKey}
				anchor={VISUAL_LAYOUT.freeSpin.modal.spriteAnchor}
				width={modalSizes.width}
				height={modalSizes.height}
			/>
			{@render props.children({ sizes: modalSizes })}
		</Container>
	</Container>
</MainContainer>

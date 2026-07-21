<script lang="ts">
	import type { Snippet } from 'svelte';

	import {
		anchorToPivot,
		Container,
		SpineProvider,
		SpineTrack,
		type Sizes,
	} from 'pixi-svelte';
	import { MainContainer } from 'components-layout';

	import { getContext } from '../game/context';
	import {
		getFreeSpinModalLayout,
		SCENE_LABELS,
	} from '../game/visualLayoutConfig';

	type Props = {
		children: Snippet<[{ sizes: Sizes }]>;
	};

	const props: Props = $props();

	type AnimationName = 'FS-MODAL-INTRO' | 'FS-MODAL-IDLE';

	const context = getContext();
	const layoutType = $derived(context.stateLayoutDerived.layoutType());
	const modalLayout = $derived(getFreeSpinModalLayout(layoutType));
	const modalSizes = $derived({ width: modalLayout.width, height: modalLayout.height });
	const boardLayout = $derived(context.stateGameDerived.boardLayout());

	let animationName = $state<AnimationName>('FS-MODAL-INTRO');
</script>

<MainContainer label={SCENE_LABELS.layout.freeSpinModal}>
	<Container
		label={SCENE_LABELS.freeSpin.modal.root}
		x={boardLayout.x + modalLayout.offsetFromBoard.x}
		y={boardLayout.y + modalLayout.offsetFromBoard.y}
		pivot={anchorToPivot({ anchor: 0.5, sizes: modalSizes })}
	>
		<SpineProvider
			label={SCENE_LABELS.freeSpin.modal.spine}
			key="fsModal"
			width={modalLayout.spineWidth}
			x={modalLayout.spine.x}
			y={modalLayout.spine.y}
		>
			<SpineTrack
				trackIndex={0}
				{animationName}
				loop={animationName === 'FS-MODAL-IDLE'}
				listener={{
					complete: () => (animationName = 'FS-MODAL-IDLE'),
				}}
			/>
		</SpineProvider>

		<Container
			label={SCENE_LABELS.freeSpin.modal.panel}
			x={modalLayout.panel.x}
			y={modalLayout.panel.y}
		>
			{@render props.children({ sizes: modalSizes })}
		</Container>
	</Container>
</MainContainer>

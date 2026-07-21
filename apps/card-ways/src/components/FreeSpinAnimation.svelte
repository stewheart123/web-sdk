<script lang="ts">
	import type { Snippet } from 'svelte';
	import { onMount } from 'svelte';

	import {
		anchorToPivot,
		Container,
		SpineProvider,
		SpineTrack,
		type Sizes,
	} from 'pixi-svelte';
	import { MainContainer } from 'components-layout';
	import { FadeContainer } from 'components-pixi';

	import { getContext } from '../game/context';
	import {
		FREE_SPIN_MODAL,
		getFreeSpinModalLayout,
		OVERLAY,
		SCENE_LABELS,
	} from '../game/visualLayoutConfig';

	type AnimationName =
		| 'FS-MODAL-INTRO'
		| 'FS-MODAL-IDLE'
		| 'FS-MODAL-OUTRO'
		| 'FS-MODAL-FINISH';

	type Props = {
		children: Snippet<[{ sizes: Sizes }]>;
		exiting?: boolean;
	};

	const props: Props = $props();

	const context = getContext();
	const layoutType = $derived(context.stateLayoutDerived.layoutType());
	const modalLayout = $derived(getFreeSpinModalLayout(layoutType));
	const modalSizes = $derived({ width: modalLayout.width, height: modalLayout.height });
	const boardLayout = $derived(context.stateGameDerived.boardLayout());

	let animationName = $state<AnimationName>('FS-MODAL-INTRO');
	let panelShow = $state(false);

	const isHoldAnimation = $derived(
		animationName === 'FS-MODAL-IDLE' || animationName === 'FS-MODAL-FINISH',
	);
	const timeScale = $derived(
		animationName === 'FS-MODAL-OUTRO' ? FREE_SPIN_MODAL.outroTimeScale : 1,
	);

	$effect(() => {
		if (
			props.exiting &&
			animationName !== 'FS-MODAL-OUTRO' &&
			animationName !== 'FS-MODAL-FINISH'
		) {
			animationName = 'FS-MODAL-OUTRO';
		}
	});

	onMount(() => {
		panelShow = true;
	});
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
				loop={isHoldAnimation}
				{timeScale}
				listener={{
					complete: () => {
						if (animationName === 'FS-MODAL-INTRO') {
							animationName = 'FS-MODAL-IDLE';
						} else if (animationName === 'FS-MODAL-OUTRO') {
							animationName = 'FS-MODAL-FINISH';
						}
					},
				}}
			/>
		</SpineProvider>

		<FadeContainer
			label={SCENE_LABELS.freeSpin.modal.panel}
			show={panelShow}
			duration={OVERLAY.fadeDurationMs}
			delay={FREE_SPIN_MODAL.panelFadeDelayMs}
			x={modalLayout.panel.x}
			y={modalLayout.panel.y}
		>
			{@render props.children({ sizes: modalSizes })}
		</FadeContainer>
	</Container>
</MainContainer>

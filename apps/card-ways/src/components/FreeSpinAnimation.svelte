<script lang="ts">
	import type { Snippet } from 'svelte';

	import {
		anchorToPivot,
		Container,
		SpineProvider,
		SpineSlot,
		SpineTrack,
		type Sizes,
	} from 'pixi-svelte';
	import { MainContainer } from 'components-layout';

	import { getContext } from '../game/context';
	import {
		FREE_SPIN_MODAL,
		getFreeSpinModalLayout,
		SCENE_LABELS,
	} from '../game/visualLayoutConfig';

	type Mode = 'intro' | 'summary';

	type AnimationName =
		| 'INTRO-IN'
		| 'INTRO-IDLE'
		| 'INTRO-OUT'
		| 'SUMMARY-IN'
		| 'SUMMARY-IDLE'
		| 'SUMMARY-OUT';

	type Props = {
		mode: Mode;
		children: Snippet<[{ sizes: Sizes }]>;
		exiting?: boolean;
		/** Fired when the IN animation completes and IDLE begins (e.g. start count-up). */
		onReady?: () => void;
		/** Fired when the OUT animation actually begins. */
		onOutroStarted?: () => void;
	};

	const props: Props = $props();

	const context = getContext();
	const layoutType = $derived(context.stateLayoutDerived.layoutType());
	const modalLayout = $derived(getFreeSpinModalLayout(layoutType));
	const modalSizes = $derived({ width: modalLayout.width, height: modalLayout.height });
	const boardLayout = $derived(context.stateGameDerived.boardLayout());

	const inAnimation = $derived(
		(props.mode === 'intro' ? 'INTRO-IN' : 'SUMMARY-IN') as AnimationName,
	);
	const idleAnimation = $derived(
		(props.mode === 'intro' ? 'INTRO-IDLE' : 'SUMMARY-IDLE') as AnimationName,
	);
	const outAnimation = $derived(
		(props.mode === 'intro' ? 'INTRO-OUT' : 'SUMMARY-OUT') as AnimationName,
	);

	let animationName = $state<AnimationName>(
		props.mode === 'summary' ? 'SUMMARY-IN' : 'INTRO-IN',
	);
	let outroStarted = $state(false);
	let readyFired = $state(false);

	const isHoldAnimation = $derived(animationName === idleAnimation);
	const timeScale = $derived(
		animationName === outAnimation ? FREE_SPIN_MODAL.outroTimeScale : 1,
	);

	const fireReady = () => {
		if (readyFired) return;
		readyFired = true;
		props.onReady?.();
	};

	const startOutro = () => {
		if (outroStarted || animationName === outAnimation) {
			return;
		}
		outroStarted = true;
		animationName = outAnimation;
		props.onOutroStarted?.();
	};

	$effect(() => {
		if (!props.exiting || outroStarted) return;
		startOutro();
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
						if (animationName === inAnimation) {
							animationName = idleAnimation;
							fireReady();
						}
					},
				}}
			/>
			<SpineSlot slotName="FS_MODAL_PLACEHOLDER_VALUE">
				{@render props.children({ sizes: modalSizes })}
			</SpineSlot>
		</SpineProvider>
	</Container>
</MainContainer>

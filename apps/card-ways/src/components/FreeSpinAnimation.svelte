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
	import { SYMBOL_SIZE, BOARD_DIMENSIONS } from '../game/constants';

	type ModalKey = 'FOIL-MODAL-BLUE.png' | 'FOIL-MODAL-RED.png';

	type Props = {
		modalKey: ModalKey;
		children: Snippet<[{ sizes: Sizes }]>;
	};

	const props: Props = $props();

	type AnimationName = 'NEW-SHINE-INTRO' | 'NEW-SHINE';

	const context = getContext();
	const MODAL_RATIO = 613 / 391;
	const BACKGROUND_WIDTH = SYMBOL_SIZE * BOARD_DIMENSIONS.x;
	const BACKGROUND_SIZES = {
		width: BACKGROUND_WIDTH,
		height: BACKGROUND_WIDTH / MODAL_RATIO,
	};
	const PANEL_SIZES = {
		width: SYMBOL_SIZE * BOARD_DIMENSIONS.x,
		height: SYMBOL_SIZE * BOARD_DIMENSIONS.x,
	};

	let animationName = $state<AnimationName>('NEW-SHINE-INTRO');
</script>

<!-- TODO Y POSITION OF ENTIRE CONTAINER -->
<MainContainer>
	<Container
		x={context.stateGameDerived.boardLayout().x}
		y={context.stateGameDerived.boardLayout().y - 60}
		pivot={anchorToPivot({ anchor: 0.5, sizes: BACKGROUND_SIZES })}
	>
		<SpineProvider
			key="fsIntro"
			width={PANEL_SIZES.width}
			x={PANEL_SIZES.width * 0.5}
			y={PANEL_SIZES.height * 0.4}
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

		<Container x={PANEL_SIZES.width * 0.5} y={PANEL_SIZES.height * 0.4}>
			<Sprite
				key={props.modalKey}
				anchor={{ x: 0.5, y: 0.5 }}
				width={BACKGROUND_SIZES.width}
				height={BACKGROUND_SIZES.height}
			/>
			{@render props.children({ sizes: BACKGROUND_SIZES })}
		</Container>
	</Container>
</MainContainer>

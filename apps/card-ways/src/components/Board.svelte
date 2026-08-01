<script lang="ts" module>
	import type { RawSymbol, Position } from '../game/types';

	export type EmitterEventBoard =
		| { type: 'boardSettle'; board: RawSymbol[][] }
		| { type: 'boardShow' }
		| { type: 'boardHide' }
		| {
				type: 'boardWithAnimateSymbols';
				symbolPositions: Position[];
		  };
</script>

<script lang="ts">
	import { waitForResolve, waitForTimeout } from 'utils-shared/wait';
	import { BoardContext } from 'components-shared';

	import { getContext } from '../game/context';
	import BoardContainer from './BoardContainer.svelte';
	import BoardMask from './BoardMask.svelte';
	import BoardBase from './BoardBase.svelte';
	import { normalizeBoard } from '../game/constants';
	import { BOARD_MASK } from '../game/visualLayoutConfig';

	/** Delay between starting each reel's win animations (left → right). */
	const WIN_STAGGER_MS = 200;

	const context = getContext();

	let show = $state(true);

	context.eventEmitter.subscribeOnMount({
		stopButtonClick: () => context.stateGameDerived.enhancedBoard.stop(),
		boardSettle: ({ board }) => context.stateGameDerived.enhancedBoard.settle(normalizeBoard(board)),
		boardShow: () => (show = true),
		boardHide: () => (show = false),
		boardWithAnimateSymbols: async ({ symbolPositions }) => {
			const eligible = symbolPositions
				.filter((position) => {
					const { rawSymbol } =
						context.stateGame.board[position.reel].reelState.symbols[position.row];
					return !(rawSymbol.non_winnable || rawSymbol.name === 'N');
				})
				.sort((a, b) => a.reel - b.reel || a.row - b.row);

			const waves: (typeof eligible)[] = [];
			for (const position of eligible) {
				const lastWave = waves[waves.length - 1];
				if (lastWave && lastWave[0].reel === position.reel) {
					lastWave.push(position);
				} else {
					waves.push([position]);
				}
			}

			const completionPromises: Promise<void>[] = [];

			for (let waveIndex = 0; waveIndex < waves.length; waveIndex++) {
				const wave = waves[waveIndex];

				for (const position of wave) {
					const reelSymbol =
						context.stateGame.board[position.reel].reelState.symbols[position.row];

					completionPromises.push(
						(async () => {
							await waitForResolve((resolve) => {
								reelSymbol.oncomplete = resolve;
							});
							reelSymbol.symbolState = 'postWinStatic';
						})(),
					);

					reelSymbol.symbolState = 'win';
				}

				if (waveIndex < waves.length - 1) {
					await waitForTimeout(WIN_STAGGER_MS);
				}
			}

			await Promise.all(completionPromises);
		},
	});

	context.stateGameDerived.enhancedBoard.readyToSpinEffect();
</script>

{#if show}
	<BoardContext animate={false}>
		<BoardContainer>
			<BoardMask />
			<BoardBase />
		</BoardContainer>
	</BoardContext>

	<BoardContext animate={true}>
		<BoardContainer>
			<BoardMask verticalPadding={BOARD_MASK.animateVerticalPadding} />
			<BoardBase />
		</BoardContainer>
	</BoardContext>
{/if}

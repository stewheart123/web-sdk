import { stateUi } from 'state-shared';

import { createEnhanceBoardPreSpin } from './createEnhanceBoardPreSpin';
import { createEnhanceBoardSpin } from './createEnhanceBoardSpin';
import { stateSlots } from './stateSlots.svelte';
import type { Reel, GetRawSymbolFromReel } from './types';

export function createEnhanceBoard() {
	function enhanceBoard<TReel extends Reel<any, any>>({ board }: { board: TReel[] }) {
		type TRawSymbol = GetRawSymbolFromReel<TReel>;

		const { preSpin } = createEnhanceBoardPreSpin({ board });
		const { spin } = createEnhanceBoardSpin({ board });
		const clearBoardAnimation = () => {
			stateSlots.isPreSpinning = false;
			stateUi.isBoardAnimating = false;
		};

		const settle = (rawBoard?: TRawSymbol[][]) => {
			clearBoardAnimation();
			board.forEach((reel, reelIndex) => {
				const rawSymbols = rawBoard?.[reelIndex] || [];
				reel.setSymbolsWithRawSymbols(rawSymbols);
			});
		};
		const stop = () => {
			clearBoardAnimation();
			board.forEach((reel) => reel.stop());
		};
		const readyToSpinEffect = () => {
			board.forEach((reel) => reel.readyToSpinEffect());
		};

		return {
			board,
			preSpin,
			spin,
			settle,
			stop,
			readyToSpinEffect,
		};
	}

	return { enhanceBoard };
}

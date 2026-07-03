import { stateBet, stateUi } from 'state-shared';

import type { Reel, GetRawSymbolFromReel } from './types';
import { stateSlots } from './stateSlots.svelte';

export function createEnhanceBoardPreSpin<TReel extends Reel<any, any>>({
	board,
}: {
	board: TReel[];
}) {
	type TRawSymbol = GetRawSymbolFromReel<TReel>;

	const preSpin = async ({ paddingBoard }: { paddingBoard?: TRawSymbol[][] }) => {
		stateSlots.isPreSpinning = true;
		stateUi.isBoardAnimating = true;

		try {
			const isTurboBeforeAll = stateBet.isTurbo;

			await Promise.all(
				board.map((reel, reelIndex) => {
					// @ts-ignore Ignored because paddingReel is not required by createCascadingReel
					return reel.preSpin({ isTurboBeforeAll, preSpinPaddingReel: paddingBoard?.[reelIndex] });
				}),
			);
		} catch (error) {
			stateSlots.isPreSpinning = false;
			stateUi.isBoardAnimating = false;
			throw error;
		}
	};

	return { preSpin };
}

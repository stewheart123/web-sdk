import { recordBookEvent, checkIsMultipleRevealEvents, type BookEventHandlerMap } from 'utils-book';
import { stateBet, stateUi } from 'state-shared';
import { sequence } from 'utils-shared/sequence';
import { waitForTimeout } from 'utils-shared/wait';
import { SECOND } from 'constants-shared/time';

import { eventEmitter } from './eventEmitter';
import { winLevelMap, type WinLevel, type WinLevelData } from './winLevelMap';
import { stateGame, stateGameDerived } from './stateGame.svelte';
import type { MusicName } from './sound';
import type { BookEvent, BookEventOfType, BookEventContext } from './typesBookEvent';
import type { Position } from './types';
import { normalizeBoard } from './constants';

/** Brief hold after a losing free spin so the board result is readable before the next spin. */
const FREE_SPIN_NO_WIN_PAUSE_MS = 0.6 * SECOND;

const hasWinBeforeNextReveal = ({
	bookEvent,
	bookEvents,
}: {
	bookEvent: BookEventOfType<'reveal'>;
	bookEvents: BookEvent[];
}) => {
	const currentIndex = bookEvents.findIndex((event) => event.index === bookEvent.index);
	if (currentIndex === -1) return false;

	const following = bookEvents.slice(currentIndex + 1);
	const nextRevealIndex = following.findIndex((event) => event.type === 'reveal');
	const untilNextReveal = nextRevealIndex === -1 ? following : following.slice(0, nextRevealIndex);

	return untilNextReveal.some((event) => event.type === 'winInfo' || event.type === 'setWin');
};

const winLevelSoundsPlay = ({ winLevelData }: { winLevelData: WinLevelData }) => {
	if (winLevelData?.alias === 'max') eventEmitter.broadcastAsync({ type: 'uiHide' });
	if (winLevelData?.sound?.sfx) {
		eventEmitter.broadcast({ type: 'soundOnce', name: winLevelData.sound.sfx });
	}
	if (winLevelData?.sound?.bgm) {
		eventEmitter.broadcast({ type: 'soundMusic', name: winLevelData.sound.bgm });
	}
	if (winLevelData.presentDuration > 0) {
		eventEmitter.broadcast({ type: 'soundStop', name: 'sfx_bigwin_coinloop' });
		eventEmitter.broadcast({ type: 'soundLoop', name: 'sfx_bigwin_coinloop' });
	}
};

const winLevelSoundsStop = ({
	winLevelData,
	forceAmbientBgm,
}: {
	winLevelData?: WinLevelData;
	forceAmbientBgm?: MusicName;
} = {}) => {
	eventEmitter.broadcast({ type: 'soundStop', name: 'sfx_bigwin_coinloop' });

	const ambientBgm: MusicName | undefined =
		forceAmbientBgm ??
		(winLevelData?.sound?.bgm
			? stateBet.activeBetModeKey === 'SUPERSPIN' || stateGame.gameType === 'freegame'
				? 'bgm_freespin'
				: 'bgm_main'
			: undefined);

	if (ambientBgm) {
		eventEmitter.broadcast({ type: 'soundMusic', name: ambientBgm });
	}

	eventEmitter.broadcastAsync({ type: 'uiShow' });
};

const animateSymbols = async ({ positions }: { positions: Position[] }) => {
	eventEmitter.broadcast({ type: 'boardShow' });
	await eventEmitter.broadcastAsync({
		type: 'boardWithAnimateSymbols',
		symbolPositions: positions,
	});
};

export const bookEventHandlerMap: BookEventHandlerMap<BookEvent, BookEventContext> = {
	reveal: async (bookEvent: BookEventOfType<'reveal'>, { bookEvents }: BookEventContext) => {
		eventEmitter.broadcast({ type: 'spinStart' });
		const isBonusGame = checkIsMultipleRevealEvents({ bookEvents });
		if (isBonusGame) {
			eventEmitter.broadcast({ type: 'stopButtonEnable' });
			recordBookEvent({ bookEvent });
		}

		stateGame.gameType = bookEvent.gameType;
		await stateGameDerived.enhancedBoard.spin({
			revealEvent: {
				...bookEvent,
				anticipation: [],
				board: normalizeBoard(bookEvent.board),
			},
		});
		eventEmitter.broadcast({ type: 'soundScatterCounterClear' });

		if (
			bookEvent.gameType === 'freegame' &&
			!hasWinBeforeNextReveal({ bookEvent, bookEvents })
		) {
			await waitForTimeout(FREE_SPIN_NO_WIN_PAUSE_MS);
		}
	},
	winInfo: async (bookEvent: BookEventOfType<'winInfo'>) => {
		const shouldPlayModifierWin =
			stateGame.modifierMultiplier > 1 || stateGame.gameType === 'freegame';

		const modifierWin = shouldPlayModifierWin
			? eventEmitter.broadcastAsync({ type: 'modifierReelWin' })
			: Promise.resolve();

		await Promise.all([
			sequence(bookEvent.wins, async (win) => {
				eventEmitter.broadcast({
					type: 'soundOnce',
					name: 'sfx_youwon_panel',
					forcePlay: true,
				});
				await animateSymbols({ positions: win.positions });
			}),
			modifierWin,
		]);
	},
	setTotalWin: async (bookEvent: BookEventOfType<'setTotalWin'>) => {
		stateBet.winBookEventAmount = bookEvent.amount;
	},
	freeSpinTrigger: async (bookEvent: BookEventOfType<'freeSpinTrigger'>) => {
		// animate scatters
		eventEmitter.broadcast({ type: 'soundOnce', name: 'sfx_scatter_win' });
		await animateSymbols({ positions: bookEvent.positions });
		// show free spin intro
		eventEmitter.broadcast({ type: 'soundOnce', name: 'sfx_superfreespin' });
		await eventEmitter.broadcastAsync({ type: 'uiHide' });
		await eventEmitter.broadcastAsync({ type: 'transition' });
		eventEmitter.broadcast({ type: 'freeSpinIntroShow' });
		eventEmitter.broadcast({ type: 'soundFade', name: 'bgm_main', from: 1, to: 0, duration: 300 });
		eventEmitter.broadcast({ type: 'soundOnce', name: 'jng_intro_fs', forcePlay: true });
		await eventEmitter.broadcastAsync({
			type: 'freeSpinIntroUpdate',
			totalFreeSpins: bookEvent.totalFs,
		});
		eventEmitter.broadcast({ type: 'soundMusic', name: 'bgm_freespin' });
		stateGame.gameType = 'freegame';
		eventEmitter.broadcast({ type: 'freeSpinIntroHide' });
		eventEmitter.broadcast({ type: 'boardFrameGlowShow' });
		eventEmitter.broadcast({ type: 'freeSpinCounterShow' });
		stateUi.freeSpinCounterShow = true;
		eventEmitter.broadcast({
			type: 'freeSpinCounterUpdate',
			current: 1,
			total: bookEvent.totalFs,
		});
		stateUi.freeSpinCounterCurrent = 1;
		stateUi.freeSpinCounterTotal = bookEvent.totalFs;
		await eventEmitter.broadcastAsync({ type: 'uiShow' });
	},
	updateFreeSpin: async (bookEvent: BookEventOfType<'updateFreeSpin'>) => {
		eventEmitter.broadcast({ type: 'freeSpinCounterShow' });
		stateUi.freeSpinCounterShow = true;
		eventEmitter.broadcast({
			type: 'freeSpinCounterUpdate',
			current: bookEvent.amount + 1,
			total: bookEvent.total,
		});
		stateUi.freeSpinCounterCurrent = bookEvent.amount + 1;
		stateUi.freeSpinCounterTotal = bookEvent.total;
	},
	freeSpinEnd: async (bookEvent: BookEventOfType<'freeSpinEnd'>) => {
		const winLevelData = winLevelMap[bookEvent.winLevel as WinLevel];

		await eventEmitter.broadcastAsync({ type: 'uiHide' });
		stateGame.gameType = 'basegame';
		stateGame.modifierPersists = false;
		stateGame.modifierMultiplier = 1;
		eventEmitter.broadcast({ type: 'modifierReelHide' });
		await eventEmitter.broadcastAsync({ type: 'boardFrameGlowHide' });
		eventEmitter.broadcast({ type: 'freeSpinOutroShow' });
		eventEmitter.broadcast({ type: 'soundFade', name: 'bgm_freespin', from: 1, to: 0, duration: 300 });
		eventEmitter.broadcast({ type: 'soundOnce', name: 'jng_intro_fs', forcePlay: true });
		winLevelSoundsPlay({ winLevelData });
		await eventEmitter.broadcastAsync({
			type: 'freeSpinOutroCountUp',
			amount: bookEvent.amount,
			winLevelData,
		});
		winLevelSoundsStop({ winLevelData, forceAmbientBgm: 'bgm_main' });
		eventEmitter.broadcast({ type: 'freeSpinOutroHide' });
		eventEmitter.broadcast({ type: 'freeSpinCounterHide' });
		stateUi.freeSpinCounterShow = false;
		await eventEmitter.broadcastAsync({ type: 'transition' });
		await eventEmitter.broadcastAsync({ type: 'uiShow' });
		if (bookEvent.amount > 0) {
			eventEmitter.broadcast({ type: 'winFloatShow', amount: bookEvent.amount });
		}
	},
	setWin: async (bookEvent: BookEventOfType<'setWin'>) => {
		const winLevelData = winLevelMap[bookEvent.winLevel as WinLevel];

		eventEmitter.broadcast({ type: 'winShow' });
		winLevelSoundsPlay({ winLevelData });
		await eventEmitter.broadcastAsync({
			type: 'winUpdate',
			amount: bookEvent.amount,
			winLevelData,
		});
		winLevelSoundsStop({ winLevelData });
		eventEmitter.broadcast({ type: 'winHide' });
	},
	finalWin: async (bookEvent: BookEventOfType<'finalWin'>) => {
		// Do nothing
	},
	modifierReveal: async (bookEvent: BookEventOfType<'modifierReveal'>) => {
		eventEmitter.broadcast({ type: 'modifierReelShow' });
		if (bookEvent.persists) {
			stateGame.modifierPersists = true;
		}
		if (bookEvent.multiplier === 1 && stateGame.modifierMultiplier > 1 && !bookEvent.persists) {
			eventEmitter.broadcast({ type: 'soundOnce', name: 'sfx_multiplier_reset' });
		} else if (bookEvent.multiplier > stateGame.modifierMultiplier) {
			eventEmitter.broadcast({ type: 'soundOnce', name: 'sfx_multiplier_update' });
		}
		stateGame.modifierMultiplier = bookEvent.multiplier;
		await eventEmitter.broadcastAsync({
			type: 'modifierReelUpdate',
			multiplier: bookEvent.multiplier,
			modifierName: bookEvent.modifier.name,
			persists: bookEvent.persists,
		});
	},
	wincap: async (bookEvent: BookEventOfType<'wincap'>) => {
		stateBet.winBookEventAmount = bookEvent.amount;
		const winLevelData = winLevelMap[10 as WinLevel];
		eventEmitter.broadcast({ type: 'winShow' });
		winLevelSoundsPlay({ winLevelData });
		await eventEmitter.broadcastAsync({
			type: 'winUpdate',
			amount: bookEvent.amount,
			winLevelData,
		});
		winLevelSoundsStop({ winLevelData });
		eventEmitter.broadcast({ type: 'winHide' });
	},
};

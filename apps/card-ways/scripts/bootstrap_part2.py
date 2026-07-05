from pathlib import Path
import json
import re

APP = Path(__file__).resolve().parent.parent / "src"
ROOT = Path(__file__).resolve().parent.parent.parent / "math-exports" / "card_ways"

types_book = r"""import type { BetType } from 'rgs-requests';

import type { SymbolName, RawSymbol, GameType, Position } from './types';

type BookEventReveal = {
	index: number;
	type: 'reveal';
	board: RawSymbol[][];
	paddingPositions: number[];
	anticipation: number[];
	gameType: GameType;
};

type BookEventModifierReveal = {
	index: number;
	type: 'modifierReveal';
	modifier: RawSymbol & { multiplier: number };
	multiplier: number;
	modifierReelId: string;
	modifierPosition: number;
	persists: boolean;
};

type BookEventWinInfo = {
	index: number;
	type: 'winInfo';
	totalWin: number;
	wins: {
		symbol: SymbolName;
		kind: number;
		win: number;
		positions: Position[];
		meta: {
			ways: number;
			globalMult: number;
			winWithoutMult: number;
			symbolMult: number;
			modifierMult?: number;
		};
	}[];
};

type BookEventSetTotalWin = { index: number; type: 'setTotalWin'; amount: number };
type BookEventFinalWin = { index: number; type: 'finalWin'; amount: number };
type BookEventFreeSpinTrigger = {
	index: number;
	type: 'freeSpinTrigger';
	totalFs: number;
	positions: Position[];
};
type BookEventUpdateFreeSpin = { index: number; type: 'updateFreeSpin'; amount: number; total: number };
type BookEventSetWin = { index: number; type: 'setWin'; amount: number; winLevel: number };
type BookEventFreeSpinEnd = { index: number; type: 'freeSpinEnd'; amount: number; winLevel: number };
type BookEventWincap = { index: number; type: 'wincap'; amount: number };

export type BookEvent =
	| BookEventReveal
	| BookEventModifierReveal
	| BookEventWinInfo
	| BookEventSetTotalWin
	| BookEventFinalWin
	| BookEventFreeSpinTrigger
	| BookEventUpdateFreeSpin
	| BookEventSetWin
	| BookEventFreeSpinEnd
	| BookEventWincap;

export type Bet = BetType<BookEvent>;
export type BookEventOfType<T> = Extract<BookEvent, { type: T }>;
export type BookEventContext = { bookEvents: BookEvent[] };
"""
(APP / "game/typesBookEvent.ts").write_text(types_book, encoding="utf-8")

handler = (APP / "game/bookEventHandlerMap.ts").read_text(encoding="utf-8")
handler = re.sub(
    r"\n\t// customised\n\tcreateBonusSnapshot:.*?\n\t\},\n\};",
    """
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
		const winLevelData = winLevelMap[9 as WinLevel];
		eventEmitter.broadcast({ type: 'winShow' });
		winLevelSoundsPlay({ winLevelData });
		await eventEmitter.broadcastAsync({
			type: 'winUpdate',
			amount: bookEvent.amount,
			winLevelData,
		});
		winLevelSoundsStop();
		eventEmitter.broadcast({ type: 'winHide' });
	},
};""",
    handler,
    flags=re.S,
)
handler = handler.replace(
    "stateGame.gameType = 'basegame';\n\t\teventEmitter.broadcast({ type: 'boardFrameGlowHide' });",
    "stateGame.gameType = 'basegame';\n\t\tstateGame.modifierPersists = false;\n\t\tstateGame.modifierMultiplier = 1;\n\t\teventEmitter.broadcast({ type: 'modifierReelHide' });\n\t\teventEmitter.broadcast({ type: 'boardFrameGlowHide' });",
)
(APP / "game/bookEventHandlerMap.ts").write_text(handler, encoding="utf-8")

utils = (APP / "game/utils.ts").read_text(encoding="utf-8")
utils = re.sub(r"\n// resume bet\nconst BOOK_EVENT_TYPES[\s\S]*?export const convertTorResumableBet[\s\S]*?\n\};\n", "\n", utils)
(APP / "game/utils.ts").write_text(utils, encoding="utf-8")

state = (APP / "game/stateGame.svelte.ts").read_text(encoding="utf-8")
state = state.replace(
    "scatterCounter: 0,\n});",
    "scatterCounter: 0,\n\tmodifierMultiplier: 1,\n\tmodifierPersists: false,\n});",
)
(APP / "game/stateGame.svelte.ts").write_text(state, encoding="utf-8")

reveal = json.loads((ROOT / "event_config_base.json").read_text(encoding="utf-8"))["reveal"]["board"]
initial_lines = []
for reel in reveal:
    syms = []
    for s in reel:
        parts = [f"name: '{s['name']}'"]
        if s.get("scatter"): parts.append("scatter: true")
        if s.get("wild"): parts.append("wild: true")
        if s.get("non_winnable"): parts.append("non_winnable: true")
        if s.get("modifier"): parts.append("modifier: true")
        syms.append("\t\t{ " + ", ".join(parts) + " },")
    initial_lines.append("\t[\n" + "\n".join(syms) + "\n\t],")
initial_board = "export const INITIAL_BOARD: RawSymbol[][] = [\n" + "\n".join(initial_lines) + "\n];"
constants = (APP / "game/constants.ts").read_text(encoding="utf-8")
constants = re.sub(
    r"// initial board \(padded top and bottom\)\nexport const INITIAL_BOARD[\s\S]*?\];",
    "// initial board (4 rows per reel; rows 0 and 3 are hidden padding)\n" + initial_board,
    constants,
)

# SYMBOL_INFO_MAP is defined directly in constants.ts (card-ways spine names).

print("handlers, utils, state, constants done")

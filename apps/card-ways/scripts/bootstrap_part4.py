from pathlib import Path
import json
APP = Path(__file__).resolve().parent.parent / "src"
ROOT = Path(__file__).resolve().parent.parent.parent / "math-exports" / "card_ways"

utils = (APP / "game/utils.ts").read_text(encoding="utf-8")
utils = utils.replace(
    "import type { Bet, BookEventOfType } from './typesBookEvent';",
    "import type { Bet } from './typesBookEvent';",
)
utils += """
export const convertTorResumableBet = (betToResume: Bet) => betToResume;
"""
utils = utils.replace(
    "return SYMBOL_INFO_MAP[rawSymbol.name][state];",
    "return (SYMBOL_INFO_MAP as Record<string, (typeof SYMBOL_INFO_MAP)[keyof typeof SYMBOL_INFO_MAP]>)[rawSymbol.name][state];",
)
(APP / "game/utils.ts").write_text(utils, encoding="utf-8")

constants = (APP / "game/constants.ts").read_text(encoding="utf-8")
constants = constants.replace("} as const;\n\nexport const SCATTER_LAND_SOUND_MAP", "};\n\nexport const SCATTER_LAND_SOUND_MAP")
(APP / "game/constants.ts").write_text(constants, encoding="utf-8")

handler = (APP / "game/bookEventHandlerMap.ts").read_text(encoding="utf-8")
handler = handler.replace("import _ from 'lodash';\n\n", "")
handler = handler.replace("import { playBookEvent } from './utils';\n", "")
(APP / "game/bookEventHandlerMap.ts").write_text(handler, encoding="utf-8")

bonus_events_path = APP / "stories/data/bonus_events.ts"
text = bonus_events_path.read_text(encoding="utf-8")
if "wincap" not in text:
    data = json.loads((ROOT / "books_bonus.json").read_text(encoding="utf-8"))
    wincap = None
    for b in data:
        for e in b["events"]:
            if e["type"] == "wincap":
                wincap = {k: e[k] for k in e if k != "index"}
                break
        if wincap:
            break
    if not wincap:
        wincap = {"type": "wincap", "amount": 500000}
    import re
    text = text.rstrip().rstrip("};") + f"\t\"wincap\": {json.dumps(wincap, indent='\t').replace(chr(10), chr(10)+chr(9))},\n}};\n"
    bonus_events_path.write_text(text, encoding="utf-8")

print("fixes applied")

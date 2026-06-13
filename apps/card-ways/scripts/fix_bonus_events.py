from pathlib import Path
import json
root = Path("../math-exports/card_ways")
events = json.loads((root/"event_config_bonus.json").read_text(encoding="utf-8"))
books = json.loads((root/"books_bonus.json").read_text(encoding="utf-8"))
for b in books:
    for e in b["events"]:
        if e["type"] == "wincap":
            events["wincap"] = {k: v for k, v in e.items() if k != "index"}
            break
    if "wincap" in events:
        break
if "wincap" not in events:
    events["wincap"] = {"type": "wincap", "amount": 500000}
Path("src/stories/data/bonus_events.ts").write_text("export default " + json.dumps(events, indent="\t") + ";\n", encoding="utf-8")
print("ok", list(events.keys()))

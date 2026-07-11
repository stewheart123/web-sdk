from pathlib import Path
import json

root = Path(__file__).resolve().parent.parent.parent / "math-exports" / "card_ways"
manifest = json.loads((root / "manifest.json").read_text(encoding="utf-8"))
sample_path = root / manifest["curated_samples"]["bonus_3"]["file"]
samples = json.loads(sample_path.read_text(encoding="utf-8"))

events: dict = {}
for book in samples.values():
    for event in book.get("events", []):
        etype = event.get("type")
        if etype and etype not in events:
            events[etype] = {k: v for k, v in event.items() if k != "index"}

if "wincap" not in events:
    events["wincap"] = {"type": "wincap", "amount": 500000}

out = Path(__file__).resolve().parent.parent / "src" / "stories" / "data" / "bonus_events.ts"
out.write_text("export default " + json.dumps(events, indent="\t") + ";\n", encoding="utf-8")
print("ok", list(events.keys()))

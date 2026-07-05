#!/usr/bin/env python3
"""Sync story event/book TS files from math-exports."""

from __future__ import annotations

import argparse
import json
import sys
from pathlib import Path

APP = Path(__file__).resolve().parent.parent
MATH = APP.parent / "math-exports" / "card_ways"
STORIES = APP / "src" / "stories" / "data"

MAX_STORY_BOOKS = 40
REQUIRED_IDS = {0, 1}

BOOK_FILES = {
    "base": MATH / "books_base.json",
    "bonus": MATH / "books_bonus.json",
}


def write_ts_export(path: Path, data) -> None:
    text = json.dumps(data, indent="\t")
    path.write_text(f"export default {text};\n", encoding="utf-8")
    count = len(data) if isinstance(data, (list, dict)) else 0
    print(f"Wrote {path.relative_to(APP)} ({count} entries)")


def sync_events() -> None:
    base = json.loads((MATH / "event_config_base.json").read_text(encoding="utf-8"))
    bonus = json.loads((MATH / "event_config_bonus.json").read_text(encoding="utf-8"))
    write_ts_export(STORIES / "base_events.ts", base)
    write_ts_export(STORIES / "bonus_events.ts", bonus)


def iter_books_in_memory(path: Path):
    """Parse books from a minified JSON array using in-memory brace matching."""
    text = path.read_text(encoding="utf-8")
    if not text.startswith("["):
        raise ValueError(f"{path.name}: expected JSON array")

    i = 1
    n = len(text)
    in_string = False
    escape = False
    depth = 0
    start = -1

    while i < n:
        c = text[i]
        if in_string:
            if escape:
                escape = False
            elif c == "\\":
                escape = True
            elif c == '"':
                in_string = False
        elif c == '"':
            in_string = True
        elif c == "{":
            if depth == 0:
                start = i
            depth += 1
        elif c == "}":
            depth -= 1
            if depth == 0 and start >= 0:
                yield json.loads(text[start : i + 1])
                start = -1
        i += 1


def book_tags(book: dict) -> set[str]:
    tags: set[str] = set()
    tags.add(f"id:{book.get('id')}")

    for event in book.get("events", []):
        etype = event.get("type")
        if etype == "freeSpinTrigger":
            tags.add("freeSpinTrigger")
        if etype == "wincap":
            tags.add("wincap")
        if etype == "modifierReveal":
            mult = event.get("multiplier", 1)
            tags.add(f"modifier:X{mult}")
            if event.get("persists"):
                tags.add("modifierPersists")
        if etype == "winInfo":
            tags.add("winInfo")
            for win in event.get("wins", []):
                meta = win.get("meta") or {}
                if (meta.get("modifierMult") or 1) > 1:
                    tags.add("modifierMultWin")
        if etype == "reveal":
            for reel in event.get("board", []):
                for sym in reel:
                    if sym.get("name") == "N":
                        tags.add("hasN")

    return tags


WANT_TAGS = [
    "freeSpinTrigger",
    "modifierPersists",
    "modifier:X2",
    "modifier:X3",
    "modifierMultWin",
    "wincap",
    "winInfo",
    "hasN",
]


def select_books(path: Path, label: str) -> list[dict]:
    selected: dict[int, dict] = {}
    filled_tags: set[str] = set()

    print(f"Scanning {path.name} ({path.stat().st_size / 1e6:.0f} MB)...")
    for book in iter_books_in_memory(path):
        bid = book.get("id")
        if bid in REQUIRED_IDS:
            selected[bid] = book

        tags = book_tags(book)
        for want in WANT_TAGS:
            if want in tags and want not in filled_tags:
                selected[bid] = book
                filled_tags.add(want)

        if len(filled_tags) >= len(WANT_TAGS) and REQUIRED_IDS <= set(selected):
            if len(selected) >= min(MAX_STORY_BOOKS, 12):
                break

        if len(selected) >= MAX_STORY_BOOKS:
            break

    missing = REQUIRED_IDS - set(selected)
    if missing:
        raise RuntimeError(f"{label}: missing required book ids {missing}")

    books = [selected[k] for k in sorted(selected)]
    print(
        f"Selected {len(books)} {label} books "
        f"(ids {books[0]['id']}..{books[-1]['id']}, tags: {sorted(filled_tags)})"
    )
    return books


def validate_books(books: list[dict], label: str) -> None:
    blob = json.dumps(books)
    if '"name": "8"' in blob or '"symbol": "8"' in blob:
        raise RuntimeError(f"{label}: still contains symbol 8")
    if '"name": "N"' not in blob:
        print(f"Warning: {label} subset has no N symbols")


def require_books() -> None:
    missing = [p.name for p in BOOK_FILES.values() if not p.is_file()]
    if not missing:
        return
    print(
        "Missing local math book files (not in git — see apps/math-exports/card_ways/README.md):\n"
        + "\n".join(f"  - {MATH / name}" for name in missing)
        + "\n\nExport from the card_ways math SDK, or run: npm run sync:story-events",
        file=sys.stderr,
    )
    sys.exit(1)


def sync_books() -> None:
    require_books()
    base_books = select_books(BOOK_FILES["base"], "base")
    validate_books(base_books, "base")
    write_ts_export(STORIES / "base_books.ts", base_books)

    bonus_books = select_books(BOOK_FILES["bonus"], "bonus")
    validate_books(bonus_books, "bonus")
    write_ts_export(STORIES / "bonus_books.ts", bonus_books)


def main() -> None:
    parser = argparse.ArgumentParser(description="Sync card-ways story data from math-exports")
    parser.add_argument(
        "--events-only",
        action="store_true",
        help="Sync event_config_*.json only; skip books (no local books_base/bonus required)",
    )
    args = parser.parse_args()

    sync_events()
    if args.events_only:
        print("Skipped books (--events-only). Story book TS files unchanged.")
        return

    sync_books()
    print("Story data sync complete.")


if __name__ == "__main__":
    main()

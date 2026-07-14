#!/usr/bin/env python3
"""Append social-casino i18n keys to card-ways locale files."""

from __future__ import annotations

import re
import sys
from pathlib import Path

APP = Path(__file__).resolve().parent.parent
SCRIPTS = Path(__file__).resolve().parent
sys.path.insert(0, str(SCRIPTS))

from social_i18n_data import GR_SOCIAL, UI_SOCIAL
UI_DIR = APP / "src" / "i18n" / "uiMessages"
GR_DIR = APP / "src" / "i18n" / "gameRuleMessages"


def fmt(key: str, value: str) -> str:
    escaped = value.replace("\\", "\\\\").replace("'", "\\'").replace("\n", "\\n")
    k = key if re.match(r"^[A-Za-z0-9_]+$", key) else f"'{key}'"
    if "\n" in value or len(value) > 60:
        return f"\t{k}:\n\t\t'{escaped}',"
    return f"\t{k}: '{escaped}',"


def append_block(path: Path, entries: dict[str, str], marker: str) -> None:
    text = path.read_text(encoding="utf-8")
    if marker in text:
        print(f"skip {path.name} ({marker})")
        return
    block = "\n".join(fmt(k, v) for k, v in entries.items())
    if "} as const;" in text:
        text = text.replace("} as const;", f"{block}\n}} as const;")
    else:
        text = text.replace("};", f"{block}\n}};")
    path.write_text(text, encoding="utf-8")
    print(f"updated {path.relative_to(APP)}")


def main() -> None:
    for locale, ui_entries in UI_SOCIAL.items():
        append_block(UI_DIR / f"{locale}.ts", ui_entries, "SPIN MENU")
    for locale, gr_entries in GR_SOCIAL.items():
        append_block(GR_DIR / f"{locale}.ts", gr_entries, "GR.UI.SPIN.SOCIAL")


if __name__ == "__main__":
    main()

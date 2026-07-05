# card_ways math exports

Small config and event samples are committed for frontend development. **Full simulation books are not stored in git** (GitHub blocks files over 100 MB; bonus books are ~900 MB).

## Committed in git

| File | Purpose |
|------|---------|
| `config_fe_card_ways.json` | Symbol paytables, bet modes, `gameID` |
| `event_config_base.json` | Example base-game book event shapes |
| `event_config_bonus.json` | Example bonus-game book event shapes |

Storybook uses curated subsets generated into `apps/card-ways/src/stories/data/*_books.ts` (committed).

## Full books (local only)

Place these files here after exporting from the **card_ways math SDK** (or decompress the publish `.jsonl.zst` artifacts):

- `books_base.json` (~180 MB)
- `books_bonus.json` (~920 MB)

They are listed in `.gitignore` and must not be committed.

**Do not** run `git add` on these files (or `git add -f`). If GitHub warns about file size, the books were accidentally committed — remove with `git rm --cached` and amend the commit.

### Regenerate frontend story data

From `apps/card-ways`:

```bash
npm run sync:math          # config + events + books (requires full books locally)
npm run sync:config        # config.ts only
npm run sync:story-events  # event TS files only (no books required)
```

`sync:story-data` needs both book files present. If you only changed event configs, use `sync:story-events`.

## Validation checklist for new book exports

- No symbol `"8"` in boards or `winInfo`
- Symbol `"N"` appears with `non_winnable: true`
- Expected symbols: `A`, `K`, `Q`, `J`, `10`, `9`, `W`, `S`, `N`, `X1`, `X2`, `X3`

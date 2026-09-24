# Cornerstone AEC — Clickable Prototype v0.1

Front-end only prototype of **Cornerstone AEC**, the ERP for engineering & architecture consulting firms.
Fictional firm: **Kopano Consulting** (~2,000 staff, 20 legal entities, 8 countries).

## How to open

Do **not** open `index.html` via `file://` — many browsers block ES modules for Next.js static exports.

Use a local static server from this folder:

### macOS / Linux
```bash
./start.sh
# or: python3 -m http.server 4321
```

### Windows
```bat
start.bat
```

Then open **http://localhost:4321/tour/**

## Tester guide

1. Start at **/tour/** — five key flows with Start buttons.
2. Use the **avatar menu (top-right)** to switch among 7 roles:
   - Engineer (Thandi Mokoena)
   - Senior Engineer (Sipho Nkosi)
   - PM / Design Manager (Pieter van der Merwe)
   - Project Director (Naledi Dlamini)
   - Executive Director (Johan Botha)
   - Finance (Aisha Patel)
   - HR (Lerato Khumalo)
3. Press **⌘K / Ctrl+K** for the command palette.
4. Toggle **dark mode** from the moon/sun icon.

## Key flows

1. **Home & My Work** — unified inbox first; Me / team / role cards beside or below.
2. **Timesheet** — week entry, NTE fee-cap **warning only** (never blocks), submit → status.
3. **Invoice** — Tax Invoice (VAT 15%), DOA above R500 000, Uber-style status tracker.
4. **Design review & CRS** — pinned drawing comments, CRS table, Excel export/import mock.
5. **New project across entities** — one project, multi-entity ICA with currencies.

All data is fictional. Prototype badge: bottom-right.

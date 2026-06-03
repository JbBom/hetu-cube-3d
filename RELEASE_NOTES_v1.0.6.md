# v1.0.6

This release adds a structured learning hub that organizes all project resources into a progressive curriculum, plus cross-navigation between all standalone pages.

## Changes

- Added `learn.html` — a learning hub with:
  - **3-tier curriculum**: Beginner (4 modules) → Intermediate (4 modules) → Advanced (4 modules)
  - **Progress tracking**: Check off completed modules; progress saved in localStorage
  - **Visual feedback**: Progress bar, per-level completion stats, card state styling
  - **Built-in glossary**: 10 key terms with definitions (Hetu, Luoshu, Bagua, Wuxing, etc.)
  - **Actionable links**: Each module links directly to the relevant interactive page and mode
- Added cross-navigation bars to all standalone pages (`learn.html`, `hetu-cube.html`, `luoshu-magic.html`)
- Updated README feature table and repository structure
- Updated `sitemap.xml`

## Notes

- The learning hub is self-contained (HTML + inline CSS/JS), with progress stored in the browser.
- All three standalone pages now form a connected learning network: Learning Hub ↔ Magic Square ↔ Hetu Cube.

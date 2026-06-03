# v1.0.5

This release adds a dedicated interactive Lo Shu magic square exploration page, complementing the 3D Hetu Cube with a focused 2D mathematical tool.

## Changes

- Added `luoshu-magic.html` — a standalone interactive magic square page with four modes:
  - **Sum 15** — Click any row, column, or diagonal to see the three numbers sum to 15 in real-time.
  - **Flying Star Path** — Click cells in order 1→2→3→...→9 to trace the zig-zag Flying Star path used in Feng Shui.
  - **Pair Sum 10** — Click any cell to highlight its opposite pair that sums to 10 (e.g. 1↔9, 2↔8).
  - **Bagua Mapping** — Click any cell to reveal its associated Bagua trigram, element name, and Wu Xing attribute.
- Updated README feature table and repository structure to include the new page.
- Updated `sitemap.xml` with the new page entry.

## Notes

- The magic square page is fully self-contained (HTML + inline CSS/JS), no external dependencies.
- Compatible with dark theme and responsive layout matching the main project.
- All eight rows, columns, and diagonals sum to 15 — the defining property of the Lo Shu magic square.

# v1.0.9

This release focuses on **mobile experience and international accessibility**.

## Highlights

### 📱 Mobile Responsive Improvements
- Added `@media(max-width:500px)` breakpoint to `hetu-cube.html` — smaller nav, font, and panel sizes for phone screens
- Added `@media(max-width:450px)` breakpoint to `luoshu-magic.html` — resized 3×3 grid and info panels
- Added `@media(max-width:420px)` and enhanced `@media(max-width:600px)` for `learn.html` — better card layout on small screens
- Added `@media(max-width:500px)` for `system-learning.html` — condensed grid and axis rows
- Added mobile bottom navigation bar across all four HTML pages for easy page switching
- Added horizontal scroll support for top navigation bars on narrow viewports

### 🌍 Internationalization
- Expanded README English section with a full page table, quick start guide, what-makes-this-unique explanation, and tech stack overview
- Kept all page content in Chinese (the primary target audience), while making project entry more accessible to English-speaking visitors

### 🧭 Learning Tools
- Learning progress (`learn.html`) was already using `localStorage` for persistent check tracking across sessions — verified working

## Notes

- No Three.js version bump; r128 remains stable for the current page layout
- The old `hetu-cube.html` page will be gradually merged into the main SPA in future releases
- PWA cache name bumped to `hetu-cube-v1.0.9`

## Files Changed

- `hetu-cube.html` — responsive CSS, mobile footer nav
- `luoshu-magic.html` — responsive CSS, mobile footer nav
- `learn.html` — responsive CSS, mobile footer nav
- `system-learning.html` — responsive CSS, mobile footer nav
- `README.md` — expanded English section
- `service-worker.js` — cache version bump
- `RELEASE_NOTES_v1.0.9.md` — this file

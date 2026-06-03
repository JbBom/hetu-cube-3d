# v1.0.7

This release deepens the project from an interactive demo into a more structured learning prototype.

## Highlights

- Added `system-learning.html`, a new system learning model page that explains Hetu and Luoshu through six layers:
  - Number: odd/even, generating numbers, completing numbers, center numbers
  - Position: heaven/earth planes, nine-palace locations, center axis
  - Pairing: difference of 5, sum of 10, magic sum of 15, generating pairs
  - Transformation: flying-star order, seasonal path, yin-yang rotating faces
  - Symbol: wuxing, bagua, direction, season, heavenly stems
  - Verification: hands-on checks through summing, pairing, locating, and path tracing
- Enriched the README introduction so visitors can quickly understand:
  - What problem the project solves for beginners
  - Why Hetu and Luoshu should be compared but not collapsed into one system
  - How the interactive pages support learning, verification, and review
- Connected the new system model page from:
  - `learn.html`
  - `hetu-cube.html`
  - `luoshu-magic.html`
- Fixed the Lo Shu page navigation layout so multiple top links no longer overlap.
- Fixed a learning-progress script edge case caused by adding a non-checklist card to `learn.html`.
- Updated PWA caching:
  - Bumped cache name to `hetu-cube-v1.0.7`
  - Added `learn.html`, `luoshu-magic.html`, `system-learning.html`, and built assets to the cache list
  - Switched cache paths and manifest scope/start URL to relative paths for better local preview and GitHub Pages compatibility
- Updated `sitemap.xml` with the new system learning page and current modification dates.

## Notes

The project remains a zero-build static site. All changes can be viewed directly through a static server or GitHub Pages.

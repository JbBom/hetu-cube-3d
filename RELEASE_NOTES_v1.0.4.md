# v1.0.4

This release adds an animated demo GIF, intangible cultural heritage recognition, an English overview, and Progressive Web App (PWA) support.

## Changes

- Added animated demo GIF to README header for immediate visual impact.
- Added "非遗·国家级" badge referencing the 2014 UNESCO intangible cultural heritage inscription.
- Added English-language overview section at the bottom of README for international visitors.
- Created `manifest.json` enabling "Add to Home Screen" on Android and desktop.
- Created `service-worker.js` with cache-first strategy for offline access to static assets.
- Registered service worker in `index.html` with graceful fallback.
- Added `apple-mobile-web-app-status-bar-style` meta tag for iOS standalone mode.
- Updated README repository structure to reflect new files.

## Notes

- The service worker caches core app shell files; the bundled JS/CSS assets are too large for full offline caching.
- The demo GIF (3 frames, ~136KB) shows the Hetu cube rotating in 3D space.
- GitHub Pages does not serve `manifest.json` with the correct MIME type by default; the browser will parse it fine regardless.

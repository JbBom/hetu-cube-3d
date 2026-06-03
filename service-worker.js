const CACHE_NAME = 'hetu-cube-v1.0.7';
const ASSETS = [
  './',
  './index.html',
  './hetu-cube.html',
  './learn.html',
  './luoshu-magic.html',
  './system-learning.html',
  './three.min.js',
  './manifest.json',
  './assets/index-UtkUvGxl.js',
  './assets/index-COmTXZFF.css'
];

// Cache on install
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log('[SW] Caching app shell');
      return cache.addAll(ASSETS).catch((err) => {
        console.warn('[SW] Some assets failed to cache:', err);
      });
    }).then(() => self.skipWaiting())
  );
});

// Clean old caches on activate
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.filter((k) => k !== CACHE_NAME).map((k) => caches.delete(k)))
    ).then(() => self.clients.claim())
  );
});

// Network-first for HTML, cache-first for assets
self.addEventListener('fetch', (event) => {
  const url = new URL(event.request.url);

  // Cache-first for static assets (JS, CSS, images, fonts)
  if (url.pathname.match(/\.(js|css|png|svg|gif|woff2?)$/)) {
    event.respondWith(
      caches.match(event.request).then((cached) => cached || fetch(event.request))
    );
    return;
  }

  // Network-first for HTML
  event.respondWith(
    fetch(event.request)
      .then((response) => {
        const clone = response.clone();
        caches.open(CACHE_NAME).then((cache) => cache.put(event.request, clone));
        return response;
      })
      .catch(() => caches.match(event.request))
  );
});

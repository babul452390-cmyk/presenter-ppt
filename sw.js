// =============================================
// SERVICE WORKER — Presenter Offline Cache
// =============================================
const CACHE = 'presenter-v1';

// প্রথমবার install এ এই সব file cache হবে
const PRECACHE = [
  './',
  './index.html',
  './lib-pptx.js',
  './lib-jspdf.js',
  './lib-h2c.js',
];

// Install — সব precache file একসাথে fetch ও store করা
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE).then(cache => {
      console.log('[SW] Precaching all assets...');
      return cache.addAll(PRECACHE);
    }).then(() => {
      console.log('[SW] Precache done — app is offline-ready');
      return self.skipWaiting(); // পুরনো SW কে সাথে সাথে replace করা
    })
  );
});

// Activate — পুরনো cache পরিষ্কার করা
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(
        keys
          .filter(k => k !== CACHE)
          .map(k => {
            console.log('[SW] Deleting old cache:', k);
            return caches.delete(k);
          })
      )
    ).then(() => self.clients.claim())
  );
});

// Fetch — Cache first, network fallback
self.addEventListener('fetch', event => {
  // non-GET বা cross-origin request skip
  if (event.request.method !== 'GET') return;
  const url = new URL(event.request.url);
  if (url.origin !== self.location.origin) return;

  event.respondWith(
    caches.match(event.request).then(cached => {
      if (cached) {
        // Cache hit — সাথে সাথে serve, background এ update check
        const fetchUpdate = fetch(event.request).then(response => {
          if (response && response.status === 200) {
            caches.open(CACHE).then(cache => cache.put(event.request, response.clone()));
          }
          return response;
        }).catch(() => {}); // offline হলে ignore
        return cached;
      }
      // Cache miss — network থেকে আনো এবং cache করো
      return fetch(event.request).then(response => {
        if (!response || response.status !== 200) return response;
        const clone = response.clone();
        caches.open(CACHE).then(cache => cache.put(event.request, clone));
        return response;
      }).catch(() => {
        // Completely offline এবং cache এও নেই
        return new Response('Offline — file not cached yet.', {
          status: 503,
          headers: { 'Content-Type': 'text/plain' }
        });
      });
    })
  );
});

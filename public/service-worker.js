// public/service-worker.js
workbox.precaching.precacheAndRoute([]);

// Cache images:
workbox.routing.registerRoute(
  /\.(?:png|webp)$/,
  workbox.strategies.staleWhileRevalidate({
    cacheName: "images",
    plugins: [
      new workbox.expiration.Plugin({
        maxEntries: 60,
        maxAgeSeconds: 30 * 24 * 60 * 60 // 30 days
      })
    ]
  })
);

// Cache css:
workbox.routing.registerRoute(
  /\.(?:css)$/,
  workbox.strategies.staleWhileRevalidate({
    cacheName: "css",
    plugins: [
      new workbox.expiration.Plugin({
        maxEntries: 60,
        maxAgeSeconds: 30 * 24 * 60 * 60 // 30 days
      })
    ]
  })
);


// Cache js:
workbox.routing.registerRoute(
  /\.(?:js)$/,
  workbox.strategies.staleWhileRevalidate({
    cacheName: "js",
    plugins: [
      new workbox.expiration.Plugin({
        maxEntries: 60,
        maxAgeSeconds: 30 * 24 * 60 * 60 // 30 days
      })
    ]
  })
);
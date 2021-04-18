// public/service-worker.js
workbox.precaching.precacheAndRoute([]);

// Cache images:
workbox.routing.registerRoute(
  new RegExp('/img/'),
  new workbox.strategies.CacheFirst()
);

// Cache css:
workbox.routing.registerRoute(
  new RegExp('/js/'),
  new workbox.strategies.CacheFirst()
);


// Cache js:
workbox.routing.registerRoute(
  new RegExp('/css/'),
  new workbox.strategies.CacheFirst()
);

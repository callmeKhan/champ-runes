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

const messaging = firebase.messaging();

messaging.onMessage((payload) => {
  console.log('Message received. ', payload);
  // ...
});

messaging.onBackgroundMessage((payload) => {
  console.log('[firebase-messaging-sw.js] Received background message ', payload);
  // Customize notification here
  const notificationTitle = 'Background Message Title';
  const notificationOptions = {
    body: 'Background Message body.',
    icon: '/firebase-logo.png'
  };

  self.registration.showNotification(notificationTitle,
    notificationOptions);
})
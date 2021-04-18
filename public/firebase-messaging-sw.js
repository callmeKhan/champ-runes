importScripts('https://www.gstatic.com/firebasejs/8.4.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.4.1/firebase-messaging.js');

firebase.initializeApp({
  apiKey: "AIzaSyAxxb6e7jugqBfbA8HhHEgNUV6TtkkS5RA",
  authDomain: "champ-run.firebaseapp.com",
  databaseURL: "https://champ-run-default-rtdb.firebaseio.com",
  projectId: "champ-run",
  storageBucket: "champ-run.appspot.com",
  messagingSenderId: "378393732985",
  appId: "1:378393732985:web:623e07e5b34fa5188571a8",
  measurementId: "G-E1TNWE0BEP"
});

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
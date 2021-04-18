import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/messaging'
import "firebase/analytics";

// firebase init - add your own config here
const firebaseConfig = {
    apiKey: "AIzaSyAxxb6e7jugqBfbA8HhHEgNUV6TtkkS5RA",
    authDomain: "champ-run.firebaseapp.com",
    projectId: "champ-run",
    storageBucket: "champ-run.appspot.com",
    messagingSenderId: "378393732985",
    appId: "1:378393732985:web:623e07e5b34fa5188571a8",
    measurementId: "G-E1TNWE0BEP"
}
firebase.initializeApp(firebaseConfig);
firebase.analytics();

// utils
const auth = firebase.auth()
const messaging = firebase.messaging()

// export utils/refs
export {
  auth,
  messaging
}
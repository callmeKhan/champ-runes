import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import i18n from './i18n'
import VTooltip from 'v-tooltip'
import './registerServiceWorker'
import { auth, messaging } from './firebase'

Vue.use(VTooltip)
Vue.config.productionTip = false

// Get registration token. Initially this makes a network call, once retrieved
// subsequent calls to getToken will return from cache.
messaging.getToken({ vapidKey: 'BHO3j_LAcktHgXP39bAEw82dBz4Hud8NGTU3IpvICh3sVt_iooMNxB-yZHmulJRDRhtPF2xf98-5qhf7yBgLwLs' }).then((currentToken) => {
  if (currentToken) {
    console.log('TOKEN RECEIVED');
    // Send the token to your server and update the UI if necessary
    // ...
  } else {
    // Show permission request UI
    console.log('No registration token available. Request permission to generate one.');
    // ...
  }
}).catch((err) => {
  console.log('An error occurred while retrieving token. ', err);
  // ...
});


let app
auth.onAuthStateChanged(() => {
  if (!app) {
    app = new Vue({
      router,
      store,
      i18n,
      render: h => h(App)
    }).$mount('#app')
  }
})

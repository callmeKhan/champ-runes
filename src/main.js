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


import Vue from 'vue'
import VueRouter from 'vue-router'
import Champion from '../views/Champion.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Statitics',
    component: Champion
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

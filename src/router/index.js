import Vue from 'vue'
import VueRouter from 'vue-router'
import Champion from '../views/Champion.vue'
import Path from '../views/Path.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Statitics',
    component: Champion
  },
  {
    path: '/path',
    name: 'Path',
    component: Path
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

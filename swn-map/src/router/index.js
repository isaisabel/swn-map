import Vue from 'vue'
import VueRouter from 'vue-router'
import SectorExplorer from '../views/SectorExplorer.vue'

Vue.use(VueRouter)

const routes = [
    {
      path: '/',
      name: 'SectorExplorer',
      component: SectorExplorer
    },
]

const router = new VueRouter({
  routes
})

export default router

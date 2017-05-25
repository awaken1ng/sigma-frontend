import Vue from 'vue'
import Router from 'vue-router'
import Landing from '@/components/Landing'
import Sigma from '@/components/Sigma'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Landing',
      component: Landing
    },
    {
      path: '/sigma',
      name: 'Sigma',
      component: Sigma
    }
  ]
})

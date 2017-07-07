import Vue from 'vue'
import Router from 'vue-router'
import Landing from '@/pages/Landing'
import Sigma from '@/pages/Sigma'
import Commands from '@/pages/Commands'
import About from '@/pages/About'
import NotFound from '@/pages/NotFound'

Vue.use(Router)
var router = new Router({
  routes: [
    { path: '*', meta: { title: 'Aurora Project - Not found' }, name: 'ap-notfound', component: NotFound },
    { path: '/', meta: { title: 'Aurora Project' }, name: 'ap-landing', component: Landing },
    { path: '/sigma', meta: { title: 'Sigma: The Database' }, name: 'sigma', component: Sigma },
    { path: '/sigma/commands', meta: { title: 'Sigma: The Database - Commands' }, name: 'sigma-commands', component: Commands },
    { path: '/sigma/about', meta: { title: 'Sigma: The Database - About' }, name: 'sigma-about', component: About }
  ]
})
router.afterEach((to, from) => {
  document.title = to.meta.title
})
export default router

import Vue from 'vue'
import Router from 'vue-router'
import config from './../config'

Vue.use(Router)
var router = new Router({
  routes: config.routes
})
router.afterEach((to, from) => {
  document.title = to.meta.title
})
export default router

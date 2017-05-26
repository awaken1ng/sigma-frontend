import './assets/animate_custom.sass'
import './assets/semantic_custom.sass'
import './assets/bulma_custom.sass'

import Vue from 'vue'
import App from './App'
import router from './router'
Vue.config.productionTip = false
/* eslint-disable no-new */
import Config from './config'
new Vue({
  el: '#app',
  router,
  template: '<App class="animated fadeIn"/>',
  components: { App },
  data: Config
})

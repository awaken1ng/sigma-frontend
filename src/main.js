import './assets/animate_custom.sass'
import './assets/semantic_custom.sass'
import './assets/bulma_custom.sass'
import './assets/custom_icons.sass'
import './../node_modules/semantic-ui-css/components/accordion.js'

import Vue from 'vue'
import App from './App'
import router from './router'
Vue.config.productionTip = false
/* eslint-disable no-new */
import Config from './config'
// Config.bus = new Vue({ data: {config: Config.navigation} })
let eventBus = new Vue({
  data: {
    config: Config.navigation
  }
})
Config.eventBus = eventBus
// import store from './storage'
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App },
  data: Config
})

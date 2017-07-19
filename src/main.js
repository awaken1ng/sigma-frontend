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
import { config } from '@/config'
import eventBus from '@/eventbus'
config.eventBus = eventBus

new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App },
  data: config
})

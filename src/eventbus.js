import Vue from 'vue'
import { config } from '@/config'

let eventBus = new Vue({
  data: {
    config: config.navigation
  }
})

export default eventBus

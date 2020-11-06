import Vue from 'vue'
import App from './App.vue'
import router from './router'
import villagers from './villager-json.js'


Vue.config.productionTip = false

let data = {
  villagerData: villagers,
  cart: []
}

new Vue({
  router,
  data,
  render: h => h(App)
}).$mount('#app')

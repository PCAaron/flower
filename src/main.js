import Vue from 'vue'
import App from './App.vue'

import Button from './components/Button'
import Icon from './components/Icon'

Vue.component('f-button',Button)
Vue.component('f-icon',Icon)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')

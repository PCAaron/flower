import Vue from 'vue'
import App from './App.vue'

import Button from '../packages/button/src/Button'
import Icon from './components/Icon'

Vue.component('f-button', Button)
// Vue.use(Button)
Vue.component('f-icon', Icon)

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')

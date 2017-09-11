

import 'babel-polyfill'
import Vue from 'vue'
import App from './App'
import router from './index'


Vue.config.productionTip = false


new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: {App}
})
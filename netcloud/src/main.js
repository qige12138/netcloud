// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import 'babel-polyfill'
import Vue from 'vue'
import App from './App'
// import Netmusic from './components/netmusic/netmusic'
import router from './router'
import fastclick from 'fastclick'
import './common/stylus/index.styl'
import VueSwiper from 'vue-awesome-swiper'
import VueResource from 'vue-resource'
import axios from 'axios'
import store from './common/js'
import {net} from './common/js/public'
import VueBus from 'vue-bus'


Vue.use(VueSwiper)
Vue.use(VueResource)
Vue.use(VueBus)

Vue.prototype.axios = axios
Vue.prototype.net = net

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
});


import Vue from 'vue'
import App from './App.vue'
import router from './router'
// import './assets/icon/iconfont.css'
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(VueAxios, axios)
Vue.prototype.$axios = axios;

require('./mock');

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

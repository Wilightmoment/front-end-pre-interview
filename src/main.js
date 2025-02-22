import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import VueAxios from 'vue-axios'
import VeeValidate from 'vee-validate'

Vue.config.productionTip = false
Vue.use(VueAxios, axios)
Vue.use(VeeValidate)

export const eventBus = new Vue()
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

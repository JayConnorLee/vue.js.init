import Vue from 'vue'
import App from './App.vue'
import router from './router.js'
// Import Bootstrap an BootstrapVue CSS files (order is important)
// Make BootstrapVue available throughout your project
// Optionally install the BootstrapVue icon components plugin
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'


Vue.use(BootstrapVue)
Vue.use(IconsPlugin)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')









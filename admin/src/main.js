import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import './plugins/element.js'
import router from './router'
import http from './http'

Vue.use(ElementUI)

Vue.prototype.$http = http
Vue.config.productionTip = false

import './styles/global/upload.css'

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
import './assets/iconfont/iconfont.css'
import Card from './components/Card.vue'
import CardList from './components/CardList.vue'
import http from './http'

Vue.config.productionTip = false

Vue.use(VueAwesomeSwiper, /* { default global options } */)
Vue.component('base-card', Card)
Vue.component('base-card-list', CardList)
Vue.prototype.$http = http

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

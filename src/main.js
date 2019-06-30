/* The Vue build version to load with the `import` command */
/* (runtime-only or standalone) has been set in webpack.base.conf with an alias. */
import Vue from 'vue'
import App from './App'
import router from './router'
/* 解决移动端300ms延迟问题 */
import fastclick from 'fastclick'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'styles/reset.css'
import 'styles/border.css'
import 'styles/iconfont.css'
/*  require styles */
import 'swiper/dist/css/swiper.css'
import store from './store/'
Vue.use(VueAwesomeSwiper)
Vue.config.productionTip = false
fastclick.attach(document.body)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})

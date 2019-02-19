import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import BaiduMap from 'vue-baidu-map'
import animated from 'animate.css' // npm install animate.css --save安装，在引入

Vue.use(animated)
Vue.use(BaiduMap,{
	ak:'pLPD2MjhI0ZunQrKUMzkdYxMRjA4MdEx'
})

Vue.prototype.bus = new Vue();

Vue.component('paragraph')
Vue.component('map')
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

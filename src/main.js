import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '../src/assets/init.css'
import '../src/assets/iconfont.css'
import '../src/assets/iconfont.js'
import '../src/assets/border.css'   /*解决一像素边框问题*/
import fastClick from 'fastclick'   /*解决点击延迟问题*/
import animated from 'animate.css' // npm install animate.css --save安装，在引入
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
import axios from 'axios'
import './mock/mock'

Vue.prototype.$axios = axios


Vue.config.productionTip = false;

fastClick.attach(document.body);
Vue.use(animated);
Vue.use(VueAwesomeSwiper);


new Vue({
	axios,
	router,
	store,
	render: h => h(App)
}).$mount('#app')

import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '../src/assets/init.css'
import '../src/assets/border.css'   /*解决一像素边框问题*/
import fastClick from 'fastclick'   /*解决点击延迟问题*/
import animated from 'animate.css' // npm install animate.css --save安装，在引入

Vue.config.productionTip = false;

fastClick.attach(document.body);
Vue.use(animated);


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

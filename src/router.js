import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import City from './views/City.vue'
import Detail from './views/Detail.vue'

Vue.use(Router);

export default new Router({
	routes: [
		{
			path: '/',
			name: 'home',
			component: Home
		},
		{
			path: '/city',
			name: 'City',
			component: City
		}, {
			path: '/detail/:id',
			name: 'Detail',
			component: Detail
		}
	],
	/*页面切换的时候始终回到最顶部*/
	scrollBehavior(to, from, savedPosition) {
		return {x: 0, y: 0}
	}
})

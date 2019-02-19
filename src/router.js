import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import SlotCC from './views/SlotCC.vue'
import Emit from './components/Emit'

Vue.use(Router)

export default new Router({
	routes: [
		{
			path: '/',
			name: 'home',
			component: Home
		},
		{
			path: '/about',
			name: 'about',
			// route level code-splitting
			// this generates a separate chunk (about.[hash].js) for this route
			// which is lazy-loaded when the route is visited.
			component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
		},
		{
			path: '/emit',
			name: 'Emit',
			// route level code-splitting
			// this generates a separate chunk (about.[hash].js) for this route
			// which is lazy-loaded when the route is visited.
			component: () => import(/* webpackChunkName: "about" */ './components/Emit.vue')
		},
		{
			path: '/slotCC',
			name: 'SlotCC',
			// route level code-splitting
			// this generates a separate chunk (about.[hash].js) for this route
			// which is lazy-loaded when the route is visited.
			component: () => import( './views/SlotCC.vue')
		}
	]
})

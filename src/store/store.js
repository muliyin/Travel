import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
import mutations from './mutations'
import actions from './actions'

Vue.use(Vuex);



/*action -> mutations -> state */
export default new Vuex.Store({
	/*存储公用数据*/
	state,

	/*改变公用数据的值*/
	mutations,

	/*异步，复杂同步操作，批量操作
	*
	* */
	actions,

	/*类似computed*/
	getters:{
		doubleCity(state){
			return `${state.city} ${state.city} `
		}
	}
})

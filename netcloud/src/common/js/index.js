import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
	lStatus:true//登录状态
}
const mutations = {
	/**
	* 改变登录状态
	* @param s Boolean 
	*/
	assign(state,s) {
		state.lStatus = s
	}
}
const actions = {
	assign({commit},{s}) {
		commit('assign',s)
	}
}

export default new Vuex.Store({
	state,
	mutations,
	actions
});

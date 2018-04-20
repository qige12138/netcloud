import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
	lStatus:true,//登录状态
	playOrPause:false//钢琴曲播放状态
}
const mutations = {
	/**
	* 改变登录状态
	* @param s Boolean 
	*/
	assign(state,s) {
		state.lStatus = s
	},
	/**
	* 歌曲播放暂停
	* @param s Boolean 
	*/
	singStatus(state,s) {
		state.playOrPause = s
	}
}
const actions = {
	assign({commit},{s}) {
		commit('assign',s)
	},
	plOrPa({commit},{s}) {
		commit('singStatus',s)
	}

}

export default new Vuex.Store({
	state,
	mutations,
	actions
});

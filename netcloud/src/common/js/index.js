import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
	lStatus:true,//登录状态
	playOrPause:false,//歌曲播放状态
	showLyric:false,//是否显示歌词
	singTime:0//歌曲播放时间
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
	},
	/**
	* 是否显示歌词
	* @param s Boolean 
	*/
	lyricStatus(state,s) {
		state.showLyric = s
	},
	/**
	* 歌曲播放时间
	* @param n Number
	*/
	showSongTime(state,n) {
		state.singTime = n
	}
}
const actions = {
	assign({commit},{s}) {
		commit('assign',s)
	},
	plOrPa({commit},{s}) {
		commit('singStatus',s)
	},
	lyStatus({commit},{s}) {
		commit('lyricStatus',s)
	},
	changeSongT({commit},{n}) {
		commit('showSongTime',n)
	}

}

export default new Vuex.Store({
	state,
	mutations,
	actions
});

import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
	lStatus:true,//登录状态
	playOrPause:false,//歌曲播放状态
	showLyric:false,//是否显示歌词
	singTime:0,//歌曲播放时间
	fontColor:null,//背景反色
	curLcolor:null,//当前歌词颜色
	cStatus:false,//是否显示评论
	commentNum:0//评论数
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
	},
	/**
	* 背景反色
	* @param arr arr
	*/
	fontColo(state,arr) {
		state.fontColor = 'rgb(' + arr[0] + ',' + arr[1] + ',' + arr[2] + ')'
	},
	/**
	* 当前歌词颜色
	* @param arr arr
	*/
	curLcolo(state,arr) {
		state.curLcolor = 'rgb(' + parseInt(arr[0]  / 2) + ',' + parseInt(arr[1] / 2) + ',' + parseInt(arr[2] / 2) + ')'
	},
	/**
	* 评论状态
	* @param s Boolean
	*/
	commenStatus(state,s) {
		state.cStatus = s
	},
	/**
	* 评论数
	* @param n Number
	*/
	commentNums(state,n) {
		state.commentNum = n
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
	},
	changeFontC({commit},{arr}) {
		commit('fontColo',arr)
	},
	changecurC({commit},{arr}) {
		commit('curLcolo',arr)
	},
	changecStatus({commit},{s}) {
		commit('commenStatus',s)
	},
	changeComNum({commit},{n}) {
		commit('commentNums',n)
	}

}

export default new Vuex.Store({
	state,
	mutations,
	actions
});

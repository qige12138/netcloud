<template>
	<div class="player_wrap" :style="{color:fontColor}">
		<div class="player" ref="player">
			<div class="progress">
				<div class="st">{{sing.curTimes}}</div>
				<div class="proBar" @touchend="getPos(0)" @touchmove="getPos(1)" @touchstart="changeDrag" ref="proBar">
					<div class="curBar" :style="{width:progress,background:curLcolor}" ref="curBar"></div>
					<div class="allBar" :style="{background:fontColor}"></div>
					<div class="conBar" :style="'left:'+ progress" ref="conBar"></div>
				</div>
				<div class="at t_r">{{sing.allTimes}}</div>
			</div>
			<div class="control">
				<i class="icon iconfont cond">&#xe67b;</i>
				<div class="cont">
					<i class="icon iconfont pre">&#xe78a;</i>
					<!-- 暂停&#xe60b; -->
					<i class="icon iconfont play t_c" v-html="playIcon" @click="control"></i>
					<i class="icon iconfont next">&#xe7a5;</i>
				</div>
				<i class="icon iconfont cond t_r" >&#xe6fa;</i>
			</div>
		</div>
		<audio :src="sing.url" class="none" preload="load" id="sion" ref="sion"></audio>
	</div>
</template>
<script>
	import {mapState,mapActions} from "vuex"
	export default{
		data() {
			return {
				play:'&#xe684;',//播放icon
				pause:'&#xe60b;',//暂停icon
				playIcon:null,//界面按钮icon
				sing:{
					singEle:null,//歌曲DOM
					url:null,//歌曲url
					curTimes:'00:00',//歌曲当前播放时间 String
					curTimen:0,//歌曲当前播放时间 Number
					allTimes:'00:00',//歌曲全部时间 String
					allTimen:0//歌曲全部时间 Number
				},
				progress:0,//进度
				dragStatus:false//是否拖动
				
			}
		},
		props:['singid'],
		computed:{
			...mapState({
				fontColor:state=> state.fontColor,
				curLcolor:state=> state.curLcolor
			})
		},
		mounted() {
			let self_ = this;
			self_.playIcon = self_.play;
			self_.sing.singEle = self_.$refs.sion;
			let sing = self_.sing.singEle;
			//监听歌曲播放时间
			sing.addEventListener("timeupdate",()=> {
				if(Math.floor(sing.duration) == Math.floor(sing.currentTime)) {					
					sing.currentTime = 0;
				}
				self_.sing.curTimen = Math.floor(sing.currentTime);
				self_.sing.curTimes = self_.net.dealTime(self_.sing.curTimen);				
				!self_.dragStatus && self_.progressBar(self_.sing.curTimen)
				self_.changeSongT({n:self_.sing.curTimen})
			});
			self_.getUrl();
		},
		methods:{
			...mapActions({
				'plOrPa':'plOrPa',//暂停播放
				'changeSongT':'changeSongT'//歌曲当前播放时间
			}),
			//初始化歌曲信息
			initSing() {
				let self_ = this;
				let sing = self_.sing.singEle;
				//监听歌曲加载完成
				sing.addEventListener('canplay',()=> {
					let duration = sing.duration;
					self_.sing.allTimen = parseInt(duration);
					self_.sing.allTimes = self_.net.dealTime(duration);
					sing.play();
					this.plOrPa({s:true});
					self_.playIcon = self_.pause;
				});
				
			},
			//播放暂停
			control() {
				let sing = this.sing.singEle;
				if(sing.paused) {
					if(sing.readyState != 4) {
						this.net.toast('暂时不能播放');
						return
					}
					this.playIcon = this.pause;
					sing.play();
					this.plOrPa({s:true});
				} else {
					this.playIcon = this.play;
					sing.pause();
					this.plOrPa({s:false});
				}
			},
			//获取歌曲url
			getUrl() {
				let self_ = this;
				self_.ajax.get('/music/url',{
					id:this.singid
				})
				.then(res=> {
					if(!res.data[0].url) {
						this.plOrPa({s:false});
						return
					}
					self_.sing.url = res.data[0].url;
					self_.initSing();
				})
			},
			/**
			* 进度条
			* @params t Number当前时间
			*/
			progressBar(t) {
				let self_ = this,
					allTime = self_.sing.allTimen;
				self_.progress = t / allTime * 100 + '%';
			},
			//获取鼠标位置 s Number 是否改变歌曲播放时间
			getPos(s) {
				let proBar = this.$refs.proBar,
					x = window.event.changedTouches[0].clientX - proBar.offsetLeft,
					w = proBar.clientWidth,
					pro = x / w;
				if(s) {//拖动
					this.progress = pro * 100 + "%";
				} else {//点击
					this.sing.singEle.currentTime = this.sing.allTimen * pro;
					this.dragStatus = false;
				}
				
			},
			changeDrag() {
				this.dragStatus = true;
			}
			
		}

	}  
</script>
<style scoped lang='stylus'>
	@import '../../common/stylus/public.styl'
	.player_wrap
		fi()
		height:90px
		width:100%
		padding:0 4% 3%
		bottom:0
		bs()
		.player
			.progress
				display:flex
				margin-bottom:10px
				heihgt:12px
				lh(12px)
				.st,.at
					font_s(10px)
					pt(10px)
					flex:1
				.proBar
					extend_click()
					flex:7
					re()
					bs()
					h(30px)
					.curBar,.allBar
						ab()
						height:2px
						top:16px
					.curBar
						width:0
						z-index:4
					.allBar
						width:100%
						z-index:3
					.conBar
						ab()
						width:14px
						height:14px
						border-radius:50%
						background:rgba(255,45,5,.9)
						z-index:5
						top:10px
						left:0
			.control
				display:flex
				height:40px
				lh(40px)
				i
					font_s(20px)
				.cond
					flex:1
				.cont
					flex:2.5
					display:flex
					.pre,.next
						flex:13
						extend_click()
					.play
						flex:74
						font_s(40px)
</style>
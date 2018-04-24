<template>
	<div class="playerWrap">
		<div class="player" ref="player">
			<div class="progress">
				<div class="st">{{sing.curTimes}}</div>
				<div class="proBar">
					<div class="curBar" :style="'width:'+ progress" ref="curBar"></div>
					<div class="allBar"></div>
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
	import {mapActions} from "vuex"
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
				progress:0//进度
				
			}
		},
		props:['singid'],
		mounted() {

			let self_ = this;
			self_.playIcon = self_.play;
			self_.sing.singEle = self_.$refs.sion;
			let sing = self_.sing.singEle;
			sing.currentTime = 210;
			//监听歌曲播放时间
			sing.addEventListener("timeupdate",()=> {
				let curTime = Math.floor(sing.currentTime);
				self_.sing.curTimes = self_.net.dealTime(curTime);
				this.progressBar(curTime)
				this.changeSongT({n:curTime})
			});
			this.getUrl();
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
			}
			
		}

	}  
</script>
<style scoped lang='stylus'>
	@import '../../common/stylus/public.styl'
	.playerWrap
		fi()
		color:#d0c8c3
		height:80px
		width:100%
		padding:0 4% 3%
		bottom:0
		bs()
		.player
			.progress
				display:flex
				margin-bottom:15px
				heihgt:12px
				lh(12px)
				.st,.at
					font_s(10px)
					flex:1
				.proBar
					flex:7
					re()
					.curBar,.allBar
						ab()
						height:2px
						top:4px
					.curBar
						width:0
						bg_color(#d33a31)
						z-index:4
					.allBar
						width:100%
						bg_color(#d0c8c3)
						z-index:3
					.conBar
						ab()
						width:14px
						height:14px
						border-radius:50%
						bg_color(#fff);
						z-index:5
						top:-2px
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
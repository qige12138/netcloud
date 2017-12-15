<template>
	<div class="sing" ref="sing">
		<div class="head">
			<div>
				<i class="icon iconfont">&#xe617;</i>
			</div>
			<div>
				<p>歌单</p>
				<p>编辑推荐：我们彼此相爱，就是为民除害</p>
			</div>
			<div class="t_r">
				<i class="icon iconfont">&#xe638;</i>
			</div>
		</div>
		<sing-img :sing-img="singImgObj" @changeBg="bgColor" v-show="singImgShow"></sing-img>
		<lyric :lyric-obj="lyricObj" v-show="!singImgShow"></lyric>
		<div class="player" ref="player">
			<div class="progress">
				<div class="st">00:00</div>
				<div class="proBar">
					<div class="curBar"></div>
					<div class="allBar"></div>
					<div class="conBar"></div>
				</div>
				<div class="at t_r">{{songT}}</div>
			</div>
			<div class="control">
				<i class="icon iconfont cond">&#xe67b;</i>
				<div class="cont">
					<i class="icon iconfont pre" @click="pre">&#xe78a;</i>
					<!-- 暂停&#xe60b; -->
					<i class="icon iconfont play t_c" v-html="playIcon" @click="opa"></i>
					<i class="icon iconfont next" @click="next">&#xe7a5;</i>
				</div>
				<i class="icon iconfont cond t_r" >&#xe6fa;</i>
			</div>
		</div>
		<audio src="/static/media/xcds.mp3" class="none" preload="load" ref="sion"></audio>
	</div>
</template>
<script>
	import Bus from '@/common/js/bus.js'
	import singImg from './singimg'
	import Lyric from './lyric'
	export default {
		components:{
			singImg,
			Lyric
		},
		data() {
			return {
				winHeight:document.body.clientHeight,
				singImgObj:{},//歌曲封面数据
				lyricObj:{//歌词组件数据
					conHeight:null,//组件高度
					sing:null//歌词
				},
				singImgShow:true,
				play:'&#xe684;',//播放icon
				pause:'&#xe60b;',//暂停icon
				playIcon:null,//界面按钮icon
				playB:false,//播放状态
				colorArr:[],//图片颜色反色数组 r g b
				song:null,//歌曲DOM
				songLongT:0,//歌曲时间 数字格式
				songT:0//歌曲时间 时分格式
			}
		},
		mounted() {
			let self = this;
			let playerHeight = self.$refs.player.clientHeight,
				conHeight = self.winHeight - 60 - playerHeight;
			self.lyricObj['conHeight'] = conHeight;
			self.singImgObj['conHeight'] = conHeight;
			self.playIcon = self.play;
			self.$nextTick(() => {
				self.song = self.$refs.sion;
				self.initPage();
			});
		},
		methods: {
			//根据歌手图片渲染页面背景 主色:bgColor['s']  次色:bgColor['e']
			bgColor(bgColor) {
				let color = bgColor['s'].slice(4,-1).split(',');
				for(let val of color) {
					this.colorArr.push( 255 - Number(val));
				}
				this.$refs.sing.style.backgroundImage = "linear-gradient(200deg, " + bgColor['s'] + "," + bgColor['e'] + ")";
			},
			//初始化歌曲时间
			initPage() {
				let song = this.song;
				song.addEventListener('canplaythrough',()=> {
					this.songLongT = parseInt(song.duration);
					this.initSongT(this.songLongT);
				});
			},
			//time 歌曲时间 
			initSongT(time) {
				let min = parseInt(time / 60),
					sec = time % 60;
				this.songT = min + ":" + sec;
			},
			//上一首
			pre() {
				this.changeSong('left')
			},
			//下一首
			next() {
				this.changeSong('right')
			},
			//播放暂停
			opa() {
				let song = this.song;
				if(!this.playB) {//播放
					this.playB = true;
					this.playIcon = this.pause;
					song.play();
				} else {//暂停
					this.playIcon = this.play;
					this.playB = false;
					song.pause();
				}
				Bus.$emit('playB',this.playB);

			},
			//上下一首
			changeSong(index) {
				'left' == index ? console.info('上一首') : console.info('下一首'); 
			}
		}
		
	}
</script>

<style lang="stylus" scoped>
	@import '../../common/stylus/public.styl'
	.sing
		height:100%	
		overflow_h()
		.head
			color:#Fff
			height:54px
			display:flex
			&>div:nth-child(1)
				flex:1
				bs()
				pl(20px)
				lh(54px)
				i
					font_s(20px)
			&>div:nth-child(2)
				flex:5
				overflow_h()
				p:nth-child(1)
					pt(6px)
					lh(26px)
				p:nth-child(2)
					font_s(8px)
					overflow_t()
					color:#919084
			&>div:nth-child(3)
				bs()
				pr(10px)
				lh(54px)
				flex:2
				i
					font_s(24px)
					extend_click()
					&:nth-child(1)
						margin-right:16px
		.player
			fi()
			bottom:0
			color:#d0c8c3
			height:67px
			width:92%
			padding:0 4% 3%
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
						width:50%
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
						left:50%
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
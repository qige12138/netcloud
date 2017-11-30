<template>
	<div class="sing">
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
		<sing-img :sing-img="singImgUrl" v-show="singImgShow"></sing-img>
		<lyric :lyric-obj="lyricObj" v-show="!singImgShow"></lyric>
		<div class="player" ref="player">
			<div class="progress">
				<div class="st">00:00</div>
				<div class="proBar">
					<div class="curBar"></div>
					<div class="allBar"></div>
					<div class="conBar"></div>
				</div>
				<div class="at t_r">04:00</div>
			</div>
			<div class="control">
				<i class="icon iconfont cond">&#xe67b;</i>
				<div class="cont">
					<i class="icon iconfont pre">&#xe78a;</i>
					<!-- 暂停&#xe60b; -->
					<i class="icon iconfont play t_c">&#xe684;</i>
					<i class="icon iconfont next">&#xe7a5;</i>
				</div>
				<i class="icon iconfont cond t_r">&#xe6fa;</i>
			</div>
		</div>
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
				singImgUrl:null,
				lyricObj:{
					conHeight:null,
					sing:null
				},
				singImgShow:false

			}
		},
		mounted() {
			let playerHeight = this.$refs.player.clientHeight;
			this.lyricObj['conHeight'] = this.winHeight - 60 - playerHeight;
		}
		
	}
</script>

<style lang="stylus" scoped>
	@import '../../common/stylus/public.styl'
	.sing
		height:100%	
		overflow_h()
		bg_color(#474a3c)
		.head
			bg_color(rgb(71,74,60))
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
					.play
						flex:74
						font_s(40px)
					
			
		
				
		
</style>
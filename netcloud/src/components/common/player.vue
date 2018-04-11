<template>
	<div class="playerWrap">
		<div class="player" ref="player">
			<div class="progress">
				<div class="st">{{}}</div>
				<div class="proBar">
					<div class="curBar" ref="curBar"></div>
					<div class="allBar"></div>
					<div class="conBar" ref="conBar"></div>
				</div>
				<div class="at t_r">{{}}</div>
			</div>
			<div class="control">
				<i class="icon iconfont cond">&#xe67b;</i>
				<div class="cont">
					<i class="icon iconfont pre">&#xe78a;</i>
					<!-- 暂停&#xe60b; -->
					<i class="icon iconfont play t_c" v-html="playIcon"></i>
					<i class="icon iconfont next">&#xe7a5;</i>
				</div>
				<i class="icon iconfont cond t_r" >&#xe6fa;</i>
			</div>
		</div>
		<audio src="/static/media/xcds.mp3" class="none" preload="load" ref="sion"></audio>
	</div>
</template>
<script>
	export default{
		data() {
			return {
				play:'&#xe684;',//播放icon
				pause:'&#xe60b;',//暂停icon
				playIcon:null,//界面按钮icon
			}
		},
		mounted() {
			let self = this;
			self.playIcon = self.play;
		},
		methods:{

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
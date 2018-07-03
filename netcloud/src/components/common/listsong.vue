<template>
	<div class="listsong">
		<div class="list_title bd_bottom">
			<div>
				<i class="icon iconfont">&#xe627;</i>
				<span>播放全部<span class="num">(共{{songlist.length}}首)</span></span>
			</div>
			<div class="t_r">
				<i class="icon iconfont">&#xe699;</i>
				<span>多选</span>
			</div>
		</div>
		<div class="listContent">
			<div class="list" v-for="(song,index) in songlist" :key="song.id">
				<div class="ser">
					{{index + 1}}
				</div>
				<div class="bd_bottom singMsg" @click="play(song.id,song['name'],song['ar'][0]['name'],song['al']['picUrl'])">
					<div>
						<p>{{song['name']}}</p>
						<p>{{song['ar'][0]['name']}}-{{song['al']['name']}}</p>
					</div>
					<div>
						<i class="icon iconfont">&#xe60e;</i>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
	import {mapActions} from 'vuex'
	export default {
		props:['songlist'],
		mounted() {
		},
		methods:{
			...mapActions({
				'lyStatus':'lyStatus'
			}),
			//播放歌曲 id 歌曲ID singname歌曲名字 singername歌手名字 singimg歌曲封面
			play(id,singname,singername,singimg) {
				let obj = {
					id:id,
					singMsg:JSON.stringify({
						singName:singname,
						singerName:singername,
						singImg:singimg
					})
				}
				this.lyStatus({s:false})
				this.$router.push({
					path:'/sing',
					query:obj
				});
			}
		}
	}
</script>

<style lang="stylus" scoped>
	@import '../../common/stylus/public.styl'
	.list_title
		display:flex
		height:48px
		lh(48px)
		pad_(0,10px)
		&>div:first-child
			flex:2
			&>span>span
				color:$color_66
			i
				font_s(18px)
				margin-right:10px
		&>div:last-child
			flex:1
			font_s(14px)
			i
				margin-right:3px
	.list
		width:100%
		display:flex
		height:54px
		.ser
			flex:1
			text-align:center
			color:$color_66
			lh(54px)
		.singMsg
			flex:6.2
			display:flex
			width:100%
			overflow_h() 
			&>div:first-child
				flex:4.5
				overflow_h() 
				p:first-child
					lh(30px)
					overflow_t()
				p:last-child
					font_s(12px)
					color:$color_66
					overflow_t()
			&>div:last-child
				flex:1
				lh(54px)
				text-align:center
				color:$color_99

</style>
<template>
	<div class="headertext">
		<div class="head">
			<div @click="back">
				<i class="icon iconfont">&#xe617;</i>
			</div>
			<div>
				<p>
					<span>评论</span>
					<span>（{{commentNum}}）</span>
				</p>
			</div>
		</div>
		<div class="empty"></div>
		
	</div>
</template>
<script>
	import {mapState} from 'vuex'
	export default {
		computed:{
			...mapState({
				commentNum:state=> state.commentNum
			})
		},
		methods:{
			back() {
				this.$router.go(-1);
				this.$destroy()
			}
		}
	}
</script>

<style lang="stylus" scoped>
	@import '../../common/stylus/public.styl'
	.headertext
		.head
			bg_color(rgb(71,74,60))
			color:#Fff
			height:48px
			display:flex
			fi()
			width:100%
			z-index:100
			&>div:nth-child(1)
				flex:1
				bs()
				pl(20px)
				lh(48px)
				i
					font_s(20px)
			&>div:nth-child(2)
				flex:5
				overflow_h()
				p:nth-child(1)
					lh(48px)
			&>div:nth-child(3)
				flex:2
				bs()
				pr(10px)
				lh(48px)
				
				i
					font_s(24px)
					extend_click()
					&:nth-child(1)
						margin-right:16px
		.empty
			height:48px
</style>
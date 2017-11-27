<template>
	<div class="headertext">
		<div>
			<i class="icon iconfont">&#xe617;</i>
		</div>
		<div>
			<p>歌单</p>
			<p>编辑推荐：我们彼此相爱，就是为民除害</p>
		</div>
		<div class="t_r">
			<i class="icon iconfont">&#xe621;</i>
			<i class="icon iconfont">&#xe60e;</i>
		</div>
	</div>
</template>
<script>
	export default {

	}
</script>

<style lang="stylus" scoped>
	@import '../../common/stylus/public.styl'
	.headertext
		bg_color(rgb(71,74,60))
		color:#Fff
		height:48px
		display:flex
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
				lh(28px)
			p:nth-child(2)
				font_s(8px)
				overflow_t()
				width:100%
		&>div:nth-child(3)
			bs()
			pr(10px)
			lh(48px)
			flex:2
			i
				font_s(24px)
				extend_click()
				&:nth-child(1)
					margin-right:16px
</style>
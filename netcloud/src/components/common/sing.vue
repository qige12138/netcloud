<template>
	<div class="sing">
		<div class="head bd_bottom">
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
		<div class="singImg">
			<img src="../../common/img/bang.png" class="bang">
			<div class="pan">
				
			</div>
		</div>
	</div>
</template>
<script>
	import Bus from '@/common/js/bus.js'
	export default {

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
		.singImg
			.bang
				width:24.1%
				margin-left:47%
			.pan
				width:75%
				height:0
				pb(75%)
				re()
				left:12.5%
				bg_image('../../common/img/pan.png')
			
		
				
		
</style>
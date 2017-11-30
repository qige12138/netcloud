<template>
	<div class="singImg">
		<div class="singer bd_top">
			<img src="../../common/img/bang.png" class="bang">
			<div class="pan">
				<div>
					<img src="../../common/img/songexb.jpg">
				</div>
			</div>
		</div>
		<div class="singMsg">
			<div>
				<i class="icon iconfont">&#xe62b;</i>
			</div>
			<div>
				<i class="icon iconfont">&#xe64c;</i>
			</div>
			<div>
				<i class="icon iconfont">&#xe633;</i>
				<span>999+</span>
			</div>
			<div>
				<i class="icon iconfont">&#xe60e;</i>
			</div>
		</div>
	</div>
</template>
<script>
	import Bus from '@/common/js/bus.js'
	export default {
		prop:['singImg'],
		mounted() {
			// console.info(this.singImg)
		}
	}
</script>

<style lang="stylus" scoped>
	@import '../../common/stylus/public.styl'
	.singImg
		.singer
			re()
			.bang
				width:24.1%
				margin-left:47%
				re()
				z-index:4
			.pan
				width:75%
				height:0
				pb(75%)
				ab()
				left:12.5%
				top:45%
				z-index:3
				text-align:center
				bs()
				bg_image('../../common/img/pan.png')
				div
					dis_inb()
					width:62%
					pb(62%)
					height:0
					re()
					img 
						ab()
						left:0
						top:30.5%
						width:100%
						height:100%
						border-radius:50%
		.singMsg
			color:#d0c8c3
			ab()
			bs()
			width:100%
			top:74%
			pad_(0,10%)
			display:flex
			div
				flex:1
				text-align:center
				height:30px
				lh(30px)
				i
					font_s(22px)
				&:nth-child(3)
					re()
					span
						ab()
						font_s(10px)
						left:56%
						top:-5px
			
			
		
				
		
</style>
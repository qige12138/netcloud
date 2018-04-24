<template>
	<div class="head">
		<div @click="back">
			<i class="icon iconfont">&#xe617;</i>
		</div>
		<div>
			<p>{{singHeader['singName']}}</p>
			<p>{{singHeader['singerName']}}</p>
		</div>
		<div class="t_r">
			<i class="icon iconfont">&#xe638;</i>
		</div>
	</div>
</template>
<script>
	export default{
		props:['singHeader'],
		methods:{
			back() {
				this.$router.go(-1);
			}
		}

	}  
</script>
<style scoped lang='stylus'>
	@import '../../common/stylus/public.styl'
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
</style>
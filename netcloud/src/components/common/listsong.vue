<template>
	<div class="listsong">
		<div class="listTitle bd_bottom">
			<div>
				<i class="icon iconfont">&#xe627;</i>
				<span>播放全部<span class="num">(共35首)</span></span>
			</div>
			<div class="t_r">
				<i class="icon iconfont">&#xe699;</i>
				<span>多选</span>
			</div>
		</div>
		<div class="listContent">
			<div class="list ">
				<div class="ser">
					1
				</div>
				<div class="bd_bottom singMsg">
					<div>
						<p>红玫瑰</p>
						<p>陈奕迅-红玫瑰</p>
					</div>
					<div>
						<i class="icon iconfont">&#xe60e;</i>
					</div>
				</div>
			</div>
			<div class="list ">
				<div class="ser">
					1
				</div>
				<div class="bd_bottom singMsg">
					<div>
						<p>红玫瑰</p>
						<p>陈奕迅-红玫瑰</p>
					</div>
					<div>
						<i class="icon iconfont">&#xe60e;</i>
					</div>
				</div>
			</div>
			<div class="list ">
				<div class="ser">
					1
				</div>
				<div class="bd_bottom singMsg">
					<div>
						<p>红玫瑰</p>
						<p>陈奕迅-红玫瑰</p>
					</div>
					<div>
						<i class="icon iconfont">&#xe60e;</i>
					</div>
				</div>
			</div>
			<div class="list ">
				<div class="ser">
					1
				</div>
				<div class="bd_bottom singMsg">
					<div>
						<p>红玫瑰</p>
						<p>陈奕迅-红玫瑰</p>
					</div>
					<div>
						<i class="icon iconfont">&#xe60e;</i>
					</div>
				</div>
			</div>
			<div class="list ">
				<div class="ser">
					1
				</div>
				<div class="bd_bottom singMsg">
					<div>
						<p>红玫瑰</p>
						<p>陈奕迅-红玫瑰</p>
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
	export default {
		
	}
</script>

<style lang="stylus" scoped>
	@import '../../common/stylus/public.styl'
	.listTitle
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
<template>
	<header>
		<div class="hl">
			<i class="icon iconfont">&#xe699;</i>
		</div>
		<div class="hc t_c" ref="wrap">
			<router-link tag="div" class="router_link" to="/volume" >
				<i class="icon iconfont">&#xe680;</i>
			</router-link>
			<router-link tag="div" class="router_link" to="/netmusic">
				<i class="icon iconfont netmusic" to="/netmusic">&#xe762;</i>
			</router-link>
			<router-link tag="div" class="router_link" to="/circle">
				<i class="icon iconfont circle" to="/circle">&#xe645;</i>
			</router-link>
		</div>
		<div class="hr t_r">
			<i class="icon iconfont">&#xe621;</i>
		</div>
	</header>
</template>

<script>
	export default {
	}
</script>

<style lang="stylus">
	@import '../../common/stylus/public.styl'
	header 
		position:fixed
		left:0
		top:0
		width:100%
		height:48px
		line-height:48px
		display:flex
		box-sizing:border-box
		padding:0 10px
		background-color:$bg_th
		i 
			font-size:$fonts_22!important
		i.netmusic,i.circle 
			font-size:30px!important
		.hl,.hr
			flex:1
			color:$color_ff
		.hc 
			flex:2
			display:flex
			.router_link
				flex:1
				color:#666
				cursor:pointer
				&.router-link-active
					color: $color_ff
</style>
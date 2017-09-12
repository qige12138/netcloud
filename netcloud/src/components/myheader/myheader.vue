<template>
	<header>
		<div class="hl">
			<i class="icon iconfont">&#xe699;</i>
		</div>
		<div class="hc t_c">
			<i class="icon iconfont checked">&#xe628;</i>
			<i class="icon iconfont">&#xe628;</i>
			<i class="icon iconfont">&#xe628;</i>
		</div>
		<div class="hr t_r">
			<i class="icon iconfont">&#xe62f;</i>
		</div>
	</header>
</template>

<script>
	export default {

	}
</script>

<style lang="stylus">
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
		background-color:rgb(34,34,37)
		i 
			font-size:20px!important
		.hl,.hr
			flex:1
			color:#fff
		.hc 
			flex:2
			display:flex
			i
				flex:1
				color:#666
			i.checked
				color:#fff
</style>
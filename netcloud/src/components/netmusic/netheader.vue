<template>
	<div class="netheader">
		<div class="nav">
			<router-link tag="div" to="/music" class="router_link t_c">
				<span>音乐</span>
			</router-link>
			<router-link tag="div" to="/video" class="router_link t_c">
				<span>视频</span>
			</router-link>
			<router-link tag="div" to="/station" class="router_link t_c">
				<span>电台</span>
			</router-link>
		</div>
		<div class="empty"></div>
	</div>
</template>
<script>
	export default {
	}
</script>
<style lang="stylus" scoped>
 	@import '../../common/stylus/public.styl'
 	.netheader 
 		width:90%
 		.empty
 			height:36px
 		.nav 
 			display:flex
	 		height:36px
	 		line-height:36px
	 		background:#fff
	 		position:fixed
	 		top:48px
	 		left:0
	 		width:100%
	 		z-index:10
	 		.router_link
	 			flex:1
	 			bs()
	 			pad_(0,15px)
	 			color:$color_66
	 			cursor:pointer
	 			&.router-link-active span
	 				display:block
	 				height:95%
	 				color: #000
	 				border-bottom:2px solid #000

 </style>
<template>
	<div class="netheader">
		<router-link tag="div" to="/music" class="router_link t_c">
			音乐
		</router-link>
		<router-link tag="div" to="/video" class="router_link t_c">
			视频
		</router-link>
		<router-link tag="div" to="/station" class="router_link t_c">
			电台
		</router-link>
	</div>
</template>
 <script>

 	export default {
 		name: 'app'
 	}
 </script>
 <style lang="stylus" scoped>
 	@import '../../common/stylus/public.styl'
 	.netheader 
 		display:flex
 		height:36px
 		line-height:36px
 		background:#fff
 		.router_link
 			flex:1
 			bs()
 			pad_(0,15px)
 			color:$color_66
 			cursor:pointer
 			&.router-link-active
 				color: #000
 				border-bottom:1px solid #000

 </style>
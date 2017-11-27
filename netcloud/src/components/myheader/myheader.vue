<template>
	<div class="header">
		<header>
			<div class="hl">
				<i class="icon iconfont">&#xe699;</i>
			</div>
			<div class="hc t_c">
				<div tag="div" class="router_link" :class="{'router_link_active':num == 0}" @click="changeStyle(0,'/volume')" >
					<i class="icon iconfont">&#xe680;</i>
				</div>
				<div tag="div" class="router_link" :class="{'router_link_active':num == 1}" @click="changeStyle(1,'/netmusic')" >
					<i class="icon iconfont netmusic" to="/netmusic">&#xe762;</i>
				</div>
				<div tag="div" class="router_link" :class="{'router_link_active':num == 2}" @click="changeStyle(2,'/circle')" >
					<i class="icon iconfont circle" to="/circle">&#xe645;</i>
				</div>
			</div>
			<div class="hr t_r">
				<i class="icon iconfont">&#xe621;</i>
			</div>
		</header>
		
		<div class="empty"></div>
	</div>
	
</template>

<script>
	export default {
		data() {
			return {
				num:0
			}
		},
		created() {
			if(this.$route.path == '/music' || this.$route.path == '/video' || this.$route.path == '/station') {
				this.num = 1
			} else if(this.$route.path == '/circle') {
				this.num = 2
			}
		},
		methods: {
			changeStyle(num,url) {
				this.num = num;
				this.$router.push({path:url});
			}
		}
	}
</script>

<style lang="stylus" scoped>
	@import '../../common/stylus/public.styl'
	.header 
		.empty 
			height:48px
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
			z-index:11
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
					&.router_link_active
						color: $color_ff
</style>
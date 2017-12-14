<template>
	<div class="lyric" ref="lyric">
		<div class="volume">
			<i class="icon iconfont">&#xe607;</i>
			<div class="vol">
				<div class="curVol"></div>
				<div class="allVol"></div>
				<div class="conVol"></div>
			</div>
		</div>
	</div>
</template>
<script>
	import Bus from '@/common/js/bus.js'
	export default {
		props:['lyricObj'],
        mounted() {
        	this.$nextTick(()=> {
        		this.$refs.lyric.style.height = this.lyricObj.conHeight + 'px';
        	})
            
        }
	}
</script>

<style lang="stylus" scoped>
	@import '../../common/stylus/public.styl'
	.lyric
		color:#bbb;
		.volume
			re()
			width:100%
			height:20px
			lh(20px)
			bs()
			padding:0 10% 0 6%
			display:flex
			i
				font_s(18px)
				flex:1
			&>div
				flex:8
				re()
				.allVol
					ab()
					top:8px
					height:2px
					width:100%
					bg_color(#737373)
					z-index:2
				.curVol
					ab()
					top:8px
					height:2px
					width:50%
					bg_color(#b8b9b8)
					z-index:3
				.conVol
					ab()
					width:14px
					height:14px
					bg_color(#fff)
					border-radius:50%
					z-index:4
					top:2px
					left:50%
					
				
				
				
				
			
				
			
			
			
			
		
				
		
</style>
<template>
	<div class="lyric" ref="lyric">
		asdasd
	</div>
</template>
<script>
	import Bus from '@/common/js/bus.js'
	export default {
		props:['lyricObj'],
        mounted() {
        	this.$nextTick(()=> {
        		console.info(this.lyricObj.conHeight)
        		this.$refs.lyric.style.height = this.lyricObj.conHeight + 'px';
        	})
            
        }
	}
</script>

<style lang="stylus" scoped>
	@import '../../common/stylus/public.styl'
	.lyric
		bg_color(red)	
			
		
				
		
</style>
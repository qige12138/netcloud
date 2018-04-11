<template>
	<div class="lyric t_c" ref="lyric" @click="showImg">
		假装有歌词
	</div>
</template>
<script>
	import Bus from '@/common/js/bus.js'
	export default {
		props:['lyricOb'],
        mounted() {
        	this.$nextTick(()=> {
        		this.$refs.lyric.style.height = this.lyricOb.contentH + 'px';
        	})
            
        },
        methods:{
        	//点击歌词  歌词组件消失
        	showImg() {
        		Bus.$emit('showimg',true)
        	}
        }
	}
</script>

<style lang="stylus" scoped>
	@import '../../common/stylus/public.styl'
	.lyric
		color:#bbb
		bg_color(transparent)
		pt(10px)
			
					
				
				
				
				
			
				
			
			
			
			
		
				
		
</style>
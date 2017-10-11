<template>
	<div class="music">
		<swiper></swiper>  
		<tab></tab>
	</div>
</template>
<script>
	import Swiper from './slide.vue'
	import Tab from './tab.vue'
	export default{ 
		components:{
			Swiper,
			Tab
		}
	}

</script>
<style lang="stylus" scoped>
	@import '../../common/stylus/public.styl'
	.music 
		pt(36px)

</style>
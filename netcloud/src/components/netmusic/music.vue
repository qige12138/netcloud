<template>
	<div class="music">
		<swiper></swiper>  
		<tab></tab>
		<song-type listype="推荐歌单"></song-type>
		<song-list6 songtype="recommend"></song-list6>
		<song-type listype="独家放送"></song-type>
		<song-ex songtype="exclusive"></song-ex>
		
	</div>
</template>
<script>
	import Swiper from './slide.vue'
	import Tab from './tab.vue'
	import songType from './songtype.vue'
	import songList6 from './songlist6.vue'
	import songEx from './songex.vue'
	export default{ 
		components:{
			Swiper,
			Tab,
			songType,
			songList6,
			songEx

		}
	}

</script>
<style lang="stylus" scoped>
	@import '../../common/stylus/public.styl'
	.music 
		pt(36px)

</style>
<template>
	<div class="music">
		<swiper></swiper>  
		<tab></tab>
		<song-type listype="推荐歌单"></song-type>
		<song-list6 songtype="recommend"></song-list6>
		<song-type listype="独家放送"></song-type>
		<song-ex songtype="exclusive"></song-ex>
		<song-type listype="最新音乐"></song-type>
		<song-list6 songtype="new"></song-list6>
		<song-type listype="推荐MV"></song-type>
		<ex-mv songtype="exmv"></ex-mv>
		<song-type listype="精选专栏"></song-type>
		<hand-pick></hand-pick>
		<song-type listype="主播电台"></song-type>
		<song-list6 songtype="anchor"></song-list6>
		<music-footer></music-footer>
	</div>
</template>
<script>
	import Swiper from './slide.vue'
	import Tab from './tab.vue'
	import songType from './songtype.vue'
	import songList6 from './songlist6.vue'
	import songEx from './songex.vue'
	import exMv from './exmv.vue'
	import handPick from './handpick.vue'
	import musicFooter from './musicfooter.vue'
	export default{ 
		components:{
			Swiper,
			Tab,
			songType,
			songList6,
			songEx,
			exMv,
			handPick,
			musicFooter
		}
	}

</script>
<style lang="stylus" scoped>
	@import '../../common/stylus/public.styl'

</style>
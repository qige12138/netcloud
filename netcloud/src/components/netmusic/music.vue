<template>
	<div class="music">
		<swiper></swiper>  
		<tab></tab>
		<song-type listype="推荐歌单"></song-type>
		<song-list6 songtype="recommend"></song-list6>
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
	import Swiper from './slide'
	import Tab from './tab'
	import songType from './songtype'
	import songList6 from './songlist6'
	import songEx from './songex'
	import exMv from './exmv'
	import handPick from './handpick'
	import musicFooter from './musicfooter'
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
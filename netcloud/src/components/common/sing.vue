<template>
	<div class="sing" ref="sing">
		<sing-head :singHeader="singHeadr"></sing-head>
		<sing-img :singImgOb="singObj"  @changeBg="bgColor" v-show="singImgShow"></sing-img>
		<lyric :lyricOb="singObj"  v-show="!singImgShow"></lyric>
		<player :singid="singObj.id"></player>	
	</div>
</template>
<script>
	import Bus from '@/common/js/bus.js'
	import singHead from './singhead'
	import singImg from './singimg'
	import Lyric from './lyric'
	import player from './player'
	export default {
		components:{
			singHead,
			singImg,
			Lyric,
			player
		},
		data() {
			return {
				winHeight:document.body.clientHeight,
				singImgShow:true,//显示图片或歌词 true图片 false歌词
				colorArr:[],//图片颜色反色数组 r g b
				singObj:{//图片数据
					contentH:0,//组件高度
					id:this.$route.query.id,
					img:JSON.parse(this.$route.query.singMsg).singImg
				},
				singHeadr:JSON.parse(this.$route.query.singMsg)
				
			}
		},
		mounted() {
			this.singObj.contentH = this.winHeight - 134;
		},
		methods: {
			//根据歌手图片渲染页面背景 主色:bgColor['s']  次色:bgColor['e']
			bgColor(bgColor) {
				let color = bgColor['s'].slice(4,-1).split(',');
				for(let val of color) {
					this.colorArr.push( 255 - Number(val));
				}
				this.$refs.sing.style.backgroundImage = "linear-gradient(200deg, " + bgColor['s'] + "," + bgColor['e'] + ")";
			}
			
			

		}
		
	}
</script>

<style lang="stylus" scoped>
	@import '../../common/stylus/public.styl'
	.sing
		height:100%	
		overflow_h()	
		
</style>
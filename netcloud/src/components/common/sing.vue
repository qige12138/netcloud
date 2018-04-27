<template>
	<div class="sing" ref="sing">
		<sing-head :singHeader="singHeadr"></sing-head>
		<sing-img :singImgOb="singObj"  @changeBg="bgColor" v-show="!showLyric"></sing-img>
		<comment v-show="cStatus"></comment>
		<lyric :lyricOb="singObj"  v-show="showLyric"></lyric>
		<player :singid="singObj.id"></player>	
	</div>
</template>
<script>
	import Bus from '@/common/js/bus.js'
	import singHead from './singhead'
	import singImg from './singimg'
	import comment from "./comment"
	import Lyric from './lyric'
	import player from './player'
	import {mapState,mapActions} from "vuex"
	export default {
		components:{
			singHead,
			singImg,
			comment,
			Lyric,
			player
		},
		data() {
			return {
				winHeight:document.body.clientHeight,
				colorArr:[],//图片颜色反色数组 r g b
				singObj:{//图片数据
					contentH:0,//组件高度
					id:this.$route.query.id,
					img:JSON.parse(this.$route.query.singMsg).singImg
				},
				singHeadr:JSON.parse(this.$route.query.singMsg),
				commentObj:{
					contentH:0,//组件高度
					id:this.$route.query.id,
					img:JSON.parse(this.$route.query.singMsg).singImg,
					
				}
				
			}
		},
		computed:{
			...mapState({
				showLyric:state=> state.showLyric,
				cStatus:state=> state.cStatus
			})
		},
		mounted() {
			this.singObj.contentH = this.winHeight - 144;
		},
		methods: {
			...mapActions({
				'changeFontC':'changeFontC',
				'changecurC':'changecurC'
			}),
			//根据歌手图片渲染页面背景 主色:bgColor['s']  次色:bgColor['e']
			bgColor(bgColor) {
				let color = bgColor['s'].slice(4,-1).split(','),
					colorArr = [];
				for(let val of color) {
					colorArr.push( 255 - Number(val));
				}
				this.changeFontC({arr:colorArr});
				this.changecurC({arr:colorArr});
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
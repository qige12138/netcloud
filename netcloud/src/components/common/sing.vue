<template>
	<div class="sing" ref="sing">
		<sing-head :singHeader="singHeadr" v-if="singMsg"></sing-head>
		<sing-img :singImgOb="singObj"  @changeBg="bgColor" v-show="!showLyric" v-if="singMsg"></sing-img>
		<comment v-show="cStatus" v-if="singMsg"></comment>
		<lyric :lyricOb="singObj"  v-show="showLyric" v-if="singMsg"></lyric>
		<player :singid="singObj.id" v-if="singMsg"></player>	
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
				winHeight:'',
				colorArr:[],//图片颜色反色数组 r g b
				singObj:'',
				singHeadr:'',
				commentObj:'',
				id:this.$route.query.id,
				singMsg:''				
			}
		},
		computed:{
			...mapState({
				showLyric:state=> state.showLyric,
				cStatus:state=> state.cStatus
			})
		},
		mounted() {
			this.winHeight = document.body.clientHeight - 144;
			this.getSingMsg();
			
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
			},
			getSingMsg() {				
				this.ajax.get('/song/detail',{
					ids:this.$route.query.id
				})
				.then((res)=> {
					this.singMsg = res.songs[0];
					this.singHeadr = {
						singName:this.singMsg.name,
						singerName:this.singMsg.ar[0].name
					}
					this.singObj = {//图片数据
						contentH:this.winHeight,//组件高度
						id:this.id,
						img:this.singMsg.al.picUrl
					};
					this.commentObj = {
						contentH:this.winHeight,//组件高度
						id:this.id,
						mg:this.singMsg.al.picUrl
						
					}
				})
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
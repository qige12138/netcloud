<template>
	<div class="singImg" ref="singImgC">
		<div class="singer bd_top" @click="showLyric">
			<img src="../../common/img/bang.png" class="bang" :class="{'pause':!playOrPause}">
			<div class="pan" :class="{'pause':!playOrPause}">
				<div>
					<img :src="singImgOb.img" ref="singImg">
				</div>
			</div>
		</div>
		<div class="singMsg" :style="{color:fontColor}">
			<div>
				<i class="icon iconfont">&#xe62b;</i>
			</div>
			<div>
				<i class="icon iconfont">&#xe64c;</i>
			</div>
			<div>
				<i class="icon iconfont">&#xe633;</i>
				<span>999+</span>
			</div>
			<div>
				<i class="icon iconfont">&#xe60e;</i>
			</div>
		</div>
		
	</div>
</template>
<script>
	import Bus from '@/common/js/bus'
	import {getColor} from '@/common/js/getimgcolor'
	import {mapState,mapActions} from "vuex"
	
	export default {
		props:['singImgOb'],
		computed:{
			...mapState({
				playOrPause: state => state.playOrPause,
				fontColor:state=> state.fontColor
			})
		},
		mounted() {
			let self = this;
			self.$nextTick(() =>{
				self.getImgColor();
				self.$refs.singImgC.style.height = this.singImgOb.contentH + 'px';
			});
		},
		methods: {
			...mapActions({
				'lyStatus':'lyStatus'
			}),
			//获取图片的主色和次色 dominant主色  secondary次色
			getImgColor() {
				let self = this;
				let singImg = this.$refs.singImg;
				RGBaster.colors(singImg, {
				  	success(payload) {
					    let bgColor = {
					    	s:payload.dominant,
					    	e:payload.secondary
					    };
					    self.$emit('changeBg',bgColor);
					}
				});
			},
			//显示歌词组件
			showLyric() {
				this.lyStatus({s:true})
			}
		}
	}
</script>

<style lang="stylus" scoped>
	@import '../../common/stylus/public.styl'
	.singImg
		overflow_h()
		.singer
			re()
			.bang
				width:24.1%
				margin-left:47%
				re()
				z-index:4
				transform-origin:15.1515% 0
				transition:all .5s linear
				&.pause
					transform:rotate(-30deg)
			.pan
				width:75%
				height:0
				pb(75%)
				ab()
				left:12.5%
				top:45%
				z-index:3
				text-align:center
				bs()
				bg_image('../../common/img/pan.png')
				animation:panrun 36s linear infinite forwards
				&.pause
					animation-play-state:paused
				@keyframes panrun {
					from {transform:rotate(0);}
					to {transform:rotate(360deg);}
				}	
				div
					dis_inb()
					width:62%
					pb(62%)
					height:0
					re()
					img 
						ab()
						left:0
						top:30.5%
						width:100%
						height:100%
						border-radius:50%
		.singMsg
			ab()
			bs()
			width:100%
			top:74%
			pad_(0,10%)
			display:flex
			div
				flex:1
				text-align:center
				height:30px
				lh(30px)
				i
					font_s(22px)
				&:nth-child(3)
					re()
					span
						ab()
						font_s(10px)
						left:56%
						top:-5px
			
			
		
				
		
</style>
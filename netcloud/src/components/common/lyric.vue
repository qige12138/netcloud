<template>
	<div class="lyric t_c" ref="lyric" @click="showImg" :style="{color:fontColor}">
		<p v-show="!lyricS">无歌词</p>
		<ul v-show="lyricS" ref="lyricele" :style="{transform:'translate3d(0,' + toph + ',0)'}">
			<li v-for="(item,index) in lyricS" :style="{color:item['curColor']}" :key="index">
				{{item['c']}}
			</li>
		</ul>
	</div>
</template>
<script>
	import Bus from '@/common/js/bus.js'
	import {mapState,mapActions} from 'vuex'
	export default {
		data() {
			return {
				toph:0,
				lyricS:false//歌词数组
			}
		},
		props:['lyricOb'],
		computed:{
			...mapState({
				singTime:state=> state.singTime,
				fontColor:state=> state.fontColor,
				curLcolor:state=> state.curLcolor
			})
		},
        mounted() {
        	this.$nextTick(()=> {
        		this.$refs.lyric.style.height = this.lyricOb.contentH + 'px';
				this.getLyric();
        	});
        },
        methods:{
        	...mapActions({
        		'lyStatus':'lyStatus'
        	}),
        	//点击歌词  歌词组件消失
        	showImg() {
        		this.lyStatus({s:false})
        	},
        	//获取歌词
        	getLyric() {
        		let self_ = this;
        		this.ajax.get('/lyric',{
        			id:self_.lyricOb.id
        		})
        		.then(res => { 
        			if(res.nolyric) return//没有歌词
        			let lyricArr = res.lrc.lyric.split("\n"),//歌词数组
        				lyricArrObj = [],//有时间才数据
        				t,//时间
        				c,//歌词内容
        				tArr;//时间数组
        			for(let item of lyricArr) {
        				t = item.substring(item.indexOf("[") + 1, item.indexOf("]"));
        				c = item.substring(item.indexOf("]") + 1);
        				tArr = t.split(":");
        				t = tArr[0] * 60 + parseInt(tArr[1]);
        				!isNaN(t) && lyricArrObj.push({
        					t:t,//歌词时间
        					c:c//歌词内容
        				});
        			}
					self_.lyricS = lyricArrObj;

        		});
        	},
			//获取当前是哪一行歌词
			getIndex() {
				let lyricS = this.lyricS,
					singTime = this.singTime,
					len = lyricS.length;					
				for(let i = 0; i < len; i++) {
					if((i <= len - 2 && singTime >= lyricS[i]['t'] && singTime < lyricS[i + 1]['t']) || (i == len - 1 && singTime >= lyricS[len - 1]['t'])) {
						lyricS[i]['curColor'] = this.curLcolor
						return i
					} else {
						lyricS[i]['curColor'] = this.fontColor
					}
				}
			}
        },
		watch:{
			singTime() {
				let inde = this.getIndex();//当前歌词行数
				this.toph = -35 * (inde + 1) + 'px';
			}
		}
	}
</script>

<style lang="stylus" scoped>
	@import '../../common/stylus/public.styl'
	.lyric
		re()
		bg_color(transparent)
		pad_(20px,0)
		bs()
		overflow_h()
		ul 
			ab()
			left:0
			top:50%
			pad(20px)
			w(100%)
			bs()
			font_s(12px)
			lh(20px)
			transition : all .3s linear
			li
				h(20px)
				pb(15px)
			
					
				
				
				
				
			
				
			
			
			
			
		
				
		
</style>
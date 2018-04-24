<template>
	<div class="lyric t_c" ref="lyric" @click="showImg">
		<p v-show="!lyricS">无歌词</p>
		<ul v-show="lyricS">
			<li v-for="(item,index) in lyricS" :class="{'chec':showLyric(item,index)}">
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
				lyricS:false//歌词数组
			}
		},
		props:['lyricOb'],
		computed:{
			...mapState({
				singTime:state=> state.singTime
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
        			if(res.nolyric) return
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
        	//显示当前歌词 arr当前歌词对象 index 索引
        	showLyric(obj,index) {
        		let singTime = this.singTime,
        			lyricS = this.lyricS;
    			if(index < lyricS.length - 1) {
    				if(singTime >= obj['t'] && singTime < lyricS[index + 1]['t']) {
    					return true
        			}
    			} else {
    				if(singTime >= lyricS[lyricS.length - 1]['t']) {
    					return true
    				}
    			}
        		
        	}
        }
	}
</script>

<style lang="stylus" scoped>
	@import '../../common/stylus/public.styl'
	.lyric
		color:#fff
		bg_color(transparent)
		pad_(20px,0)
		bs()
		overflow_h()
		ul 
			height:100%
			font_s(12px)
			lh(20px)
			overflow:auto
			.chec
				color:red
			li
				pb(15px)
			
					
				
				
				
				
			
				
			
			
			
			
		
				
		
</style>
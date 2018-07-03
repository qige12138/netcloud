<template>
	<div class="comment_list" :style="{height:listH + 'px'}" @scroll="handleScroll" ref="comment_list">
		<p class="splendid">精彩评论</p>
		<div class="comment_wrap">
			<div class="list" v-for="(comment , index) in hotComments" :key="comment.commentId">
				<div class="list_head">
					<img :src="comment.user.avatarUrl" class="user_img">
					<div class="user_name">
						<p>{{comment.user.nickname}}</p>
						<p>{{new Date(comment.time).format('yyyy-MM-dd HH:mm')}}</p>
					</div>
					<div class="liked_count" :class="{'liked':comment.liked}"  @click="liked(comment.liked,comment.commentId,index,'hot')">
						<span>{{net.formatNum(comment.likedCount)}}</span>
						<i class="icon iconfont" >&#xe605;</i>
					</div>
				</div>
				<div class="list_text bd_bottom">
					{{comment.content}}
				</div>
			</div>
		</div>
		<p class="splendid">最新评论（{{commentNum}}）</p>
		<div class="comment_wrap">
			<div class="list" v-for="(comment , index) in comments" :key="comment.commentId">
				<div class="list_head">
					<img :src="comment.user.avatarUrl" class="user_img">
					<div class="user_name">
						<p>{{comment.user.nickname}}</p>
						<p>{{new Date(comment.time).format('yyyy-MM-dd HH:mm')}}</p>
					</div>
					<div class="liked_count" :class="{'liked':comment.liked}" @click="liked(comment.liked,comment.commentId,index)">
						<span>{{net.formatNum(comment.likedCount)}}</span>
						<i class="icon iconfont">&#xe605;</i>
					</div>
				</div>
				<div class="list_text bd_bottom">
					{{comment.content}}
				</div>
			</div>
		</div>
	</div>
</template>
<script>
	import {mapActions} from "vuex"
	export default {
		props:['singId'],
		data() {
			return {
				hotComments:null,
				comments:[],
				emComments:[],
				winHeight:document.body.clientHeight,
				offset:0,
				commentNum:0,
				listH:document.body.clientHeight - 48
			}
		},
		mounted() {		
			this.$nextTick(()=> {
				this.getComment();
			});
			
		},
		methods:{
			...mapActions({
				'changeComNum':'changeComNum'
			}),
			//获取评论
			getComment() {
				this.ajax.get('/comment/music',{
					id:this.singId,
					offset:this.offset,
					load:'加载中...'
				})
				.then(res => {						
					!this.offset && (this.hotComments = res.hotComments);
					for(let val of res.comments) {
						this.emComments.push(val);
					}
					this.comments = this.emComments;
					this.commentNum = res.total
					this.changeComNum({n:res.total})
				})
			},
			handleScroll () {
				let scrollTop = this.$refs.comment_list.scrollTop;
				if(this.winHeight + scrollTop > this.getScrollHeight() - 50) {
					this.offset += 20;	
					this.getComment();
				}
				
			},
			/**
			 * 给歌曲点赞or取消点赞
			 * @param likedtype Boolean 是否已经点赞
			 * @param id Number 评论ID
			*/
			liked(likedtype,cid,inde,hot) {
				let t,coms,num;
				if(likedtype) {
					t = 1;
					coms = false;
					num = -1;
				} else {
					t = 0;
					coms = true;
					num = 1;
				}
				let arr = hot ? this.hotComments : this.comments;
				arr[inde]['liked'] = coms;
				arr[inde]['likedCount'] += num;
				return
				this.ajax.get('/comment/like',{
					id:this.singId,
					cid:cid,
					t:t,
					type:0
				})
				.then((res)=> {
					this.net.toast('接口有问题，不求写了');
				})
			},
			getScrollHeight(){
			　　let scrollHeight = this.$refs.comment_list.scrollHeight;
			　　return scrollHeight;
			}
		}
	}
</script>

<style lang="stylus" scoped>
	@import '../../common/stylus/public.styl'
	.comment_list 
		overflow:auto
		.splendid 
			pl(10px)
			h(38px)
			lh(38px)
			bg_color(#f0f0f0)
			color:$color_99
			font_s(12px)
		.comment_wrap
			.list
				.list_head					
					display:flex
					align-items:center;
					pad_(0,10px)
					h(48px)
					.user_img 
						w(40px)
						h(40px)
						bor_r(50%)
						vertical-align:middle
					.user_name
						flex:1
						pl(10px)
						h(48px)
						font_s(14px)
						p
							&:first-child 
								lh(30px)
								overflow_t()
							&:last-child 
								font_s(12px)
								color:$color_99

					.liked_count 
						h(48px)
						lh(48px)
						t_r()
						font_s(12px)
						color:$color_99
						&.liked 
							color:red
				.list_text
					margin-left:60px
					pb(10px)
					pr(5px)
					lh(22px)
					font_s(12px)
					
			
</style>
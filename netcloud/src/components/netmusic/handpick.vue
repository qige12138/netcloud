<template>
	<div class="handpick bd_top"> 
        <div class="list bd_bottom" v-for="item in list">
        	<div class="list_l">
        		<div>
        			<span>专栏</span>
        			<span>{{item['text']}}</span>
        		</div>
        		<p>阅读 <span>{{item['num']}}</span></p>
        	</div>
        	<div class="list_r">
        		<img :src="item['img']">
        	</div>
        </div>
	</div>
</template>
<script>
	export default{
		data() {
			return {
				list:null
			}
		},
		created() {
			this.$http.get('http://localhost:8080/static/datajson/songlist.json').then(res =>{
				this.data = res.body['handpick'];
                this.list = this.data.list;
			})
		}
	}

</script>
<style lang="stylus" scoped>
    @import '../../common/stylus/public.styl'
    .handpick
    	.list 
    		display:flex
    		.list_l 
    			pad(8px)
    			bs()
    			flex:2
    			div
    				span:nth-child(1)
    					display:inline-block
    					font-size:$fonts_10
    					border:1px solid #000
    					pad(2px)
    			p
    				color:$color_66
    				pt(12px)
    				font-size:$fonts_10
    		.list_r
    			flex:1
                
</style>
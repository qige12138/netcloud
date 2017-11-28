<template>
	<div class="handpick bd_top"> 
        <div class="list bd_bottom">
        	<div class="list_l">
        		<div>
        			<span>专栏</span>
        			<span>精选1精选1精选1精选精1选精1选精选精选</span>
        		</div>
        		<p>阅读 <span>800</span></p>
        	</div>
        	<div class="list_r">
        		<img src="../../common/img/songex.jpg">
        	</div>
        </div>
        <div class="list bd_bottom">
            <div class="list_l">
                <div>
                    <span>专栏</span>
                    <span>精选1精选1精选1精选精1选精1选精选精选</span>
                </div>
                <p>阅读 <span>800</span></p>
            </div>
            <div class="list_r">
                <img src="../../common/img/songex.jpg">
            </div>
        </div>
        <div class="list bd_bottom">
            <div class="list_l">
                <div>
                    <span>专栏</span>
                    <span>精选1精选1精选1精选精1选精1选精选精选</span>
                </div>
                <p>阅读 <span>800</span></p>
            </div>
            <div class="list_r">
                <img src="../../common/img/songex.jpg">
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
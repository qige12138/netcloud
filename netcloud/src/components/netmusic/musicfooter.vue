<template>
	<div class="musicFooter bd_top t_c"> 
       <button>调整栏目顺序</button>
       <p>看视频，发现更有趣内容<i class="icon iconfont" >&#xe637;</i></p>
	</div>
</template>
<script>
	export default{
	}

</script>
<style lang="stylus" scoped>
    @import '../../common/stylus/public.styl'
    .musicFooter
        pad_(40px,0) 
        font_s(10px) 
        button
            pad_(5px,10px) 
            background:transparent   
            border:1px solid #000
            outline:none     
            border-radius:20px
            btn()
        p  
            pt(20px) 
            i
                position:relative
                top:2px
</style>
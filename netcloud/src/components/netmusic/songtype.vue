<template>
	<div class="singtype"> 
        <p>{{listype}} <i class="icon iconfont tabI " >&#xe637;</i></p>
	</div>
</template>
<script>
	export default{
        props:['listype']
	}

</script>
<style lang="stylus" scoped>
    @import '../../common/stylus/public.styl'
    .singtype
        pad_(20px,0)
        p
            pl(8px)
            border-left:2px solid #000
            font-size:$fonts_16
            i
                font_s(22px)
                position:relative
                top:2px
                
</style>
<template>
	<div class="songlist"> 
        <div class="list_wrap">
            <div class="wrap f_l">
                <div class="wrapImg">
                    <img src="../../common/img/songexb.jpg">
                </div>
                <p>推荐专辑</p>
            </div>
            <div class="wrap f_l">
                <div class="wrapImg">
                    <img src="../../common/img/rec2.jpg">
                </div>
                <p>推荐专辑</p>
            </div>
            <div class="wrap f_l">
                <div class="wrapImg">
                    <img src="../../common/img/rec3.jpg">
                </div>
                <p>推荐专辑</p>
            </div>
            <div class="wrap f_l">
                <div class="wrapImg">
                    <img src="../../common/img/rec1.jpg">
                </div>
                <p>推荐专辑</p>
            </div>
            <div class="wrap f_l">
                <div class="wrapImg">
                    <img src="../../common/img/rec2.jpg">
                </div>
                <p>推荐专辑</p>
            </div>
            <div class="wrap f_l">
                <div class="wrapImg">
                    <img src="../../common/img/rec3.jpg">
                </div>
                <p>推荐专辑</p>
            </div>
            <div style="clear:both"></div> 
        </div>
	</div>
</template>
<script>
	export default{
        data() {
            return {
                data:null
            }
        },
        props:['songtype'],
        created() {
            
        }
	}

</script>
<style lang="stylus" scoped>
    @import '../../common/stylus/public.styl'
    .songlist
        .list_wrap
            .wrap
                width:33%
                font_s(12px)
                &:nth-child(2),&:nth-child(5)
                    pad_(0,0.5%)
                .wrapImg
                    img_div(100%)
                    img
                        img_sc()
                p
                    height:55px
                    pad_(10px,0)
                    lh(20px)
            
</style>
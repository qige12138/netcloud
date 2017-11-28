<template>
	<div class="songEx"> 
        <div class="listWrap">
            <div class="two">
                <div class="wrap">
                    <div class="wrapImg">
                        <img src="../../common/img/songex.jpg">
                    </div>
                    <p>独家放松</p>
                </div>
                <div class="wrap">
                    <div class="wrapImg">
                        <img src="../../common/img/songex.jpg">
                    </div>
                    <p>独家放松</p>
                </div>
            </div>
            <div class="one">
                <div class="oneImg">
                    <img src="../../common/img/songexb.jpg">
                </div>
                <p>独家放松</p>
            </div>
        </div>
	</div>
</template>
<script>
	export default{
        data() {
            return {
                data:null,
                list:null,
                bwrap:{}
            }
        },
        props:['songtype'],
        created() {
            
        }
	}

</script>
<style lang="stylus" scoped>
    @import '../../common/stylus/public.styl'
    .songEx
        font_s(12px)
        .two
            display:flex
            .wrap
                flex:1
                &:nth-child(1)
                    bs()
                    pr(1px)
                &:nth-child(2)
                    bs()
                    pl(1px)
                .wrapImg
                    img_div(70%)
                    img
                        img_sc()
                p
                    height:55px
                    pad_(10px,0)
                    lh(20px)
        .one
            .oneImg
                img_div(50%)  
                img
                        img_sc()
            p
                height:55px
                pad_(10px,0)
                lh(20px)     
            
</style>
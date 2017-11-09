<template>
	<div class="exmv"> 
        <div class="listWrap">
            <div class="two">
                <div class="wrap f_l" v-for="item in list">
                    <img :src="item['img']">
                    <p>{{item['text']}}</p>
                </div>
                <div style="clear: both"></div>
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
            this.$http.get('http://localhost:8080/static/datajson/songlist.json').then(res => {
                this.data = res.body[this.songtype];
                this.list = this.data.list;
            });
        }
	}

</script>
<style lang="stylus" scoped>
    @import '../../common/stylus/public.styl'   
    .exmv
        .listWrap
            font_s(12px)
            .wrap
                w(50%)
                &:nth-child(1),&:nth-child(3)
                    bs()
                    pr(1px)
                &:nth-child(2),&:nth-child(4)
                    bs()
                    pl(1px)
                p
                    height:55px
                    pad_(10px,0)
                    lh(20px)
            
</style>
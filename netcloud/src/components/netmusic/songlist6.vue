<template>
	<div class="songlist"> 
        <div class="listWrap">
            <div class="wrap f_l" v-for="item in data">
                <img :src="item.img">
                <p>{{item.text}}{{item.text}}{{item.text}}</p>
            </div>
            <div style="clear: both"></div> 
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
            this.$http.get('http://localhost:8080/static/datajson/songlist.json').then(res => {
                this.data = res.body[this.songtype];
            });
        }
	}

</script>
<style lang="stylus" scoped>
    @import '../../common/stylus/public.styl'
    .songlist
        .listWrap
            .wrap
                width:33%
                font_s(12px)
                &:nth-child(2),&:nth-child(5)
                    pad_(0,0.5%)
                p
                    height:55px
                    pad_(10px,0)
                    lh(20px)
            
</style>
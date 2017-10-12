<template>
	<div class="songEx"> 
        <div class="listWrap">
            <div class="two">
                <div class="wrap" v-for="item in list">
                    <img :src="item['img']">
                    <p>{{item['text']}}</p>
                </div>
            </div>
            <div class="one">
                <img :src="data['bwrap']['img']">
                <p>{{data['bwrap']['text']}}</p>
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
                bwrap:null
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
                p
                    height:55px
                    pad_(10px,0)
                    lh(20px)
        .one
            p
                height:55px
                pad_(10px,0)
                lh(20px)     
            
</style>
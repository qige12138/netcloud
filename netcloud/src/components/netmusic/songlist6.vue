<template>
	<div class="songlist"> 
        <div class="list_wrap">
            <div class="wrap f_l" v-for="menu in dataArr" :key="menu.id">
                <div class="wrapImg">
                    <p class="count">
                        <i class="icon iconfont">&#xe681;</i>
                        <span v-html="net.formatNum(menu.playCount)"></span>
                    </p>
                    <img :src="menu.picUrl">
                </div>
                <p class="img_name" v-if="songtype == 'recommend'"  v-html="menu.name"></p>
                <div class="new_msg" v-if="songtype == 'new'">
                    <p v-html="menu.name"></p>
                    <p v-html="menu.artist"></p>
                </div>
            </div>
            <div style="clear:both"></div> 
        </div>
	</div>
</template>
<script>
	export default{
        data() {
            return {
                dataArr:null,
                urlObj:{
                    recommend:"/personalized",
                    new:"/personalized/newsong"
                }
            }
        },
        props:['songtype'],
        mounted() {
            this.urlObj[this.songtype] && this.getRecome(this.urlObj[this.songtype]);
        },
        methods:{
            getRecome(url) {
                this.ajax.get(url,{
                    limit:6
                })
                .then((res)=> {
                    if('new' == this.songtype) {
                        this.dealData(res.result)
                        return
                    }
                    this.dataArr = res.result;
                    
                })
            },
            dealData(data) {
                data.length = 6;
                let obj,arr = [];
                for(let val of data) {
                    obj = {};
                    obj.picUrl = val.song.album.blurPicUrl;
                    obj.name = val.name;
                    obj.artist = val.song.artists[0].name;
                    obj.playCount = val.song.bMusic.playTime;
                    arr.push(obj)
                }
                this.dataArr = arr;
            }
        }
	}

</script>
<style lang="stylus" scoped>
    @import '../../common/stylus/public.styl'
    .songlist
        .list_wrap
            .wrap
                pb(10px)
                w(33%)
                font_s(12px)
                &:nth-child(2),&:nth-child(5)
                    pad_(0,0.5%)
                .wrapImg
                    img_div(100%)
                    margin-bottom 10px
                    .count 
                        position absolute
                        top 3px
                        right 3px
                        z-index 2
                        c(#fff)
                    img
                        img_sc()
                .img_name   
                    h(45px)
                    w(100%)
                    lh(20px)
                    ellipsis(2)
                .new_msg
                    &>p:first-child 
                        overflow_t()
                    &>p:last-child 
                        pt(5px)                        
                        overflow_t()
                        c($color_66)
                        font_s(11px)

            
</style>
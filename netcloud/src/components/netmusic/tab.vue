<template>
	<div class="tab bd_bottom"> 
        <div class="t_c tab_nav">
            <div class="ic">
                <i class="icon iconfont tabI t_c" >&#xe650;</i>
            </div>
            <p>私人FM</p>
        </div>
        <div class="t_c tab_nav" @click="goDaily">
            <div class="ic date">
                <i class="icon iconfont tabI t_c" >&#xe636;</i>
                <span style="font-size: 8px">{{date}}</span>
            </div>
            <p>每日推荐</p>
        </div>
        <div class="t_c tab_nav">
            <div class="ic">
                <i class="icon iconfont tabI t_c" >&#xe601;</i>

            </div>
            <p>歌单</p>
        </div>
        <div class="t_c tab_nav">
            <div class="ic">
                <i class="icon iconfont tabI t_c" >&#xe68d;</i>
            </div>
            <p>排行榜</p>
        </div>
	</div>
</template>
<script>
	export default{
        data() {
            return {
                date:null
            }
        },
        created() {
            this.date = new Date().getDate();
        },
        methods:{
            goDaily() {
                this.$router.push({
					path:'/dailyrecom'
				});

            }

        }
	}

</script>
<style lang="stylus" scoped>
    @import '../../common/stylus/public.styl'
    .tab
        display:flex
        pad_(15px,0)
        .tab_nav
            flex:1
            .ic 
                dis_inb()
                width:45px
                height:45px
                line-height:45px
                border-radius:50%
                border:1px solid #000
                i
                    font_s(24px)
                &.date
                    position:relative
                    span
                        position:absolute
                        left:0
                        width:100%;
                        height:100%;
                        line-height:50px
            p
                pt(10px)
                font_s(14px)
            
        
    
</style>
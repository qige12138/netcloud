<template>
	<div class="music">
		<swiper :options="swiperOption"  ref="mySwiper">  
            <!-- 这部分放你要渲染的那些内容 -->  
            <swiper-slide v-for="item in items" :key="item"> 
                <img :src="item">
            </swiper-slide>  
            <!-- 这是轮播的小圆点 -->  
            <div class="swiper-pagination" slot="pagination"></div>  
        </swiper>  
	</div>
</template>
<script>
	import { swiper, swiperSlide } from 'vue-awesome-swiper'
	export default{
		 name:'index',
        components: {  
            swiper,  
            swiperSlide  
        },  
        data() {  
            return {
                items:['http://localhost:8080/static/img/timp1.jpg'],
                swiperOption: {  
                    pagination: '.swiper-pagination',  
                    slidesPerView: 'auto',  
                    centeredSlides: true,  
                    paginationClickable: true,
                    onSlideChangeEnd: swiper => {  
                        //这个位置放swiper的回调方法  
                        this.page = swiper.realIndex+1;  
                        this.index = swiper.realIndex;  
                    },  
                }, 
                swiperSlides: [1, 2, 3, 4, 5]  
            }  
        },  
        //定义这个sweiper对象  
        computed: {  
  
            swiper() {  
              return this.$refs.mySwiper.swiper;  
            }  
        },  
        mounted () {  
            //这边就可以使用swiper这个对象去使用swiper官网中的那些方法  
            //this.swiper.slideTo(0, 0, false);  
        }  
	}

</script>
<style lang="stylus" scoped>
	@import '../../common/stylus/public.styl'
	.music 
		pt(36px)

</style>
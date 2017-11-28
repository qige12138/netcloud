<template>
	<div class="slide">
		<swiper :options="swiperOption"  ref="mySwiper">  
            <swiper-slide > 
                <img src="../../common/img/timg.jpg">
            </swiper-slide> 
             <swiper-slide > 
                <img src="../../common/img/timp1.jpg">
            </swiper-slide> 
             <swiper-slide > 
                <img src="../../common/img/logo.png">
            </swiper-slide>  
            <div class="swiper-pagination" slot="pagination"></div>  
        </swiper>  
	</div>
</template>
<script>
	import { swiper, swiperSlide } from 'vue-awesome-swiper'
	import '../../common/js/swiper-3.4.2.min.css'
	export default{
		name:'index',
        components: {  
            swiper,  
            swiperSlide  
        },  
        data() {  
            return {
                swiperOption: {  
                    pagination: '.swiper-pagination', 
                    autoplay:'3000', 
                    slidesPerView: 'auto',  
                    centeredSlides: true,  
                    paginationClickable: true,
                    loop : true,
                    autoplayDisableOnInteraction:false,
                    onSlideChangeEnd: swiper => {  
                        this.page = swiper.realIndex+1;  
                        this.index = swiper.realIndex;  
                    },  
                }
            }  
        },  
        //定义这个sweiper对象  
        computed: {  
  
            swiper() {  
              return this.$refs.mySwiper.swiper;  
            }  
        },  
        mounted () {  
            // this.swiper.slideTo(0, 0, false);  
        }  
	}

</script>
<style lang="stylus" scoped>
</style>
<template>
	<div class="slide">
		<swiper :options="swiperOption"  ref="mySwiper">  
            <swiper-slide v-for="(banner,index) in banners" :key="index">
                <img :src="banner"> 
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
                swiperOption:{  
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
                    }
                },
                banners:['/static/img/rec3.79fb520.jpg','/static/img/rec3.79fb520.jpg','/static/img/rec3.79fb520.jpg']
            }  
        },  
         
        beforeMount () {           
        },
        //定义这个sweiper对象  
        computed: {    
            swiper() {  
                return this.$refs.mySwiper.swiper;  
            }  
        }
	}

</script>
<style lang="stylus" scoped>
</style>
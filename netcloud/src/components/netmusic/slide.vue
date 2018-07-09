<template>
	<div class="slide">
		<swiper :options="swiperOption"  ref="mySwiper" v-if="banners">  
            <swiper-slide v-for="(banner,index) in banners" :key="index">
                <img :src="banner.picUrl"> 
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
                    notNextTick: true,
                    mousewheelControl: true,
                    slidesPerView: 'auto',  
                    centeredSlides: true,  
                    paginationClickable: true,
                    loop : true,
                    autoplayDisableOnInteraction:false,
                    observer:true,//修改swiper自己或子元素时，自动初始化swiper
                    observeParents:true,//修改swiper的父元素时，自动初始化swipe
                    onSlideChangeEnd: swiper => {  
                        this.page = swiper.realIndex+1;  
                        this.index = swiper.realIndex;  
                    }
                },
                banners:null
            }  
        },        
        beforeCreate () {   
            this.$nextTick(()=> {
                this.getBanners();       
            }) 
            
        },
        //定义这个sweiper对象  
        computed: {    
            swiper() {  
                return this.$refs.mySwiper.swiper;  
            }  
        },
        methods:{
            getBanners() {
                this.ajax.get('/banner',
                    {}
                )
                .then((res) => {
                    this.banners = res.banners;
                })
            }
        }
	}

</script>
<style lang="stylus" scoped>
</style>
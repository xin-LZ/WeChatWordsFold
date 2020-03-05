<template>
<!-- banner轮播练习，主要功能中间大，两边小,但未是实现平滑过度 -->
<div class="swiper-container">
    <swiper class="swiper-wrapper" :options="swiperOption" ref="mySwiper" >
      <!-- slides -->
      <swiper-slide><img class="swiper-slide" src="../assets/banner1.jpg" alt=""> </swiper-slide>
      <swiper-slide><img class="swiper-slide" src="../assets/banner2.png" alt=""></swiper-slide>
      <swiper-slide><img class=" swiper-slide" src="../assets/banner1.jpg" alt=""></swiper-slide>
    </swiper>
</div>
</template>

<script>
import "swiper/dist/css/swiper.css";
import { swiper, swiperSlide } from "vue-awesome-swiper";

export default {
  
  name: "swiperBaner",
  data() {
    return {
      swiperOption: {
        // some swiper options/callbacks
        // 所有的参数同 swiper 官方 api 参数
        // ...
         direction: 'horizontal',
                loop: true,
                autoplay: 1000,
                slidesPerView: "auto",
                centeredSlides:true,
                spaceBetween: 20,
      }
    }
  },
  components: {
    swiper,
    swiperSlide
  },
  methods:{
    
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.swiper;
    }
  },
  mounted() {
    // current swiper instance
    // 然后你就可以使用当前上下文内的swiper对象去做你想做的事了
    // console.log("this is current swiper instance object", this.swiper);
    this.swiper.slideTo(3,1000, true);
  },
}
</script>
<style scoped>

.swiper-container {
  position: relative;
  display:flex ;
  flex-direction: row;
  justify-content:center ;
  margin-top: 20px;
  width: 100%;
  /* height: 240px; */
  /* margin-bottom: 53px; */
  overflow: visible!important;
}
.swiper-container .swiper-wrapper .swiper-slide{ width: 80%; border-radius: 20px;}
/* .swiper-container .swiper-wrapper .swiper-slide img{width: 100%; height: 210px; border-radius: 20px; } */
.swiper-container .swiper-wrapper .swiper-slide img{transform: scale(0.9);border-radius: 20px;}
/* .swiper-container .swiper-wrapper .swiper-slide-prev{ margin-top: 15px; height: 88%!important;} */
.swiper-container .swiper-wrapper .swiper-slide-prev{position:relative; margin-right: 30px;}
/* .swiper-container .swiper-wrapper .swiper-slide-prev img{ height: 88%!important;} */
.swiper-container .swiper-wrapper .swiper-slide-prev img{ transform: scale(0.8)!important;}
/* .swiper-container .swiper-wrapper .swiper-slide-next{ margin-top: 15px; height: 88%!important;} */
.swiper-container .swiper-wrapper .swiper-slide-next{ margin-top: 15px!important;}
/* .swiper-container .swiper-wrapper .swiper-slide-next img{ height: 88%!important;} */
.swiper-container .swiper-wrapper .swiper-slide-next img{ transform: scale(0.8)!important;}
.swiper-container .swiper-wrapper .swiper-slide-active{ width: 80%;}

</style>
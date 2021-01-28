<template>
  <div class="sw-wrap">
    <swiper :options="swiperOption"
            v-if="swiperListLen">
    <!-- slides -->
    <swiper-slide v-for="item of swiperList" 
                  :key="item.id">
      <img class="swiper-img" 
           :src="item.imgUrl"/>
      </swiper-slide>
    <!-- Optional controls -->
    <div class="swiper-pagination"
         slot="pagination"></div>
  </swiper>
  </div>
</template>

<script>
  // swiper options example:
  export default {
    name: 'HomeSwiper',
    props: {
      swiperList: Array
    },
    data () {
      return {
        swiperOption: {
          pagination : '.swiper-pagination',
          loop: true,
          autoplay: 5000
        }
      }
    },
    computed: {
      swiperListLen () {
        return this.swiperList.length;
      }
    }
  }
</script>

<style scoped>
.sw-wrap {
  width: 100%;
  height: 0;
  padding-bottom: 30%;
  background-color: #eeeeee;
  overflow: hidden;
}

.sw-wrap .swiper-img {
  width: 100%;
  height: 100%;
}

.sw-wrap >>> .swiper-pagination-bullet-active {
  background-color: #fff;
}
</style>
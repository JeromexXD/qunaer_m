<template>
  <div class="sw-wrap">
    <swiper :options="swiperOption" ref="mySwiper">
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
    data () {
      return {
        swiperOption: {
          pagination : '.swiper-pagination',
          loop: true
        },
        swiperList:[
          {
            id: '001',
            imgUrl: 'https://imgs.qunarzz.com/vs_ceph_vcimg/f03f5ac90ae59d0d9c6332a2bfd9782e.jpeg'
          },
          {
            id: '002',
            imgUrl: 'https://imgs.qunarzz.com/vs_ceph_vcimg/569cae4ae98e9793f7341e85eed73c54.jpeg'
          },
          {
            id: '003',
            imgUrl: 'https://imgs.qunarzz.com/vs_ceph_vcimg/f7813c9431796cc32ae7b7a78447342e.jpeg'
          }
        ]
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
<template>
  <div class="gallery-container"
       @click="handleGalleryClick">
    <div class="img-wrap">
      <swiper :options="swiperOptions">
	      <!-- slides -->
	      <swiper-slide v-for="(item, index) of data"
                      :key="index">
	        <img class="gallery-img" :src="item" />
	      </swiper-slide>
	      <div class="swiper-pagination" slot="pagination"></div>
	    </swiper>   
    </div>
  </div>
</template>

<script>
export default {
  name: 'Gallery',
  props: {
    data: Array
  },
  data () {
    return {
      swiperOptions: {
				pagination: '.swiper-pagination',
				paginationType: 'fraction',
				observer: true,
				observeParents: true
			}
    }
  },
  methods: {
    handleGalleryClick () {
      this.$emit('closeGallery');
    }
  }
}
</script>

<style lang="stylus" scoped>
  .gallery-container {
    position: fixed;
    display: flex;
    flex-direction: column;
    justify-content: center;
    z-index: 99;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba(0, 0, 0, .8);
  }
  
  .gallery-container >>> .swiper-container {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }

  .gallery-container >>> .swiper-slide {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .gallery-container .img-wrap {
    width: 100%;
    height: 0;
    padding-bottom: 100%;
  }

  .gallery-container .img-wrap img {
    width: 100%;
  }

  .gallery-container .img-wrap .swiper-pagination {
    bottom: .48rem;
    color: #fff;
    justify-content: center;
  }
</style>
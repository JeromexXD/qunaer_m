<template>
  <div>
    <div class="banner"
         @click="handleBannerClick">
      <img class="banner-img" :src="bannerImage" />
      <div class="banner-info">
        <div class="banner-num">
          <span class="iconfont icon-tukuxiangce"></span>
          {{ galleryImages.length }}
        </div>
        <div class="banner-title">
          {{ sightName }}
        </div>
      </div>
    </div>
    <common-fade>
      <common-gallery v-show="isGalleryShow"
                      :data="galleryImages"
                      @closeGallery="handleGalleryClose">
      </common-gallery>
    </common-fade>
  </div>
</template>

<script>
import CommonGallery from 'common/gallery/Gallery'
import CommonFade from 'common/fade/Fade'
export default {
  name: 'DetailBanner',
  props: {
    sightName: String,
    bannerImage: String,
    galleryImages: Array
  },
  data () {
    return {
      isGalleryShow: false
    }
  },
  methods: {
    handleBannerClick () {
      this.isGalleryShow = true;
    },
    handleGalleryClose () {
      this.isGalleryShow = false;
    }
  },
  components: {
    'common-gallery': CommonGallery,
    'common-fade': CommonFade
  }
}
</script>

<style lang="stylus" scoped >
  .banner {
    position: relative;
    width: 100%;
    height: 0;
    padding-bottom: 55%;
    background-color: #eeeeee;
    overflow: hidden;
  }

  .banner .banner-img {
    width: 100%;
  }

  .banner .banner-info {
    position: absolute;
    bottom: .2rem;
    left: .2rem;
    color: #ffffff;
  }

  .banner .banner-info .banner-num {
    width: .9rem;
    height: .4rem;
    margin-bottom: .2rem;
    line-height: .4rem;
    text-align: center;
    border-radius: .2rem;
    background-color: rgba(0, 0, 0 , .5);
  }

  .banner .banner-info .banner-title {
    height: .6rem;
	  line-height: .6rem;
  	font-size: .36rem;
  }
</style>
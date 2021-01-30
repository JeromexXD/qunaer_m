<template>
  <div>
    <div class="banner"
       @click="handleBannerClick">
      <img class="banner-img" src="https://imgs.qunarzz.com/p/p67/1512/a2/0ebfcd965b9391f7.jpg_256x160_04d5813d.jpg" />
      <div class="banner-info">
        <div class="banner-num">
          <span class="iconfont icon-tukuxiangce"></span>
          8
        </div>
        <div class="banner-title">
          三亚(AAAAA景区)
        </div>
      </div>
    </div>
    <common-gallery v-show="isGalleryShow"
                    :data="data"
                    @closeGallery="handleGalleryClose">
    </common-gallery>
  </div>
</template>

<script>
import CommonGallery from 'common/gallery/Gallery'
export default {
  name: 'Banner',
  data () {
    return {
      isGalleryShow: false,
      data: [
        'https://tr-osdcp.qunarzz.com/tr-osd-tr-manager/img/7d9b233c71cad13ded0013f9c9cec635.jpg',
        'https://tr-osdcp.qunarzz.com/tr-osd-tr-manager/img/5a11974656794b4715156501be10c1b7.jpg'
      ]
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
    'common-gallery': CommonGallery
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
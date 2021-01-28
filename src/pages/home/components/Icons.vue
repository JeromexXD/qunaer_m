<template>
  <div class="icons-wrap">
    <swiper :options="swiperOption" 
            ref="mySwiper">
    <!-- slides -->
    <swiper-slide v-for="(page, index) of pages" :key="index">
      <div class="icon-box"
           v-for="item in page" :key="item.id">
        <div class="icon-img-box">
          <img class="icon-img" :src="item.imgUrl">
        </div>
        <p class="icon-desc">{{ item.description }}</p>
      </div>
    </swiper-slide>
    <!-- Optional controls -->
    <div class="swiper-pagination"
         slot="pagination"></div>
  </swiper>
  </div>
</template>

<script>
export default {
  name: 'Icons',
  props: {
    iconsList: Array
  },
  data () {
    return {
      swiperOption: {
        autoplay: false
      }
    }
  },
  computed: {
    pages () {
      var pages = [];

      this.iconsList.forEach ((item, index) => {
        var page = Math.floor(index / 8);
        if(!pages[page]) {
          pages[page] = [];
        }
        pages[page].push(item);
      })

      return pages;
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '~styles/variables.styl';
.icons-wrap {
  width: 100%;
  height: 0;
  padding-bottom 50%;
  margin: .1rem 0;
}

.icons-wrap .icon-box {
  position: relative;
  float: left;
  width: 25%;
  height: 0;
  padding-bottom: 25%;
}

.icons-wrap .icon-box .icon-img-box {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: .44rem;
  padding: .2rem;
}

.icons-wrap .icon-box .icon-img-box .icon-img {
  display: block;
  height: 100%;
  margin: 0 auto; 
}

.icons-wrap .icon-box .icon-desc {
  position: absolute;
  bottom: 0;
  left: 0;
  right:0;
  height: .44rem;
  line-height: .44rem;
  text-align: center;
  color: $txtColor;
}
</style>
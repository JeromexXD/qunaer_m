<template>
  <div>
    <router-link to="/"
                 tag="div"
                 class="back"
                 v-show="!showHeader">
      <span class="iconfont icon-zuo-"></span>
    </router-link>
    <div class="detail-header" 
         v-show="showHeader"
         :style="opacityStyle">
      <router-link to="/"
                   class="header-back">
        <span class="iconfont icon-zuo-"></span>
      </router-link>
      三亚（AAAAA景区）
    </div>
  </div>
</template>

<script>
export default {
  name: 'Header',
  data () {
    return {
      showHeader: false,
      opacityStyle: {
        opacity: 0
      }
    }
  },
  methods: {
    handleScroll () {
      var top = document.documentElement.scrollTop;
      if(top > 50) {
        this.opacityStyle.opacity = top / 100;
        console.log(this.opacity);
        this.showHeader = true;
      } else {
        this.showHeader = false;
      }
    }
  },
  activated () {
    window.addEventListener('scroll', this.handleScroll, false)
  }
}
</script>

<style lang="stylus" scoped>
@import "~styles/variables.styl"
.back {
  position: absolute;
  top: .2rem;
  left: .2rem;
  width: .6rem;
  height: .6rem;
  border-radius: .3rem;
  text-align: center;
  line-height: .6rem;
  background-color: rgba(0, 0, 0, .6);
}

.back .icon-zuo- {
  color: #ffffff;
  font-size: .24rem;
}

.detail-header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: .8rem;
  text-align: center;
  line-height: .8rem;
  background-color: $bgColor;
  color: #ffffff;
  font-size: .32rem;
}

.detail-header .header-back {
  position: absolute;
  top: 0;
  left: .2rem;
  display: inline-block;
  color: #ffffff;
}
</style>
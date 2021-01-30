<template>
  <div class="home">
    <home-header></home-header>
    <div class="scrollWrap" ref="scrollWrap">
      <div class="inner-box">
        <home-swiper :swiperList="swiperList"></home-swiper>
        <home-icons :iconsList="iconsList"></home-icons>
        <home-recommend :recommendList="recommendList"></home-recommend>
        <home-weekend :weekendList="weekendList"></home-weekend>
      </div>
    </div>
  </div>
</template>

<script>
import HomeHeader from './components/Header'
import HomeSwiper from './components/Swiper'
import HomeIcons from './components/Icons'
import HomeRecommend from './components/Recommend'
import HomeWeekend from './components/Weekend'

import BScroll from 'better-scroll'
import axios from 'axios'
import { mapState } from 'vuex'
export default {
  name: 'Home',
  components: {
    'home-header': HomeHeader,
    'home-swiper': HomeSwiper,
    'home-icons': HomeIcons,
    'home-recommend': HomeRecommend,
    'home-weekend': HomeWeekend
  },
  computed: {
    ...mapState({
      curCity: 'city'
    })
  },
  data () {
    return {
      iconsList: [],
      recommendList: [],
      swiperList: [],
      weekendList: [],
      lastCity: ''
    }
  },
  methods: {
    getHomeData () {
      axios.get('/api/index.json?city=' + this.curCity)
        .then(this.getHomeDataSuccess)
        .catch((err) => {
          console.log(err);
        })
    },
    getHomeDataSuccess (res) {
      var data = res.data.data;
      this.swiperList = data.swiperList;
      this.iconsList = data.iconsList;
      this.recommendList = data.recommendList;
      this.weekendList = data.weekendList;
    }
  },
  mounted () {
    this.lastCity = this.curCity;
    this.getHomeData();
    this.scroll = new BScroll(this.$refs.scrollWrap);
  },
  activated () {
    if(this.curCity !== this.lastCity){
      this.lastCity = this.curCity;
      this.getHomeData();
    }
  },
  deactivated () {
    // console.log('deactivated');
  }
}
</script>

<style scoped>
.scrollWrap {
  position: absolute;
  top: .8rem;
  left: 0;
  right: 0;
  bottom: 0;
  overflow: hidden;
}
</style>
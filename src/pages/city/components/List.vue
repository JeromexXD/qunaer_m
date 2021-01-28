<template>
  <div class="list" ref="listWrap">
    <div class="inner-box">
      <div class="hot-cities">
        <div class="hot-cts-title">
          热门城市
        </div>
        <ul class="clearfix">
          <li v-for="(item, index) of hCities" 
              :key="index"
              :class="item.className">
            {{ item.name }}
          </li>
        </ul>
      </div>

      <div class="alphabet-menu">
        <div class="alph-menu-title">
          字母排序
        </div>
        <ul class="clearfix">
          <li v-for="(item, index) of letters" 
              :key="index"
              @click="handleLetterClick">
            {{ item }}
          </li>
        </ul>
        <div class="alphabet-list"
             v-for="(item, key) in cities"
             :key="item.id">
          <div class="alph-list-title" :ref="key">
            {{ key }}
          </div>
          <ul class="clearfix">
            <li v-for="innerItem of item" 
                :key="innerItem.id">
              {{ innerItem.name }}
            </li>
          </ul>
        </div>
      </div>


    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
  name: 'List',
  props: {
    cities: Object,
    hotCities: Array
  },
  data () {
    return {
      letter: ''
    }
  },
  computed: {
    letters () {
      var list = [];
      for(var key in this.cities) {
        list.push(key);
      }
      return list;
    },
    hCities () {
      var res = [];   
      this.hotCities.forEach((item, index) => {
        var resObj = {};
        resObj.name = item.name
        if(item.order === 1) {
          resObj.className = '';
        }else if (item.order === 2 || item.order === 3) {
          resObj.className = 'border-left';
        }else if (item.order % 3 === 1) {
          resObj.className = 'border-top';
        }else {
          resObj.className = 'border-topleft';
        }
        res.push(resObj);
      })
      return res;
    }
  },
  methods: {
    handleLetterClick (e) {
      this.letter = e.target.innerText;
    }
  },
  mounted () {
    this.scroll = new BScroll(this.$refs.listWrap);
  },
  watch: {
    letter () {
      var elem = this.$refs[this.letter][0];
      this.scroll.scrollToElement(elem);
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '~styles/variables.styl';
  div {
    box-sizing: border-box;
  }

  .clearfix::after {
    display: block;
    content: "";
    clear: both;
  }

  .list {
    position: absolute;
    top: .8rem;
    left: 0;
    right: 0;
    bottom: 0;
    overflow: hidden;
  }

  .hot-cities {
    width: 100%;
    height: 4.32rem;
  }

  .hot-cities .hot-cts-title,
  .alphabet-menu .alph-menu-title,
  .alphabet-menu .alph-list-title{
    width: 100%;
    height: .72rem;
    line-height: .72rem;
    padding: 0 .2rem;
    background-color: #F5F5F5;
  }

  .hot-cities ul li {
    float: left;
    width: 33.33%;
    height: 0.9rem;
    line-height: .9rem;
    text-align: center;
  }

  .alphabet-menu ul {
    margin: .3rem 0;
  }

  .alphabet-menu ul li {
  	float: left;
  	width: 16%;
  	height: .9rem;
  	line-height: .9rem;
  	text-align: center;
  }
  
  .alphabet-list ul li {
  	float: left;
  	width: 25%;
  	height: .9rem;
  	line-height: .9rem;
  	text-align: center;
  } 
</style>
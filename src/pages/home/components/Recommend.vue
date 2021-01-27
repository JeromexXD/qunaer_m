<template>
  <div>
    <div class="recommend-title">
      <span class="iconfont icon-aixin"></span>
      猜你喜欢
    </div>
    <ul class="list">
      <router-link tag="li"
                   class="list-item"
                   v-for="item of list"
                   :key="item.id"
                   to="/detail">
        <div class="item-img">
          <img :src="item.imgUrl" />
        </div>
        <div class="item-img-tag">
          {{ item.tag }}
        </div>
        <div class="item-info">
          <div class="inner-box">
            <div class="info-title">{{ item.title }}</div>
            <div class="info-comment">
              <span class="iconfont icon-star"
                    v-for="(item, index) of 5" 
                    :key="index"></span>
              <span class="comment-num">{{ item.commentNum }}条评论</span>
            </div>
            <div class="info-price">
              <span class="price">￥<em>{{ item.price }}</em></span>起
              <span class="location">{{ item.location }}</span>
            </div>
          </div>
        </div>
      </router-link>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Recommend',
  data () {
    return {
      list: [
        {
          id: '001',
          imgUrl: 'https://imgs.qunarzz.com/p/p70/1809/e7/4941057a6aae702.jpg_256x160_9fee6ccb.jpg',
          tag: '今日可定',
          title: '丽江',
          commentNum: 2944,
          price: 1900,
          location: '云南'
        },
        {
          id: '002',
          imgUrl: 'https://imgs.qunarzz.com/p/p64/1809/46/ddb72937ac938a02.jpg_256x160_5f99ddba.jpg',
          tag: '今日可定',
          title: '西安',
          commentNum: 1034,
          price: 998,
          location: '陕西'
        },
        {
          id: '003',
          imgUrl: 'https://imgs.qunarzz.com/p/p67/1512/a2/0ebfcd965b9391f7.jpg_256x160_04d5813d.jpg',
          tag: '今日可定',
          title: '三亚',
          commentNum: 3185,
          price: 2988,
          location: '海南'
        }
      ]
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '~styles/mixins.styl'
@import '~styles/variables.styl'
div {
  box-sizing: border-box;
}

.recommend-title {
  width: 100%;
  height: 0.8rem;
  padding-left: .3rem;
  background-color: #eeeeee;
  line-height .8rem;
  font-size: .32rem;
  font-weight: bold;
}

.recommend-title .icon-aixin {
  color: #FA8072;
}

.list-item {
  position: relative;
  display: flex;
  width: 100%;
  height: 2.4rem;
}

.list-item .item-img {
  width: 3.2rem;
  height: 2.4rem;
  padding .2rem;
  border-radius: .7rem;
  overflow: hidden;
}

.list-item .item-img img {
  width: 100%;
  height: 100%;
}

.list-item .item-img-tag {
  position: absolute;
  top: .2rem;
  left: .2rem;
  width: 1.1rem;
	height: .38rem;
  background-image: url(https://img1.qunarzz.com/piao/fusion/1802/20/2ba6d10b17972e02.png);
  background-size: 100% 100%;
  font-size: .2rem;
  line-height: .38rem;
	color: #fff;
	text-indent: .02rem;
}

.list-item .item-info {
  flex: 1;
  padding: .3rem .1rem;
  min-width: 0;
}

.list-item .item-info .inner-box {
  width: 100%;
  height: 100%;
}

.list-item .inner-box .info-title {
  width: 100%;
	height: .6rem;
	line-height: .6rem;
	font-size: .32rem;
  ellipsis();
}

.item-info .inner-box .info-comment {
	width: 100%;
	height: .4rem;
  margin: .1rem 0;
	line-height: .4rem;
	font-size: .24rem;
}

.item-info .inner-box .info-comment .comment-num {
  color: $lightTxtColor;
}

.item-info .inner-box .info-comment .icon-star {
  font-size: .2rem;
	color: #ffb436;
}

.item-info .inner-box .info-price {
  position: relative;
  width: 100%;
  height: 0.6rem;
  margin-top: .2rem;
  line-height .6rem;
}

.item-info .inner-box .info-price .price {
  color: #ff8300;
}

.item-info .inner-box .info-price .price em {
  font-size: .4rem;
}

.item-info .inner-box .info-price .location {
  position: absolute;
  right: .3rem;
}
</style>
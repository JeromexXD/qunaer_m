<template>
  <div>
    <div class="weekend-title">
      周末去哪
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
        <div class="item-info">
          <div class="inner-box">
            <div class="info-title">{{ item.title }}</div>
            <div class="info-comment">
              {{ item.comment }}
            </div>
          </div>
        </div>
      </router-link>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Weekend',
  data () {
    return {
      list: [
        {
          id: '001',
          imgUrl: 'https://img1.qunarzz.com/sight/p0/201305/31/5d45aefbe558d610c8d65eac.jpg_256x160_2c252ef1.jpg',
          title: '山西晋祠博物馆',
          comment: '古代祭祀建筑，碑刻等为一体的文化遗产'
        },
        {
          id: '002',
          imgUrl: 'https://img1.qunarzz.com/sight/p0/201311/28/109b7ea00f30016d8b9dc247519de19e.jpg_256x160_c8fdb127.jpg',
          title: '五龙滑雪场',
          comment: '在这里体验蓝蓝天空、皑皑白雪以及儿时激情'
        },
        {
          id: '003',
          imgUrl: 'https://img1.qunarzz.com/sight/p0/201408/01/9f8dfa93048e8c48d92abb80be419bdc.jpg_256x160_ab2538fb.jpg',
          title: '云冈石窟',
          comment: '石头写成的千年史卷'
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

.weekend-title {
  width: 100%;
  height: 0.8rem;
  padding-left: .3rem;
  background-color: #eeeeee;
  line-height .8rem;
  font-size: .28rem;
  font-weight: bold;
}


.list-item .item-img {
  width: 100%;
	height: 3.5rem;
	padding: .2rem;
}

.list-item .item-img img {
  width: 100%;
  height: 100%;
}

.list-item .item-info {
  width: 100%;
  padding: 0 .2rem;
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
  color: $lightTxtColor;
}
</style>
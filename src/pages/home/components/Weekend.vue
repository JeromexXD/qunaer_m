<template>
  <div>
    <div class="weekend-title">
      周末去哪
    </div>
    <ul class="list">
      <router-link tag="li"
                   class="list-item"
                   v-for="item of weekendList"
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
  props: {
    weekendList: Array
  },
  data () {
    return {

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
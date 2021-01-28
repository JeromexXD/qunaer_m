<template>
  <div class="header">
    <router-link to="/">
      <span class="iconfont icon-zuo-"></span>
    </router-link>
    城市列表
  </div>
</template>

<script>
export default {
  name: 'Header'
}
</script>

<style lang="stylus" scoped>
@import "~styles/variables.styl"
  .header {
    position: relative;
    width: 100%;
    height: .8rem;
    line-height: .8rem;
    text-align: center;
    font-size: .34rem;
    color: #ffffff;
    background-color: $bgColor;
  }

  .header .icon-zuo- {
    position: absolute;
    top: 0;
    left: .2rem;
    color: #ffffff;
  }
</style>
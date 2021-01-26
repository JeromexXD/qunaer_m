<template>
  <div class="header">
    <div class="header-left">
      <span class="iconfont icon-zuo-"></span>
    </div>
    <div class="header-middle">
      <input type="text" class="header-input" />
      <div class="header-kw">
        <span class="iconfont icon-search"></span>
        搜索目的地
      </div>
    </div>
    <div class="header-right">
      城市
      <span class="iconfont icon-xiala"></span>  
    </div>
  </div>
</template>

<script>
export default {
  name: 'Header'
}
</script>

<style lang="stylus" scoped>
  @import '~styles/variables.styl'
  .header {
    display: flex;
    width: 100%;
    height: 0.88rem;
    color: #ffffff;
    line-height: .88rem;
    background-color: $bgColor;
  }
  
  .header .header-left {
    width: 0.8rem;
    height: 100%;
    text-align: center;
  }

  .header .header-middle {
    position: relative;
    flex: 1;
  }

  .header .header-kw {
    position: absolute;
    top: .02rem;
    left: .2rem;
    color: #e4e7ea;
  }

  .header .header-input {
    position: absolute;
    top: 15%;
    left: 0;
    width: 100%;
    height: 70%;
    border-radius: .1rem;
  }

  .header .header-right {
    width: 1.32rem;
    height: 100%;
    text-align: center;
  }
</style>
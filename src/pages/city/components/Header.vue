<template>
  <div class="header">
    <router-link to="/">
      <div class="iconfont header-back-icon">&#xe624;</div>
    </router-link>
    城市选择
  </div>
</template>

<script>
export default {
  name: 'CityHeader'
}
</script>

<style lang="stylus" scoped>
  @import '~styles/varibles.styl'
  .header
    height: $headerHeight
    font-size: .32rem
    font-weight: 400
    line-height: $headerHeight
    overflow: hidden
    color: #fff
    text-align: center
    background: $bgColor
    position: relative
    .header-back-icon
      position:absolute
      left: 0
      width: 1rem
      font-size: .36rem
      color: #ffffff
</style>

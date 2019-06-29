<template>
  <div class="search">
    <input class="search-input border" type="text" placeholder="输入城市名或拼音">
  </div>
</template>

<script>
export default {
  name: 'CitySearch'
}
</script>

<style lang="stylus" scoped>
  @import '~styles/varibles.styl'
  .search
    height: .72rem
    background: $bgColor
    padding: 0 .1rem
  .search-input
    width: 100%
    border-radius: .06rem
    height: .62rem
    line-height: .62rem
    color: #666
    box-sizing: border-box
    text-align: center
    padding: 0 .2rem
</style>

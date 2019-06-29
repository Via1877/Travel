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
  .search >>> input::-webkit-input-placeholder
    color: #43bfcd
  .search
    height: .72rem
    background: $bgColor
    padding: 0 .1rem
  .search-input
    width: 100%
    border-radius: .31rem
    height: .52rem
    line-height: .52rem
    color: #43bfcd
    background: #28a1b0
    box-sizing: border-box
    text-align: center
    padding: 0 .2rem
</style>

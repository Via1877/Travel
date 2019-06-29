<template>
  <ul class="list">
    <li class="item">A</li>
    <li class="item">A</li>
    <li class="item">A</li>
    <li class="item">A</li>
    <li class="item">A</li>
    <li class="item">A</li>
  </ul>
</template>

<script>
export default {
  name: 'CityAlphabet'
}
</script>

<style lang="stylus" scoped>
  @import '~styles/varibles.styl'
  .list
    display: flex
    flex-direction: column
    position: absolute
    top: 1.58rem
    right:0
    bottom: .4rem
    background: red
    .item
      padding: 0 .1rem
      line-height: .44rem
      text-align: center
      color: $darkTextColor
</style>

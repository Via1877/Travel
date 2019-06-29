<template>
  <div class="index-recommend">
    <div class="recommend-title">周末去哪儿</div>
    <div class="recommend border-bottom"  v-for="item in list" :key="item.id" >
      <div class="recommend-img" >
        <img class="recommend-img-content"  :src="item.imgUrl">
      </div>
      <div class="recommend-img-info">
        <p class="recommend-img-title">{{item.title}}</p>
        <p class="recommend-img-desc">{{item.desc}}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeWeekend',
  props: {
    list: Array
  }
}
</script>

<style lang="stylus" scoped>
  @import '~styles/varibles.styl'
  @import '~styles/minins.styl'
  .index-recommend
    margin-top: .2rem
    .recommend-title
      line-height: .6rem
      font-size: .28rem
      color: #333
      background: #eee
      padding-left: .24rem
    .recommend
      .recommend-img
        width: 100%
        padding-bottom: 37.7%
        height: 0
        overflow: hidden
        .recommend-img-content
          width: 100%
      .recommend-img-info
        padding: .1rem
        .recommend-img-title
          line-height: .54rem
          font-size: .32rem
          font-weight: bold
          ellipsis ()
        .recommend-img-desc
          color: $darkTextColor
          height: .4rem
          line-height: .4rem
          ellipsis ()
        .read-more
          padding: 0 .2rem
          color: #fff
          background: #ff9300
          line-height: .40rem
          margin-top: .2rem
          font-size: .24rem
          border-radius: .06rem
</style>

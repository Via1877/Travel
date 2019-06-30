<template>
  <div class="index-recommend">
    <div class="recommend-title">热销推荐</div>
      <router-link tag="div"
                   :to="'./detail/' + item.id"
                   class="recommend border-bottom"
                   v-if="showRecommend"
                   v-for="item in list"
                   :key="item.id"
      >
        <div class="recommend-img" >
          <img class="recommend-img-content"  :src="item.imgUrl">
        </div>
        <div class="recommend-img-info">
          <p class="recommend-img-title">{{item.title}}</p>
          <p class="recommend-img-desc">{{item.desc}}</p>
          <button class="read-more">查看详情</button>
        </div>
      </router-link >
  </div>
</template>

<script>
export default {
  name: 'HomeRecommend',
  props: {
    list: Array
  },
  computed: {
    showRecommend () {
      return this.list.length
    }

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
      display: flex
      width: 100%
      height: 0
      padding-bottom: 25.5%
      display: flex
      .recommend-img
        width: 22%
        height: 100%
        padding: .1rem
        vertical-align: middle
        .recommend-img-content
          width: 100%
      .recommend-img-info
        flex: 1
        padding-left: .1%
        min-width: 0
        padding-top: .1rem
        vertical-align: middle
        .recommend-img-title
          line-height: .54rem
          font-size: .32rem
          font-weight: blod
          ellipsis ()
          color: #333
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

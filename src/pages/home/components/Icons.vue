<template>
  <div class="icons">
    <swiper v-if="showIcons">
      <swiper-slide v-for="page of pages" :key='page.index'>
        <div class="icon"  v-for="item in page" :key="item.id" >
          <div class="icon-img">
            <img class="icon-img-content" :src="item.imgUrl">
          </div>
          <p class="icon-img-desc">{{item.desc}}</p>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
export default {
  name: 'HomeIcons',
  props: {
    list: Array
  },
  computed: {
    pages () {
      const pages = []
      this.list.forEach((item, index) => {
        const page = Math.floor(index / 8)
        if (!pages[page]) {
          pages[page] = []
        }
        pages[page].push(item)
      })
      return pages
    },
    showIcons () {
      return this.list.length
    }
  }
}
</script>

<style lang="stylus" scoped>
  @import '~styles/varibles.styl'
  .icons >>> .swiper-container
    width: 100%
    height: 0
    padding-bottom: 50%
  .icons
    margin-top: .2rem
    .icon
      width: 25%
      height: 0
      padding-bottom: 25%
      position: relative
      float: left
      .icon-img
        padding: .3rem .3rem .1rem
        position: absolute
        top: 0
        left: 0
        right: 0
        bottom: .64rem
        box-sizing: border-box
        .icon-img-content
          display:block
          margin: 0 auto
          height: 100%
      .icon-img-desc
          color: $darkTextColor
          text-align: center
          position: absolute
          bottom: 0
          width: 100%
          height: .64rem
          line-height: .64rem
          ellipsis ()
</style>

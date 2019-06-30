<template>
  <div class="header">
    <router-link tag="div" class="header-abs" v-show="showAbs" to="/">
      <div class="iconfont header-abs-back">&#xe624;</div>
    </router-link>
    <div class="header-fixed" v-show="!showAbs" :style="opacityStyle">
      <router-link to="/">
        <div class="iconfont header-fixed-back">&#xe624;</div>
      </router-link>
      景区详情
    </div>
  </div>
</template>

<script>
export default {
  name: 'DetailHeader',
  data () {
    return {
      showAbs: true,
      opacityStyle: {opacity: 0}
    }
  },
  methods: {
    handleScroll () {
      const scrollTop = document.documentElement.scrollTop
      if (scrollTop > 60) {
        let opacity = scrollTop / 140
        opacity = opacity > 1 ? 1 : opacity
        this.opacityStyle = {
          opacity
        }
        this.showAbs = false
      } else {
        this.showAbs = true
      }
    }
  },
  activated () {
    window.addEventListener('scroll', this.handleScroll)
  },
  deactivated () {
    window.removeEventListener('scroll', this.handleScroll)
  }
}
</script>

<style lang="stylus" scoped>
  @import '~styles/varibles.styl'
  .header-abs
    height: .8rem
    width: .8rem
    border-radius: 50%
    position: absolute
    left: .2rem
    top: .2rem
    background: rgba(0, 0, 0, .8)
    line-height: .8rem
    text-align: center
    .header-abs-back
      font-size: .4
      color: #fff
  .header-fixed
    position: fixed
    top: 0
    width: 100%
    height: $headerHeight
    font-size: .32rem
    font-weight: 400
    line-height: $headerHeight
    overflow: hidden
    color: #fff
    text-align: center
    background: $bgColor
    .header-fixed-back
      position:absolute
      left: 0
      width: 1rem
      font-size: .36rem
      color: #ffffff
</style>

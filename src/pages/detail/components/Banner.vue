<template>
  <div>
      <div class="banner">
      <img class="banner-img"
           src="https://img1.qunarzz.com/vs_ceph_vs_tts/ad1f3289-8a8e-4571-ba15-4a84aeec6a81.jpg_r_640x420x90_e0adc0f6.jpg"
           @click="handleBannerClick"
           alt=""
      >
      <div class="banner-info">
        <div class="banner-title">大连圣亚海洋馆</div>
        <div class="banner-number">
          <span class="iconfont banner-iconfont">&#xe691;</span>39
        </div>
      </div>
    </div>
    <common-gallary :imgs="imgs" v-show="showGallary" @close="handleCloseGallary"></common-gallary>
  </div>
</template>

<script>
import CommonGallary from 'common/gallary/Gallary'
export default {
  name: 'DetailBanner',
  components: {
    CommonGallary
  },
  data () {
    return {
      showGallary: false,
      imgs: [
        'https://img1.qunarzz.com/vs_ceph_vs_tts/ad1f3289-8a8e-4571-ba15-4a84aeec6a81.jpg_r_640x420x90_e0adc0f6.jpg',
        'https://imgs.qunarzz.com/p/p49/1805/90/0c724f6a337f8202.jpg_480x320_0247de13.jpg'
      ]
    }
  },
  methods: {
    handleBannerClick () {
      this.showGallary = true
    },
    handleCloseGallary () {
      this.showGallary = false
    }
  }
}
</script>

<style lang="stylus" scoped>
  .banner
    overflow: hidden
    width: 100%
    height: 0
    padding-bottom: 55%
    position: relative
    .banner-img
      width: 100%
    .banner-info
      position: absolute
      bottom: 0
      left: 0
      right: 0
      line-height: .6rem
      display: flex
      color: #fff
      background-image: linear-gradient(top, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.8))
      .banner-title
        flex: 1
        font-size: .32rem
        padding: 0 .2rem
      .banner-number
        padding: 0 .4rem
        margin-top: .14rem
        height: .32rem
        line-height: .32rem
        border-radius: .2rem
        background: rgba(0, 0, 0, .8)
        font-size: .24rem
        .banner-iconfont
          font-size: .24rem
</style>

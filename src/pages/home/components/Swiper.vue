<template>
    <div class="wrapper">
      <swiper :options="swiperOption">
        <!-- slides -->
        <swiper-slide v-for=" item of swiperList" :key='item.id'>
          <img class="swiper-img" :src="item.url" alt="">
        </swiper-slide>
        <!-- Optional controls -->
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
    </div>
</template>

<script>
export default {
  name: 'HomeSwiper',
  data () {
    return {
      swiperOption: {
        pagination: '.swiper-pagination',
        loop: true,
        autoplay: 5000
      },
      swiperList: [
        {
          id: '001',
          url: '//source.qunarzz.com/site/images/wns/20190621_qunar_dujia_homepage_2.jpg'
        }, {
          id: '002',
          url: '//source.qunarzz.com/site/images/wns/20190531_dujia_homepage_top_banner_4.jpg'
        }, {
          id: '003',
          url: '//source.qunarzz.com/site/images/wns/20190626_dujia_homepage_top_banner_5.jpg'
        }
      ]
    }
  }
}
</script>

<style lang="stylus" scoped>
  @import '~styles/varibles.styl'
  .wrapper >>> .swiper-pagination-bullet-active
    background: #fff
  .wrapper
    overflow: hidden
    width: 100%
    height: 0
    padding-bottom: 25.6%
    .swiper-img
      width:100%
</style>

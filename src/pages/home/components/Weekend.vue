<template>
  <div class="index-recommend">
    <div class="recommend-title">周末去哪儿</div>
    <div class="recommend border-bottom"  v-for="item in iconList" :key="item.id" >
      <div class="recommend-img" >
        <img class="recommend-img-content"  :src="item.src">
      </div>
      <div class="recommend-img-info">
        <p class="recommend-img-title">{{item.title}}</p>
        <p class="recommend-img-desc">{{item.info}}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeWeekend',
  data () {
    return {
            iconList: [{
              id: '001',
              src: 'https://imgs.qunarzz.com/vs_ceph_vs_tts/5e1cb631-d03e-4dca-90ab-ee9e08fa3c0e.jpg_r_390x260x90_f289407a.jpg',
              title: '北京-丽江6天5晚跟团游',
              info: '升碧桂园别墅🔥张家界+玻璃桥+天门山凤凰丨家庭亲子双飞6日｜头等航空舱座椅'
            }, {
              id: '002',
              src: 'https://imgs.qunarzz.com/vs_ceph_vs_tts/5e1cb631-d03e-4dca-90ab-ee9e08fa3c0e.jpg_r_390x260x90_f289407a.jpg',
              title: '北京-泰国6天5晚跟团游',
              info: '升碧桂园别墅🔥张家界+玻璃桥+天门山凤凰丨家庭亲子双飞6日｜头等航空舱座椅'
            }, {
              id: '003',
              src: 'https://imgs.qunarzz.com/vs_ceph_vs_tts/5e1cb631-d03e-4dca-90ab-ee9e08fa3c0e.jpg_r_390x260x90_f289407a.jpg',
              title: '北京-户部巷3天2晚自由行',
              info: '升碧桂园别墅🔥张家界+玻璃桥+天门山凤凰丨家庭亲子双飞6日｜头等航空舱座椅'
            }
          ]
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
      .recommend-img
        width: 100%
        padding-bottom: 66.7%
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

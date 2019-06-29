<template>
  <div class="index-recommend">
    <div class="recommend-title">热销推荐</div>
    <div class="recommend border-bottom"  v-for="item in iconList" :key="item.id" >
      <div class="recommend-img" >
        <img class="recommend-img-content"  :src="item.src">
      </div>
      <div class="recommend-img-info">
        <p class="recommend-img-title">{{item.title}}</p>
        <p class="recommend-img-desc">{{item.info}}</p>
        <button class="read-more">查看详情</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeRecommend',
  data () {
    return {
            iconList: [{
                          id: '001',
                          src: 'https://imgs.qunarzz.com/p/tts6/1801/82/c63867fd83805502.jpg_r_390x260x90_de91e096.jpg',
                          title: '北京-丽江6天5晚跟团游',
                          info: '升碧桂园别墅🔥张家界+玻璃桥+天门山凤凰丨家庭亲子双飞6日｜头等航空舱座椅'
                        }, {
                          id: '002',
                          src: 'https://img1.qunarzz.com/vs_ceph_vs_tts/ade31913-f43a-4fbb-a480-299e314a1b1a.jpg_r_240x160x90_12bdb5de.jpg',
                          title: '北京-泰国6天5晚跟团游',
                          info: '升碧桂园别墅🔥张家界+玻璃桥+天门山凤凰丨家庭亲子双飞6日｜头等航空舱座椅'
                        }, {
                          id: '003',
                          src: 'https://img1.qunarzz.com/p/tts0/1801/ce/980d870a80048602.jpg_r_240x160x90_0d916950.jpg',
                          title: '北京-户部巷3天2晚自由行',
                          info: '升碧桂园别墅🔥张家界+玻璃桥+天门山凤凰丨家庭亲子双飞6日｜头等航空舱座椅'
                        }, {
                          id: '004',
                          src: 'https://img1.qunarzz.com/vs_ceph_vs_tts/ade31913-f43a-4fbb-a480-299e314a1b1a.jpg_r_240x160x90_12bdb5de.jpg',
                          title: '北京-泰国6天5晚跟团游',
                          info: '升碧桂园别墅🔥张家界+玻璃桥+天门山凤凰丨家庭亲子双飞6日｜头等航空舱座椅'
                        }, {
                          id: '005',
                          src: 'https://img1.qunarzz.com/p/tts0/1801/ce/980d870a80048602.jpg_r_240x160x90_0d916950.jpg',
                          title: '北京-户部巷3天2晚自由行',
                          info: '升碧桂园别墅🔥张家界+玻璃桥+天门山凤凰丨家庭亲子双飞6日｜头等航空舱座椅'
                        }, {
                          id: '006',
                          src: 'https://imgs.qunarzz.com/p/tts6/1801/82/c63867fd83805502.jpg_r_390x260x90_de91e096.jpg',
                          title: '北京-丽江6天5晚跟团游',
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
      display: flex
      width: 100%
      height: 0
      padding-bottom: 25.5%
      display: flex
      .recommend-img
        width: 35%
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

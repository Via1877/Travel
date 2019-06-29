<template>
  <div class="icons">
    <swiper :options="swiperOption">
      <swiper-slide v-for="page of pages" :key='page.index'>
        <div class="icon"  v-for="item in page" :key="item.id" >
          <div class="icon-img">
            <img class="icon-img-content" :src="item.src">
          </div>
          <p class="icon-img-desc">攻略</p>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
export default {
  name: 'HomeIcons',
  data () {
    return {
      swiperOption: {
        pagination: '.swiper-pagination'
      },
      iconList: [
        {
          id: '001',
          src: '//m.360buyimg.com/mobilecms/s120x120_jfs/t1/20983/16/10753/6124/5c8a16aaE5d6b15d7/01e0e818a7505267.png',
          desc: '攻略'
        }, {
          id: '002',
          src: '//m.360buyimg.com/mobilecms/s120x120_jfs/t1/39401/17/2391/5859/5cc06fcfE2ad40668/28cda0a571b4a576.png.webp',
          desc: '攻略'
        }, {
          id: '003',
          src: '//m.360buyimg.com/mobilecms/s120x120_jfs/t22228/270/207441984/11564/88140ab7/5b03fae3N67f78fe3.png.webp',
          desc: '攻略'
        }, {
          id: '004',
          src: '//m.360buyimg.com/mobilecms/s120x120_jfs/t1/7068/29/8987/5605/5c120da2Ecae1cc3a/016033c7ef3e0c6c.png.webp',
          desc: '攻略'
        }, {
          id: '005',
          src: '//m.360buyimg.com/mobilecms/s120x120_jfs/t16828/63/2653634926/5662/d18f6fa1/5b03b779N5c0b196f.png.webp',
          desc: '攻略'
        }, {
          id: '006',
          src: '//m.360buyimg.com/mobilecms/s120x120_jfs/t1/20983/16/10753/6124/5c8a16aaE5d6b15d7/01e0e818a7505267.png',
          desc: '攻略'
        }, {
          id: '007',
          src: '//m.360buyimg.com/mobilecms/s120x120_jfs/t1/39401/17/2391/5859/5cc06fcfE2ad40668/28cda0a571b4a576.png.webp',
          desc: '攻略'
        }, {
          id: '008',
          src: '//m.360buyimg.com/mobilecms/s120x120_jfs/t22228/270/207441984/11564/88140ab7/5b03fae3N67f78fe3.png.webp',
          desc: '攻略'
        }, {
          id: '009',
          src: '//m.360buyimg.com/mobilecms/s120x120_jfs/t1/7068/29/8987/5605/5c120da2Ecae1cc3a/016033c7ef3e0c6c.png.webp',
          desc: '攻略'
        }, {
          id: '010',
          src: '//m.360buyimg.com/mobilecms/s120x120_jfs/t16828/63/2653634926/5662/d18f6fa1/5b03b779N5c0b196f.png.webp',
          desc: '攻略'
        }
      ]
    }
  },
  computed: {
    pages () {
      const pages = []
      this.iconList.forEach((item,index) => {
        const page = Math.floor(index / 8)
        if(!pages[page]){
          pages[page] = []
        }
        pages[page].push(item)
      })
      return pages
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
        padding: .1rem
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
</style>

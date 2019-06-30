<template>
<div>
  <div class="search">
    <input class="search-input border"
           type="text"
           v-model="keyword"
           placeholder="输入城市名或拼音"
    >
  </div>
  <div class="search-content" ref="search" v-show="keyword">
    <ul>
      <li class="search-item border-bottom" v-for="city of list" :key="city.id">
        {{city.name}}
      </li>
      <li class="search-item border-bottom" v-show="hasNoData">
        没有找到匹配数据
      </li>
    </ul>
  </div>
</div>
</template>

<script>
import Bscroll from '@better-scroll/core'
export default {
  name: 'CitySearch',
  props: {
    cities: Object
  },
  data () {
    return {
      keyword: '',
      list: [],
      timer: null
    }
  },
  updated () {
    this.scroll = new Bscroll(this.$refs.search)
  },
  computed: {
    hasNoData () {
      return (!this.list.length)
    }
  },
  watch: {
    keyword () {
      if (this.timer) {
        clearTimeout(this.timer)
      }
      if (!this.keyword) {
        this.list = []
        return
      }
      this.timer = setTimeout(() => {
        const result = []
        for (let i in this.cities) {
          this.cities[i].forEach((value) => {
            if (value.spell.indexOf(this.keyword) > -1 ||
                value.name.indexOf(this.keyword) > -1) {
              result.push(value)
            }
          })
        }
        this.list = result
      }, 100)
    }
  }
}
</script>

<style lang="stylus" scoped>
  @import '~styles/varibles.styl'
  *
    touch-action: none
  .search >>> input::-webkit-input-placeholder
    color: #43bfcd
  .search
    height: .72rem
    background: $bgColor
    padding: 0 .1rem
    .search-input
      width: 100%
      border-radius: .31rem
      height: .52rem
      line-height: .52rem
      color: #43bfcd
      background: #28a1b0
      box-sizing: border-box
      text-align: center
      padding: 0 .2rem
  .search-content
    overflow: hidden
    position: absolute
    top: 1.58rem
    left: 0
    right: 0
    bottom: 0
    background: #eee
    z-index: 1
    .search-item
      padding: .2rem
      line-height: .62rem
      background: #ffffff
      color: ccc
</style>

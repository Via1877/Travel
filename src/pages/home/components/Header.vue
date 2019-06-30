<template>
    <div  class="header">
         <router-link tag="div" to='/login' class="header-left">
           <span class="iconfont back-icon">&#xe624;</span>
         </router-link>
         <div class="header-input">
           <span class="iconfont">&#xe632;</span>
           输入城市/景点/游玩主题
         </div>
         <router-link to="/city">
          <div class="header-right">
              <span class="city-now">{{this.$store.state.city}}</span>
              <span class="iconfont arrow-icon">
              &#xe62d;
              </span>
          </div>
        </router-link>
    </div>
</template>
<script>

export default {
  name: 'HomeHeader'
}
</script>
<style lang="stylus" scoped>
  @import '~styles/varibles.styl'
  @import '~styles/minins.styl'
  .header
    display: flex
    height: .86rem
    line-height: .86rem
    background: $bgColor
    color: #fff
    .header-left
      width: .64rem
      float: left
      .back-icon
        display: inline-block
        width: 100%
        text-align: center
        font-size: .4rem
    .header-input
      flex: 1
      height: .64rem
      line-height: .64rem
      background: #ffffff
      color: #cccccc
      margin-top: .12rem
      margin-left: .2rem
      padding-left: .2rem
      border-radius: .1rem
    .header-right
      min-width: 1.04rem
      padding: 0 .1rem
      float: right
      text-align: center
      color: #fff
      box-sizing: border-box
      .arrow-icon
        font-size: .24rem
</style>

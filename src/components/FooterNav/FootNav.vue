<template>
  <div class="foot-nav">
    <router-link to="/home" class="foot home" :class="{on:'/home'===$route.path}">
      <span class="item_icon">
        <i class="iconfont icon-waimai"></i>
      </span>
      <span>首页</span>
    </router-link>
    <router-link to="/search" class="foot search" :class="{on:'/search'===$route.path}">
      <span class="item_icon">
        <i class="iconfont icon-search"></i>
      </span>
      <span>搜索</span>
    </router-link>
    <router-link to="/order" class="foot order" :class="{on:'/order'===$route.path}">
      <span class="item_icon">
        <i class="iconfont icon-dingdan"></i>
      </span>
      <span>订单</span>
    </router-link>
    <router-link to="/mine" class="foot mine" :class="{on:'/mine'===$route.path}">
      <span class="item_icon">
        <i class="iconfont icon-geren"></i>
      </span>
      <span>我的</span>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "FootNav",
  methods: {
    // goTo(path) {
    //   this.$router.replace(path)
    // }
  },
};
</script>

<style lang="stylus">
@import '~common/stylus/variable.styl';

.foot-nav {
  position fixed
  bottom 0
  left 0
  width 100%
  background: #fff;
  display: flex;
  justify-content: space-around;
  align-items center
  border-top 1px solid #ddd
  padding-top: 5px;
  .foot {
    display flex
    flex 1
    text-align center
    flex-direction column
    align-items center
    color #999999
    &.on {
      color #02a774  
    }
    span {
      font-size 12px
      margin-top 2px
      margin-bottom 2px
      .iconfont {
        font-size 22px
      }
    }
  }
}
</style>

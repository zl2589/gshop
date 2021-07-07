<template>
  <div class="home">
    <!-- 头部 -->
    <header-top :title="address">
      <router-link slot="search" to="/search" class="header-search">
        <i class="iconfont icon-sousuo"></i>
      </router-link>
      <router-link slot="login" to="/login" class="header-login">
        <span class="header_login_text">登录</span>
        <!-- <span class="header_login_text">
          <i class="iconfont icon-person"></i>
        </span> -->
      </router-link>
      <router-link slot="regist" to="/regist" class="header-regist">
        <span class="header_login_text">注册</span>
      </router-link>
    </header-top>

    <!-- 分类导航 -->
    <nav class="home-swiper">
      <div class="swiper-container" v-if="categoryArr.length > 0">
        <div class="swiper-wrapper">
          <div class="swiper-slide" v-for="(arr, index) in categoryArr" :key="index">
            <div class="link_to_food" v-for="(category, idx) in arr" :key="idx">
              <img :src="require('../../assets/nav/'+category.image_url)" v-if="category.image_url !== null">
              <span>{{category.title}}</span>
            </div>
          </div>
        </div>
        <!-- 分页器 -->
        <div class="swiper-pagination"></div>
      </div>
      <img src="../../assets/nav/msite_back.svg" v-else>
    </nav>
    <!-- 附近商家 -->
    <shop-list>
    </shop-list>
  </div>
</template>

<script>
import HeaderTop from "@/components/HeaderTop/HeaderTop";
import ShopList from "@/components/ShopList/ShopList";

import Swiper from "swiper";
import "../../../static/css/swiper.min.css";
import {mapState} from 'vuex'

export default {
  name: "home",
  components: {
    HeaderTop,
    ShopList,
  },
  data() {
    return {

    };
  },
  mounted() {
    this.$store.dispatch('getCategorys')
  },
  computed: {
    ...mapState(['address', 'categorys', 'shops']),

    
    // 把分类导航分割成8个一组
    categoryArr() {
      const max = 8
      const arr = []
      const categorys = this.categorys
      // 其中一组
      let smallArr = []
      categorys.forEach(element => {    
        if (smallArr.length === 0) {
          arr.push(smallArr)
        } 
        smallArr.push(element)
        if (smallArr.length === max) {
          smallArr = []
        }
      });
      // console.log(arr)
      return arr
    }
  },
  watch: {
    categorys() {
      this.$nextTick(() => {
        new Swiper('.swiper-container', {
          pagination: {
            el: '.swiper-pagination'
          },
          loop: true,   
        })
      })
    }
  },
};
</script>

<style lang="stylus">
.home {
  .home-swiper {
    margin-top: 50px;
    bottom-border-1px(#e4e4e4)
    margin-top 45px
    height 200px
    background #fff

    .swiper-container {
      width 100%
      height 100%

      .swiper-wrapper {
        width 100%
        height 100%

        .swiper-slide {
          display flex
          align-items flex-start
          flex-wrap wrap

          .link_to_food {
            width 25%

            img {
              display inline-block
              width 50px
              height 50px
              padding-bottom 10px
            }
            span {
              display block
              width 100%
              text-align center
              font-size 13px
              color #666
            }
          }
        }
      }
      .swiper-pagination {
        span.swiper-pagination-bullet-active {
          background #02a774
        }   
      }
    }
  }
}
</style>
<template>
  <div class="home-content scroll-content">
    <div class="content-title">
      <i class="iconfont icon-xuanxiang"></i>
      <span>附近商家</span>
    </div>
    <ul class="near-business" v-if="shops">
      <li v-for="(shop, index) in shops" :key="index" @click="shopIndex(shop.id)">
        <div class="left">
          <div class="left-img-box">
            <img :src="require('../../assets/shop/shop_img/' + shop.shop_img)" alt="" v-if="shop.shop_img"/>
            <img src="" alt="" v-else/>
          </div>
          <div class="left-info">
            <div class="info-top ellipsis">{{ shop.name }}</div>
            <div class="info-center">
              <section class="shop_rating_order">
                <section class="shop_rating_order_left">
                  <star :score="shop.score" :size="24"></star>
                  <div class="order_section" v-if="shop.order < 10000">
                    月售{{shop.order}}单
                  </div>
                  <div class="order_section" v-else>
                    月售9999+单
                  </div>
                </section>
                
              </section>
            </div>
            <div class="info-bottom">
              ￥{{shop.min_fee}}起送 / 
              <span v-if="shop.trans_fee > 0">
                配送费￥{{shop.min_fee}}
              </span>
              <span v-else>
                免配送费
              </span>
            </div>
          </div>
        </div>

        <div class="right">
          <span class="delivery_style delivery_right">{{shop.delivery}}</span>
        </div>
      </li>
    </ul>
    <ul v-else>
      <img src="../../assets/shop/shop_back.svg">
    </ul>
  </div>
</template>

<script>
import {mapState} from 'vuex'

import Star from '@/components/Star/Star'

export default {
  name: 'shopList',
  data () {
    return {
      
    }
  },
  components: {
    Star,
  },
  mounted() {
    this.$store.dispatch('getShops')
  },
  computed: {
    ...mapState(['shops']),

  },
  methods: {
    shopIndex(shopId) {
      this.$router.push({name: 'shop', params: {shopId,}})
    }
  }

}
</script>

<style lang="stylus">
@import "../../common/stylus/mixins.styl"

.home-content {
  margin-top: 10px;
  background: #fff;
  max-height: 370px;

  .content-title {
    text-align: left;
    padding 10px 10px 0
    span {
      color #999
      font-size 14px
    }
  }

  ul.near-business {
    padding: 0;
    padding 10px 10px 0
    li {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      padding: 10px 5px;
      font-size 12px
      .left {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        .left-img-box {
          width: 50px;
          height: 50px;
          background: #ccc;
          margin-right: 10px;
          img {
            width 100%
            height 100%
            object-fit cover
          }
        }
        .left-info {
          text-align left

          .info-top {
            width 180px
            color #333
            font-size 16px
            line-height 16px
            font-weight 700
            letter-spacing 1px
            &::before {
              content '品牌'
              font-size 11px
              color #333
              background-color #ffd930
              padding 2px 2px
              border-radius 2px
              margin-right 5px
            }
          }
          .info-center {
            width 80%
            margin-top 3px
            font-size 10px
            color #999
            padding 8px 2px
            .shop_rating_order {

              .shop_rating_order_left {
                display flex
                justify-content space-around
                

                // 星星

                .order_section {
                  float left
                  font-size 10px
                  color #666
                  transform scale(.8)
                }
              }
            }
          }
          .info-bottom {
            font-size 12px
            color #666
          }
        }
      }

      .right {
        .delivery_style {
          transform-origin 35px 0
          transform scale(.8)
          display inline-block
          font-size 12px
          padding 2px
          border-radius 2px
        }
        .delivery_right {
          color #02a774
          background #f2f2f2
        }
      }
    }
  }
}

.home-content.scroll-content {
  overflow-y: scroll;
}
</style>
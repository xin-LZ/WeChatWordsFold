<template>
<div>
  <div class="coupon-container" v-if="false">
        <div class="swiper-wrapper">
                <div class="coupon_layout">
                    <img class="coupon_layout_img" src="http://activity.cmcc-cs.cn/website/images/businessPlatform/banli2.png" alt="">
                    <div class="coupon_layout_des2">
                        <div class="coupon_layout_discount"><span class="couponDiscount"></span><span>折</span></div>
                        <div class="coupon_layout_content">
                            <div class="couponDescription"></div>
                            <div class="coupon_layout_date"></div>
                        </div>
                    </div>
                    <div class="coupon_layout_btn2">立即使用</div>
                    <img class="coupon_layout_close" src="http://activity.cmcc-cs.cn/website/images/businessPlatform/banli_close.png" alt="">
                </div>
        </div>
        <div class="swiper-pagination"></div>
  </div>
  <div class="swiper-reward">
      <div class="coupon_layout">
        <img class="coupon_layout_img" src="http://activity.cmcc-cs.cn/website/images/businessPlatform/banli1.png" alt="">
          <div class="coupon_layout_des"></div>
          <div class="coupon_layout_btn">立即领取</div>
          <div style="height: 1px;"></div>
          <img class="coupon_layout_close" src="http://activity.cmcc-cs.cn/website/images/businessPlatform/banli_close.png" alt="">
      </div>
  </div>
</div>
</template>
<script>
export default {
  name: 'test',
  data () {
    return {
    }
  }
}
</script>
<style lang="less" scoped>
        .coupon-container {
          position: absolute;
          z-index: 10000;
          top: 13%;
          .coupon_layout {
            margin: 21px 10.8% 20px;
            height: auto;
            background: #FFFFFF;
            border-radius: 8px;
            text-align: center;
            position: relative;
            .coupon_layout_img {
              width: 100%;
            }
            .coupon_layout_des2 {
              font-size:18px;
              font-weight:200;
              line-height:25px;
              background: url(http://activity.cmcc-cs.cn/website/images/businessPlatform/banli-pop.png) center no-repeat;
              background-size: 100% 100%;
              height: 100px;
              display: flex;
              display: -webkit-flex;
              align-items: center;
              -webkit-align-items: center;
              color: #FF423F;
              .coupon_layout_discount {
                font-size:42px;
                font-weight:500;
                width: 65%;
                span {
                  font-size: 16px;
                }
              }
              .coupon_layout_content {
                font-size:16px;
                line-height:22px;
                font-weight:200;
                text-align: left;
                margin-right: 10px;
                .coupon_layout_date {
                  font-size:11px;
                  font-weight:200;
                  line-height:15px;
                  margin-top: 5px;
                }
              }
            }
            .coupon_layout_btn2 {
              background:rgba(250,56,65,1);
              border-radius:8px;
              line-height: 48px;
              font-size:18px;
              color:rgba(255,255,255,1);
            }
            .coupon_layout_close {
              position: absolute;
              width: 24px!important;
              height: 24px!important;
              top: -21px;
              right: -21px;
            }
          }
        }
.swiper-reward {
  position: absolute;
  z-index: 10000;
  top: 10%;
  margin: 21px 10.8% 20px;
  .coupon_layout {
    height: auto;
    background: #FFFFFF;
    border-radius: 8px;
    text-align: center;
    position: relative;
    .coupon_layout_img {
      width: 100%;
    }
    .coupon_layout_des {
            font-size:18px;
            font-weight:500;
            color:rgba(51,51,51,1);
            line-height:25px;
            margin-top: 24px;
            margin-bottom: 22px;
            word-wrap: break-word;
    }
    .coupon_layout_btn {
            background:rgba(250,56,65,1);
            border-radius:8px;
            line-height: 48px;
            font-size:18px;
            color:rgba(255,255,255,1);
            margin: 15px;
        }
        .coupon_layout_close {
            position: absolute;
            width: 24px!important;
            height: 24px!important;
            top: -21px;
            right: -21px;
        }
    }
 }
</style>
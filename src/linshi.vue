<template>
<!-- 办理结果页办理赠券组件 -->
  <div>
    <ul class="secondCoupon_result_wrapper_page">
      <template v-if="true" >
        <p class="secondCoupon_result_title_page">好礼刮出来</p>
        <li class="guaguaka">
        <a class="couponCard_page type_coupon_page" href="http://wx.10086.cn/website/gift/giftList?sourceFrom=personalCenter">
            <div class="type_coupon_left_page">刮刮卡</div>
            <div class="type_coupon_content_page">
              <p class="coupon_title_page">data.data.coupon.couponName</p>
          <!--<p class="coupon_limit_page">限10086APP兑换使用</p>-->
              <p class="coupon_validTime_page">有效期至<span>data.data.coupon.endTime</span></p>
            </div>
            <div class="type_coupon_right_page">
              <div class="coupon_btn_page">立即使用</div>
            </div>
        </a>
          <div class="guaCeng">
            <div class="guaCeng_body">
              <div class="guaCeng_left"></div>
              <div class="guaCeng_right">
                <canvas id="canvas"></canvas>
              </div>
            </div>
          </div>
        </li>
      </template>
        <!-- <template v-else-if="data.type == '2'"> -->
        <template v-else-if="false">
        <p class="secondCoupon_result_title_page blyl hidden">恭喜你获得以下奖励</p>
        <a :href="[5, 6, 7].indexOf(data.data.coupon.type) > -1 ? linkOne:linkTwo "  data-id="{{data.atyId}}" data-index="{{index}}" onclick="getGio('{{data.data.coupon.couponName}}')">
        <li class="couponCard_page type_coupon_page">
            <div class="type_coupon_left_page">{{getCouponType(data.data.coupon.type)}}</div>
            <div class="type_coupon_content_page">
              <p class="coupon_title_page">{{data.data.coupon.couponName}}</p>
              <p class="coupon_validTime_page">有效期至<span>{{data.data.coupon.endTime}}</span></p>
            </div>
            <div class="type_coupon_right_page">
              <div class="coupon_btn_page">立即使用</div>
            </div>
          </li>
        </a>
      </template>
      <!-- <template v-else-if="data.type == '2'"> -->
        <template v-else-if="false">
        <p class="secondCoupon_result_title_page blyl hidden">恭喜你获得以下奖励</p>
        <a href="{{data.data.gift.webUrl}}&serialId={{data.data.gift.serialId ? data.data.gift.serialId : ''}}" data-id="{{data.atyId}}" data-index="{{index}}" onclick="getGio('{{data.data.gift.productName}}','{{data.atyId}}')">
          <li class="couponCard_page type_product_page">
            <img src="../images/businessPlatform/coupon/type_product_tehui_big.png" alt="">
            <div class="type_product_content_page">
              <img src="{{data.data.gift.thumbnailImgUrl}}" alt="">
              <p class="product_title_page">{{data.data.gift.productName}}</p>
              <p class="product_price_page">特惠价：￥<span>{{getPrice(data.data.gift.norms[0].price,data.data.gift.norms[0].discountPrice)}}</span></p>
            </div>
            <div class="type_coupon_right_page">
              <div class="coupon_btn_page">立即使用</div>
            </div>
          </li>
        </a>
      </template>
      <!-- <template v-else-if="data.type == '0'"> -->
        <template v-else-if="false">
        <p class="secondCoupon_result_title_page blyl hidden">恭喜你获得以下奖励</p>
        <a href="javascript: void(0);" outurl="{{data.data.outUrl}}" data-id="{{data.atyId}}" data-index="{{index}}" onclick="getGio('{{data.data.name}}','{{data.atyId}}')" class="couponCard_out">
          <li class="couponCard_page type_external_page">
            <div class="type_external_content_page">
              <p class="external_text_page">{{data.data.handleDesc}}</p>
            </div>
            <div class="type_coupon_right_page">
              <div class="coupon_btn_page">立即使用</div>
            </div>
          </li>
        </a>
      </template>
    </ul>       
  </div>
  </template>

  name: 'secondCouponResule',
  data () {
    return {
      linkOne: require('../businessPlatform/coupProduct?couponId={{data.data.coupon.couponCode}}&couponName={{data.data.coupon.couponName}}&couponType={{data.data.coupon.type}}" data-id="{{data.atyId}}" data-index="{{index}}" onclick="getGio(data.data.coupon.couponName)'),
      linkTwo: require('http://wx.10086.cn/website/gift/giftList?sourceFrom=personalCenter')
    }
  }
}

    circleReset () {
      ctx.beginPath()
      ctx.moveTo(pointerArr[0][0], pointerArr[0][1]);
      ctx.lineCap = "round"
      ctx.lineJoin = "round"
      ctx.lineWidth = 30
      ctx.globalCompositeOperation = "destination-out"
      if (pointerArr.length == 1) {
        ctx.lineTo(pointerArr[0][0] + 1, pointerArr[0][1] + 1)
      } else {
        for (var i = 1; i < pointerArr.length; i++) {
          ctx.lineTo(pointerArr[i][0], pointerArr[i][1]);
          ctx.moveTo(pointerArr[i][0], pointerArr[i][1]);
        }
      }
      ctx.closePath()
      ctx.stroke()
    }

  .secondCoupon_result_wrapper_page{
    width: 100%;
    padding-bottom: 10px;
  }
  .secondCoupon_result_title_page{
    width: 3.45rem;
    height: 0.2rem;
    font-size: 0.14rem;
    font-family: PingFangTC-Medium;
    font-weight: 600;
    color: rgba(71,71,71,1);
    line-height: 0.2rem;
    margin: 0.2rem auto 0px auto;
  }
  .couponCard_page{
    width: 3.45rem;
    height: 1.1rem;
    margin: 0.1rem auto 0.1rem auto;
  }
  .type_coupon_page{
    display: flex;
    display: -webkit-flex;
    background: url("../images/businessPlatform/coupon/type_coupon_big.png") no-repeat;
    background-size: cover;
  }
  .type_coupon_left_page{
    width: 0.32rem;
    height: 1.1rem;
    text-align: center;
    padding-top: 0.21rem;
    box-sizing: border-box;
    font-size:0.18rem;
    font-family:PingFangTC-Semibold;
    font-weight:600;
    line-height:0.21rem;
    color: #FEAB16;
  }
  .type_coupon_content_page{
    width: 2.1rem;
    padding-left: 0.07rem;
  }
  .coupon_title_page{
    width: auto;
    height: 0.24rem;
    font-size: 0.18rem;
    font-family: PingFangTC-Medium;
    font-weight: 500;
    color: #474747;
    margin: 0.21rem 0px 0.05rem 0px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    text-align: start;
  }
  .coupon_limit_page{
    width: auto;
    height: 0.14rem;
    color: #474747;
    font-family:PingFangTC-Regular;
    font-weight:400;
    font-size: 0.12rem;
    line-height: 0.14rem;
    margin-bottom: 0.05rem;
    text-align: start;
  }
  .coupon_validTime_page{
    width: auto;
    height: 0.14rem;
    color: #999999;
    font-family:PingFangTC-Regular;
    font-weight:400;
    font-size: 0.12rem;
    line-height: 0.14rem;
    text-align: start;
    display: block;
    width: 1.2rem;
    overflow: hidden;
  }
  .type_coupon_right_page{
    width: 0.72rem;
    height: 0.86rem;
    padding-top: 0.4rem;
    box-sizing: border-box;
  }
  .coupon_btn_page{
    width: 0.79rem;
    height: 0.3rem;
    border-radius: 0.24rem;
    background-image: linear-gradient(90deg, #FF7070 0%, #FB3636 100%);
    font-family:PingFangTC-Semibold;
    font-weight:600;
    color: #FFFFFF;
    text-align: center;
    line-height: 0.3rem;
    font-size: 0.14rem;
    margin: 0 auto;
  }
  .type_product_page{
    display: flex;
    display: -webkit-flex;
    position: relative;
    background: url("../images/businessPlatform/coupon/type_product_big.png") no-repeat;
    background-size: cover;
  }
  .type_product_page img{
    position: absolute;
    width: 0.47rem;
    height: 0.47rem;
  }
  .type_product_content_page{
    width: 2.4rem;
    padding: 0.09rem 0px 0px 0.1rem;
  }
  .type_product_content_page img{
    width: 0.87rem;
    height: 0.87rem;
    position: inherit;
    margin-right: 0.12rem;
    float: left;
  }
  .product_title_page{
    width: 1.4rem;
    font-size: 0.18rem;
    font-family: PingFangTC-Medium;
    color: #474747;
    overflow:hidden;
    text-overflow:ellipsis;
    display:-webkit-box;
    -webkit-box-orient:vertical;
    -webkit-line-clamp:2;
    text-align: start;
  }
  .product_price_page{
    font-size: 0.18rem;
    font-family:PingFangTC-Semibold;
    font-weight:600;
    color: #FB3F3F;
    position: absolute;
    bottom: 0.13rem;
    left: 1.12rem;
  }
  .type_external_page{
    display: flex;
    display: -webkit-flex;
    background: url("../images/businessPlatform/coupon/type_external_big.png") no-repeat;
    background-size: cover;
  }
  .type_external_content_page{
    width: 2.5rem;
    padding: 0.3rem 0px 0px 0.69rem;
    box-sizing: border-box;
  }
  .external_text_page{
    font-size: 0.18rem;
    font-family:PingFangTC-Medium;
    font-weight:500;
    color: #474747;
    line-height: 0.2rem;
    overflow:hidden;
    text-overflow:ellipsis;
    display:-webkit-box;
    -webkit-box-orient:vertical;
    -webkit-line-clamp:2;
  }
  .coupon_undefined_page{
    background: url("../images/businessPlatform/coupon/sendRefresh_big2L.png") no-repeat;
    background-size: cover;
  }
  .noPrize_page{
    display: flex;
    display: -webkit-flex;
    align-items: center;
    -webkit-align-items: center;
    position: relative;
    background: url("../images/businessPlatform/coupon/noPrize_big.png") no-repeat;
    background-size: 100%;
    text-align: center;
  }
  .noPrize_page p{
    font-size: 0.15rem;
    font-family: PingFangTC-Semibold;
    font-weight: 600;
    color: rgba(71,71,71,1);
    margin-left: 1.36rem;
    overflow:hidden;
    text-overflow:ellipsis;
    display:-webkit-box;
    -webkit-box-orient:vertical;
    -webkit-line-clamp:2;
    text-align: start;
  }
  /*三单有礼样式*/
  /*.threeGift_page{*/
    /*position: relative;*/
  /*}*/
  .threeGift_back_page{
    position: relative;
    display: flex;
    display: -webkit-flex;
    justify-content: space-around;
    -webkit-justify-content: space-around;
    width: 3.45rem;
    height: 1.55rem;
    background-color: #FFB334;
    border-radius: 4px;
    padding: 11px 20px 0px 20px;
    box-sizing: border-box;
    margin: 10px auto 0px auto;
  }
  .threeGift_back_page img{
    width: auto;
    height: 1.18rem;
    border-radius: 6px;
  }
  .threeGift_cover_page{
    position: absolute;
    bottom: 0px;
    left: 0px;
    width: 3.45rem;
    height: 0.515rem;
    background: url("../images/businessPlatform/coupon/threeGift_cover_big.png") no-repeat;
    background-size: 100%;
  }
  .threeGift_cover_page span{
    display: block;
    width: 1.72rem;
    height: 0.31rem;
    border-radius: 0.15rem;
    background-image: linear-gradient(0deg, #FF7070 0%, #FB3636 100%);
    background-image: -webkit-linear-gradient(0deg, #FF7070 0%, #FB3636 100%);
    font-size: 0.14rem;
    font-family: PingFangTC-Semibold;
    font-weight: 600;
    color: rgba(255,255,255,1);
    text-align: center;
    line-height: 0.31rem;
    margin: 0.16rem auto 0px auto;
  }
  /*新年抽签样式*/
  .draw_result_back{
    display: flex;
    display: -webkit-flex;
    width: 3.45rem;
    height: 1.53rem;
    background: url(../images/businessPlatform/coupon/draw_cover.png) no-repeat;
    background-size: 100%;
    margin: 0 auto;
  }
  .draw_result_left{
    display: flex;
    display: -webkit-flex;
    align-items: center;
    -webkit-align-items: center;
    width: 0.49rem;
    height: 1.53rem;
    box-sizing: border-box;
    font-size: 0.16rem;
    padding: 0.46rem 0.13rem 0 0.13rem;
    font-family: PingFangTC-Medium;
    line-height: 0.18rem;
    font-weight: 600;
    color: #E7221A;
  }
  .draw_result_content{
    position: relative;
    width: 2.96rem;
    height: 1.53rem;
    font-size: 0.13rem;
    box-sizing: border-box;
    padding-top: 0.2rem;
    text-align: left;
  }
  .draw_result_explain{
    width: 2.96rem;
    height: 0.32rem;
    box-sizing: border-box;
    padding: 0.04rem 0.1rem;
    font-size: 0.12rem;
    font-family: PingFangTC-Semibold;
    font-weight: 600;
    color: #E7221A;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    margin-bottom: 0.15rem;
    line-height: 0.24rem;
  }
  .draw_result_title{
    width: 2rem;
    height: 0.25rem;
    font-size: 0.18rem;
    font-family: PingFangTC-Medium;
    font-weight: 500;
    color: #474747;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    padding-left: 0.1rem;
  }
  .draw_result_limit{
    width: 2rem;
    height: 0.14rem;
    color: #474747;
    font-family: PingFangTC-Regular;
    font-weight: 400;
    font-size: 0.12rem;
    line-height: 0.14rem;
    margin: 0.05rem 0;
    padding-left: 0.1rem;
  }
  .draw_result_validTime{
    width: auto;
    height: 0.14rem;
    color: #999999;
    font-family:PingFangTC-Regular;
    font-weight:400;
    font-size: 0.12rem;
    line-height: 0.14rem;
    padding-left: 0.1rem;
  }
  .draw_result_right{
    display: inline-block;
    position: absolute;
    right: 0.15rem;
    top: 0.85rem;
  }
  .draw_result_btn{
    width: 0.79rem;
    height: 0.3rem;
    border-radius: 0.24rem;
    background-image: linear-gradient(90deg, #FF7070 0%, #FB3636 100%);
    font-family:PingFangTC-Semibold;
    font-weight:600;
    color: #FFFFFF;
    text-align: center;
    line-height: 0.3rem;
    font-size: 0.14rem;
  }
  /*新年抽签样式结束*/
  /*刮刮卡样式开始*/
  .guaguaka{
    position: relative;
  }
  .guaCeng{
    position: absolute;
    left: 0px;
    bottom: 0px;
    width: 100%;
    height: 1.1rem;
  }
  .guaCeng_body{
    position: relative;
    width: 3.45rem;
    height: 1.1rem;
    margin: 0 auto;
  }
  .guaCeng_left{
    width: 0.32rem;
    height: 1.1rem;
  }
  .guaCeng_right{
    position: absolute;
    right: 0px;
    bottom: 0px;
    width: 3.13rem;
    height: 1.1rem;
    overflow: hidden;
  }
  /*刮刮卡样式结束*/
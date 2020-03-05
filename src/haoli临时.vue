<template>
 d.forEach(function(data,index){ 
         if(data.type == 'draw'){ 
          draw_data = data 
         }else if(data.type ==  'order'){ 
           threeGift_data = data 
         }else if(data.type == '2'){ 
        <p class="secondCoupon_result_title_page blyl hidden">恭喜你获得以下奖励</p>
        if([5, 6, 7].indexOf(data.data.coupon.type) > -1){
        <a href="../businessPlatform/coupProduct?couponId={{data.data.coupon.couponCode}}&couponName={{data.data.coupon.couponName}}&couponType={{data.data.coupon.type}}" data-id="{{data.atyId}}" data-index="{{index}}" onclick="getGio('{{data.data.coupon.couponName}}')">
         }else{ 
        <a href="http://wx.10086.cn/website/gift/giftList?sourceFrom=personalCenter" data-id="{{data.atyId}}" data-index="{{index}}" onclick="getGio('{{data.data.coupon.couponName}}','{data.atyId}}')">
         }
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
         }else if(data.type == '1'){ 
        <p class="secondCoupon_result_title_page blyl hidden">恭喜你获得以下奖励</p>
        <a href="{{data.data.gift.webUrl}}&serialId={{data.data.gift.serialId ? data.data.gift.serialId : ''}}" data-id="{{data.atyId}}" data-index="{{index}}" onclick="getGio('{{data.data.gift.productName}}','{{data.atyId}}')">
          <li class="couponCard_page type_product_page"><img src="../images/businessPlatform/coupon/type_product_tehui_big.png"
                                                   alt="">
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
         }else if(data.type == '0'){ 
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
         }else if(data.type == '4'){ 
        <li class="couponCard_page coupon_undefined_page" data-id="{{data.atyId}}" data-index="{{index}}"></li>
         }else if(data.type == '3'){ 
        <li class="couponCard_page noPrize_page">
          <p>很遗憾，奖品已被抢光了~</p>
        </li>
         } 
         }) 

         if(draw_data){ 
        <li class="draw">
          <p class="secondCoupon_result_title_page">恭喜你抽中上上签</p>
          <a href="http://wx.10086.cn/website/gift/giftList?sourceFrom=personalCenter" class="draw_result_back" data-id="{{draw_data.atyId}}" onclick="getFloatGio('{{draw_data.data.coupon.couponName}}','{{draw_data.atyId}}')">
            <div class="draw_result_left">{{getDraw(draw_data.data.coupon.couponName)[0].drawTitle}}</div>
            <div class="draw_result_content">
              <p class="draw_result_explain">{{getDraw(draw_data.data.coupon.couponName)[0].drawText}}</p>
              <p class="draw_result_title">{{draw_data.data.coupon.couponName}}</p>
<!--              <p class="draw_result_limit">限10086APP兑换使用</p>-->
              <p class="draw_result_validTime">有效期至<span>{{draw_data.data.coupon.endTime}}</span></p>
              <div class="draw_result_right">
                <div class="draw_result_btn">立即使用</div>
              </div>
            </div>
          </a>
        </li>
         } 

         if(threeGift_data){ 
        <li class="threeGift_page">
          <p class="secondCoupon_result_title_page">再办理1单即有机会领取</p>
          <div class="threeGift_back_page">
             threeGift_data.presents.sort(function(a,b){ 
             return a.order-b.order 
             }) 
             threeGift_data.presents.forEach(function(item){ 
            <img src="{{item.imageUrl }}" alt="">
             }) 
            <div class="threeGift_cover_page"><span>去逛逛</span></div>
          </div>
        </li>
        }
</template>
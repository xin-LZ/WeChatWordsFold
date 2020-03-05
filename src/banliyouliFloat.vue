<template>
<div>
  <div class="secondCoupon_result">
    <div class="mask"></div>
    <img src="../images/businessPlatform/coupon/secondCoupon_close.png" alt="" class="secondCoupon_close">
    <div class="secondCoupon_result_body">
      <ul class="secondCoupon_result_wrapper">
       d.forEach(function(data,index){ 
         if(isTitleFlag){
        <div class="title_box hidden">
          <div class="secondCoupon_result_title">
            <div class="title_left"></div>
            <span>恭喜你获得以下奖励</span>
            <div class="title_right"></div>
          </div>
        </div>
        {{# isTitleFlag = false }}
         }
         if(data.type == 'draw'){
           draw_data = data
         }else if(data.type ==  'order'){
           threeGift_data = data
         }else if(data.type == '2'){
         if([5, 6, 7].indexOf(data.data.coupon.type) > -1){
        <a href="../businessPlatform/coupProduct?couponId={{data.data.coupon.couponCode}}&couponName={{data.data.coupon.couponName}}&couponType={{data.data.coupon.type}}" data-id="{{data.atyId}}" data-index="{{index}}" onclick="getFloatGio('{{data.data.coupon.couponName}}','{{data.atyId}}')">
         }else{
        <a href="http://wx.10086.cn/website/gift/giftList?sourceFrom=personalCenter" data-id="{{data.atyId}}" data-index="{{index}}" onclick="getFloatGio('{{data.data.coupon.couponName}}','{{data.atyId}}')">
         }
          <li class="couponCard type_coupon">
            <div class="type_coupon_left">{{getCouponType(data.data.coupon.type)}}</div>
            <div class="type_coupon_content">
              <p class="coupon_title">{{data.data.coupon.couponName}}</p>
<!--              {{# if(data.data.coupon.type == '5'||data.data.coupon.type == '6'||data.data.coupon.type == '7'){ }}-->
<!--              <p class="coupon_limit">{{data.data.coupon.couponDesc}}</p>-->
<!--              {{# }else{ }}-->
<!--&lt;!&ndash;              <p class="coupon_limit">限10086APP兑换使用</p>&ndash;&gt;-->
<!--              {{# } }}-->
              <p class="coupon_validTime">有效期至<span>{{data.data.coupon.endTime}}</span></p>
            </div>
            <div class="type_coupon_right">
              <div class="coupon_btn">立即使用</div>
            </div>
          </li>
        </a>
         title_flag = 'true'
         }else if(data.type == '1'){
        <a href="{{data.data.gift.webUrl}}&serialId={{data.data.gift.serialId ? data.data.gift.serialId : ''}}" data-id="{{data.atyId}}" data-index="{{index}}" onclick="getFloatGio('{{data.data.gift.productName}}','{{data.atyId}}')">
          <li class="couponCard type_product"><img src="../images/businessPlatform/coupon/type_product_tehui.png" alt="">
            <div class="type_product_content">
              <img src="{{data.data.gift.thumbnailImgUrl}}" alt="">
              <p class="product_title">{{data.data.gift.productName}}</p>
              <p class="product_price">特惠价：￥<span>{{getPrice(data.data.gift.norms[0].price,data.data.gift.norms[0].discountPrice)}}</span></p>
            </div>
            <div class="type_coupon_right">
              <div class="coupon_btn">立即使用</div>
            </div>
          </li>
        </a>
        {{# title_flag = 'true' }}
        }else if(data.type == '0'){
        <a href="javascript: void(0);" outurl="{{data.data.outUrl}}" data-id="{{data.atyId}}" data-index="{{index}}" onclick="getGio('{{data.data.name}}')" class="couponCard_out">
          <li class="couponCard type_external">
            <div class="type_external_content">
              <p class="external_text">{{data.data.handleDesc}}</p>
            </div>
            <div class="type_coupon_right">
              <div class="coupon_btn">立即使用</div>
            </div>
          </li>
        </a>
        {{# title_flag = 'true' }}
         }else if(data.type == '4'){
        <li class="couponCard coupon_undefined" data-id="{{data.atyId}}" data-index="{{index}}" onclick="getFloatGio('请求失败')"></li>
        {{# title_flag = 'true' }}
         }else if(data.type == '3'){
        <li class="couponCard noPrize">
          <p>很遗憾，奖品已被抢光了~</p>
        </li>
         if(title_flag == 'undefined' || title_flag == 'false'){
        {{# title_flag = 'false' }}
         }
         }
         })

       if(draw_data){ 
        <li class="draw">
          <div class="secondCoupon_result_title">
            <div class="title_left"></div>
            <span>恭喜你抽中上上签</span>
            <div class="title_right"></div>
          </div>
          <a href="http://wx.10086.cn/website/gift/giftList?sourceFrom=personalCenter" class="draw_back" data-id="{{draw_data.atyId}}" onclick="getFloatGio('{{draw_data.data.coupon.couponName}}','{{draw_data.atyId}}')">
            <div class="draw_left">{{getDraw(draw_data.data.coupon.couponName)[0].drawTitle}}</div>
            <div class="draw_content">
              <p class="draw_explain">{{getDraw(draw_data.data.coupon.couponName)[0].drawText}}</p>
              <p class="draw_title">{{draw_data.data.coupon.couponName}}</p>
<!--              <p class="draw_limit">限10086APP兑换使用</p>-->
              <p class="draw_validTime">有效期至<span>{{draw_data.data.coupon.endTime}}</span></p>
              <div class="draw_right">
                <div class="draw_btn">立即使用</div>
              </div>
            </div>
          </a>
        </li>
         }

         if(threeGift_data){
        <li class="threeGift">
          <div class="secondCoupon_result_title">
            <div class="title_left"></div>
            <span>再办理1单即有机会领取</span>
            <div class="title_right"></div>
          </div>
          <div class="threeGift_back">
            {{# threeGift_data.presents.sort(function(a,b){ }}
            {{# return a.order-b.order }}
            {{# }) }}
            {{# threeGift_data.presents.forEach(function(item){ }}
            <img src="{{item.imageUrl }}" alt="">
            {{# }) }}
          </div>
          <div class="threeGift_cover"><span>去逛逛</span></div>
        </li>
         }
      </ul>
      <div class="secondCoupon_result_foot">
        <p class="hidden">券已收入囊中，在个人主页点击头像进入个人中心-我的礼券，即可查看你的优惠了</p>
        <div ></div>
      </div>
    </div>
  </div>
  </div>

</template>
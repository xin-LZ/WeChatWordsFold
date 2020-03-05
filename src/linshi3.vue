
    if( ['1190','1516','1673','1075','1986','1987','1078'].indexOf(listProductId) > -1){ 
    <style>
        .content .content_title {margin-bottom: 15px }
        .GuangDongTips {
            font-size: 12px;
            margin-bottom: 15px;
        }
        .GuangDongTips a {
            display: inline-block;
            color: #028AEA;
        }
    </style>
    }
     if(isSpecialShop != -1){ 
    <style>
        .content .content_fail_msg{
            padding-bottom: 15px;
            margin-bottom: 0;
        }
    </style>
    }
<template>
<div id="remText" style="width: 1.4rem;display: none"></div>
<div class="recommendPop hidden"></div>
<!--nps弹窗-->
<div class="nps_tanchuang hidden">
  <img src="../images/nps/nps_close.png" alt="" class="nps_close" width="11.5" height="11.5">
  <div class="nps_btn">
    <div class="btn_no">残忍拒绝</div>
    <a href="javascript:void(0)" onclick="jumpNps()"><div class="btn_yes">立即参与</div></a>
  </div>
</div>

<!--done 分享有礼-->
<div class="guide_box_result hidden">
    <div class="banben2 hidden">机智如你，流量这么划算，周知小伙伴们~</div>
    <div class="banben3 hidden">助人为乐，大家的实惠才是真的实惠，周知小伙伴们~</div>
    <div class="content_result">1、点击右上角“
        <span>···</span>”</div>
    <div class="content_result">2、选择“
        <img src="../images/businessPlatform/sendToFriendCricle.png">”分享到朋友圈或者选择“
        <img src="../images/businessPlatform/sendToFriend.png">”分享给朋友</div>
</div>

<!-- done 为你推荐组件 -->
<div class="recommendPop_content hidden">
    <div class="recommendPop_bg">
        <p>欢迎进行推荐测评<br>86君需要更了解你才能推荐<br>更合适的商品</p>
        <a href="../questionnaire/index"><div class="recommendPop_btn">进行测评</div></a>
    </div>
    <div class="recommendPop_close"></div>
</div>


if(user.channel == '30007'){
<header class="header">
    <div class="welcome">欢迎进入业务办理</div>
    <div class="welcome_line"></div>
</header>
 } 
<div class="content">
     if(type == 'success' || type == 'common'){
      <img src="../images/businessPlatform/success.png" alt="success">
      if(type == 'common'){
      <div class="content_title" style="margin-bottom: 15px;">已进行办理</div>
      <div class="content_fail_msg">办理结果以您收到的短信为准</div>
      } else { 
      <div class="content_title">
          = isSpecialShop == -1 ? '办理成功' : '领取成功' 
      </div>
        if( ['1190','1516','1673','1075','1986','1987','1078'].indexOf(listProductId) > -1 ) {
        <div class="GuangDongTips">办理成功 更多优惠请戳<a href="http://dx.10086.cn/IiQFjum">广东移动APP</a></div>
        } 
      } 
      if(isSpecialShop == -1){
      if(checkFullAmountCoupon && type == 'success'){
        <div class="content_couponTips">
            <p>返还话费将在45天内到账，具体时间请以短信为准</p>
        </div>
      }
      if(checkSecKill && type == 'success'){
      <div class="content_couponTips">
          <p>正在快马加鞭为您充值返还话费，到账请以短信为准</p>
      </div>
      } 
      <div class="content_button">
         if(isopenhomeNet){
        <a href="../homeNet/home?sourceName=result" class="content_button_mid changBtn">去管理</a>
         }else{ 
            if(['30006', '30007'].indexOf(user.channel) === -1){
              <a href="javascript:void(0);" class="aJumptoShopPage">
                  返回首页
              </a>
              if(type == 'success'){
                <a href="javascript:void(0);" class="content_button_right">查看订单</a>
              } 
            } 
         } 
    </div>
    } 
    <div style="background: #F6F6F6;padding-top: 1px;">
      <div id="secondCouponResult"></div>
       if(['10001','10003','10006','10007','30004','30005','10086','10008'].indexOf(user.channel) > -2){
        <a href="javascript:void(0)" class="nps" onclick="jumpNps()" style="margin-top: 10px">
          <img src="../images/nps/nps_result.png" alt="" width="100%" height="auto">
        </a>
       }
    </div>
    <!--<div class="seat"></div>-->
  }
</div>
 if(user.channel == '30007'){
<div class="bottomFoot clearfix">
    <img src="../images/new/backOut.jpg" onclick="backOut()" />
    <img src="../images/new/homeOut.jpg" class="fr" onclick="loginOutCheck()" />
</div>
 }
if(isSpecialShop == -1 ){
<div class="recommendInfoCon">
</div>
}
if(type == 'success'){
<div class="luckyeggBox hidden">
    <img src="../images/businessPlatform/luckyegg/luckyeggSuccess.png"/>
</div>
<div class="plantTreeBox hidden">
    <div class="plantTreemask"></div>
    <div class="plantTreeMain">
        <img src="../images/businessPlatform/plantTree/plantTreeClose.png" class="plantTreeClose">
        <div class="plantTreeContent">
            <img src="../images/businessPlatform/plantTree/plantTreeImg.png" class="plantTreeImg"/>
            <a class="plantTreeBtnUrl"><img src="../images/businessPlatform/plantTree/plantTreeBtn.png" class="plantTreeBtn"></a>
        </div>
    </div>
</div>
<!-- 抽奖 -->
<div class="yearendBonusBox hidden">
    <div class="yearendBonusmask"></div>
    <div class="yearendBonusMain">
        <img src="../images/businessPlatform/yearendBonus/yearendBonusClose.png" class="yearendBonusClose">
        <div class="yearendBonusContent">
            <img src="../images/businessPlatform/yearendBonus/yearendBonusImg.png" class="yearendBonusImg"/>
            <a class="yearendBonusBtnUrl" href="https://wx.online-cmcc.cn/yearendbonus/index"><img src="../images/businessPlatform/yearendBonus/yearendBonusBtn.png" class="yearendBonusBtn"></a>
        </div>
    </div>
</div>
}
 if(type == 'success' || type == 'common') {
<div class="share_button_result">
    <span class="shareSpan">分享</span>
</div>
<div class="share_sucess_result hidden">
    <div class="share_sucess_receive"></div>
    <div class="share_sucess_close"></div>
</div>
<div class="coupon-container hidden">
    <div class="swiper-container">
        <div class="swiper-wrapper">
            <div class="swiper-slide swiper-slide-coupon">
                <div class="coupon_layout">
                    <img class="coupon_layout_img" src="../images/businessPlatform/banli2.png" alt="">
                    <div class="coupon_layout_des2">
                        <div class="coupon_layout_discount"><span class="couponDiscount"></span><span>折</span></div>
                        <div class="coupon_layout_content">
                            <div class="couponDescription"></div>
                            <div class="coupon_layout_date"></div>
                        </div>
                    </div>
                    <div class="coupon_layout_btn2">立即使用</div>
                    <img class="coupon_layout_close" src="../images/businessPlatform/banli_close.png" alt="">
                </div>
            </div>
        </div>
        <div class="swiper-pagination"></div>
    </div>
</div>
<div class="swiper-reward">
    <div class="swiper-slide">
        <div class="coupon_layout">
            <img class="coupon_layout_img" src="../images/businessPlatform/banli1.png" alt="">
            <div class="coupon_layout_des"></div>
            <div class="coupon_layout_btn">立即领取</div>
            <div style="height: 1px;"></div>
            <img class="coupon_layout_close" src="../images/businessPlatform/banli_close.png" alt="">
        </div>
    </div>
</div>
<div id="secondCouponResultFloat"></div>

}
<div class="service-wraper hidden">
    <div class="mask"></div>
    <div class="service-content">
        <img class="QRcode" />
        <div class="close" onclick="closeservice()"></div>
    </div>
</div>
</template>
<script>
    var isAbTestShare = '';
    var u = navigator.userAgent;
    var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1; //android终端
    var cityCode = '<%= user.cityCode %>'||'';
    var userId = "<%= user.uid %>";
    var chinaMobileStatus = '<%= user.chinaMobileStatus %>';//添加异网标识
    var telToken_gio = "<%= telToken_gio %>";
    var uidToken_gio = "<%= uidToken_gio %>";
    var dataJhy = [], isShopActivityTime = '<%= isShopActivityTime %>', listProductId = '<%= listProductId %>', pageid = '<%= pageid %>', normid = '<%= normid %>', resultType = '<%= type %>', productCode = '<%= productCode %>';
    var channel = "<%= user.channel %>", phoneNumber = "<%= user.telephone %>", provinceCode = "<%= user.provinceCode %>", shopProvinceCode = "<%= shopProvinceCode %>", transid = '<%= transid %>', sign = '<%= sign %>', cityProduct = '<%= cityProduct %>', shopplace = '<%= shopplace %>', couponWhiteProvinces = JSON.parse('<%- couponWhiteProvinces %>' || "[]");
</script>
<script type="text/javascript" src="../js/shared/jquery.min.js"></script>
<script type="text/javascript" src="../js/platform.js?v=20190725"></script>
<script type="text/javascript" src="../js/new/home/swiper.min.js"></script>
<script type="text/javascript" src="../js/new/home/laytpl.js"></script>
<script type="text/javascript" src="https://res.wx.qq.com/open/js/jweixin-1.3.2.js"></script>

<% include ../template/shopRecommendAB.html %>
<% include ../template/rank.html %>
<% include ../template/moneyTreeTips.html %>
<% include ../secondCoupon/secondCouponResultFloat.html %>
<% include ../secondCoupon/secondCouponResult.html %>
<script type="text/javascript" src="../js/businessPlatform/nativeShare.js?v=20181128"></script>
<script type="text/javascript" src="../js/shared/clipboard.min.js"></script>
<script type="text/javascript" src="../js/businessPlatform/result.js?v=20191219"></script>
<script type="text/javascript" src="../js/new/shared/common.js?v=20190725"></script>
<!-- <script type="text/javascript" src="../js/businessPlatform/chinaMobileCode/liaoN_sdc_load.js"></script> -->
<script type="text/javascript" src="../js/businessPlatform/utils/index.js"></script>

</body>
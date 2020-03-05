<template>
  <!--办理结果页办理赠券组件-->
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
         isTitleFlag = false 
         }
         if(data.type == 'draw'){
          draw_data = data }}
         }else if(data.type ==  'order'){ 
           threeGift_data = data
        else if(data.type == '2'){ 
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
        else if(data.type == '1'){
        <a href="{{data.data.gift.webUrl}}&serialId={{data.data.gift.serialId ? data.data.gift.serialId : ''}}" data-id="{{data.atyId}}" data-index="{{index}}" onclick="getFloatGio('{{data.data.gift.productName}}','{{data.atyId}}')">
          <li class="couponCard type_product"><img src="../images/businessPlatform/coupon/type_product_tehui.png"
                                                   alt="">
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
         title_flag = 'true' 
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
       title_flag = 'true' 
         }else if(data.type == '4'){
        <li class="couponCard coupon_undefined" data-id="{{data.atyId}}" data-index="{{index}}" onclick="getFloatGio('请求失败')"></li>
         title_flag = 'true'
         }else if(data.type == '3'){
        <li class="couponCard noPrize">
          <p>很遗憾，奖品已被抢光了~</p>
        </li>
         if(title_flag == 'undefined' || title_flag == 'false'){
         title_flag = 'false'
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
             threeGift_data.presents.sort(function(a,b){
             return a.order-b.order
             })
             threeGift_data.presents.forEach(function(item){
            <img src="{{item.imageUrl }}" alt="">
             })
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

<style>
  .secondCoupon_result{
    position: fixed;
    z-index: 9999;
    top: 0;
    width: 100%;
    height: 100%;
  }
  .secondCoupon_close{
    position: absolute;
    right: 0.23rem;
    top: 1.06rem;
    width: 0.24rem;
    height: 0.24rem;
    z-index: 9;
  }
  .secondCoupon_result_body{
    position: relative;
    z-index: 10;
    width: 2.9rem;
    background: url("../images/businessPlatform/coupon/secondCoupon_result_content.png") no-repeat;
    background-size: 100%;
    background-color: #B50E3C;
    margin: 1.25rem auto 0px auto;
    border-radius: 20px 20px 20px 20px;
    padding-top: 0.8rem;
  }
  .secondCoupon_result_title{
    display: flex;
    display: -webkit-flex;
    justify-content: space-between;
    -webkit-justify-content: space-between;
    width: 1.87rem;
    margin: 0 auto;
  }
  .secondCoupon_result_title span{
    font-size: 0.16rem;
    font-family: PingFangTC-Semibold;
    font-weight: 600;
    color: rgba(255,238,191,1);
    position: relative;
    bottom: 0.06rem;
  }
  .title_left{
    width: 0.145rem;
    height: 0.145rem;
    background: url("../images/businessPlatform/coupon/title_left.png") no-repeat;
    background-size: 100%;
  }
  .title_right{
    width: 0.145rem;
    height: 0.145rem;
    background: url("../images/businessPlatform/coupon/title_right.png") no-repeat;
    background-size: 100%;
  }
  .secondCoupon_result_wrapper{
    width: 2.7rem;
    margin: 0 auto;
    max-height: 3rem;
    overflow-y: scroll;
    padding-top: 0.06rem;
  }
  .secondCoupon_result_wrapper::-webkit-scrollbar{
    display: none;
  }
  .couponCard{
    width: 2.7rem;
    height: 0.86rem;
    margin-bottom: 0.1rem;
  }
  .type_coupon{
    display: flex;
    display: -webkit-flex;
    background: url("../images/businessPlatform/coupon/type_coupon.png") no-repeat;
    background-size: cover;
  }
  .type_coupon_left{
    width: 0.26rem;
    height: 0.86rem;
    text-align: center;
    padding-top: 0.15rem;
    box-sizing: border-box;
    font-size:0.15rem;
    font-family:PingFangTC-Semibold;
    font-weight:600;
    line-height:0.19rem;
    color: #FEAB16;
  }
  .type_coupon_content{
    width: 1.72rem;
    padding-left: 0.07rem;
  }
  .coupon_title{
    width: auto;
    height: 0.3rem;
    font-size: 0.18rem;
    font-family:PingFangTC-Medium;
    font-weight:500;
    color: #474747;
    margin: 0.17rem 0px 0.02rem 0px;
    overflow: hidden;
    text-overflow:ellipsis;
    white-space: nowrap;
  }
  .coupon_limit{
    width: auto;
    height: 0.14rem;
    color: #474747;
    font-family:PingFangTC-Regular;
    font-weight:400;
    font-size: 0.1rem;
    line-height: 0.14rem;
    margin-bottom: 0.02rem;
  }
  .coupon_validTime{
    width: auto;
    height: 0.14rem;
    color: #999999;
    font-family:PingFangTC-Regular;
    font-weight:400;
    font-size: 0.1rem;
    line-height: 0.14rem;
    display: block;
    overflow: hidden;
    width: 1.2rem;
  }
  .type_coupon_right{
    width: 0.72rem;
    height: 0.86rem;
    padding-top: 0.31rem;
    box-sizing: border-box;
  }
  .coupon_btn{
    width: 0.62rem;
    height: 0.24rem;
    border-radius: 0.12rem;
    background-image: linear-gradient(90deg, #FF7070 0%, #FB3636 100%);
    font-family:PingFangTC-Semibold;
    font-weight:600;
    color: #FFFFFF;
    text-align: center;
    line-height: 0.24rem;
    font-size: 0.11rem;
    margin: 0 auto;
  }
  .type_product{
    display: flex;
    display: -webkit-flex;
    position: relative;
    background: url("../images/businessPlatform/coupon/type_product.png") no-repeat;
    background-size: cover;
  }
  .type_product img{
    position: absolute;
    width: 0.47rem;
    height: 0.47rem;
  }
  .type_product_content{
    width: 1.98rem;
    padding: 0.09rem 0px 0px 0.1rem;
  }
  .type_product_content img{
    width: 0.68rem;
    height: 0.68rem;
    position: inherit;
    margin-right: 0.1rem;
    float: left;
  }
  .product_title{
    width: 1.1rem;
    font-size: 0.14rem;
    font-family: PingFangTC-Medium;
    color: #474747;
    overflow:hidden;
    text-overflow:ellipsis;
    display:-webkit-box;
    -webkit-box-orient:vertical;
    -webkit-line-clamp:2;
  }
  .product_price{
    font-size: 0.14rem;
    font-family:PingFangTC-Semibold;
    font-weight:600;
    color: #FB3F3F;
    position: absolute;
    bottom: 0.09rem;
    left: 0.88rem;
  }
  .type_external{
    display: flex;
    display: -webkit-flex;
    background: url("../images/businessPlatform/coupon/type_external.png") no-repeat;
    background-size: cover;
  }
  .type_external_content {
    width: 1.98rem;
    padding: 0.23rem 0px 0px 0.54rem;
    box-sizing: border-box;
  }
  .external_text{
    font-size: 0.14rem;
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
  .secondCoupon_result_foot{
    padding: 0.1rem 0px 0.2rem 0px;
  }
  .secondCoupon_result_foot p{
    text-align: center;
    width: 2.5rem;
    margin: 0 auto;
    color: #FFEEBF;
    font-size: 0.11rem;
    font-family:PingFangTC-Regular;
    line-height:0.15rem;
  }
  .coupon_undefined{
    background: url("../images/businessPlatform/coupon/sendRefresh2L.png") no-repeat;
    background-size: 100%;
  }
  .noPrize{
    display: flex;
    display: -webkit-flex;
    align-items: center;
    -webkit-align-items: center;
    position: relative;
    background: url("../images/businessPlatform/coupon/noPrize.png") no-repeat;
    background-size: 100%;
    text-align: center;
  }
  .noPrize p{
    font-size: 0.14rem;
    font-family: PingFangTC-Semibold;
    font-weight: 500;
    color: rgba(255,255,255,1);
    margin-left: 1rem;
    overflow:hidden;
    text-overflow:ellipsis;
    display:-webkit-box;
    -webkit-box-orient:vertical;
    -webkit-line-clamp:2;
    text-align: start;
  }
  /*三单有礼样式*/
  .threeGift{
    position: relative;
  }
  .threeGift .secondCoupon_result_title{
    width: 2.07rem;
    padding-top: 5px;
  }
  .threeGift_back{
    display: flex;
    display: -webkit-flex;
    justify-content: space-around;
    -webkit-justify-content: space-around;
    width: 2.7rem;
    height: 1.31rem;
    background-color: #FFB334;
    border-radius: 5px;
    padding: 8px 7px 0px 7px;
    box-sizing: border-box;
  }
  .threeGift_back img{
    width: auto;
    height: 1.01rem;
    border-radius: 4px;
  }
  .threeGift_cover{
    position: absolute;
    bottom: 0px;
    width: 2.7rem;
    height: 0.46rem;
    background: url("../images/businessPlatform/coupon/threeGift_cover.png") no-repeat;
    background-size: 100%;
  }
  .threeGift_cover span{
    display: block;
    width: 1.35rem;
    height: 0.24rem;
    border-radius: 0.12rem;
    background-image: linear-gradient(0deg, #FF7070 0%, #FB3636 100%);
    background-image: -webkit-linear-gradient(0deg, #FF7070 0%, #FB3636 100%);
    font-size: 0.12rem;
    font-family: PingFangTC-Semibold;
    font-weight: 600;
    color: rgba(255,255,255,1);
    text-align: center;
    line-height: 0.24rem;
    margin: 0.16rem auto 0px auto;
  }
  /*新年抽签样式*/
  .draw{
    margin-bottom: 0.22rem;
  }
  .draw_back{
    display: flex;
    display: -webkit-flex;
    width: 2.7rem;
    height: 1.2rem;
    background: url("../images/businessPlatform/coupon/draw_cover.png") no-repeat;
    background-size: 100%;
  }
  .draw_left{
    display: flex;
    display: -webkit-flex;
    align-items: center;
    -webkit-align-items: center;
    width: 0.39rem;
    height: 1.2rem;
    box-sizing: border-box;
    font-size: 0.14rem;
    padding: 0.34rem 0.13rem 0 0.13rem;
    font-family: PingFangTC-Medium;
    line-height: 0.15rem;
    font-weight: 600;
    color: #E7221A;
  }
  .draw_content{
    position: relative;
    width: 2.31rem;
    height: 1.2rem;
    font-size: 0.13rem;
    box-sizing: border-box;
    padding-top: 0.16rem;
  }
  .draw_explain{
    width: 2.31rem;
    height: 0.26rem;
    box-sizing: border-box;
    padding: 0.05rem 0.1rem;
    font-size: 0.1rem;
    font-family: PingFangTC-Semibold;
    font-weight: 600;
    color: #E7221A;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    margin-bottom: 0.1rem;
  }
  .draw_title{
    width: 1.65rem;
    height: 0.2rem;
    font-size: 0.14rem;
    font-family: PingFangTC-Medium;
    padding-left: 0.1rem;
    font-weight: 500;
    color: #474747;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    box-sizing: border-box;
  }
  .draw_limit{
    width: 1.65rem;
    height: 0.14rem;
    color: #474747;
    padding-left: 0.1rem;
    font-family: PingFangTC-Regular;
    font-weight: 400;
    font-size: 0.1rem;
    line-height: 0.14rem;
    margin-bottom: 0.02rem;
    box-sizing: border-box;
  }
  .draw_validTime{
    width: auto;
    height: 0.14rem;
    color: #999999;
    font-family:PingFangTC-Regular;
    font-weight:400;
    font-size: 0.1rem;
    line-height: 0.14rem;
    padding-left: 0.1rem;
  }
  .draw_right{
    display: inline-block;
    position: absolute;
    right: 0.11rem;
    top: 0.62rem;
  }
  .draw_btn{
    width: 0.62rem;
    height: 0.24rem;
    border-radius: 0.12rem;
    background-image: linear-gradient(90deg, #FF7070 0%, #FB3636 100%);
    font-family: PingFangTC-Semibold;
    font-weight: 600;
    color: #FFFFFF;
    text-align: center;
    line-height: 0.24rem;
    font-size: 0.11rem;
  }
  /*新年抽签样式结束*/
  /*刮刮卡样式开始*/
  .guaguaka_float{
    position: relative;
  }
  .guaCeng_float{
    position: absolute;
    left: 0px;
    bottom: 0px;
    width: 2.7rem;
    height: 0.86rem;
  }
  .guaCeng_float_left{
    width: 0.26rem;
    height: 0.86rem;
  }
  .guaCeng_float_right{
    position: absolute;
    right: 0px;
    bottom: 0px;
    width: 2.44rem;
    height: 0.86rem;
    overflow: hidden;
  }
  /*刮刮卡样式结束*/
</style>

<script>
  var isTitleFlag = true;
function getPrice(a,b) {
  var price = parseInt(a);
  var discountPrice = parseInt(b);
  return discountPrice ? discountPrice/100 : price/100;
}

function getCouponType(type) {
  if(type == 1){
    return '优惠码'
  }else if(type == 2){
    return '流量券'
  }else if(type == 3){
    return '话费券'
  }else if(type == 5) {
    return '折扣券'
  }else if(type == 6) {
    return '满返券'
  }else if(type == 7) {
    return '现金券'
  }else{
    return '优惠券'
  }
}

function getFloatGio(name,couponId) {
  if(getQueryString('secKillActivityId') && getQueryString('secKillActivityId')!='' ){

  }else{
      gio('track', 'use_immediately_cilck', {
      'product_Id': getQueryString('productId')||'',
      'pageid_prov': provinceCode||'',
      'second_channel': getQueryString('secondChannel')||'',
      'first_channel': channel,
      'gift_name': name||'',
      'position': '办理结果页弹窗',
      'activity_id':couponId||''
    });
  }
}

function getDraw(title){
  var prizePool = [{
    title: "65寸海信电视机", drawTitle: "人生赢家", drawText: "办理移动4G业务后，喜提65寸电视机！"
  },{
    title: "美菱双开门冰箱", drawTitle: "梦想成真", drawText: "听说你昨晚梦里想要台冰箱？"
  },{
    title: "小天鹅滚筒洗衣机", drawTitle: "天降横财", drawText: "领洗衣机的姿势请摆好"
  },{
    title: "100元话费券", drawTitle: "锦鲤", drawText: "世界上本没有锦鲤，转发的人多了，也就有了锦鲤"
  },{
    title: "50元话费券", drawTitle: "暴富", drawText: "何以解忧，唯有暴富"
  },{
    title: "20元话费券", drawTitle: "社会人", drawText: "小猪佩奇身上纹，掌声送给社会人"
  },{
    title: "10元话费券", drawTitle: "洒脱", drawText: "深谙人情又无需世故"
  },{
    title: "5元话费券", drawTitle: "有趣灵魂", drawText: "脑洞大开，做最闪亮的戏精"
  },{
    title: "2元话费券", drawTitle: "告别吃土", drawText: "包子只吃馅儿，酸奶只舔盖儿，有钱任性！"
  },{
    title: "1元话费券", drawTitle: "知足", drawText: "知足不是停止努力，是学会珍惜"
  },{
    title: "仓鼠优选保温杯兑换券", drawTitle: "养生", drawText: "手捧保温杯，枸杞水就位"
  },{
    title: "京东全品类券", drawTitle: "守住发际线", drawText: "知否知否，应是霸王在手"
  },{
    title: "仓鼠优选耳机兑换券", drawTitle: "C位出道", drawText: "做整条街（gai）最靓的仔"
  },{
    title: "拼多多随机现金红包", drawTitle:     "狂吃不胖", drawText: "确认过眼神，你是有曲线的精致猪猪"
  },{
    title: "拼多多转盘", drawTitle: "颜值爆表", drawText: "颜值飙升新高度，衣食住行全刷脸"
  },{
    title: "车主无忧50元加油礼包", drawTitle: "自由", drawText: "2019你更享受一脚油门，说走就走的自由"
  },{
    title: "酒仙网268元红酒兑换券", drawTitle: "桃花", drawText: "剩斗士已修成正果，人生赢家非你莫属"
  }
  ];

  return prizePool.filter(function (item,index) {
    return item.title == title
  });
}

//刮刮卡涂层canvas代码
//  初始化canvas
  function initFloatCanvas() {
//初始化canvas并获取画布高度
    var canvas = document.getElementById('canvas_float');
    canvas.width = $('.guaCeng_float_right').width()+1; //加1为了去除画布白边
    canvas.height = $('.guaCeng_float_right').height();
    var ctx = canvas.getContext("2d");

    //刮刮卡图层
    var guaguaBack = document.getElementById("guaguaBack");
    ctx.drawImage(guaguaBack, 0, 0, canvas.width, canvas.height);
//    ctx.beginPath();
//    ctx.fillStyle = "#939393";
//    ctx.rect(0, 0, canvas.width, canvas.height);
//    ctx.closePath();
//    ctx.fill();
    //刮刮卡图层文字
//    ctx.fillStyle = 'red';
//    ctx.textAlign = "center";
//    ctx.textBaseline = "middle";
//    ctx.font = '24px "微软雅黑"';
//    ctx.fillText('刮奖区', canvas.width / 2, canvas.height / 2);


    var isDown = false; //鼠标是否按下标志
    var pointerArr = []; //鼠标移动坐标数组
    var xPointer = 0;//鼠标当前x坐标
    var yPointer = 0;//鼠标当前y坐标
    var canvasPosition = canvas;


    //pc，移动事件兼容写法
    var hastouch = "ontouchstart" in window ? true : false,
      tapstart = hastouch ? "touchstart" : "mousedown",
      tapmove = hastouch ? "touchmove" : "mousemove",
      tapend = hastouch ? "touchend" : "mouseup";

    //鼠标按下
    canvas.addEventListener(tapstart, function (e) {
      isDown = true;
      xPointer = hastouch ? e.targetTouches[0].pageX - $("#canvas_float").offset().left : e.clientX - $("#canvas_float").offset().left;
      yPointer = hastouch ? e.targetTouches[0].pageY - $("#canvas_float").offset().top : e.clientY - $("#canvas_float").offset().top;
      pointerArr.push([xPointer, yPointer]);
      circleReset();
    });


    //鼠标按下后拖动
    canvas.addEventListener(tapmove, function (e) {
      if (isDown) {
        xPointer = hastouch ? e.targetTouches[0].pageX - $("#canvas_float").offset().left : e.clientX - $("#canvas_float").offset().left;
        yPointer = hastouch ? e.targetTouches[0].pageY - $("#canvas_float").offset().top : e.clientY - $("#canvas_float").offset().top;
        pointerArr.push([xPointer, yPointer]);
        circleReset();
      }
    });


    //鼠标抬起取消事件
    canvas.addEventListener(tapend, function () {
      isDown = false;
      pointerArr = [];
      setTimeout(function(){
        $('.guaCeng_float').addClass('hidden');
        $('.guaCeng').addClass('hidden');
      },10)
    });


    //圆形橡皮檫
    function circleReset() {
      ctx.beginPath();
      ctx.moveTo(pointerArr[0][0], pointerArr[0][1]);
      ctx.lineCap = "round";　　 //设置线条两端为圆弧
      ctx.lineJoin = "round";　　 //设置线条转折为圆弧
      ctx.lineWidth = 30;
      ctx.globalCompositeOperation = "destination-out";
      if (pointerArr.length == 1) {
        ctx.lineTo(pointerArr[0][0] + 1, pointerArr[0][1] + 1);
      } else {
        for (var i = 1; i < pointerArr.length; i++) {
          ctx.lineTo(pointerArr[i][0], pointerArr[i][1]);
          ctx.moveTo(pointerArr[i][0], pointerArr[i][1]);
        }
      }
      ctx.closePath();
      ctx.stroke();
    }
  }


</template>
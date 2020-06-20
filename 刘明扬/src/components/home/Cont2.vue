<template>
  <div class="safe-inset white-bg">
    <div class="safe-inset-content">
      <div class="service">
        <div class="section-title">
          <div class="main">为你提供的服务</div>
          <div class="sub">Provide services</div>
        </div>
        <div class="poster-wrap">
          <div class="poster-item-wrap">
            <div class="hover-poster-item" style="background-image:url(https://static.zhong.tourye.cn/meta/pc/images/service/联合赛事底图.png)">
              <div class="hover-poster-content">
                <div class="hover-poster-title">联合赛事</div>
                <div class="hover-poster-sub">订制的专属品牌IP越野赛事</div>
              </div>
            </div>
          </div>
          <div class="poster-item-wrap">
            <div class="hover-poster-item" style="background-image:url(https://static.zhong.tourye.cn/meta/pc/images/service/团建赛事底图.png)" >
              <div class="hover-poster-content">
                <div class="hover-poster-title">团建赛事</div>
                <div class="hover-poster-sub">和500强一起团建的越野赛事</div>
              </div>
            </div>
          </div>
          <div class="poster-item-wrap">
            <div class="hover-poster-item" style="background-image:url(https://static.zhong.tourye.cn/meta/pc/images/service/赞助赛事底图.png)" >
              <div class="hover-poster-content">
                <div class="hover-poster-title">赛事赞助</div>
                <div class="hover-poster-sub">面向百万高净值人群线上下传播</div>
              </div>
            </div>
          </div>
          <div class="poster-item-wrap">
            <div class="hover-poster-item" style="background-image:url(https://static.zhong.tourye.cn/meta/pc/images/service/赛事咨询底图.png)" >
              <div class="hover-poster-content">
                <div class="hover-poster-title">赛事咨询</div>
                <div class="hover-poster-sub">为您的高品质赛事出谋划策</div>
              </div>
            </div>
          </div>
          <div class="poster-item-wrap">
            <div class="hover-poster-item" style="background-image:url(https://static.zhong.tourye.cn/meta/pc/images/service/互联网.png)" >
              <div class="hover-poster-content">
                <div class="hover-poster-title">互联网+</div>
                <div class="hover-poster-sub">给您的事业插上互联网翅膀</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Cont2'
}
</script>

<style scoped>
.white-bg {
    background-color: #fff;
}
.safe-inset {
    text-align: center;
}
.safe-inset .safe-inset-content {
    display: inline-block;
    width: 1200px;
    text-align: left;
}
.customer, .service {
    padding: 180px 0;
}
.section-title .main {
    font-size: 27px;
    line-height: 37px;
    color: #333;
    font-weight: 700;
}
.section-title .sub {
    font-size: 18px;
    line-height: 30px;
    color: #333;
    font-weight: 100;
}
.poster-item-wrap, .poster-wrap {
    text-align: center;
    vertical-align: middle;
}
.poster-wrap {
    padding-top: 40px;
}
.poster-item-wrap {
    display: inline-block;
    padding: 0 5px;
}
.poster-item-wrap, .poster-wrap {
    text-align: center;
    vertical-align: middle;
}
.hover-poster-item {
    display: inline-block;
    width: 220px;
    height: 300px;
    color: #fff;
    background: 50% no-repeat;
    background-size: cover;
    text-align: center;
}
.hover-poster-item .hover-poster-content {
    position: relative;
    width: 100%;
    height: 100%;
    transition-duration: .7s;
    background-color: transparent;
}
.hover-poster-item .hover-poster-content:hover {
    background-color: #333;
}
.hover-poster-item .hover-poster-title {
    font-weight: 700;
    -webkit-transform: translate3d(0,205px,0);
    transform: translate3d(0,205px,0);
}
.hover-poster-item .hover-poster-content:hover .hover-poster-title {
    -webkit-transform: translate3d(0,157px,0);
    transform: translate3d(0,157px,0);
}
.hover-poster-item .hover-poster-content:hover .hover-poster-sub {
    opacity: 1;
    -webkit-transform: translate3d(0,205px,0);
    transform: translate3d(0,205px,0);
}
.hover-poster-item .hover-poster-placeholder, .hover-poster-item .hover-poster-title {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    font-size: 20px;
    line-height: 28px;
    transition-duration: .7s;
}
.hover-poster-item .hover-poster-sub {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    font-size: 16px;
    line-height: 22px;
    font-weight: 300;
    opacity: 0;
    transition-duration: .7s;
    -webkit-transform: translate3d(0,253px,0);
    transform: translate3d(0,253px,0);
}
</style>

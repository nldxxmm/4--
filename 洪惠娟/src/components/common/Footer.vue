<template>
  <div class="footer">
    <div class="content clearfix">
      <div class="left">
        <div class="company">商务合作：bd@artstep.cn</div>
        <div class="item email">总部·地址：北京市石景山区实兴大街30号院3号楼2层</div>
        <div class="item address">媒体采访：marketing@artstep.cn</div>
        <div class="item email">总部·地址：北京市石景山区实兴大街30号院3号楼2层</div>
        <div class="item fax">成都·地址：成都市高新区香年广场T3-9楼</div>
      </div>
      <div class="right">
        <div class="tips">关注艺步</div>
        <img class="code" src="../../../static/img/footer_vx.png" alt="公众号：陶冶户外" />
      </div>
    </div>
    <div class="copyright-wrap">
      <div class="copyright">
        COPYRIGHT(©)2018&nbsp; 友情链接 | seo@artstep.cn 佛山华南IT学院河南继续教育网东北师范大学网络教育昆山少儿英语教育学在职研究生百色课外辅导无锡考研辅导普智私董学院&nbsp;&nbsp;
        <a
          href="http://www.beian.miit.gov.cn"
          style="color:red"
        >京ICP备18041566号-1</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Footer'
}
</script>

<style scoped>
.footer {
  width: 100%;
  min-width: 1200px;
  height: 432px;
  background-color: #555;
  text-align: center;
}
.footer .content {
  display: inline-block;
  width: 1200px;
  padding-top: 60px;
  padding-bottom: 60px;
  height: 352px;
  margin-left: auto;
  margin-right: auto;
  line-height: 28px;
  font-size: 15px !important;
  color: #fff;
  background-color: #555;
  box-sizing: border-box;
}
.footer .content .left {
  float: left;
  text-align: left;
}
.footer .content .left .item.address {
  margin-top: 50px;
}
.footer .content .left .item {
  margin-top: 14px;
  font-weight: 200;
}
.footer .content .left .item {
  margin-top: 14px;
  font-weight: 200;
}
.footer .content .left .item {
  margin-top: 14px;
  font-weight: 200;
}
.footer .content .right {
  float: right;
}
.footer .content .right .tips {
  margin-top: 32px;
}
.footer .content .right .code {
  display: block;
  margin-top: 14px;
  width: 130px;
  height: 130px;
}
.clearfix:after {
  content: "";
  display: block;
  clear: both;
}
.footer .copyright-wrap {
  line-height: 80px;
  background-color: #f0f0f0;
  text-align: right;
  color: #333;
  font-size: 20px;
}
.footer .copyright-wrap .copyright {
  width: 1200px;
  margin-left: auto;
  margin-right: auto;
  font-size:12px;
}
</style>

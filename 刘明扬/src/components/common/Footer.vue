<template>
  <div class="footer">
    <div class="content clearfix">
      <div class="left">
        <div class="company">北京陶冶正和旅游文化有限公司</div>
        <div class="item address">地址：北京市海淀区北清路68号用友产业园西区1号楼C座4段南</div>
        <div class="item email">邮箱：chendehang@tourye.com</div>
        <div class="item fax">传真：010-56429581</div>
      </div>
      <div class="right">
        <div class="tips">扫一扫关注我们</div>
        <img class="code" src="../../../static/img/footer_vx.png" alt="公众号：陶冶户外" />
      </div>
    </div>
    <div class="copyright-wrap">
      <div class="copyright">
        COPYRIGHT(©)2018&nbsp; 北京陶冶正和旅游文化有限公司&nbsp;&nbsp;
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
  background-color: #666;
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
  font-size: 20px !important;
  color: #fff;
  background-color: #666;
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
}
</style>

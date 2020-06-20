<template>
  <div class="safe-inset default-bg" id="nextScreen">
    <div class="safe-inset-content">
      <div class="about clearfix">
        <div class="logo-wrap col col-6">
          <img class="logo" src="../../../static/img/home/cont1_logo.png" alt="陶冶户外官网" />
        </div>
        <div class="col col-6">
          <div class="section-title">
            <div class="main">用艺步帮助您招生</div>
            <div class="sub">艺步招生工具，帮助您低成本高效获客</div>
          </div>
          <div class="desc">
             艺步这套系统简单好用上手快，我们大概也就两天时间的学习，就正式用起来了，这套系统解决了很多管理问题，比如排课、课前提醒、学生情况、上课情况、财务情况等，基本上摆脱了以前的手工记录，表格这些，物有所值。祝艺步越干越好！</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Cont1'
}
</script>

<style scoped>
.default-bg {
    background-color: #f2f2f2;
}
.safe-inset {
    text-align: center;
}
.safe-inset .safe-inset-content {
    display: inline-block;
    width: 1200px;
    text-align: left;
}
.about {
    padding: 170px 0;
}
.col.col-6 {
    width: 50%;
}
.logo-wrap {
    text-align: center;
    vertical-align: middle;
}
.col {
    float: left;
}
.logo {
    width: 500px;
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
.about .desc {
    padding-top: 40px;
    font-size: 16px;
    line-height: 30px;
    color: #666;
}
.clearfix:after {
    content: "";
    display: block;
    clear: both;
}
</style>

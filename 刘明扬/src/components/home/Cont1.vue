<template>
  <div class="safe-inset default-bg" id="nextScreen">
    <div class="safe-inset-content">
      <div class="about clearfix">
        <div class="logo-wrap col col-6">
          <img class="logo" src="../../../static/img/home/cont1_logo.png" alt="陶冶户外官网" />
        </div>
        <div class="col col-6">
          <div class="section-title">
            <div class="main">关于陶冶</div>
            <div class="sub">About Tourye</div>
          </div>
          <div class="desc">
            陶冶户外是一家为企业家、高净值人群及户外运动爱好者，提供户外体验式赛事的服务平台。陶冶专注户外运动服务领域近10年，针对中国丰富的户外地形地貌，打造了“一生必走的9大路线”，成为了中国户外赛事领域的超级IP。“一生必走的9大路线”，包含戈壁行、沙漠行、古道行、山地行、雨林行、雪域行、草原行、宝岛行、朝圣行，9种定制的户外赛事体验路线。</div>
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

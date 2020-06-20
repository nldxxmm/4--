<template>
  <div class="header clearfix">
    <div class="safe-inset">
      <div class="brand">
        <img src="../../../static/img/logo.png" class="img" />
      </div>
      <div class="module-wrap">
        <router-link to="/" class="module">首页</router-link>
        <router-link to="/route" class="module">解决方案</router-link>
        <router-link to="/match" class="module">价格</router-link>
        <router-link to="/leagueBuilding" class="module">APP下载</router-link>
        <router-link to="/internet" class="module">合作伙伴</router-link>
        <router-link to="/work" class="module">行业资讯</router-link>
         <router-link to="/about" class="module">关于我们</router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Nav',
  data () {
    return {
      msg: 'pp'
    }
  },
  mounted () {
    window.addEventListener('scroll', function () {
      if (document.documentElement.scrollTop > 20) {
        document.getElementsByClassName('header')[0].style.backgroundColor = '#444'
      } else {
        document.getElementsByClassName('header')[0].style.backgroundColor = ''
      }
    })
  }
}
</script>

<style scoped>
.header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 80px;
  text-align: center;
  z-index: 10;
}
.header .safe-inset {
  display: inline-block;
  width: 1200px;
}
.safe-inset {
  text-align: center;
}
.header .brand {
  float: left;
  padding-top: 28px;
}
.header .module-wrap {
  float: right;
  padding-top: 30px;
  font-size: 20px;
  line-height: 28px;
}
.header .brand .img {
  width: 102px;
  height: 32px;
}
.header .module-wrap .module.router-link-exact-active,
.header .module-wrap .module:hover {
  border-bottom: 2px solid #fff;
}
.header .module-wrap .module {
  padding-bottom: 2px;
  margin: 0 30px;
  color: #fff;
  cursor: pointer;
  border-bottom: 2px solid transparent;
  transition-duration: 0.3s;
}
</style>

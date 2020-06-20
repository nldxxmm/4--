<template>
  <div class="bg-wrap header">
    <div class="slogan-wrap">
    </div>
  </div>
</template>

<script>
export default {
  name: 'Header',
  mounted () {
    function header () {
      document.getElementsByClassName('bg-wrap')[0].style.height = document.documentElement.clientHeight + 'px'
    }
    header()
    window.addEventListener('resize', header)
  }
}
</script>

<style>
.bg-wrap {
  position: relative;
  width: 100%;
  height: 100%;
  background: 50% no-repeat;
  background-size: cover;
  font-weight: 100;
}
.bg-wrap{
  height: 315px;
  background-image: url(../../../static/img/home/home_headerbg.jpg)
}
.slogan-wrap {
    position: absolute;
    left: 50%;
    top: 50%;
    -webkit-transform: translate3d(-80%,-50%,0);
    transform: translate3d(-80%,-50%,0);
}
.slogan {
    font-size: 70px;
    line-height: 97px;
    color: #fff;
}
.slogan {
    font-size: 70px;
    line-height: 97px;
    color: #fff;
}
.divider {
    height: 60px;
    line-height: 60px;
}
.divider:after {
    content: "";
    display: inline-block;
    width: 100px;
    height: 6px;
    vertical-align: middle;
    background-color: #fff;
}
.sub-slogan {
    font-size: 27px;
    line-height: 38px;
    color: #fff;
}
.bg-wrap .icon {
    position: absolute;
    left: 50%;
    bottom: 50px;
    font-size: 62px;
    color: #fff;
    -webkit-transform: translate3d(-50%,0,0);
    transform: translate3d(-50%,0,0);
    cursor: pointer;
}
</style>

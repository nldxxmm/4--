<template>
  <div class="container">
    <Header></Header>
    <Cont1></Cont1>
    <Cont2></Cont2>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from '../components/home/Haeder'
import Cont1 from '../components/home/Cont1'
import Cont2 from '../components/home/Cont2'
import Footer from '../components/common/Footer'
export default {
  name: 'Home',
  components: {
    Header,
    Cont1,
    Cont2,
    Footer
  }
}
</script>

<style scoped>
.white-bg {
    background-color: #fff;
}
.safe-inset {
    text-align: center;
}
</style>

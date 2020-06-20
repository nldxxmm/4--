<template>
  <div id="app">
    <Nav></Nav>
    <router-view></router-view>
  </div>
</template>

<script>
import Nav from './components/common/Nav'
export default {
  name: 'App',
  components: {
    Nav
  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
}
a,
a:hover {
  text-decoration: none;
}
</style>

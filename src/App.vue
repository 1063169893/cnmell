<template>
  <div id="app">
    <Home msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import Home from 'parge/Home'

export default {
  name: 'app',
  components: {
    Home
  }
}
</script>

<style lang="stylus" scoped>
#app
  height 100%
  width 100%


</style>



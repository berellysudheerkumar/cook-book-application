<template>
  <div id="app">
    <MainPage msg="Welcome to Your cook book application"/>
  </div>
</template>

<script>
import MainPage from './components/main/MainPage.vue'

export default {
  name: 'App',
  components: {
    MainPage
  }
}
</script>

<style lang="scss">
#app {
  overflow: hidden;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  margin-bottom: 2rem;
}
</style>

<template>
  <div class="hello">
    <Menu></Menu>
    <router-view></router-view>
    </div>
</template>

<script>
  import Menu from "../menu-bar/Menu";
export default {
  name: 'MainPage',
  components: {
    Menu
  },
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>

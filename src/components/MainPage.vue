<template>
  <div class="hello">
    <Menu></Menu>
    <div class="heading">
      <h1>{{ msg }}</h1>
    </div>
    </div>
</template>

<script>
  import Menu from "./menu-bar/Menu";
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
<style scoped>

  .heading{
    display: flex;
    justify-content: center;
    align-items: center;
    height: 20rem;
  }
</style>

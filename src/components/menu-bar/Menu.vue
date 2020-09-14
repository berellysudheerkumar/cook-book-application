<template>
  <div class="icon-bar">
    <a href="#"  @click="navigate('home')"><i class="fa fa-fw fa-home"></i><span>Home</span></a>
    <a href="#" @click="navigate('recipe')"><i class="fas fa-hamburger"></i><span>Recipe</span></a>
    <a href="#" @click="navigate('contact')"><i class="fas fa-address-book"></i><span>Contact</span></a>
  </div>
</template>
<script>
  export default {
    name: 'Menu',
    created() {
      this.$router.push('/step-one');
    },
    methods:{
      navigate : function(page) {
        switch (page) {
          case "home":
            this.$router.push('/step-one');
            break;
          case "recipe":
            this.$router.push('/step-two');
            break;

          case "contact":
            this.$router.push('/step-three');
            break;

          default:
            this.$router.push('/step-one');
            break;
        }

      }
    },
  }
</script>
<style lang="scss">
  body {margin:0;}

  .icon-bar {
    width: 100%;
    background-color: black;
    overflow: auto;
    line-height: 36px;
    -webkit-box-shadow: 5px 5px 15px 5px #000000;
    box-shadow: 2px 2px 10px 2px #000000;
  }

  .icon-bar a {
    float: left;
    width: 33.33%;
    text-align: center;
    padding: 12px 0;
    color: white;
    font-size: 36px;
    webkit-transition: font-size 0.5s;
    -moz-transition: font-size 0.5s;
    -o-transition: font-size 0.5s;
    transition: font-size 0.5s;
  }

  a:hover{
    color: white;
    font-size: 38px;
  }

  .icon-bar a:hover {
    color: white;
    text-decoration: none;
  }
  @media screen and (max-width: 725px) {
     a > span {
      display: none;
    }
  }

</style>

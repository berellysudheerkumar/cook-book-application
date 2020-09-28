<template>
  <div class="iconBar">
    <a href="#" @click="navigate('home')"><i class="fa fa-home"></i></a>
    <a href="#" @click="navigate('recipe')"><i class="fas fa-hamburger"></i></a>
    <a href="#" @click="navigate('contact')"><i class="fas fa-address-book"></i></a>
    <a href="#"><i class="fa fa-globe"></i></a>
    <a href="#"><i class="fa fa-trash"></i></a>
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
        console.log("called");
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


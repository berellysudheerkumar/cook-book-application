<template>
  <div class="sticky icon-bar">
    <a href="#" class="icon-bar__link" @click="navigate('home')"><i class="fa fa-fw fa-home"></i><span>Home</span></a>
    <a href="#" class="icon-bar__link" @click="navigate('recipe')"><i class="fas fa-hamburger"></i><span>Recipe</span></a>
    <a href="#" class="icon-bar__link" @click="navigate('contact')"><i class="fas fa-address-book"></i><span>Contact</span></a>
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


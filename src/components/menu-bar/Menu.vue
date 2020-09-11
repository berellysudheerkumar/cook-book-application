<template>
  <nav class="navbar navbar-expand-lg navbar-light">
    <a
        class="navbar-brand"
        href="#">Lorem epsum
    </a>

    <div
        class="collapse navbar-collapse"
        id="navbarSupportedContent">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item active">
          <a
              class="nav-link"
              href="#"
              @click="navigate('home')">Home
            <span class="sr-only">(current)</span>
          </a>
        </li>
        <li class="nav-item">
          <a
              class="nav-link"
              href="#"
              @click="navigate('recipe')">Recipes
          </a>
        </li>
        <li class="nav-item">
          <a
              class="nav-link"
              href="#"
              @click="navigate('contact')">Contact
          </a>
        </li>
      </ul>
    </div>
  </nav>
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

<template>
  <div class="container">
    <div class="heading float-left">
      <h1 class="float-left">Recipe page</h1>
    </div>
    <div class="createRecipe float-right">
      <button type="button" class="btn btn-primary float-right" @click="toggleModal">create</button>
      <modal-component v-if="isOpen" :recipe-lists="editRecipe"></modal-component>
    </div>

    <div class="row col-sm-12">
      <input
          class=""
          type="text"
          placeholder="Search"
          aria-label="Search"
          v-model="search"
      >
    </div>

    <card-component :cards-info="filteredList"></card-component>
  </div>
</template>
<script>
  // import Recipe from '../../classes/RecipeClass';
  import CardComponent from "./cards/CardComponent";
  import ModalComponent from "./modal/ModalComponent";
  import {recipeDetailsStore} from './store/RecipeStore'
  import {EventBus} from "../../main";

  export default {
    name: 'Recipe',
    components: {
      CardComponent,
      ModalComponent
    },
    created() {
      EventBus.$on('toggle', () => {
        this.toggleModal();
      });
    },
    mounted() {
      EventBus.$on('editRecipe', (index) => {
         this.editDetails(index);
      });
    },
    data() {
      return {
        search: '',
        isOpen: false,
        editRecipe: [],
        recipeList: recipeDetailsStore.state.recipesList
      }
    },
    methods: {
      toggleModal: function () {
        this.isOpen = recipeDetailsStore.showModal();
      },
      editDetails: function (index) {
        this.editRecipe = recipeDetailsStore.state.recipesList[index];
      }
    },
    computed: {
      filteredList: function () {
        return this.recipeList.filter(recipe => {
          return recipe.name.toString().toLowerCase().indexOf(this.search.toString()) !== -1;
        })
      }
    }
  }
</script>
<style lang="scss">

  .createRecipe {
    display: inline-flex;
  }

  input[type=text] {
    width: 20rem;
    border: 0;
    border-bottom: 2px solid #ccc;
    border-radius: 4px;
    font-size: 16px;
    background-color: white;
    background-size: 1.5rem;
    background-image: url('../../assets/search.svg');
    background-position: 10px 10px;
    background-repeat: no-repeat;
    padding: 12px 20px 12px 40px;
    -webkit-transition: width 0.4s ease-in-out;
    transition: width 0.4s ease-in-out;
  }

  textarea:focus, input:focus {
    outline: none;
    width: 100%;
    border-bottom: 2px solid #11998e;
  }

</style>

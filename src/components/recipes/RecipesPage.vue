<template>
  <div class="container p-4">
    <div class="heading float-left">
      <h1 class="float-left">Recipe page</h1>
    </div>
    <div class="createRecipe float-right">
      <button type="button" class="btn btn-primary float-right" @click="createRecipe">create</button>
      <modal-component v-if="isOpen"  :read-only-mode="readOnly" :edit-mode="editMode" :recipe-lists="editRecipe"></modal-component>
    </div>

    <div class="row col-sm-12">
      <input
          class="search"
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
      EventBus.$on('readRecipe', (index) => {
        this.toggleModal();
        this.editDetails(index);
        this.readOnly = true;
        this.editMode = false;
      });
    },
    mounted() {
      EventBus.$on('editRecipe', (index) => {
         this.editDetails(index);
         this.editMode = true;
         this.readOnly = false;
      });
    },
    data() {
      return {
        search: '',
        isOpen: false,
        editRecipe: [],
        recipeList: recipeDetailsStore.state.recipesList,
        editMode:false,
        readOnly:false
      }
    },
    methods: {
      toggleModal: function () {
        this.isOpen = recipeDetailsStore.showModal();
      },
      editDetails: function (index) {
        this.editRecipe = recipeDetailsStore.state.recipesList[index];
      },
      createRecipe: function () {
        this.editRecipe = {};
        this.toggleModal();
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

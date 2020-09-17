<template>
  <div class="container">
    <div class="create">
      <button type="button" class="create__button" @click="createRecipe"><i class="fas fa-plus mr-2"></i>create</button>
      <modal-component v-if="isOpen"  :read-only-mode="readOnly" :edit-mode="editMode" :recipe-lists="editRecipe"></modal-component>
    </div>

    <div class="search">
      <input class="search__input"
          type="text"
          placeholder="Search"
          aria-label="Search"
          v-model="search">
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
      EventBus.$on('delete', (index) => {
       recipeDetailsStore.state.recipesList.splice(index ,1);
       this.toggleModal();
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
        this.editRecipe = this.filteredList[index];
      },
      createRecipe: function () {
        this.editMode = true;
        this.readOnly = false;
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

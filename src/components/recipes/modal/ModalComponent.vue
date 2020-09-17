<template>
  <div class="submit-modal"  role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
    <div class="submit-modal__background">
      <div class="modal-content col-sm-9">
        <div class="modal-body">
          <span class="submit-modal__close" @click="closeModal"><i class="fas fa-times"></i></span>
          <div v-if="readOnlyMode" class="recipe-readOnly">
            <h1 class="container p-2 recipe__name">{{recipe.name}}</h1>
            <div class="recipe-readOnly__text">
              <p class="recipe-readOnly__left">Preparation Time</p>
              <P class="recipe-readOnly__right">{{recipe.preparationTime}}</p>
            </div>
            <div class="recipe-readOnly__text">
              <p class="recipe-readOnly__left">Ingredients</p>
              <P class="recipe-readOnly__right">{{recipe.ingredients}}</p>
            </div>
            <div class="recipe-readOnly__text">
              <p class="recipe-readOnly__left">Directions</p>
              <P class="recipe-readOnly__right">{{recipe.directions}}</p>
            </div>
            <div class="recipe-readOnly__text">
              <p class="recipe-readOnly__left">Author</p>
              <P class="recipe-readOnly__right">{{recipe.author}}</p>
            </div>
            <div class="form__group">
              <button type="button" @click="deleteRecipe()" class="btn btn-primary btn-lg btn-block">Delete</button>
            </div>
          </div>
          <div v-if="editMode">
            <h1>Create a Recipe</h1>
            <div class="form__group field">
              <input type="input"
                     class="form__field"
                     placeholder="Name"
                     name="name"
                     id='name'
                     v-model="recipe.name"
                     required />
              <label for="name" class="form__label">Name</label>
            </div>
            <div class="form__group field">
              <input type="input"
                     class="form__field"
                     placeholder="preparation time"
                     name="preparation time"
                     id='preparationTime'
                     v-model="recipe.preparationTime"
                     required />
              <label for="preparationTime" class="form__label">Preparation Time</label>
            </div>
            <div class="form__group field">
              <input type="input"
                     class="form__field"
                     placeholder="Ingredients"
                     name="ingredients"
                     id="ingredients"
                     v-model="recipe.ingredients"
                     required />
              <label for="ingredients" class="form__label">Ingredients</label>
            </div>
            <div class="form__group field">
          <textarea name="directions"
                    class="form__field"
                    id="directions"
                    placeholder="Directions"
                    v-model="recipe.directions"></textarea>
              <label for="ingredients" class="form__label">Directions</label>
            </div>
            <div class="form__group field">
              <input type="input"
                     class="form__field"
                     placeholder="Author"
                     name="author"
                     id="author"
                     v-model="recipe.author"
                     required />
              <label for="author" class="form__label">Author</label>
            </div>
            <div class="form__group">
              <button type="button" @click="saveRecipe()" class="btn btn-primary btn-lg btn-block">Save</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import Recipe from '../../../classes/RecipeClass';
  import {recipeDetailsStore} from "../store/RecipeStore";
  import {EventBus} from "../../../main";

  export default {
    name: 'modal',
    components:{
    },
    mounted() {
      this.recipe = this.recipeLists;
    },
    data(){
      return{
        recipe : recipeDetailsStore.state.recipe,
        showSummary:false
      }
    },
    props:{
      showModal:Boolean,
      recipeLists : {},
      readOnlyMode:Boolean,
      editMode:Boolean
    },
    methods:{
      closeModal: function () {
      EventBus.$emit('toggle' , "close");
      },
      saveRecipe: function () {
        let position = recipeDetailsStore.state.recipesList.map( recipe => {return recipe.name}).indexOf(this.recipe.name);
        if(position >=0){
          recipeDetailsStore.state.recipesList[position] = this.recipe;
        }else{
          let newRecipe = new Recipe(this.recipe.name,
              this.recipe.preparationTime,
              this.recipe.ingredients,
              this.recipe.directions,
              this.recipe.author);
          recipeDetailsStore.add(newRecipe);
        }
        this.closeModal();
      },
      deleteRecipe: function () {
        let position = recipeDetailsStore.state.recipesList.map( recipe => {return recipe.name}).indexOf(this.recipe.name);
        EventBus.$emit('delete' , position);
      }
    }
  }
</script>


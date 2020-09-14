<template>
  <div class="submit-modal">
    <div class="submit-modal__background">
      <div class="submit-modal__modal col-sm-9">
        <span class="submit-modal__close" @click="closeModal">close</span>
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
          <button type="submit"
                  class="btn btn-primary float-right"
                  @click="saveRecipe()">save</button>
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
    mounted() {
      this.recipe = this.recipeLists;
    },
    data(){
      return{
        recipe : recipeDetailsStore.state.recipe
      }
    },
    props:{
      showModal:Boolean,
      recipeLists : {}
    },
    methods:{
      closeModal: function () {
      EventBus.$emit('toggle');
      },
      saveRecipe: function () {
        let position = recipeDetailsStore.state.recipesList.map( x => {return x.name}).indexOf(this.recipe.name);
        if(position >=0){
          console.log("inside existing recipe")
          recipeDetailsStore.state.recipesList[position] = this.recipe;
        }else{
          console.log("inside new recipe")
          let newRecipe = new Recipe(this.recipe.name,
              this.recipe.preparationTime,
              this.recipe.ingredients,
              this.recipe.directions,
              this.recipe.author);
          recipeDetailsStore.add(newRecipe);
        }
        this.closeModal();
      }
    }
  }
</script>

<style lang="scss">
  $primary: #11998e;
  $secondary: #38ef7d;
  $white: #fff;
  $gray: #9b9b9b;
  .form__group {
    position: relative;
    padding: 15px 0 0;
    margin-top: 10px;
  }

  .form__field {
    font-family: inherit;
    width: 100%;
    border: 0;
    border-bottom: 2px solid $gray;
    outline: 0;
    font-size: 1.3rem;
    padding: 7px 0;
    background: transparent;
    transition: border-color 0.2s;

    &::placeholder {
      color: transparent;
    }

    &:placeholder-shown ~ .form__label {
      font-size: 1.3rem;
      cursor: text;
      top: 20px;
    }
  }

  .form__label {
    position: absolute;
    top: 0;
    display: block;
    transition: 0.2s;
    font-size: 1rem;
    color: $gray;
  }

  .form__field:focus {
    ~ .form__label {
      position: absolute;
      top: 0;
      display: block;
      transition: 0.2s;
      font-size: 1rem;
      color: $primary;
      font-weight:700;
    }
    padding-bottom: 6px;
    font-weight: 700;
    border-width: 3px;
    border-image: linear-gradient(to right, $primary,$secondary);
    border-image-slice: 1;
  }
  /* reset input */
  .form__field{
    &:required,&:invalid { box-shadow:none; }
  }
  .submit-modal{
    &__close{
      float: right;
      cursor: pointer;
    }
    &__background{
      position: fixed;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      background-color: rgba(34, 34, 34, 0.7);
      display: flex;
      justify-content: center;
      align-items: center;
      z-index: 50;
    }

    &__modal{
      padding: 2rem;
      margin: 0.5rem;
      background: white;
      width: 37.5rem;
      z-index: 50;


      &__header{
        display: flex;
        position: relative;

        &__title{
          font-size: 2rem;
          line-height: 1.25;
          color: #00716b;
          padding-right: 2rem;

        }

        &__close{
          height: 1.5rem;
          width: 1.5rem;
          filter: invert(44%) sepia(0%) saturate(13%) hue-rotate(263deg) brightness(93%) contrast(108%);
          position: absolute;
          top: 0.5rem;
          right: 0;

          &:hover{
            cursor:pointer;
          }
        }
      }

      &__body{
        margin-bottom: 1.5rem;
      }

      &__button-bar{
        margin: 0 -1.5rem -1.5rem -1.5rem;
        padding: 1rem;
        background-color: #f2f7f7;
        text-align: right;

        &__button{
          &:first-child{
            margin-right: 1rem;
          }

        }
      }
    }
  }

</style>

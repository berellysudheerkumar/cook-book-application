<template>
  <div>
    <div class="card" v-for="(recipe , index ) in cardsInfo" :key="index">
     <span class="card__edit" @click="editRecipe(index)"></span>
      <div @click="showRecipe(index)" class="caption">
        <img v-if="recipe.url===undefined" class="caption__media" :src="defaultImage"/>
        <img v-else class="caption__media" :src="recipe.url">
        <div class="caption__overlay">
          <h1 class="caption__overlay__title">{{ recipe.name }}</h1>
          <p class="caption__overlay__content">
             {{ recipe.directions }}
          </p>
          <p>posted by:{{recipe.author}}</p>
        </div>
      </div>
      </div>
    </div>

</template>
<script>
  import {EventBus} from "../../../main";
  import {recipeDetailsStore} from "../store/RecipeStore";

  export default {
    name: 'Card',
    data(){
      return{
        openModal:false,
        recipe:{},
        defaultImage:recipeDetailsStore.state.defaultImage
      }
    },
    props:{
      cardsInfo: {}
    },
    methods:{
      showRecipe: function(index){
        EventBus.$emit('readRecipe' , index);
      },
      editRecipe: function(index) {
        EventBus.$emit('editRecipe' , index );
        EventBus.$emit('toggle' );
      }
    }
  }
</script>


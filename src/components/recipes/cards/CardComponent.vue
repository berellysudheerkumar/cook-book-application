<template>
  <div>
    <div class="card" v-for="(recipe , index ) in cardsInfo" :key="index">
      <div class="card__heading">
        <h1 class="p-2">{{ recipe.name }}</h1>
        <span class="card__edit" @click="editRecipe(index)"><i class="far fa-edit"></i></span>
      </div>
      <div @click="showRecipe(index)" class="caption">
        <img v-if="recipe.url===undefined" class="caption__media" :src="defaultImage"/>
        <img v-else class="caption__media" :src="recipe.url">
        <div class="caption__overlay">
          <p class="caption__overlay__content">
             {{ recipe.directions }}
          </p>
          <b>posted by:{{recipe.author}}</b>
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


<template>
  <div>
    <div class="card" v-for="(recipe , index ) in cardsInfo" :key="index">
     <span class="card__edit" @click="editRecipe(index)"></span>
      <a class="card__description" @click="showRecipe(index)" v-bind:href="recipe.link" target="_blank">
        <h1>{{ recipe.name }}</h1>
        <p>{{recipe.directions}}</p>
        <p>posted by: {{ recipe.author }}</p>
      </a>
    </div>
  </div>

</template>
<script>
  import {EventBus} from "../../../main";

  export default {
    name: 'Card',
    data(){
      return{
        openModal:false,
        recipe:{}
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


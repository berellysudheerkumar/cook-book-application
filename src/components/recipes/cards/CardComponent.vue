<template>
  <div>
    <div class="card" v-for="(recipe , index ) in cardsInfo" :key="index">
     <span @click="openRecipe(index)">edit</span>
      <a v-bind:href="recipe.link" target="_blank">
        <h1>{{ recipe.name }}</h1>
        <h4>{{recipe.description}}</h4>
        <small>posted by: {{ recipe.author }}</small>
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
      openRecipe: function(index) {
        EventBus.$emit('editRecipe' , index);
        EventBus.$emit('toggle');
      }
    }
  }
</script>
<style lang="scss">
  .card {
    box-shadow: rgba(0, 0, 0, 0.117647) 0px 1px 6px, rgba(0, 0, 0, 0.117647) 0px 1px 4px;
    margin-top: 1rem;
    transition: .15s all ease-in-out;

    &:hover {
      transform: scale(1.05);
    }

    a {
      text-decoration: none;
      padding: 12px;
      color: #03A9F4;
      font-size: 24px;
      display: flex;
      flex-direction: column;
      align-items: center;

      img {
        height: 100px;
      }

      small {
        font-size: 10px;
        padding: 4px;
      }
    }
  }
</style>

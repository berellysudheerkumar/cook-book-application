<template>
  <div>
    <h1>Recipe page</h1>
    <form class="col-sm-12">
      <input
          class="form-control mr-sm-2"
          type="search"
          placeholder="Search"
          aria-label="Search"
          v-model="search">
    </form>
    <div class="card" v-for="(recipe , index ) in filteredList" :key="index">
      <a v-bind:href="recipe.link" target="_blank">
        <h1>{{ recipe.title }}</h1>
        <h4>{{recipe.description}}</h4>
        <small>posted by: {{ recipe.author }}</small>
      </a>
    </div>
  </div>
</template>
<script>
  import Recipe from '../../classes/RecipeClass';
  export default {
    name: 'Recipe',
    data () {
      return {
        search:'',
        recipeList:[
          new Recipe(
              'Aloo gobi',
              '20 Minutes',
              'Chris',
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer eu vulputate leo. Pellentesque mauris erat, faucibus sed libero eu, pharetra facilisis nisi. Nam id mauris efficitur, sollicitudin ex eget, ultrices neque. Sed vel velit fermentum, accumsan leo in, facilisis lacus. Nunc at posuere risus. Morbi quis euismod nulla, in hendrerit augue. In dictum felis vel massa pharetra, eget varius lectus rutrum. Duis vulputate felis velit, ac fermentum purus ultricies nec. Praesent scelerisque turpis dui, ac sodales risus accumsan id. Pellentesque orci massa, gravida sed lacus id, vulputate consectetur lacus. Vivamus blandit odio vitae nisi egestas, nec ornare felis lobortis. Nam vel lacus diam. Nam dictum dui et lobortis volutpat. Quisque magna sem, mollis eu nisi in, ornare vehicula massa. Etiam tortor justo, finibus nec orci non, sodales rhoncus felis.'
          ),
          new Recipe(
              'Aloo tikki',
              '30 Minutes',
              'Tim',
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer eu vulputate leo. Pellentesque mauris erat, faucibus sed libero eu, pharetra facilisis nisi. Nam id mauris efficitur, sollicitudin ex eget, ultrices neque. Sed vel velit fermentum, accumsan leo in, facilisis lacus. Nunc at posuere risus. Morbi quis euismod nulla, in hendrerit augue. In dictum felis vel massa pharetra, eget varius lectus rutrum. Duis vulputate felis velit, ac fermentum purus ultricies nec. Praesent scelerisque turpis dui, ac sodales risus accumsan id. Pellentesque orci massa, gravida sed lacus id, vulputate consectetur lacus. Vivamus blandit odio vitae nisi egestas, nec ornare felis lobortis. Nam vel lacus diam. Nam dictum dui et lobortis volutpat. Quisque magna sem, mollis eu nisi in, ornare vehicula massa. Etiam tortor justo, finibus nec orci non, sodales rhoncus felis.'
          ),
          new Recipe(
              'Aloo matar',
              '30 Minutes',
              'Sam',
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer eu vulputate leo. Pellentesque mauris erat, faucibus sed libero eu, pharetra facilisis nisi. Nam id mauris efficitur, sollicitudin ex eget, ultrices neque. Sed vel velit fermentum, accumsan leo in, facilisis lacus. Nunc at posuere risus. Morbi quis euismod nulla, in hendrerit augue. In dictum felis vel massa pharetra, eget varius lectus rutrum. Duis vulputate felis velit, ac fermentum purus ultricies nec. Praesent scelerisque turpis dui, ac sodales risus accumsan id. Pellentesque orci massa, gravida sed lacus id, vulputate consectetur lacus. Vivamus blandit odio vitae nisi egestas, nec ornare felis lobortis. Nam vel lacus diam. Nam dictum dui et lobortis volutpat. Quisque magna sem, mollis eu nisi in, ornare vehicula massa. Etiam tortor justo, finibus nec orci non, sodales rhoncus felis.'
          ),
          new Recipe(
              'Butter chicken',
              '40 Minutes',
              'Rachel',
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer eu vulputate leo. Pellentesque mauris erat, faucibus sed libero eu, pharetra facilisis nisi. Nam id mauris efficitur, sollicitudin ex eget, ultrices neque. Sed vel velit fermentum, accumsan leo in, facilisis lacus. Nunc at posuere risus. Morbi quis euismod nulla, in hendrerit augue. In dictum felis vel massa pharetra, eget varius lectus rutrum. Duis vulputate felis velit, ac fermentum purus ultricies nec. Praesent scelerisque turpis dui, ac sodales risus accumsan id. Pellentesque orci massa, gravida sed lacus id, vulputate consectetur lacus. Vivamus blandit odio vitae nisi egestas, nec ornare felis lobortis. Nam vel lacus diam. Nam dictum dui et lobortis volutpat. Quisque magna sem, mollis eu nisi in, ornare vehicula massa. Etiam tortor justo, finibus nec orci non, sodales rhoncus felis.'
          ),
          new Recipe(
              'Chapati',
              '50 Minutes',
              'Chris',
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer eu vulputate leo. Pellentesque mauris erat, faucibus sed libero eu, pharetra facilisis nisi. Nam id mauris efficitur, sollicitudin ex eget, ultrices neque. Sed vel velit fermentum, accumsan leo in, facilisis lacus. Nunc at posuere risus. Morbi quis euismod nulla, in hendrerit augue. In dictum felis vel massa pharetra, eget varius lectus rutrum. Duis vulputate felis velit, ac fermentum purus ultricies nec. Praesent scelerisque turpis dui, ac sodales risus accumsan id. Pellentesque orci massa, gravida sed lacus id, vulputate consectetur lacus. Vivamus blandit odio vitae nisi egestas, nec ornare felis lobortis. Nam vel lacus diam. Nam dictum dui et lobortis volutpat. Quisque magna sem, mollis eu nisi in, ornare vehicula massa. Etiam tortor justo, finibus nec orci non, sodales rhoncus felis.'
          ),
          new Recipe(
              'Aurelia',
              '20 Minutes',
              'Tim',
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer eu vulputate leo. Pellentesque mauris erat, faucibus sed libero eu, pharetra facilisis nisi. Nam id mauris efficitur, sollicitudin ex eget, ultrices neque. Sed vel velit fermentum, accumsan leo in, facilisis lacus. Nunc at posuere risus. Morbi quis euismod nulla, in hendrerit augue. In dictum felis vel massa pharetra, eget varius lectus rutrum. Duis vulputate felis velit, ac fermentum purus ultricies nec. Praesent scelerisque turpis dui, ac sodales risus accumsan id. Pellentesque orci massa, gravida sed lacus id, vulputate consectetur lacus. Vivamus blandit odio vitae nisi egestas, nec ornare felis lobortis. Nam vel lacus diam. Nam dictum dui et lobortis volutpat. Quisque magna sem, mollis eu nisi in, ornare vehicula massa. Etiam tortor justo, finibus nec orci non, sodales rhoncus felis.'
          ),
          new Recipe(
              'Chicken Tikka',
              '40 Minutes',
              'A. A. Ron',
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer eu vulputate leo. Pellentesque mauris erat, faucibus sed libero eu, pharetra facilisis nisi. Nam id mauris efficitur, sollicitudin ex eget, ultrices neque. Sed vel velit fermentum, accumsan leo in, facilisis lacus. Nunc at posuere risus. Morbi quis euismod nulla, in hendrerit augue. In dictum felis vel massa pharetra, eget varius lectus rutrum. Duis vulputate felis velit, ac fermentum purus ultricies nec. Praesent scelerisque turpis dui, ac sodales risus accumsan id. Pellentesque orci massa, gravida sed lacus id, vulputate consectetur lacus. Vivamus blandit odio vitae nisi egestas, nec ornare felis lobortis. Nam vel lacus diam. Nam dictum dui et lobortis volutpat. Quisque magna sem, mollis eu nisi in, ornare vehicula massa. Etiam tortor justo, finibus nec orci non, sodales rhoncus felis.'
          ),
          new Recipe(
              'Dal',
              '30 Minutes',
              'Alex',
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer eu vulputate leo. Pellentesque mauris erat, faucibus sed libero eu, pharetra facilisis nisi. Nam id mauris efficitur, sollicitudin ex eget, ultrices neque. Sed vel velit fermentum, accumsan leo in, facilisis lacus. Nunc at posuere risus. Morbi quis euismod nulla, in hendrerit augue. In dictum felis vel massa pharetra, eget varius lectus rutrum. Duis vulputate felis velit, ac fermentum purus ultricies nec. Praesent scelerisque turpis dui, ac sodales risus accumsan id. Pellentesque orci massa, gravida sed lacus id, vulputate consectetur lacus. Vivamus blandit odio vitae nisi egestas, nec ornare felis lobortis. Nam vel lacus diam. Nam dictum dui et lobortis volutpat. Quisque magna sem, mollis eu nisi in, ornare vehicula massa. Etiam tortor justo, finibus nec orci non, sodales rhoncus felis.'
          ),
          new Recipe(
              'Dum aloo',
              '20 Minutes',
              'Chuck',
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer eu vulputate leo. Pellentesque mauris erat, faucibus sed libero eu, pharetra facilisis nisi. Nam id mauris efficitur, sollicitudin ex eget, ultrices neque. Sed vel velit fermentum, accumsan leo in, facilisis lacus. Nunc at posuere risus. Morbi quis euismod nulla, in hendrerit augue. In dictum felis vel massa pharetra, eget varius lectus rutrum. Duis vulputate felis velit, ac fermentum purus ultricies nec. Praesent scelerisque turpis dui, ac sodales risus accumsan id. Pellentesque orci massa, gravida sed lacus id, vulputate consectetur lacus. Vivamus blandit odio vitae nisi egestas, nec ornare felis lobortis. Nam vel lacus diam. Nam dictum dui et lobortis volutpat. Quisque magna sem, mollis eu nisi in, ornare vehicula massa. Etiam tortor justo, finibus nec orci non, sodales rhoncus felis.'
          ),
        ]
      }
    },
    computed:{
      filteredList: function(){
        return this.recipeList.filter( recipe => {
            return recipe.title.toString().toLowerCase().indexOf(this.search.toString()) !== -1;
        })
      }
    }
  }
</script>
<style lang="scss">
  .card {
    box-shadow: rgba(0, 0, 0, 0.117647) 0px 1px 6px, rgba(0, 0, 0, 0.117647) 0px 1px 4px;
    margin: 12px;
    transition: .15s all ease-in-out;
  &:hover {
     transform: scale(1.1);
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

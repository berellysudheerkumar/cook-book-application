/**
 * Cook book application
 *
 *
 * file
 * @name recipeDetailsStore
 *
 * @description
 * Contains recipeList data and show modal functions
 */

import Recipe from "../../../classes/RecipeClass";

export const recipeDetailsStore = {
  state: {
    recipesList: [
      new Recipe(
          'Aloo gobi',
          '20 Minutes',
          'potato , cauliflower',
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer eu vulputate leo. Pellentesque mauris erat, faucibus sed libero eu, pharetra facilisis nisi. Nam id mauris efficitur, sollicitudin ex eget, ultrices neque. Sed vel velit fermentum, accumsan leo in, facilisis lacus. Nunc at posuere risus. Morbi quis euismod nulla, in hendrerit augue. In dictum felis vel massa pharetra, eget varius lectus rutrum. Duis vulputate felis velit, ac fermentum purus ultricies nec. Praesent scelerisque turpis dui, ac sodales risus accumsan id. Pellentesque orci massa, gravida sed lacus id, vulputate consectetur lacus. Vivamus blandit odio vitae nisi egestas, nec ornare felis lobortis. Nam vel lacus diam. Nam dictum dui et lobortis volutpat. Quisque magna sem, mollis eu nisi in, ornare vehicula massa. Etiam tortor justo, finibus nec orci non, sodales rhoncus felis.',
          'chris'),
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
    ],
    isOpen: false,
    recipe:{
      name:'',
      preparationTime:'',
      ingredients:'',
      directions:'',
      author:''
    }
  },
  showModal: () => {
    return recipeDetailsStore.state.isOpen = !recipeDetailsStore.state.isOpen;
  },
  add:(recipe) => {
    recipeDetailsStore.state.recipesList.push(recipe);
  }
}

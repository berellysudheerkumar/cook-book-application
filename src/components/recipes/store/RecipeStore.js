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
          'chris',
          'https://images.unsplash.com/photo-1506084868230-bb9d95c24759?ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=250'),
      new Recipe(
          'Aloo tikki',
          '30 Minutes',
          'potato, paneer',
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer eu vulputate leo. Pellentesque mauris erat, faucibus sed libero eu, pharetra facilisis nisi. Nam id mauris efficitur, sollicitudin ex eget, ultrices neque. Sed vel velit fermentum, accumsan leo in, facilisis lacus. Nunc at posuere risus. Morbi quis euismod nulla, in hendrerit augue. In dictum felis vel massa pharetra, eget varius lectus rutrum. Duis vulputate felis velit, ac fermentum purus ultricies nec. Praesent scelerisque turpis dui, ac sodales risus accumsan id. Pellentesque orci massa, gravida sed lacus id, vulputate consectetur lacus. Vivamus blandit odio vitae nisi egestas, nec ornare felis lobortis. Nam vel lacus diam. Nam dictum dui et lobortis volutpat. Quisque magna sem, mollis eu nisi in, ornare vehicula massa. Etiam tortor justo, finibus nec orci non, sodales rhoncus felis.',
          'Tim',
          'https://images.unsplash.com/photo-1476718406336-bb5a9690ee2a?ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80'
      ),
      new Recipe(
          'Aloo matar',
          '30 Minutes',
          'potato , beans , rice',
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer eu vulputate leo. Pellentesque mauris erat, faucibus sed libero eu, pharetra facilisis nisi. Nam id mauris efficitur, sollicitudin ex eget, ultrices neque. Sed vel velit fermentum, accumsan leo in, facilisis lacus. Nunc at posuere risus. Morbi quis euismod nulla, in hendrerit augue. In dictum felis vel massa pharetra, eget varius lectus rutrum. Duis vulputate felis velit, ac fermentum purus ultricies nec. Praesent scelerisque turpis dui, ac sodales risus accumsan id. Pellentesque orci massa, gravida sed lacus id, vulputate consectetur lacus. Vivamus blandit odio vitae nisi egestas, nec ornare felis lobortis. Nam vel lacus diam. Nam dictum dui et lobortis volutpat. Quisque magna sem, mollis eu nisi in, ornare vehicula massa. Etiam tortor justo, finibus nec orci non, sodales rhoncus felis.',
          'Sam',
          'https://images.unsplash.com/photo-1467003909585-2f8a72700288?ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=60'
      ),
      new Recipe(
          'Butter chicken',
          '40 Minutes',
          'chicken , butter , coriander',
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer eu vulputate leo. Pellentesque mauris erat, faucibus sed libero eu, pharetra facilisis nisi. Nam id mauris efficitur, sollicitudin ex eget, ultrices neque. Sed vel velit fermentum, accumsan leo in, facilisis lacus. Nunc at posuere risus. Morbi quis euismod nulla, in hendrerit augue. In dictum felis vel massa pharetra, eget varius lectus rutrum. Duis vulputate felis velit, ac fermentum purus ultricies nec. Praesent scelerisque turpis dui, ac sodales risus accumsan id. Pellentesque orci massa, gravida sed lacus id, vulputate consectetur lacus. Vivamus blandit odio vitae nisi egestas, nec ornare felis lobortis. Nam vel lacus diam. Nam dictum dui et lobortis volutpat. Quisque magna sem, mollis eu nisi in, ornare vehicula massa. Etiam tortor justo, finibus nec orci non, sodales rhoncus felis.',
          'Rachel',
          'https://images.unsplash.com/photo-1505253716362-afaea1d3d1af?ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80'
      ),
      new Recipe(
          'Chapati',
          '50 Minutes',
          'flour , oil',
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer eu vulputate leo. Pellentesque mauris erat, faucibus sed libero eu, pharetra facilisis nisi. Nam id mauris efficitur, sollicitudin ex eget, ultrices neque. Sed vel velit fermentum, accumsan leo in, facilisis lacus. Nunc at posuere risus. Morbi quis euismod nulla, in hendrerit augue. In dictum felis vel massa pharetra, eget varius lectus rutrum. Duis vulputate felis velit, ac fermentum purus ultricies nec. Praesent scelerisque turpis dui, ac sodales risus accumsan id. Pellentesque orci massa, gravida sed lacus id, vulputate consectetur lacus. Vivamus blandit odio vitae nisi egestas, nec ornare felis lobortis. Nam vel lacus diam. Nam dictum dui et lobortis volutpat. Quisque magna sem, mollis eu nisi in, ornare vehicula massa. Etiam tortor justo, finibus nec orci non, sodales rhoncus felis.',
          'Chris',
          'https://images.unsplash.com/photo-1497034825429-c343d7c6a68f?ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80'
      ),
      new Recipe(
          'Aurelia',
          '20 Minutes',
          'mushroom , sauce',
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer eu vulputate leo. Pellentesque mauris erat, faucibus sed libero eu, pharetra facilisis nisi. Nam id mauris efficitur, sollicitudin ex eget, ultrices neque. Sed vel velit fermentum, accumsan leo in, facilisis lacus. Nunc at posuere risus. Morbi quis euismod nulla, in hendrerit augue. In dictum felis vel massa pharetra, eget varius lectus rutrum. Duis vulputate felis velit, ac fermentum purus ultricies nec. Praesent scelerisque turpis dui, ac sodales risus accumsan id. Pellentesque orci massa, gravida sed lacus id, vulputate consectetur lacus. Vivamus blandit odio vitae nisi egestas, nec ornare felis lobortis. Nam vel lacus diam. Nam dictum dui et lobortis volutpat. Quisque magna sem, mollis eu nisi in, ornare vehicula massa. Etiam tortor justo, finibus nec orci non, sodales rhoncus felis.',
          'Tim',
          'https://images.unsplash.com/photo-1529042410759-befb1204b468?ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=60'
      ),
      new Recipe(
          'Chicken Tikka',
          '40 Minutes',
          'chicken , paneer',
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer eu vulputate leo. Pellentesque mauris erat, faucibus sed libero eu, pharetra facilisis nisi. Nam id mauris efficitur, sollicitudin ex eget, ultrices neque. Sed vel velit fermentum, accumsan leo in, facilisis lacus. Nunc at posuere risus. Morbi quis euismod nulla, in hendrerit augue. In dictum felis vel massa pharetra, eget varius lectus rutrum. Duis vulputate felis velit, ac fermentum purus ultricies nec. Praesent scelerisque turpis dui, ac sodales risus accumsan id. Pellentesque orci massa, gravida sed lacus id, vulputate consectetur lacus. Vivamus blandit odio vitae nisi egestas, nec ornare felis lobortis. Nam vel lacus diam. Nam dictum dui et lobortis volutpat. Quisque magna sem, mollis eu nisi in, ornare vehicula massa. Etiam tortor justo, finibus nec orci non, sodales rhoncus felis.',
          'A. A. Ron',
          'https://images.unsplash.com/photo-1481070555726-e2fe8357725c?ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80'
      ),
      new Recipe(
          'Dum aloo',
          '20 Minutes',
          'potato',
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer eu vulputate leo. Pellentesque mauris erat, faucibus sed libero eu, pharetra facilisis nisi. Nam id mauris efficitur, sollicitudin ex eget, ultrices neque. Sed vel velit fermentum, accumsan leo in, facilisis lacus. Nunc at posuere risus. Morbi quis euismod nulla, in hendrerit augue. In dictum felis vel massa pharetra, eget varius lectus rutrum. Duis vulputate felis velit, ac fermentum purus ultricies nec. Praesent scelerisque turpis dui, ac sodales risus accumsan id. Pellentesque orci massa, gravida sed lacus id, vulputate consectetur lacus. Vivamus blandit odio vitae nisi egestas, nec ornare felis lobortis. Nam vel lacus diam. Nam dictum dui et lobortis volutpat. Quisque magna sem, mollis eu nisi in, ornare vehicula massa. Etiam tortor justo, finibus nec orci non, sodales rhoncus felis.',
          'Chuck',
          'https://images.unsplash.com/photo-1590701390714-e979c0ccdd1b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=375&q=80'
      ),
    ],
    isOpen: false,
    recipe:{
      name:'',
      preparationTime:'',
      ingredients:'',
      directions:'',
      author:'',
      url:''
    },
    defaultImage:'https://images.unsplash.com/photo-1505253716362-afaea1d3d1af?ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80'
  },
  showModal: () => {
    return recipeDetailsStore.state.isOpen = !recipeDetailsStore.state.isOpen;
  },
  add:(recipe) => {
    recipeDetailsStore.state.recipesList.push(recipe);
  }
}

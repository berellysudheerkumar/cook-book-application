/**
 * Cook book application
 *
 *
 * file
 * @name routes
 *
 * @description
 * Contains routes to display the content
 */


import Home from "./components/home/HomePage";
import Recipe from "./components/recipes/RecipesPage";
import Contact from "./components/contact/ContactPage";

export const routes = [
  {path: '/', redirect: '/step-one'},
  {path: '/step-one', component: Home},
  {path: '/step-two', component: Recipe},
  {path: '/step-three', component: Contact},
]

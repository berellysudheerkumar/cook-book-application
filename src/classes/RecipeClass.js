/**
 * Cook book application
 *
 *
 * class
 * @name Recipe
 *
 * @description
 * This is the constructor to initialize recipe class.
 */

export default class Recipe {

constructor(name, preparationTime, ingredients, directions, author, url) {
    this.name = name;
    this.preparationTime = preparationTime;
    this.ingredients = ingredients;
    this.author = author;
    this.directions = directions;
    this.url = url;
  }

}

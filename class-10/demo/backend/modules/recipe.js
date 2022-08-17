'use strict';

const axios = require('axios');

const cache = {};

const getRecipes = (request, response) => {
  // get user input from the frontend
  const ingredient = request.query.ingredient;

  if (cache[ingredient] !== undefined) {
    console.log('getting info from cache', ingredient);
    console.log('cache: ', cache);
    response.status(200).send(cache[ingredient]);
  } else {
    console.log('getting new API data from axios...', ingredient);
    const url = `https://api.edamam.com/search?app_id=${process.env.API_APP_ID}&app_key=${process.env.API_APP_KEY}&q=${ingredient}`;
    axios
      .get(url)
      .then(recipeResponse => {
      const recipeArray = recipeResponse.data.hits.map(recipe => new Recipe(recipe.recipe));
      cache[ingredient] = recipeArray;
      console.log('put the new data in cache: ', cache);
      response.status(200).send(cache[ingredient]);
    })
    .catch(error => {
      console.error(error);
      response.status(500).send(error);
    })
  }
}

class Recipe {
  constructor(recipe) {
    this.uri = recipe.uri;
    this.label = recipe.label;
    this.image_url = recipe.image;
    this.ingredients = recipe.ingredientLines;
    this.totalTime = recipe.totalTime;
  }
}

module.exports = getRecipes;
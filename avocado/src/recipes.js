import React from "react";
import recipesData from "./data/recipeData.js";
import "./dropDown.css";

const RecipeList = ({ recipeId }) => {
	// Find the recipe with the specified id
	const selectedRecipe = recipesData.find((recipe) => recipe.id === recipeId);

	// Check if a recipe with the specified id exists
	if (!selectedRecipe) {
	  return <div>Recipe not found</div>;
	}

	return (
	  <div className="recipe-list">
		{recipesData.map((recipe) => (
		  <div key={recipe.id} className="recipe">
			<h1>{recipe.name}</h1>
			<img src={recipe.image} alt={recipe.name} />
			<div className="ingredients">
			  <h2>Ingredients</h2>
			  <ul>
				{recipe.ingredients.map((ingredient, index) => (
				  <li key={index}>{ingredient}</li>
				))}
			  </ul>
			</div>
			<div className="instructions">
			  <h2>Instructions</h2>
			  <ol>
				{recipe.instructions.map((instruction, index) => (
				  <li key={index}>{instruction}</li>
				))}
			  </ol>
			</div>
		  </div>
		))}
	  </div>
	);
  };

export default RecipeList;

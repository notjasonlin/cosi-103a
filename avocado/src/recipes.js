import React from "react";
import recipesData from "./recipesData";
import "./dropDown.css";

const RecipeList = () => {
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

import React from "react";
import { Link } from "react-router-dom";
import recipesData from "../data/recipeData.js";
import "../cssfiles/dropDown.css";

const RecipeList = ({ recipeId }) => {
  // Convert recipeId to an integer
  const id = parseInt(recipeId);

  // Find the recipe with the specified id
  const selectedRecipe = recipesData.find((recipe) => recipe.id === id);

  // Check if a recipe with the specified id exists
  if (!selectedRecipe) {
    return <div></div>;
  }

  return (
    <div className="recipe-list">
      <div key={selectedRecipe.id} className="recipe">
        <h1>{selectedRecipe.name}</h1>
        <img src={selectedRecipe.image} alt={selectedRecipe.name} />
        <div className="ingredients">
          <h2>Ingredients</h2>
          <ul>
            {selectedRecipe.ingredients.map((ingredient, index) => (
              <li key={index}>{ingredient}</li>
            ))}
          </ul>
        </div>
        <div className="instructions">
          <h2>Instructions</h2>
          <ol>
            {selectedRecipe.instructions.map((instruction, index) => (
              <li key={index}>{instruction}</li>
            ))}
          </ol>
        </div>
        {/* Back button */}
        <Link to="/">Go Back</Link>
      </div>
    </div>
  );
};

export default RecipeList;

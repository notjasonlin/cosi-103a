import React from 'react';
import { Link } from "react-router-dom";
import { Button } from 'react-bootstrap';
import { useGroceryContext } from '../data/grocery-context';
import "../cssfiles/dropDown.css";
import "../cssfiles/recipes.css";

const RecipeList = ({ recipeId, recipesData }) => {

  const { addGrocery } = useGroceryContext();

  // Convert recipeId to an integer
  const id = parseInt(recipeId);

  // Find the recipe with the specified id
  const selectedRecipe = recipesData.find((recipe) => recipe.id === id);

  // Check if a recipe with the specified id exists
  if (!selectedRecipe) {
    return <div></div>;
  }

  const handleAddToGrocery = (ingredient) => {
    addGrocery(ingredient);
  };

  return (
    <div className="recipe-list">
      <div key={selectedRecipe.id} className="recipe" data-testid="recipe-card">
        <h1>{selectedRecipe.name}</h1>
        <Link to={`/recipe/${recipeId}/cookingMode`} style={{ textDecoration: "none" }}>
          <Button variant="success" style={{ borderRadius: "2rem" }}>
            Cooking Mode
          </Button>
        </Link>
        <img src={selectedRecipe.image} alt={selectedRecipe.name} />
        <div className="description">
          <p>{selectedRecipe.description}</p>
        </div>
        <div className="ingredients">
          <h2>Ingredients</h2>
          <ul>
            {Object.keys(selectedRecipe.ingredients[0]).forEach(ingredient =>  (
              <li key={index}>
                {ingredient}{" "}
                <button className="addButton" onClick={() => handleAddToGrocery(ingredient)}>
                  +
                </button>
              </li>
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
        <Link to="/" className="goBackButton">Go Back</Link>
      </div>
    </div>
  );
};

export default RecipeList;

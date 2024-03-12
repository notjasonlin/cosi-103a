import React from "react";
import RecipeCarousel from "./carousel";
import Container from "react-bootstrap/Container";
import { Link } from "react-router-dom";
import "../cssfiles/cook-mode.css"; // Ensure this is correctly pointing to your CSS file

function CookMode({ recipeId, recipesData }) {
  const id = parseInt(recipeId);
  const selectedRecipe = recipesData.find((recipe) => recipe.id === id);

  if (!selectedRecipe) {
    return <div>NO RECIPE</div>;
  }

  return (
    <div className="cookMode" data-testid="cook-mode">
      <Container className="cookModeContainer">
        <RecipeCarousel selectedRecipe={selectedRecipe}></RecipeCarousel>
        <Link to={`/recipe/${recipeId}`} className="goBackButton">Go Back</Link>
      </Container>
    </div>
  );
}

export default CookMode;
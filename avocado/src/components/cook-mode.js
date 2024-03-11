import React from "react";
import RecipeCarousel from "./carousel";
import recipesData from "../data/recipeData";
import Container from "react-bootstrap/Container";
import { Link } from "react-router-dom";
import "../cssfiles/cook-mode.css";

function CookMode({ recipeId }) {
  const id = parseInt(recipeId);
  const selectedRecipe = recipesData.find((recipe) => recipe.id === id);

  if (!selectedRecipe) {
    return <div>NO RECIPE</div>;
  }

  return (
    <div className="cookMode">
      <Container className="cookModeContainer">
        <RecipeCarousel selectedRecipe={selectedRecipe}></RecipeCarousel>
		<Link to={`/recipe/${recipeId}`}>Go Back</Link>
      </Container>
    </div>
  );
}

export default CookMode;

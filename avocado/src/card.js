import React from "react";
import Card from "react-bootstrap/Card";
import recipesData from "./data/recipeData";
import { Link } from "react-router-dom";

function RecipeCard({ recipeId }) {
  const recipeData = recipesData.find((recipe) => recipe.id === recipeId);
  if (!recipeData) {
    return null; // Return null if recipe data is not found
  }

  return (
    <Card>
      <Card.Img variant="top" src={recipeData.image} alt={recipeData.name} />
      <Card.Body>
        <Card.Title>{recipeData.name}</Card.Title>
        <Link to={`/recipe/${recipeData.id}`}>Go To Recipe!</Link>
      </Card.Body>
    </Card>
  );
}

export default RecipeCard;

import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Dropdown from "react-bootstrap/Dropdown";
import RecipeList from "./recipes";
import recipesData from "./data/recipeData";
import { Link, useNavigate } from "react-router-dom"
import "./dropDown.css";

const DropDown = () => {

  const [selectedRecipe, setSelectedRecipe] = useState("");

  const handleSelectRecipe = (recipeName) => {
    // Find the selected recipe based on the provided recipe name
    const selectedRecipe = recipesData.find((recipe) => recipe.name === recipeName);
    if (selectedRecipe) {
      setSelectedRecipe(selectedRecipe.id); // Set the selected recipe ID
    } else {
      setSelectedRecipe(""); // Reset selected recipe if not found
    }
  };

  const resetView = () => {
    setSelectedRecipe(""); // Resetting the selected recipe
  };

  const renderRecipe = () => {
    // Pass the selected recipe ID to the RecipeList component
    return <RecipeList recipeId={selectedRecipe} />;
  };

  return (
    <Dropdown as={ButtonGroup}>
      {/* Reset view on button click */}
      <Button variant="success" onClick={resetView}>
        Avocado Recipes
      </Button>

      <Dropdown.Toggle split variant="success" id="dropdown-split-basic" />

      <Dropdown.Menu>
        {recipesData.map((recipe, index) => ( // Iterate over recipesData
          <Dropdown.Item
            onClick={() => handleSelectRecipe(recipe.name)} // Pass recipe name
          >
            {recipe.name}
          </Dropdown.Item>
        ))}
      </Dropdown.Menu>

      <div id="display">{renderRecipe()}</div>
    </Dropdown>
  );
};

export default DropDown;

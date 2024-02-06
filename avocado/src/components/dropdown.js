// dropdown.js
import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Dropdown from "react-bootstrap/Dropdown";
import RecipeList from "./recipes";
import recipesData from "../data/recipeData";
import { Link } from "react-router-dom";
import { useMyContext } from '../extra/myContext'; // Import the context
import "../cssfiles/dropDown.css";

const DropDown = () => {
  const { basename } = useMyContext(); // Access the basename from the context

  const [selectedRecipe, setSelectedRecipe] = useState("");

  const handleSelectRecipe = (index) => {
    const selectedRecipe = recipesData[index];
    if (selectedRecipe) {
      setSelectedRecipe(selectedRecipe.id);
    } else {
      setSelectedRecipe("");
    }
  };

  const resetView = () => {
    setSelectedRecipe("");
  };

  const renderRecipe = () => {
    return <RecipeList recipeId={selectedRecipe} />;
  };

  return (
    <Dropdown as={ButtonGroup}>
      <Button variant="success" onClick={resetView}>
        Avocado Recipes
      </Button>

      <Dropdown.Toggle variant="success" id="dropdown-split-basic" />

      <Dropdown.Menu>
        {recipesData.map((recipe, index) => (
          <Dropdown.Item key={index} onClick={() => handleSelectRecipe(index)}>
          <Link to={`/recipe/${recipe.id}`}>{recipe.name}</Link>
        </Dropdown.Item>        
        ))}
      </Dropdown.Menu>

      <div id="display">{renderRecipe()}</div>
    </Dropdown>
  );
};

export default DropDown;

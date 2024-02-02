import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Dropdown from "react-bootstrap/Dropdown";
import RecipeList from "./recipes";
import "./dropDown.css";

const DropDown = () => {
	const [selectedRecipe, setSelectedRecipe] = useState("");

	const handleSelectRecipe = (recipeName) => {
		setSelectedRecipe(recipeName);
	};

	const resetView = () => {
		setSelectedRecipe(""); // Resetting the selected recipe
	};

	const renderRecipe = () => {
		const RecipeComponent = Recipes[selectedRecipe];
		return RecipeComponent ? <RecipeComponent /> : null;
	};

	return (
		<Dropdown as={ButtonGroup}>
			{/* Reset view on button click */}
			<Button variant="success" onClick={resetView}>
				Avocado Recipes
			</Button>

			<Dropdown.Toggle split variant="success" id="dropdown-split-basic" />

			<Dropdown.Menu>
				{Object.keys(RecipeList).map((recipeName, index) => (
					<Dropdown.Item
						key={index}
						onClick={() => handleSelectRecipe(recipeName)}
					>
						{recipeName}
					</Dropdown.Item>
				))}
			</Dropdown.Menu>

			<div id="display">{renderRecipe()}</div>
		</Dropdown>
	);
};

export default DropDown;

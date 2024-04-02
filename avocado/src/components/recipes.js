import React from "react";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import { useGroceryContext } from "../data/grocery-context";
import "../cssfiles/dropDown.css";
import "../cssfiles/recipes.css";

const RecipeList = ({ recipeId, recipesData }) => {
	const { addGrocery } = useGroceryContext();

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
				<Link
					to={`/recipe/${recipeId}/cookingMode`}
					style={{ textDecoration: "none" }}
				>
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
						{selectedRecipe.ingredients.map((ingredientObj, index) => (
							<li key={index}>
								{Object.keys(ingredientObj).map((ingredientKey) => (
									<span key={ingredientKey}>
										<a
											href={`https://fdc.nal.usda.gov/fdc-app.html#/food-details/${ingredientObj[ingredientKey]}/nutrients`}
											className="ingredient-link"
											onClick={(e) => {
												// Your existing onClick handler
											}}
										>
											{ingredientKey}
										</a>{" "}
										<br />
										<button
											className="addButton"
											onClick={() => handleAddToGrocery(ingredientKey)}
										>
											+
										</button>
										<br />
									</span>
								))}
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
				<Link to="/" className="goBackButton">
					Go Back
				</Link>
			</div>
		</div>
	);
};

export default RecipeList;

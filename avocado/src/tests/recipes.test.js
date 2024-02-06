import React from "react";
import { render, screen } from "@testing-library/react";
import Recipes from "../components/recipes";

// Test each recipe component
Object.keys(Recipes).forEach((recipeName) => {
	const RecipeComponent = Recipes[recipeName];

	describe(recipeName, () => {
		test("renders without crashing", () => {
			render(<RecipeComponent />);
		});

		// Add more test cases as needed
	});
});

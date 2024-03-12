import { render, screen, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom";
import React from "react";
import RecipeContainer from "../components/recipeContainer";
import { BrowserRouter as Router } from "react-router-dom";

// Simplified mock data for testing with one recipe
const mockRecipesData = [
	{
		id: 1,
		name: "Avocado Salad",
		description: "A refreshing avocado salad perfect for summer.",
		ingredients: [
			"2 ripe avocados, diced",
			"1/4 cup red onion, thinly sliced",
			"1 large tomato, diced",
			"Juice of 1 lime",
			"Salt and pepper to taste",
			"2 tablespoons chopped cilantro",
		],
		instructions: [
			"In a large bowl, combine the diced avocados, sliced red onion, and diced tomato.",
			"Squeeze the lime juice over the mixture and season with salt and pepper.",
			"Gently toss the salad to mix the ingredients without mashing the avocado.",
			"Sprinkle chopped cilantro over the top and serve immediately.",
		],
		image: "/images/avocado-salad.jpg",
	},
];

afterEach(cleanup);

test("renders all cards properly", async () => {
	render(
		<Router>
			<RecipeContainer recipesData={mockRecipesData} />
		</Router>
	);

	// Wait for the component to be available
	const recipeName = await screen.findByText(mockRecipesData[0].name);
	expect(recipeName).toBeInTheDocument();

	const recipeDescription = screen.getByText(mockRecipesData[0].description);
	expect(recipeDescription).toBeInTheDocument();

	// Optionally, verify that ingredients and instructions are also rendered
	mockRecipesData[0].ingredients.forEach(async (ingredient) => {
		const ingredientElement = await screen.findByText(ingredient);
		expect(ingredientElement).toBeInTheDocument();
	});

	mockRecipesData[0].instructions.forEach(async (instruction, index) => {
		const instructionElement = await screen.findByText(instruction, { exact: false });
		expect(instructionElement).toBeInTheDocument();
	});
});

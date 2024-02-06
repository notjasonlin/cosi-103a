import { render, screen, waitFor, cleanup } from "@testing-library/react";
import React from "react";
import RecipeCard from "../components/card";

afterEach(() => {
	cleanup();
});

test("renders properly", async () => {
	const testRecipe = {
		id: 1,
		name: "Avocado Toast",
		description:
			"Toasted bread topped with mashed avocado, seasoned with salt, pepper, and a splash of citrus juice. Customize with toppings like tomatoes or poached eggs for a quick and tasty meal.",
		image: "/images/avocado-toast.png",
	};

	render(<RecipeCard key={testRecipe} recipe={testRecipe} />);
	await waitFor(() => {
		const linkElements = screen.getAllByText("Avocado Toast");
		expect(linkElements.length).toBeGreaterThan(0);
	});
});

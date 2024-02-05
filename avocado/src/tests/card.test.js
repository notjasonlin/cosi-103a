import { render, screen } from "@testing-library/react";
import React from "react";
import RecipeCard from "../components/card";
import recipesData from "../data/recipeData";

test("renders properly", () => {
	render(<RecipeCard id={1} />);
	const linkElements = screen.queryAllByText("Avocado Toast");
	expect(linkElements.length).toBeGreaterThan(0);
});

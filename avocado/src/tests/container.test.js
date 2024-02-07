import { render, screen, waitFor, cleanup } from "@testing-library/react";
import React from "react";
import RecipeContainer from "../components/container";
import recipesData from "../data/recipeData";
import {
	BrowserRouter as Router,
	Route,
	Routes,
	useParams,
} from "react-router-dom";

afterEach(() => {
	cleanup();
});

test("renders all cards properly", async () => {
	render(
		<Router>
			<RecipeContainer></RecipeContainer>
		</Router>
	);
	await waitFor(() => {
		for (const recipe of recipesData) {
			const linkElements = screen.getAllByText(recipe.name);
			expect(linkElements.length).toBeGreaterThan(0);
		}
	});
});

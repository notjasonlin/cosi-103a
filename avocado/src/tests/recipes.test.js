import { render, screen, waitFor, cleanup } from "@testing-library/react";
import React from "react";
import RecipeList from "../components/recipes";
import recipesData from "../data/recipeData";
import {
	BrowserRouter as Router,
	Route,
	Routes,
	useParams,
} from "react-router-dom";
import { TestWatcher } from "jest";

afterEach(() => {
	cleanup();
});

Object.keys(recipesData).forEach((recipeId) => {
	test("renders all cards properly", async () => {
		render(
			<Router>
				<RecipeList recipeId={recipeId}></RecipeList>
			</Router>
		);
		await waitFor(() => {
			const linkElements = screen.getAllByText(recipesData[recipeId].name);
			expect(linkElements.length).toBeGreaterThan(0);
		});
	});
});

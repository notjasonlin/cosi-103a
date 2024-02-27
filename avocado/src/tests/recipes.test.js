import { render, screen, waitFor, cleanup } from "@testing-library/react";
import React from "react";
import RecipeList from "../components/recipes";
import recipesData from "../data/recipeData";
import { GroceryProvider , useGroceryContext} from "../data/grocery-context";
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
			<GroceryProvider>
				<Router>
					<RecipeList recipeId={recipeId}></RecipeList>
				</Router>
			</GroceryProvider>
        );
        await waitFor(() => {
            const cardElements = screen.getAllByTestId('recipe-card');
            const linkElements = cardElements.filter(card => 
                card.textContent.replace(/\+/g, '').includes(recipesData[recipeId].name)
            );
            expect(linkElements.length).toBeGreaterThan(0);
        });
    });
});

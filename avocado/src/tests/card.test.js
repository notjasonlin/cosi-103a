import { render, screen, waitFor, cleanup } from "@testing-library/react";
import React from "react";
import RecipeCard from "../components/card";
import {
	BrowserRouter as Router,
	Route,
	Routes,
	useParams,
} from "react-router-dom";

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
	render(
		<Router>
			<RecipeCard recipe={testRecipe}></RecipeCard>
		</Router>
	);
	await waitFor(() => {
		const linkElements = screen.getAllByText(testRecipe.name);
		expect(linkElements.length).toBeGreaterThan(0);
	});
});

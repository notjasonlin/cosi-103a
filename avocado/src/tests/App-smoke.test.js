import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import React from "react";
import App from "../App";

test("renders without crashing", () => {
	render(<App />);
	const linkElements = screen.queryAllByText("Avocado Inc.");
	expect(linkElements.length).toBeGreaterThan(0);
});

test("test navbar links", () => {
	render(<App />);
	const homeLink = screen.getByText("Home");
	expect(homeLink).toBeInTheDocument();
	const recipeLink = screen.getByText("Recipes");
	expect(recipeLink).toBeInTheDocument();
	const teamLink = screen.getByText("Team");
	expect(teamLink).toBeInTheDocument();
});

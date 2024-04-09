import { render, screen, waitFor, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom";
import React from "react";
import HomePage from "../components/home-page";
import {
	BrowserRouter as Router,
	Route,
	Routes,
	useParams,
} from "react-router-dom";

afterEach(() => {
	cleanup();
});

test("renders the home page properly", async () => {
	render(
		<Router>
			<HomePage />
		</Router>
	);
	await waitFor(() => {
		const header = screen.getByText("Welcome to Avocado Inc!");
		expect(header).toBeInTheDocument();
		const directions = screen.getByText(
			"Click on the avocado to see our delicious recipes!"
		);
		expect(directions).toBeInTheDocument();
		const linkElement = screen.getByRole("link");
		expect(linkElement).toBeInTheDocument();
	});
});

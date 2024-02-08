import { render, screen } from "@testing-library/react";
import React from "react";
import App from "../App";

test("renders without crashing", () => {
	render(<App />);
	const linkElements = screen.queryAllByText("Avocado Inc.");
	expect(linkElements.length).toBeGreaterThan(0);
});
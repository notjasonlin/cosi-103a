import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

test("Renders Avocado Inc.", () => {
	render(<App />);
	const linkElement = screen.getByText(/Avocado Inc./i);
	expect(linkElement).toBeInTheDocument();
});

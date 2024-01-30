import { render, screen } from "@testing-library/react";
import Recipe1 from "./recipes";

test("renders without crashing", () => {
	const { container } = render(<Recipes />);
	console.log(container.innerHTML);
	const linkElements = screen.queryAllByText("Avocado Toast");
	expect(linkElements.length).toBeGreaterThan(0);
});

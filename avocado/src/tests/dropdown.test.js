import { render, screen } from "@testing-library/react";
import DropDown from "../components/dropdown";

test("renders without crashing", () => {
	render(<DropDown />);
	const dropdownElement = screen.getAllByRole("button");
	expect(dropdownElement.length).toBeGreaterThan(0);
});

import { render, screen , waitFor} from "@testing-library/react";
import React from "react";
import RecipeCard from "../components/card";
import recipesData from "../data/recipeData";

test("renders properly", async () => {
    render(<RecipeCard id={1} />);
    await waitFor(() => {
        const linkElements = screen.getAllByText("Avocado Toast");
        expect(linkElements.length).toBeGreaterThan(0);
    });
});

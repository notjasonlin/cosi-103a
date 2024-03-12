import { render, screen, waitFor, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom";
import React from "react";
import CookMode from "../components/cook-mode";
import { GroceryProvider } from "../data/grocery-context";
import { BrowserRouter as Router } from "react-router-dom";

afterEach(() => {
    cleanup();
});

// Define mock data based on your recipesData.json for the "Avocado Toast" recipe
const mockRecipesData = [
    {
        id: 0,
        name: "Avocado Toast",
        description: "Toasted bread topped with mashed avocado, seasoned with salt, pepper, and a splash of citrus juice. Customize with toppings like tomatoes or poached eggs for a quick and tasty meal.",
        ingredients: [
            "1 ripe avocado",
            "2 slices of your favorite bread (sourdough, whole grain, or multigrain work well)",
            "Salt and pepper, to taste",
            "Optional toppings: poached or fried egg, cherry tomatoes, red pepper flakes, feta cheese, or a drizzle of balsamic glaze"
        ],
        instructions: [
            "Begin by slicing the avocado in half, removing the pit, and scooping out the flesh into a bowl.",
            "Using a fork, mash the avocado to your desired consistency. Add salt and pepper to taste.",
            "Toast the bread slices to your preferred level of crispiness.",
            "Spread the mashed avocado evenly over each slice of toast.",
            "If desired, add your choice of optional toppings like a poached or fried egg, cherry tomatoes, red pepper flakes, feta cheese, or a drizzle of balsamic glaze.",
            "Serve immediately and enjoy your delicious avocado toast!"
        ],
        image: "/images/avocado-toast.png"
    }
];

test("renders CookMode properly", async () => {
    const recipeId = mockRecipesData[0].id.toString();
    render(
        <GroceryProvider>
            <Router>
                <CookMode recipeId={recipeId} recipesData={mockRecipesData} />
            </Router>
        </GroceryProvider>
    );

    await waitFor(() => {
        // Asserting on the first instruction to be present as part of the CookMode's rendered output
        const instructionElement = screen.getByText(/Begin by slicing the avocado in half, removing the pit, and scooping out the flesh into a bowl./);
        expect(instructionElement).toBeInTheDocument();

        // Asserting the "Go Back" link is present
        const goBackLink = screen.getByText("Go Back");
        expect(goBackLink).toBeInTheDocument();
    });
});

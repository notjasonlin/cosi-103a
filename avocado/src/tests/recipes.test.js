import { render, screen, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom";
import React from "react";
import RecipeList from "../components/recipes";
import { GroceryProvider } from "../data/grocery-context";
import { BrowserRouter as Router } from "react-router-dom";

// Assuming mockRecipesData is defined in your project. For this example, let's use a simplified version:
const mockRecipesData = [
    {
        id: 0,
        name: "Simple Salad",
        description: "A simple and refreshing salad.",
        ingredients: ["Lettuce", "Tomato", "Cucumber", "Salad dressing"],
        instructions: [
            "Chop the lettuce, tomato, and cucumber.",
            "Mix them in a bowl.",
            "Add salad dressing to taste."
        ],
        image: "/images/simple-salad.jpg"
    },
    // Add more recipes as needed
];

// Mock useGroceryContext if it provides data or functions to your component
jest.mock("../data/grocery-context", () => ({
    useGroceryContext: () => ({
        addGrocery: jest.fn(),
    }),
    GroceryProvider: ({ children }) => <div>{children}</div>, // Mock implementation if necessary
}));

afterEach(cleanup);

describe("RecipeList Component Tests", () => {
    test.each(mockRecipesData)("renders recipe card for '%s' properly", async (recipe) => {
        render(
            <Router>
                <GroceryProvider>
                    <RecipeList recipesData={mockRecipesData} recipeId={recipe.id.toString()} />
                </GroceryProvider>
            </Router>
        );

        // Use `findByText` for asynchronous elements if needed
        expect(await screen.findByText(recipe.name)).toBeInTheDocument();
        expect(screen.getByText(recipe.description)).toBeInTheDocument();

        // Verify if specific elements like ingredients are displayed
        recipe.ingredients.forEach(async (ingredient) => {
            expect(await screen.findByText(ingredient)).toBeInTheDocument();
        });

        // Verify instructions are displayed
        recipe.instructions.forEach(async (instruction) => {
            expect(await screen.findByText(instruction)).toBeInTheDocument();
        });

        // Ensure the "Cooking Mode" button is rendered
        const cookingModeButton = screen.getByText("Cooking Mode");
        expect(cookingModeButton).toBeInTheDocument();
    });
});

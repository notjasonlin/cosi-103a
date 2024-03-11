import { render, screen, waitFor, cleanup } from "@testing-library/react";
import React from "react";
import CookMode from "../components/cook-mode";
import recipesData from "../data/recipeData";
import { GroceryProvider } from "../data/grocery-context";
import { BrowserRouter as Router } from "react-router-dom";

afterEach(() => {
    cleanup();
});


test("renders CookMode properly", async () => {
    const recipeId = recipesData[0].id.toString();
    render(
        <GroceryProvider>
            <Router>
                <CookMode recipeId={recipeId}></CookMode>
            </Router>
        </GroceryProvider>
    );
    await waitFor(() => {
        const cookModeElement = screen.getByTestId('cook-mode');
        expect(cookModeElement.textContent.replace(/\+/g, '')).toContain("PreviousStep 1"+recipesData[0].instructions[0]+"NextGo Back");
    });
});
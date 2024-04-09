import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import DataInputForm from "../components/sendData.js";

global.fetch = jest.fn(() =>
    Promise.resolve({
        ok: true,
        json: () => Promise.resolve({ message: "Data submitted successfully" }),
    })
);

beforeEach(() => {
    fetch.mockClear();
});

describe("DataInputForm Component", () => {
    test("allows the user to input data and submit", async () => {
        render(<DataInputForm />);
        const sampleData = { name: "Sample Recipe", ingredients: ["1 cup water", "2 cups flour"] };
        const textArea = screen.getByPlaceholderText("Enter JSON format data here");
        const submitButton = screen.getByRole("button", { name: "Submit" });

        fireEvent.change(textArea, { target: { value: JSON.stringify(sampleData) } });
        fireEvent.click(submitButton);

        expect(fetch).toHaveBeenCalledWith(expect.any(String), {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(sampleData),
        });
    });

    test("handles invalid JSON input", () => {
        render(<DataInputForm />);
        const invalidData = "{ name: 'Invalid Recipe', }";
        const textArea = screen.getByPlaceholderText("Enter JSON format data here");
        const submitButton = screen.getByRole("button", { name: "Submit" });

        fireEvent.change(textArea, { target: { value: invalidData } });
        fireEvent.click(submitButton);

        expect(textArea.value).toBe(invalidData);
    });
});

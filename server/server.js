import run from "./cosmodb.js";

import express from "express";
import fs from "fs";
import path from "path";
import cors from "cors";
import bodyParser from "body-parser";
import * as dotenv from "dotenv";

const apiKey = process.env.SECRET_KEY;

dotenv.config();

// Your existing setup continues...

const app = express();

// Correct placement for body-parser middleware
app.use(bodyParser.json());
app.use(express.static("build"));

const corsOptions = {
	origin: ("http://127.0.0.1:3000", "20.242.137.131:3000"), // Replace this with your client's URL for better security in production
	methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
	allowedHeaders: "Content-Type,Authorization", // Adjust based on your needs
	preflightContinue: false,
	optionsSuccessStatus: 204,
};

// Apply CORS options
app.use(cors(corsOptions));

// const jsonFilePath = path.join(__dirname, "data", "recipeData.json");
// const recipeData = JSON.parse(fs.readFileSync(jsonFilePath, "utf8"));

const recipeData = await run();
console.log(recipeData);

// GET route
app.get("/api", (req, res) => {
	console.log("GET request received at /api");
	res.json(recipeData);
});

app.post("/api", async (req, res) => {
	const fetch = (await import("node-fetch")).default;

	let newRecipe = req.body; // Assuming users submit ingredient names only, without IDs

	// Base URL for the food data API
	const baseUrl = "https://api.nal.usda.gov/fdc/v1/foods/search";

	// Assign a new ID to the new recipe
	const newId =
		recipeData.length > 0
			? Math.max(...recipeData.map((recipe) => recipe.id)) + 1
			: 1;
	newRecipe.id = newId;

	// Placeholder for updated ingredients with IDs
	let updatedIngredients = [];

	// Function to fetch food ID based on ingredient name
	async function fetchFoodId(ingredientName) {
		const params = {
			query: ingredientName,
			dataType: ["Survey (FNDDS)"],
			pageSize: 1,
			api_key: apiKey,
		};
		const queryString = new URLSearchParams(params).toString();
		const url = `${baseUrl}?${queryString}`;

		try {
			const response = await fetch(url);
			const data = await response.json();
			if (data.foods && data.foods.length > 0) {
				return data.foods[0].fdcId; // Return the first matching food ID
			}
		} catch (error) {
			console.error(`Error fetching food ID for ${ingredientName}:`, error);
			return null; // Return null if there's an error or no match found
		}
	}

	// Iterate over each ingredient in the recipe
	for (const ingredientObj of newRecipe.ingredients) {
		let updatedIngredientObj = {};
		for (const [ingredientName, _] of Object.entries(ingredientObj)) {
			const foodId = await fetchFoodId(ingredientName); // Fetch the food ID for the ingredient
			updatedIngredientObj[ingredientName] = foodId; // Assign the fetched food ID
		}
		updatedIngredients.push(updatedIngredientObj);
	}

	// Update the recipe with the enriched ingredients
	newRecipe.ingredients = updatedIngredients;

	// Append the updated recipe to the existing data
	recipeData.push(newRecipe);

	// Send a response indicating success
	res.status(201).json({
		message: "Recipe added successfully with enriched ingredients",
		recipe: newRecipe,
	});
});

app.listen(5001, () => {
	console.log("Server started on port 5001");

	const baseUrl = "https://api.nal.usda.gov/fdc/v1/foods/search";

	// Promisify fetch function
	const fetchAsync = async (url) => {
		const response = await fetch(url);
		if (!response.ok) {
			throw new Error(`HTTP error! status: ${response.status}`);
		}
		return await response.json();
	};

	// Array to store promises
	const fetchPromises = [];

	recipeData.forEach((recipe) => {
		const arr = recipe.ingredients;
		const dict = arr[0];
		Object.keys(dict).forEach((ingredient) => {
			const modified = ingredient.replace("/", "");

			const params = {
				query: modified,
				dataType: ["Survey (FNDDS)"],
				pageSize: 5,
				api_key: apiKey,
			};

			const queryString = new URLSearchParams(params).toString();
			const url = `${baseUrl}?${queryString}`;

			// Push each fetch request promise to the array
			fetchPromises.push(
				fetchAsync(url).then((data) => {
					let numberFromApi = data["foods"][0].fdcId;
					dict[ingredient] = numberFromApi;
				})
			);
		});
	});

	// Wait for all fetch requests to complete
	Promise.all(fetchPromises)
		.then(() => {
			// Write the updated recipe data to the file
			fs.writeFileSync(
				"./data/recipeData.json",
				JSON.stringify(recipeData, null, 2)
			);
			console.log("Recipe data updated successfully!");
		})
		.catch((error) => {
			console.error("Error updating recipe data:", error);
		});
});

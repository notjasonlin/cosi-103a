const express = require("express");
const fs = require("fs");
const path = require("path");
const cors = require("cors");
const bodyParser = require("body-parser");

// Your existing setup continues...

const app = express();

// Correct placement for body-parser middleware
app.use(bodyParser.json());
app.use(express.static("public"));

const corsOptions = {
	origin: "http://localhost:3000", // Replace this with your client's URL for better security in production
	methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
	allowedHeaders: "Content-Type,Authorization", // Adjust based on your needs
	preflightContinue: false,
	optionsSuccessStatus: 204,
};

// Apply CORS options
app.use(cors(corsOptions));

const jsonFilePath = path.join(__dirname, "data", "recipeData.json");
const recipeData = JSON.parse(fs.readFileSync(jsonFilePath, "utf8"));

// GET route
app.get("/api", (req, res) => {
	console.log("GET request received at /api");
	res.json(recipeData);
});

app.post("/api", (req, res) => {
	const newRecipe = req.body;

	// Assign a new ID
	const newId =
		recipeData.length > 0
			? Math.max(...recipeData.map((recipe) => recipe.id)) + 1
			: 0;
	newRecipe.id = newId;

	const newImage = "/images/avocado-transparent.png";
	newRecipe.image = newImage;

	recipeData.push(newRecipe); // Append the new recipe to the existing data
});

// Start the server
app.listen(5001, () => {
	console.log("Server started on port 5001");

	const baseUrl = 'https://api.nal.usda.gov/fdc/v1/foods/search';
	const links = new Map();

	//START
	// Replace "ingredient" with the actual ingredient you want to search for
	// const ingredient = " cup red onion";

	// const params = {
	// 	query: ingredient,
	// 	dataType: ['Survey (FNDDS)'],
	// 	pageSize: 5,
	// 	api_key: 'scwYTY43nWSVgwb58HA1n1ZeOqbpPVf577jy5VHR' // Ensure this API key is valid and authorized
	// };

	// const queryString = new URLSearchParams(params).toString();
	// const url = `${baseUrl}?${queryString}`;

	// fetch(url)
	// 	.then(response => {
	// 		if (!response.ok) {
	// 			throw new Error(`HTTP error! status: ${response.status}`);
	// 		}
	// 		return response.json();
	// 	})
	// 	.then(data => {
	// 		if (data && data.foods && data.foods.length > 0) {
	// 			console.log(data.foods[0].fdcId);
	// 			links.set(ingredient, data.foods[0].fdcId);
	// 			// Additional data handling logic can be added here if needed
	// 		} else {
	// 			console.error(`No food items found for ingredient: ${ingredient}`);
	// 		}
	// 	})
	// 	.catch(error => {
	// 		console.error('There was a problem with the fetch operation:', error);
	// 	});
	// //END
	





	recipeData.map((recipe) => {
		recipe.ingredients.map((ingredient) => {
			const modified = ingredient.replace("/", '');

			// Set the query parameters
			const params = {
				// query: ingredient,
				query: modified,
				dataType: ['Survey (FNDDS)'], // This is optional; remove or change as needed
				pageSize: 5, // Adjust the number of results as needed
				api_key: 'scwYTY43nWSVgwb58HA1n1ZeOqbpPVf577jy5VHR'
			};
	
			// Convert the parameters to URL-encoded string
			const queryString = new URLSearchParams(params).toString();
	
			// Combine the base URL and query string to create the full URL
			const url = `${baseUrl}?${queryString}`;
	
			// Perform the fetch operation
			fetch(url)
				.then(response => {
					if (!response.ok) {
						throw new Error(`HTTP error! status: ${response.status}`);
					}
					return response.json();
				})
				.then(data => {
					console.log(ingredient + (data["foods"][0].fdcId));
					links.set(ingredient, data["foods"][0].fdcId);
					// Here you can add code to handle the data as you wish
				})
				.catch(error => {
					console.error("error " + ingredient);
					// console.error('There was a problem with the fetch operation:', error);
				});
		});
	});


	for (const [key, value] of links.entries()) {
		console.log(`Key: ${key}, Value: ${value}`);
	}
});








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



	recipeData.map((recipe) => {
		arr = recipe.ingredients;
		dict = arr[0];
		Object.keys(dict).forEach(ingredient => {
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
					console.log(ingredient + " " + (data["foods"][0].fdcId));
					let numberFromApi = data["foods"][0].fdcId;
					console.log(numberFromApi);
					try {
						const response = fetch(url);
						if (!response.ok) {
						  throw new Error(`HTTP error! status: ${response.status}`);
						}
						const data = response.json();
						const numberFromApi = data["foods"][0].fdcId;
						// Update the in-memory JSON object
						ingredient = numberFromApi;
					  } catch (error) {
						console.error('Fetch operation error:', error);
					  }
					// Here you can add code to handle the data as you wish
				})
				.catch(error => {
					// console.log(ingredient);
					console.error('There was a problem with the fetch operation:', error);
				});
		});
		try {
			fs.writeFile('path/to/your/updated_file.json', JSON.stringify(recipeData, null, 2));
			console.log('JSON file has been updated.');
		  } catch (error) {
			console.error('Error writing file:', error);
		  }
	});

});








const express = require("express");
const fs = require("fs");
const path = require("path");
const cors = require("cors");
const bodyParser = require('body-parser');


// Your existing setup continues...

const app = express();

// Correct placement for body-parser middleware
app.use(bodyParser.json());
app.use(express.static('public'));


const corsOptions = {
	origin: "*", // Replace this with your client's URL for better security in production
	methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
	allowedHeaders: "Content-Type,Authorization", // Adjust based on your needs
	preflightContinue: false,
	optionsSuccessStatus: 204,
};

// Apply CORS options
app.use(cors(corsOptions));

const jsonFilePath = path.join(__dirname, "data", "recipeData.json");

// GET route
app.get("/api", (req, res) => {
	console.log("GET request received at /api");
	fs.readFile(jsonFilePath, "utf8", (err, data) => {
		if (err) {
			console.error("Error reading JSON file:", err);
			res.status(500).json({ error: "Internal Server Error" });
			return;
		}
		const recipeData = JSON.parse(data);
		res.json({ recipeData });
	});
});

app.post("/api", (req, res) => {
	const newRecipe = req.body;

	fs.readFile(jsonFilePath, 'utf8', (err, data) => {
		if (err) {
			console.error("Error reading the file:", err);
			return res.status(500).send("Error reading the file.");
		}

		let recipes = JSON.parse(data);

		// Assign a new ID
		const newId = recipes.length > 0 ? Math.max(...recipes.map(recipe => recipe.id)) + 1 : 0;
		newRecipe.id = newId;

		const newImage = '/images/avocado-transparent.png';
		console.log(newRecipe.image);
		newRecipe.image = newImage;

		recipes.push(newRecipe); // Append the new recipe

		fs.writeFile(jsonFilePath, JSON.stringify(recipes, null, 2), 'utf8', (err) => {
			if (err) {
				console.error("Error writing the file:", err);
				return res.status(500).send("Error writing the file.");
			}

			res.status(200).send("Recipe added successfully!");
		});

	});
});

// Start the server
app.listen(5001, () => {
	console.log("Server started on port 5001");
});

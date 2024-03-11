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
});

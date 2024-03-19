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

app.listen(5001, () => {
    console.log("Server started on port 5001");

    const baseUrl = 'https://api.nal.usda.gov/fdc/v1/foods/search';

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
        Object.keys(dict).forEach(ingredient => {
            const modified = ingredient.replace("/", '');

            const params = {
                query: modified,
                dataType: ['Survey (FNDDS)'],
                pageSize: 5,
                api_key: process.env.SECRET_KEY
            };

            const queryString = new URLSearchParams(params).toString();
            const url = `${baseUrl}?${queryString}`;

            // Push each fetch request promise to the array
            fetchPromises.push(
                fetchAsync(url).then(data => {
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
            fs.writeFileSync('./data/recipeData.json', JSON.stringify(recipeData, null, 2));
            console.log("Recipe data updated successfully!");
        })
        .catch(error => {
            console.error("Error updating recipe data:", error);
        });
});
const express = require("express");
const fs = require("fs");
const path = require("path");

const app = express();

const jsonFilePath = path.join(__dirname, "data", "recipeData.json");

app.get("/api", (req, res) => {

    fs.readFile(jsonFilePath, "utf8", (err, data) => {
		if (err) {
			console.error("Error reading JSON file:", err);
			res.status(500).json({ error: "Internal Server Error" });
			return;
		}

		// Parse the JSON data
		const recipeData = JSON.parse(data);

		// Send the JSON data as a response
		req.json({ recipeData });
    });
});

app.post("/api", (req, res) => {});

app.listen(5000, () => {
	console.log("Server started on port 5000");
});

const express = require("express");
const fs = require("fs");
const path = require("path");
const cors = require("cors");
const { allowedNodeEnvironmentFlags } = require("process");

const app = express();

// callback(null, true);

const corsOptions = {
	origin: "*",
	methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
	preflightContinue: true,
	optionsSuccessStatus: 204,
	allowedHeaders: "*",
};

app.options("*", cors(corsOptions)); // include before other routes

// app.options("/api", cors(), (req, res) => {
// 	console.log("OPTIONS request received at /api");
// 	res.status(200).send();
// });

// app.use(cors(corsOptions));

const jsonFilePath = path.join(__dirname, "data", "recipeData.json");

app.get("/api", cors(corsOptions), (req, res) => {
	console.log("GET request received at /api");
	fs.readFile(jsonFilePath, "utf8", (err, data) => {
		if (err) {
			console.error("Error reading JSON file:", err);
			res.status(500).json({ error: "Internal Server Error" });
			return;
		}
		// Parse the JSON data
		const recipeData = JSON.parse(data);

		// Send the JSON data as a response
		res.json({ recipeData });
		console.log("YES");
	});
});

app.post("/api", (req, res) => {});

app.listen(5000, () => {
	console.log("Server started on port 5000");
});

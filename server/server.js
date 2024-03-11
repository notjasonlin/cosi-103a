const express = require("express");
const fs = require("fs");
const path = require("path");
const cors = require("cors");
const { allowedNodeEnvironmentFlags } = require("process");

const app = express();

// callback(null, true);

const corsOptions = {
	origin: "*", // Need to change this to proper header
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
	});
});

app.post("/api", cors(corsOptions), (req, res) => {
	console.log("POST request received at /api");
	console.log("req.body: ", req.body);
	res.status(200).send("POST request received");
});

app.listen(5000, () => {
	console.log("Server started on port 5000");
});

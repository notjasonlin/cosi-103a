const express = require("express");
const fs = require("fs");
const path = require("path");
const cors = require("cors");
const bodyParser = require('body-parser');

const app = express();

// Correct placement for body-parser middleware
app.use(bodyParser.json());

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

// POST route
app.post("/api", (req, res) => {
  console.log("POST request received at /api");
  console.log("req.body: ", req.body); // You can process the body here as needed
  res.status(200).send("POST request received");
});

// Start the server
app.listen(5001, () => {
  console.log("Server started on port 5001");
});

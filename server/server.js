const express = require("express");
const app = express();

app.get("/api", (req, res) => {});

app.post("/api", (req, res) => {});

app.listen(5000, () => {
	console.log("Server started on port 5000");
});

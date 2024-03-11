import React from "react";

/**
 * Sends data through a post request to the backend server
 */
function PostData(data) {
	const url = "http://localhost:5000/api";

	console.log("Trying to post data: ", data);

	fetch(url, {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify({
			key1: data,
		}),
	})
		.then((response) => response.json())
		.then((data) => console.log(data))
		.catch((error) => console.error("Error:", error));
}

function GetInputtedData() {
	const input = document.getElementById("input").value;
	document.getElementById("input").value = "";
	console.log("input: ", input);
	PostData(input);
}

function DataInputForm() {
	return (
		<div
			style={{
				justifyContent: "center",
				alignItems: "center",
				borderStyle: "solid",
			}}
		>
			<h1>Input Your Own Recipe in Json Format</h1>
			<input type="text" id="input" />
			<button onClick={GetInputtedData}>Submit</button>
		</div>
	);
}

export default DataInputForm;

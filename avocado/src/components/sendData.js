import React, { useRef } from "react";

/**
 * Sends data through a post request to the backend server.
 */
function PostData(data) {
    const url = "http://localhost:5001/api";

    console.log("Trying to post data:", data);

    fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data), // Converts the data object to a JSON string
    })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => console.log("Response data:", data))
        .catch(error => console.error("Error:", error));
}

function DataInputForm() {
    const inputRef = useRef(null); // Use useRef for direct DOM access

    function GetInputtedData() {
        try {
            const input = inputRef.current.value; // Access the textarea value using ref
            const inputData = JSON.parse(input); // Parse the input text as JSON
            console.log("Parsed input:", inputData);
            PostData(inputData); // Send the parsed data to the server
            inputRef.current.value = ""; // Clear the textarea after sending data
        } catch (error) {
            console.error("Parsing error:", error); // Log parsing errors
        }
    }

    return (
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                border: "2px solid black",
                padding: "20px",
                marginTop: "20px",
            }}
        >
            <h1>Input Your Own Recipe in JSON Format</h1>
            <textarea ref={inputRef} rows="10" cols="50" placeholder="Enter JSON format data here"></textarea>
            <button onClick={GetInputtedData} style={{ marginTop: "10px" }}>Submit</button>
        </div>
    );
}

export default DataInputForm;

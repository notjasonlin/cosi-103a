import React, { useRef } from "react";
import '../cssfiles/sendData.css'; // Make sure the path matches where you save the CSS file

function PostData(data) {
    const url = "http://localhost:5001/api";

    console.log("Trying to post data:", data);

    fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
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
    const inputRef = useRef(null);

    function GetInputtedData() {
        try {
            const input = inputRef.current.value;
            const inputData = JSON.parse(input);
            console.log("Parsed input:", inputData);
            PostData(inputData);
            inputRef.current.value = ""; // Clear the textarea after sending
        } catch (error) {
            console.error("Parsing error:", error);
        }
    }

    return (
        <div className="recipeFormContainer">
            <h1>Input Your Own Recipe in JSON Format</h1>
            <textarea
                className="recipeTextArea"
                ref={inputRef}
                rows="10"
                cols="50"
                placeholder="Enter JSON format data here">
            </textarea>
            <button
                className="recipeSubmitButton"
                onClick={GetInputtedData}>
                Submit
            </button>
        </div>
    );
}

export default DataInputForm;

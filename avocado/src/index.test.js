import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

jest.mock("react-dom", () => ({
	createRoot: jest.fn(() => ({ render: jest.fn() })),
}));

jest.mock("./App", () => () => "Mocked App Component");
jest.mock("./reportWebVitals");

describe("index.js", () => {
	it("calls ReactDOM.createRoot and root.render", () => {
		require("./index.js");
		expect(ReactDOM.createRoot).toHaveBeenCalled();
		expect(ReactDOM.createRoot().render).toHaveBeenCalledWith(
			<React.StrictMode>
				<App />
			</React.StrictMode>
		);
	});

	it("calls reportWebVitals", () => {
		expect(reportWebVitals).toHaveBeenCalled();
	});
});

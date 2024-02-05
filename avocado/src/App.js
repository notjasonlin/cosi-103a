import React, { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import RecipeContainer from "./container";
import RecipeList from "./recipes";

function App() {
	const [showMainContent, setShowMainContent] = useState(true);
	return (
		<div className="App">
			<Router>
				<div>
					{/* Navigation Links */}
					<nav>
						<ul>{/* Add navigation links here if needed */}</ul>
					</nav>
					<Routes>
						<Route path="/selectedRecipe" />
						<Route path="/recipe/:recipeId" element={<RecipeList />} />{" "}
						{/* Route for individual recipe pages */}
					</Routes>
				</div>
			</Router>
			{showMainContent && (
				<>
					<header className="App-header">
						<img
							src="/images/avocado-transparent.png"
							alt="Logo"
							className="App-logo"
						/>
						<div className="Header-content">
							<div>Avocado Inc.</div>
							<div className="Subtitle">Delicious Recipes</div>
						</div>
					</header>

					<div className="App-body">
						<RecipeContainer />
					</div>

					<footer className="footer">
						<h2 id="copyright">© 2024 Avocado Inc.</h2>
						<a href="https://facebook.com" class="fa fa-facebook"></a>
						<a href="https://twitter.com" class="fa fa-twitter"></a>
						<a href="https://youtube.com" class="fa fa-youtube"></a>
						<a href="https://instagram.com" class="fa fa-instagram"></a>
						<a href="https://linkedin.com" class="fa fa-linkedin"></a>
					</footer>
				</>
			)}
			;
		</div>
	);
}

export default App;

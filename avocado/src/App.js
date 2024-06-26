import React from "react";
import {
	BrowserRouter as Router,
	Route,
	Routes,
	useParams,
	Link,
	NavLink,
} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./cssfiles/App.css";

import RecipeContainer from "./components/recipeContainer";
import RecipeList from "./components/recipes";
import TeamContainer from "./components/teamContainer";
import HomePage from "./components/home-page";
import { GroceryProvider } from "./data/grocery-context";
import GroceryButton from "./components/grocery-button";
import DataInputForm from "./components/sendData";

import { useEffect, useState } from "react";
import CookMode from "./components/cook-mode";
import ipAddressArray from "./ip.js";


function App() {
    const [backendData, setBackendData] = useState([]);
    const [ip, setIp] = useState(null);

	// const ip = "20.242.137.131";

	useEffect(() => {
		fetch("/api").then(async (response) => {
			let data = await response.json();
			setBackendData(data);
		});
	}, []);

	useEffect(() => {
		console.log("backendData: ", backendData);
	}, [backendData]);

	return (
		<Router>
			<GroceryProvider>
				<div className="App">
					<header className="App-header">
						<Link to="/" className="Logo-Container">
							<img
								src="/images/avocado-transparent.png"
								alt="Logo"
								className="App-logo"
							/>
						</Link>
						<div className="Header-content">
							<div>Avocado Inc.</div>
							<div className="Subtitle">Delicious Recipes</div>
						</div>
					</header>

					<nav className="navbar">
						<NavLink to="/" className="nav-link" exact>
							Home
						</NavLink>
						<NavLink to="/recipes" className="nav-link">
							Recipes
						</NavLink>
						<NavLink to="/team" className="nav-link">
							Team
						</NavLink>
						<NavLink to="/add-recipes" className="nav-link">
							Add Your Own Recipes
						</NavLink>
					</nav>
					<GroceryButton />

					<Routes>
						<Route path="/team" element={<TeamContainer />} />
						<Route
							path="/recipes"
							element={<MakeRecipeContainers backendData={backendData} />}
						/>
						<Route path="/" element={<HomePage />} exact />
						<Route
							path="/recipe/:recipeId"
							element={<RecipeListPage backendData={backendData} />}
						/>
						<Route path="/add-recipes" element={<DataInputForm />} />
						<Route
							path="/recipe/:recipeId/cookingMode"
							element={<CookModePage backendData={backendData} />}
						/>
					</Routes>

					<footer className="footer">
						<h2>© 2024 Avocado Inc.</h2>
						<a href="https://facebook.com" className="fa fa-facebook"></a>
						<a href="https://twitter.com" className="fa fa-twitter"></a>
						<a href="https://youtube.com" className="fa fa-youtube"></a>
						<a href="https://instagram.com" className="fa fa-instagram"></a>
						<a href="https://linkedin.com" className="fa fa-linkedin"></a>
					</footer>
				</div>
			</GroceryProvider>
		</Router>
	);
}

function RecipeListPage({ backendData }) {
	const { recipeId } = useParams(); // Extract recipeId from URL params
	console.log("Data to Recipes: ", backendData);
	return <RecipeList recipeId={recipeId} recipesData={backendData} />;
}

function MakeRecipeContainers({ backendData }) {
	// console.log(backendData);
	return <RecipeContainer recipesData={backendData} />;
}

function CookModePage({ backendData }) {
	const { recipeId } = useParams(); // Extract recipeId from URL params
	return <CookMode recipeId={recipeId} recipesData={backendData} />;
}

export default App;

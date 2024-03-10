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
import { useEffect, useState } from "react";

function App() {
	const [backendData, setBackendData] = useState([{}])

	useEffect(() => {
		fetch("/api").then(
			response => response.json()
		).then(
			data => {
				setBackendData(data)
			}
		)
	}, [])

	
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
					</nav>
					<GroceryButton/>

					<Routes>
						<Route path="/team" element={<TeamContainer />} />
						<Route path="/recipes" element={<RecipeContainer />} />
						<Route path="/" element={<HomePage />} exact />
						<Route path="/recipe/:recipeId" element={<RecipeListPage />} />
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

function RecipeListPage() {
	const { recipeId } = useParams(); // Extract recipeId from URL params
	return <RecipeList recipeId={recipeId} />;
}

export default App;

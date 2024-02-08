import React from "react";
import {
	BrowserRouter as Router,
	Route,
	Routes,
	useParams,
	Link,
} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./cssfiles/App.css";
import RecipeContainer from "./components/recipeContainer";
import RecipeList from "./components/recipes";
import HomePage from "./components/home-page";
import TeamContainer from "./components/teamContainer";

function App() {
	return (
		<Router>
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

				<Routes>
					<Route path="/" element={<HomePage />} />
					<Route path="/team" element={<TeamContainer />} />
					<Route path="/recipe/:recipeId" element={<RecipeListPage />} />
					<Route path="/recipes" element={<RecipeContainer />} />
				</Routes>

				<footer className="footer">
					<h2 id="copyright">© 2024 Avocado Inc.</h2>
					<a href="https://facebook.com" className="fa fa-facebook"></a>
					<a href="https://twitter.com" className="fa fa-twitter"></a>
					<a href="https://youtube.com" className="fa fa-youtube"></a>
					<a href="https://instagram.com" className="fa fa-instagram"></a>
					<a href="https://linkedin.com" className="fa fa-linkedin"></a>
				</footer>
			</div>
		</Router>
	);
}

function RecipeListPage() {
	const { recipeId } = useParams(); // Extract recipeId from URL params
	return <RecipeList recipeId={recipeId} />;
}

export default App;

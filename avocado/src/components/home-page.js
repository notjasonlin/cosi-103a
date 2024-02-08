import { Link } from "react-router-dom";
import "../cssfiles/home-page.css";

function HomePage() {
	return (
		<div className="home-page">
			<h1 className="header">Welcome to Avocado Inc.!</h1>
			<p className="directions">
				Click on the avocado to see our delicious recipes!
			</p>
			<div className="avocado-image-container">
				<Link to="/recipes">
					<img
						className="avocado-image"
						src="/images/avocado-transparent.png"
						alt="Avocado Logo"
					/>
				</Link>
			</div>
		</div>
	);
}

export default HomePage;

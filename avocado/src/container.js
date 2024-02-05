import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import recipesData from "./data/recipeData";

import RecipeCard from "./card";

function RecipeContainer() {
	return (
		<Container>
			<Row>
				{recipesData.map((recipe) => (
					<RecipeCard key={recipe.id} recipeId={recipe.id} />
				))}
			</Row>
		</Container>
	);
}

export default RecipeContainer;

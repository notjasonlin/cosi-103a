import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import recipesData from "../data/recipeData";

import RecipeCard from "./card";

function RecipeContainer() {
	return (
		<Container>
			<Row>
				{recipesData.map((recipe) => (
					<RecipeCard key={recipe} recipe={recipe} />
				))}
			</Row>
		</Container>
	);
}

export default RecipeContainer;

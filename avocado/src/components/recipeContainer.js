import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

import RecipeCard from "./recipeCard";

// Container for all recipe cards
function RecipeContainer({ recipesData }) {
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

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import recipesData from "./data/recipeData";

import RecipeCard from "./card";

function mapCardArrayToComponent(cardArray) {
	return cardArray.map((card, index) => (
		<Col key={index}>
			<RecipeCard recipeId={card.id} />
		</Col>
	));
}

function makeRecipeCards() {
	recipesData.forEach((recipe) => {
		return <RecipeCard recipeId={recipe.id} />;
	});
}

function RecipeContainer() {
	return (
		<Container>
			{recipesData.map((recipe) => {
				<RecipeCard recipeId={recipe.id} />;
			})}
			<RecipeCard recipeId={1} />
		</Container>
	);
}

export default RecipeContainer;

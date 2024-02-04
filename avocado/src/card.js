import Card from "react-bootstrap/Card";
import recipesData from "./data/recipeData";

function RecipeCard({ recipeId }) {
	const recipeData = recipesData.find((recipe) => recipe.id === recipeId);
	return (
		<Card>
			<Card.Img variant="top" src={recipeData.image} alt={recipeData.name} />
			<Card.Body>
				<Card.Title>{recipeData.name}</Card.Title>
				<Card.Link href="#">Go To Recipe!</Card.Link>
			</Card.Body>
		</Card>
	);
}

export default RecipeCard;

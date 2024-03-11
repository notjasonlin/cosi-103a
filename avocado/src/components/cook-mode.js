import RecipeCarousel from "./carousel";
import recipesData from "../data/recipeData";
import Container from "react-bootstrap/Container";

function CookMode( {recipeId} ) {
	const id = parseInt(recipeId);
	const selectedRecipe = recipesData.find((recipe) => recipe.id === id)

	if (!selectedRecipe) {
		return <div>NO RECIPE</div>;
	}

	return (
		<div className="cookMode" style={{ backgroundColor: "#006400", height: "100vh", overflow: "hidden" }}>
		  <Container style={{ backgroundColor: "#006400", height: "100%", padding: "20px" }}>
			<RecipeCarousel selectedRecipe={selectedRecipe}></RecipeCarousel>
		  </Container>
		</div>
	);
}

export default CookMode;

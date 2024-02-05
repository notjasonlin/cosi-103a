import Card from "react-bootstrap/Card";
import recipesData from "./data/recipeData";

function RecipeCard({ recipeId }) {
	const recipeData = recipesData.find((recipe) => recipe.id === recipeId);
	return (
		<Card
			bg={"dark"}
			text={"light"}
			border="success"
			style={{
				width: "30%",
				borderRadius: "3rem",
				margin: "1rem",
				borderColor: "green",
				borderWidth: "0.2rem",
				boxShadow: "0 0 0.5rem 0.2rem green",
			}}
		>
			<Card.Img
				variant="top"
				src={recipeData.image}
				alt={recipeData.name}
				style={{
					width: "100%",
					height: "20vw",
					objectFit: "cover",
					padding: "1rem",
					borderRadius: "3rem",
				}}
			/>
			<Card.Body>
				<Card.Title>{recipeData.name}</Card.Title>
				<Card.Link href={"#"} key={recipeData.id}>
					Go To Recipe!
				</Card.Link>
			</Card.Body>
		</Card>
	);
}

export default RecipeCard;

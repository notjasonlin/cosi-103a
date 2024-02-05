import React from "react";
import Card from "react-bootstrap/Card";
import recipesData from "./data/recipeData";
import { Link } from "react-router-dom";

function RecipeCard({ recipeId }) {
	const recipeData = recipesData.find((recipe) => recipe.id === recipeId);
	return (
		<Card
			text={"light"}
			border="success"
			style={{
				backgroundColor: "#272727",
				width: "30%",
				borderRadius: "3rem",
				margin: "1rem",
				borderColor: "green",
				borderWidth: "0.5rem",
				boxShadow: "0 0 0.5rem 0.3rem green",
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
					borderRadius: "2rem 2rem 2rem 2rem",
				}}
			/>
			<Card.Body>
				<Card.Title>{recipeData.name}</Card.Title>
				<Card.Text>{recipeData.description}</Card.Text>
				<Link to={`/recipe/${recipeData.id}`}>Go To Recipe!</Link>
			</Card.Body>
		</Card>
	);
}

export default RecipeCard;

import React from "react";
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import recipesData from "../data/recipeData";

function RecipeCard({ recipeId }) {
	const recipeData = recipesData.find((recipe) => recipe.id === recipeId);

	if (!recipeData) {
		return <div>Recipe not found!</div>;
	}

	return (
		<Card
			text="light"
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
					borderRadius: "2rem",
				}}
			/>
			<Card.Body>
				<Card.Title>{recipeData.name}</Card.Title>
				<Card.Text>{recipeData.description}</Card.Text>
				<Link to={`/recipe/${recipeData.id}`} style={{ textDecoration: 'none' }}>
					<Button variant="success" style={{ borderRadius: '2rem' }}>Go To Recipe!</Button>
				</Link>
			</Card.Body>
		</Card>
	);
}

export default RecipeCard;
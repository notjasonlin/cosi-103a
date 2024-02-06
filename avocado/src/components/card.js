import React from "react";
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

function RecipeCard({ recipe }) {

	if (!recipe) {
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
				src={recipe.image}
				alt={recipe.name}
				style={{
					width: "100%",
					height: "20vw",
					objectFit: "cover",
					padding: "1rem",
					borderRadius: "2rem",
				}}
			/>
			<Card.Body>
				<Card.Title>{recipe.name}</Card.Title>
				<Card.Text>{recipe.description}</Card.Text>
				<Link to={`/recipe/${recipe.id}`} style={{ textDecoration: 'none' }}>
					<Button variant="success" style={{ borderRadius: '2rem' }}>Go To Recipe!</Button>
				</Link>
			</Card.Body>
		</Card>
	);
}

export default RecipeCard;
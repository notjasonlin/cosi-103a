import React from "react";
import { Card } from "react-bootstrap";
import GroceryList from "./GroceryList";

function GroceryCard() {

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
				<GroceryList></GroceryList>
			</Card.Body>
		</Card>
	);
}

export default GroceryCard;

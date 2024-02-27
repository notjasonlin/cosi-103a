import React from "react";
import { Card } from "react-bootstrap";
import GroceryList from "./grocery-list";

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
				borderWidth: "0.1rem",
				boxShadow: "0 0 0.5rem 0.3rem green",
			}}
		>
			<Card.Body>
				<GroceryList></GroceryList>
			</Card.Body>
		</Card>
	);
}

export default GroceryCard;

import React from "react";
import { Card } from "react-bootstrap";
import GroceryList from "./grocery-list";
import "../cssfiles/groceries/groceryCard.css"; // Correctly import the CSS file

function GroceryCard() {
	return (
		<Card
			className="groceryCard text-light border-success" // Use the class name directly
		>
			<Card.Body>
				<GroceryList></GroceryList>
			</Card.Body>
		</Card>
	);
}

export default GroceryCard;

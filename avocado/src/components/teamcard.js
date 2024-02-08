import React from "react";
import { Card } from "react-bootstrap";

// Creates a recipe card containing all recipe data
function TeamCard({ member }) {
	if (!member) {
		return <div>Member not found!</div>;
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
				src={member.image}
				alt={member.name}
				style={{
					width: "100%",
					height: "20vw",
					objectFit: "cover",
					padding: "1rem",
					borderRadius: "2rem",
				}}
			/>
			<Card.Body>
				<Card.Title>{member.name}</Card.Title>
				<Card.Text>{member.description}</Card.Text>
			</Card.Body>
		</Card>
	);
}

export default TeamCard;
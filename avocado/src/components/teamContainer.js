import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import memberData from "../data/memberData";

import TeamCard from "./teamcard";

// Container for all recipe cards
function TeamContainer() {
	return (
		<Container>
			<Row>
				{memberData.map((member) => (
					<TeamCard key={member} member={member} />
				))}
			</Row>
		</Container>
	);
}

export default TeamContainer;

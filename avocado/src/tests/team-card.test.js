import { render, screen, waitFor, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom";
import React from "react";
import TeamCard from "../components/teamcard";
import {
	BrowserRouter as Router,
	Route,
	Routes,
	useParams,
} from "react-router-dom";

afterEach(() => {
	cleanup();
});

test("renders properly", async () => {
    const teamMember = {
        id: 0,
        name: "Artem Lavrov",
        description: 
            "This is Artem, he is a rat!",
        image: "/images/ratAvocado.png",
    };
    
    render(
        <Router>
            <TeamCard member={teamMember}></TeamCard>
        </Router>
    )
    waitFor(() => {
        const linkElements = screen.getAllByText(teamMember.name);
        expect(linkElements.length).toBeGreaterThan(0);
        expect(screen.getAllByText(teamMember.description).length).toBeGreaterThan(0);
    });
});

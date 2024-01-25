import React from 'react';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Dropdown from 'react-bootstrap/Dropdown';

const DropDown = () => {
    return (
        <Dropdown as={ButtonGroup}>
            <Button variant="success">Avocado Recipes</Button>

            <Dropdown.Toggle split variant="success" id="dropdown-split-basic" />

            <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">Avocado Toast</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Avocado Smoothie</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Bacon Guac Bombs</Dropdown.Item>
                <Dropdown.Item href="#/action-4">Avocado Salad</Dropdown.Item>
                <Dropdown.Item href="#/action-5">Fried Avocado Bites</Dropdown.Item>
                <Dropdown.Item href="#/action-6">California Sushi Roll</Dropdown.Item>
                <Dropdown.Item href="#/action-7">Grilled Avocados</Dropdown.Item>

            </Dropdown.Menu>
        </Dropdown>
    );
};

export default DropDown;

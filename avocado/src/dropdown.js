import React from 'react';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Dropdown from 'react-bootstrap/Dropdown';

const DropDown = () => {

    const openRecipe1 = () => { // Change it so 7 arrow functions aren't hardcoded in
        var divText = document.getElementById("display");
        divText.textContent = "Recipe 1\nIngredients";
    };

    const openRecipe2 = () => {
        var divText = document.getElementById("display");
        divText.textContent = "Recipe 2\nIngredients";
    };

    const openRecipe3 = () => {
        var divText = document.getElementById("display");
        divText.textContent = "Recipe 3\nIngredients";
    };

    const openRecipe4 = () => {
        var divText = document.getElementById("display");
        divText.textContent = "Recipe 4\nIngredients";
    };

    const openRecipe5 = () => {
        var divText = document.getElementById("display");
        divText.textContent = "Recipe 5\nIngredients";
    };

    const openRecipe6 = () => {
        var divText = document.getElementById("display");
        divText.textContent = "Recipe 6\nIngredients";
    };

    const openRecipe7 = () => {
        var divText = document.getElementById("display");
        divText.textContent = "Recipe 7\nIngredients";
    };

    return (
        <Dropdown as={ButtonGroup}>
            <Button variant="success">Avocado Recipes</Button>

            <Dropdown.Toggle split variant="success" id="dropdown-split-basic" />

            <Dropdown.Menu>
                <Dropdown.Item onClick={openRecipe1}>Avocado Toast</Dropdown.Item>
                <Dropdown.Item onClick={openRecipe2}>Avocado Smoothie</Dropdown.Item>
                <Dropdown.Item onClick={openRecipe3}>Bacon Guac Bombs</Dropdown.Item>
                <Dropdown.Item onClick={openRecipe4}>Avocado Salad</Dropdown.Item>
                <Dropdown.Item onClick={openRecipe5}>Fried Avocado Bites</Dropdown.Item>
                <Dropdown.Item onClick={openRecipe6}>California Sushi Roll</Dropdown.Item>
                <Dropdown.Item onClick={openRecipe7}>Grilled Avocados</Dropdown.Item>

            </Dropdown.Menu>

            <div id="display"></div>

        </Dropdown>
    );
};

export default DropDown;

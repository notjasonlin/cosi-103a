import React, { useState } from 'react';
import GroceryCard from './grocery-card';
import '../cssfiles/groceries/groceryButton.css';

const GroceryButton = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const handleButtonClick = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <div className="button-container">
      <button
        className={isMenuOpen ? 'openButton' : 'closedButton'}
        onClick={handleButtonClick}
      >
        {isMenuOpen ? 'Close Menu' : 'Open Menu'}
      </button>
      {isMenuOpen && <GroceryCard />}
    </div>
  );
};

export default GroceryButton;

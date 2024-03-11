// In CookMode.js
import React, { useState } from 'react';

const CookMode = ({ isMenuOpen, handleOpenMenu }) => {
  const handleButtonClick = () => {
    if (!isMenuOpen) {
      handleOpenMenu(/* pass the appropriate recipe here */);
    }
  };

  return (
    <div className="button-container">
      <button
        className={isMenuOpen ? 'openButton' : 'closedButton'}
        onClick={handleButtonClick}
      >
        {isMenuOpen ? 'Close Menu' : 'Open Menu'}
      </button>
    </div>
  );
};

export default CookMode;

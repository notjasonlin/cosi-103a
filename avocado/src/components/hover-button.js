import React, { useState } from 'react';
import { GroceryCard } from "./grocery-card";

const HoverButton = () => {
  const [isHovered, setHovered] = useState(false);

  const handleMouseEnter = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };

  return (
    <div className="button-container" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <button
        className={isHovered ? 'hoveredButton' : 'defaultButton'}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        Hover Me
      </button>
      { isHovered && <GroceryCard />}
    </div>
  );
};

export default HoverButton;
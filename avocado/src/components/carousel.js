import React, { useState } from 'react';
import '../cssfiles/carousel-button.css';
import '../cssfiles/carousel.css';

const Carousel = ({ items }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextItem = () => {
    setCurrentIndex((prevIndex) => {
      const nextIndex = (prevIndex + 1) % items.length;
      return nextIndex !== 0 ? nextIndex : prevIndex;
    });
  };

  const prevItem = () => {
    setCurrentIndex((prevIndex) => {
      const prevIndexNormalized = (prevIndex - 1 + items.length) % items.length;
      return prevIndex !== 0 ? prevIndexNormalized : prevIndex;
    });
  };

  return (
    <div className="carousel">
      <button className="carousel-button left" onClick={prevItem}>Previous</button>
      <div className="carousel-content">
        <br/>
        <p style={{ margin: 0, padding: "20px", fontSize: "2em", fontWeight: "bold", textAlign: "center" }}>Step {currentIndex+1}</p>
        <p style={{ margin: 0, padding: "20px", fontSize: "2em", textAlign: "center" }}>{items[currentIndex]}</p>
        <br/>
      </div>
      <button className="carousel-button right" onClick={nextItem}>Next</button>
    </div>
  );
};

const RecipeCarousel = ({ selectedRecipe }) => {
  return (
    <div className="recipe-carousel-container">
      {selectedRecipe.ingredients.length > 0 && (
        <Carousel items={selectedRecipe.ingredients} />
      )}
    </div>
  );
};

export default RecipeCarousel;
import React, { useState } from 'react';

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
      <button onClick={prevItem}>Previous</button>
      <div className="carousel-content">
        <p>{items[currentIndex]}</p>
      </div>
      <button onClick={nextItem}>Next</button>
    </div>
  );
};

const RecipeCarousel = ({ selectedRecipe }) => {
  return (
    <div>
      {selectedRecipe.ingredients.length > 0 && (
        <Carousel items={selectedRecipe.ingredients} />
      )}
    </div>
  );
};

export default RecipeCarousel;

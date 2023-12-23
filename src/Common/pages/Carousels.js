// Carousel.js

import React, { useState, useEffect } from 'react';
import '../assets/css/main.css';

import car from '../assets/image/bg-car1.png'



const Carousels = () => {
    const [translateX, setTranslateX] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      // Move the content to the left
      setTranslateX((prevTranslateX) => prevTranslateX - 100);
    }, 5000); // Adjust the interval as needed for slower or faster movement

    return () => clearInterval(intervalId);
  }, []);
  return (
    <div className="carousel-container">
      <div className="carousel-content">
        {/* Your carousel items go here */}
        <div className="carousel-item">
          <img src={car} alt="Image 1" />
          <p>Content 1</p>
        </div>
        <div className="carousel-item">
          <img src={car} alt="Image 2" />
          <p>Content 2</p>
        </div>
        {/* Add more items as needed */}
      </div>
    </div>
  );
};

export default Carousels;

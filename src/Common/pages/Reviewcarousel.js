import React, { useState, useRef, useEffect } from 'react';
import '../assets/css/header.css';

import car from '../assets/image/string.png'

const Reviewcarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const slides = [
    { id: 1, title: 'John doe', content: ' You will begin to realize why this exercise is called the Dickens Pattern with reference to the ghost showing Scrooge some different futures as you notice that the idea of this exercise.', image: car },
    { id: 2, title: 'doe', content: ' You will begin to realize why this exercise is called the Dickens Pattern with reference to the ghost showing Scrooge some different futures as you notice that the idea of this exercise.', image: car },
    { id: 3, title: 'John doe', content: ' You will begin to realize why this exercise is called the Dickens Pattern with reference to the ghost showing Scrooge some different futures as you notice that the idea of this exercise.', image: car },
  ];

  const carouselRef = useRef();
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e) => {
    touchEndX.current = e.touches[0].clientX;
    const differenceInX = touchStartX.current - touchEndX.current;
    if (Math.abs(differenceInX) > 50) {
      setCurrentIndex((currentIndex + (differenceInX > 0 ? -1 : 1)) % slides.length);
      touchStartX.current = touchEndX.current;
    }
  };

  const handleSlideChange = () => {
    setCurrentIndex((currentIndex + 1) % slides.length);
  };

  useEffect(() => {
    const interval = setInterval(handleSlideChange, 5000);

    return () => clearInterval(interval);
  }, [currentIndex, slides.length]);

  return (
    <div className="carousel container-95 py-5" ref={carouselRef} onTouchStart={handleTouchStart} onTouchMove={handleTouchMove}>
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`slide ${index === currentIndex ? 'active' : ''}`}
        >
          <div className='row m-0'>
            <div className='col-12 carousel-content mt-2 text-center'>
              <img src={slide.image} className='string-image'/>
              <p className='py-3'>{slide.content}</p>
              <h5>{slide.title}</h5>
            </div>
          </div>
        </div>

      ))}
      <div className="carousel-dots carousel-indicators">
        {slides.map((slide, index) => (
          <button key={slide.id} className={`carousel-dot ${index === currentIndex ? 'active' : ''} mx-1`} onClick={() => setCurrentIndex(index)}>
            
          </button>
        ))}
      </div>
    </div>
  );
};

export default Reviewcarousel;
import React, { useState, useRef, useEffect } from 'react';
import '../assets/css/header.css';

import car from '../assets/image/bg-car1.png'

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const slides = [
    { id: 1, title: 'Best Pre-Owned Car', content: 'Outlet In Coimbatore', button_content: 'Learn More', image: car },
    { id: 2, title: 'Best Pre-Owned Car', content: 'Outlet In Coimbatore', button_content: 'Learn More', image: car },
    { id: 3, title: 'Best Pre-Owned Car', content: 'Outlet In Coimbatore', button_content: 'Learn More', image: car },
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
            <div className='col-lg-6 col-md-6 col-12 carousel-content mt-2'>
              <h3>{slide.title}</h3>
              <p className='py-3'>{slide.content}</p>
              <button>{slide.button_content}</button>
            </div>
            <div className='col-lg-6 col-md-6 col-12'><img src={slide.image} alt={slide.id} /></div>
          </div>
        </div>

      ))}

      {/* <button className="carousel-arrow carousel-arrow-prev" onClick={() => handleSlideChange(-1)}>
        <i className="fas fa-chevron-left"></i>
      </button>

      <button className="carousel-arrow carousel-arrow-next" onClick={() => handleSlideChange(1)}>
        <i className="fas fa-chevron-right"></i>
      </button> */}

      <div className="carousel-dots carousel-indicators">
        {slides.map((slide, index) => (
          <button key={slide.id} className={`carousel-dot ${index === currentIndex ? 'active' : ''} mx-1`} onClick={() => setCurrentIndex(index)}>
            
          </button>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
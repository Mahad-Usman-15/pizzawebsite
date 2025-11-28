import React, { useCallback, useEffect, useMemo } from 'react'
import hero1 from "../../assets/images/hero1.jpg"
import hero2 from "../../assets/images/hero2.jpg"
import hero3 from "../../assets/images/hero3.jpeg"
import { useState } from "react";

const Carousel = () => {
  const slides =useMemo(()=> [
    hero1,
    hero2,
    hero3,
  ],[])
  const [slideIndex, setSlideIndex] = useState(0);
  const nextSlide =useCallback(() => {
    setSlideIndex((prev) => (prev + 1) % slides.length);
  },[slides.length]) 

  const prevSlide = () => {
    setSlideIndex((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index) => {
    setSlideIndex(index);
  };

  useEffect(() => {
    const timeout = setInterval(() => {
      nextSlide()
    }, 2000);

    return () => clearInterval(timeout)
  }, [slides,slideIndex,nextSlide])

  return (
    <div className="relative w-full  mx-auto">
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`${index === slideIndex ? "block" : "hidden"
            } transition-all duration-500 `}
        >
          <img src={slide} alt={`Slide ${index + 1}`} className="w-full rounded-lg h-48 md:h-auto" />
        </div>
      ))}

      {/* Controls */}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-4 bg-gray-800 text-white px-3 py-1 rounded-full"
      >
        ❮
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-4 bg-gray-800 text-white px-3 py-1 rounded-full"
      >
        ❯
      </button>

      {/* Dots */}
      <div className="flex justify-center -mt-3 space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full ${index === slideIndex ? "bg-gray-800" : "bg-gray-400"
              }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;



"use client";

import React, { useEffect, useState } from "react";
import CardMovie from "./CardMovie";
import arrowLeft from "@/assets/icons/arrow-left.png";
import arrowRight from "@/assets/icons/arrow-right.png";
import { MovieType } from "@/libs/type";
import ArrowButton from "./Base/ButtonArrow";

interface MovieSliderProps {
  movies: MovieType[];
}

export default function MultiSlider({ movies }: MovieSliderProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const visibleCountDesktop = 5;
  const visibleCountMobile = 3;
  const [visibleCount, setVisibleCount] = useState(visibleCountDesktop);
  const totalMovies = movies.length;

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setVisibleCount(visibleCountMobile);
      } else {
        setVisibleCount(visibleCountDesktop);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prevIndex) => prevIndex - 1);
    }
  };

  const handleNext = () => {
    if (currentIndex < totalMovies - visibleCount) {
      setCurrentIndex((prevIndex) => prevIndex + 1);
    }
  };

  return (
    <div className="relative">
      <div className="overflow-hidden w-full">
        <div
          className="flex transition-transform duration-500 gap-3"
          style={{
            transform: `translateX(-${currentIndex * (100 / visibleCount)}%)`,
            width: `${(100 / visibleCount) * totalMovies}%`,
          }}
        >
          {movies.map((movie, index) => (
            <div
              key={index}
              className=""
              style={{ width: `${100 / visibleCount}%` }}
            >
              <CardMovie movieName={movie.title} movieImage={movie.image} />
            </div>
          ))}
        </div>
      </div>

      <ArrowButton
        direction="prev"
        onClick={handlePrev}
        disabled={currentIndex === 0}
        currentIndex={currentIndex}
        totalMovies={totalMovies}
        visibleCount={visibleCount}
        iconSrc={arrowLeft}
      />

      <ArrowButton
        direction="next"
        onClick={handleNext}
        disabled={currentIndex >= totalMovies - visibleCount}
        currentIndex={currentIndex}
        totalMovies={totalMovies}
        visibleCount={visibleCount}
        iconSrc={arrowRight}
      />
    </div>
  );
}

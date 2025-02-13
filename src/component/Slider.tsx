"use client";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import Image from "next/image";
import { Navigation } from "swiper/modules";
import squidgame from "@/assets/movies/squid-game.png";
import deadpool from "@/assets/movies/deadpool.png";
import irishman from "@/assets/movies/the-irish-man.png";

const Slider = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const images = [squidgame, deadpool, irishman, squidgame, deadpool, irishman];

  return (
    <div className="md:block hidden">
      <Swiper
        modules={[Navigation]}
        navigation
        loop
        spaceBetween={10}
        slidesPerView={3}
        style={{ height: "60vh", margin: "0 18px", overflow: "hidden" }}
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
      >
        {images.map((slide, index) => (
          <SwiperSlide
            key={index}
            style={{
              position: "relative",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              overflow: "hidden",
            }}
          >
            {index !== activeIndex && (
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  zIndex: 1,
                }}
              />
            )}
            <Image
              src={slide.src}
              alt={`Slide ${index + 1}`}
              fill
              style={{
                objectFit: "contain",
                zIndex: 0,
              }}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Slider;

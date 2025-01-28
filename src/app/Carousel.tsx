"use client";
import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion"; // Import Framer Motion

const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);

  const slides = [
    {
      id: "slide1",
      image: "/images/carousel-image-1.png",
      alt: "Slide 1",
    },
    {
      id: "slide2",
      image: "/images/carousel-image-2.png",
      alt: "Slide 2",
    },
    {
      id: "slide3",
      image: "/images/carousel-image-3.png",
      alt: "Slide 3",
    },
    {
      id: "slide4",
      image: "/images/carousel-image-4.png",
      alt: "Slide 4",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 5000);

    if (carouselRef.current) {
      let startX: number;
      let endX: number;

      carouselRef.current.addEventListener("touchstart", (e) => {
        startX = e.touches[0].clientX;
      });

      carouselRef.current.addEventListener("touchend", (e) => {
        endX = e.changedTouches[0].clientX;
        if (startX > endX) {
          setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
        } else if (startX < endX) {
          setCurrentSlide((prevSlide) =>
            prevSlide === 0 ? slides.length - 1 : prevSlide - 1
          );
        }
      });
    }

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-[637px] overflow-hidden">
      <div
        ref={carouselRef}
        className="relative w-full h-full overflow-hidden"
      >
        {slides.map((slide, index) => (
          <motion.div
            key={slide.id}
            initial={{
              opacity: index === 0 ? 1 : 0,
              x: index === 0 ? 0 : "100%",
            }}
            animate={{
              opacity: index === currentSlide ? 1 : 0,
              x:
                index === currentSlide
                  ? 0
                  : index > currentSlide
                  ? "100%"
                  : "-100%",
            }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className={`absolute top-0 left-0 w-full h-full`}
            style={{
              overflow: "hidden",
              pointerEvents: index === currentSlide ? "auto" : "none",
            }}
          >
            <Image
              src={slide.image}
              alt={slide.alt}
              fill
              className="object-cover"
            />
            {index === currentSlide && (
              <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center z-10"></div>
            )}
            {index === currentSlide && (
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent z-10"></div>
            )}
          </motion.div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2 z-10">
        <button
          onClick={() =>
            setCurrentSlide((prevSlide) =>
              prevSlide === 0 ? slides.length - 1 : prevSlide - 1
            )
          }
          className="btn btn-circle bg-opacity-50 hover:bg-opacity-75"
        >
          ❮
        </button>
        <button
          onClick={() =>
            setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length)
          }
          className="btn btn-circle bg-opacity-50 hover:bg-opacity-75"
        >
          ❯
        </button>
      </div>

      {/* Indicator Dots */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-10">
        {slides.map((_, index) => (
          <span
            key={index}
            className={`h-3 w-3 rounded-full inline-block mx-1 cursor-pointer ${
              index === currentSlide ? "bg-orange-500" : "bg-gray-400"
            }`}
            onClick={() => setCurrentSlide(index)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default Carousel;

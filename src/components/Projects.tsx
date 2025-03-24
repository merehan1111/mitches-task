"use client";

import { useRef, useEffect, useState } from "react";
import gsap from "gsap";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const newsData = [
  {
    id: 1,
    image: "project1.jfif",
    title: "G Developments launches Seashell Ras El Hekma",
    date: "News - May 2024",
    description:
      "The first fully-integrated coastal resort at the heart of the North Coast’s Ras El Hekma.",
  },
  {
    id: 2,
    image: "project2.png",
    title: "G Developments launches Seashell Ras El Hekma",
    date: "News - May 2024",
    description:
      "The first fully-integrated coastal resort at the heart of the North Coast’s Ras El Hekma.",
  },
  {
    id: 3,
    image: "project3.png",
    title: "G Developments launches Seashell Ras El Hekma",
    date: "News - May 2024",
    description:
      "The first fully-integrated coastal resort at the heart of the North Coast’s Ras El Hekma.",
  },
  {
    id: 4,
    image: "project2.png",
    title: "New Residential Project in New Cairo",
    date: "News - June 2024",
    description:
      "A luxury residential development offering state-of-the-art amenities.",
  },
];

const Projects = () => {
  const progressRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardsPerView, setCardsPerView] = useState(1);

  useEffect(() => {
    const updateCardsPerView = () => {
      if (window.innerWidth >= 1024) {
        setCardsPerView(2.1); // Large screens: show 2 full cards + small part of the 3rd
      } else if (window.innerWidth >= 768) {
        setCardsPerView(2.1); // Medium screens: show 2 full cards + small part of the 3rd
      } else {
        setCardsPerView(1); // Small screens: show only 1 card
      }
    };

    updateCardsPerView();
    window.addEventListener("resize", updateCardsPerView);
    return () => window.removeEventListener("resize", updateCardsPerView);
  }, []);

  useEffect(() => {
    const progressPercentage = ((currentIndex + cardsPerView) / newsData.length) * 100;
    gsap.to(progressRef.current, {
      width: `${progressPercentage}%`,
      duration: 0.5,
      ease: "power2.out",
    });
  }, [currentIndex, cardsPerView]);

  const handleNext = () => {
    if (currentIndex < newsData.length - cardsPerView) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <section className="py-16 px-4 md:px-20 bg-[#F6F6F6] relative">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:justify-between md:items-center text-left mb-6 gap-4">
        <h2 className="text-2xl md:text-5xl font-medium">Discover our latest</h2>
        <button className="flex items-center space-x-2 bg-black text-white px-4 py-2 rounded-full  md:w-auto w-fit">
          <span>Media Center</span>
          <FaArrowRight size={16} />
        </button>
      </div>

      {/* Carousel Container */}
      <div className="relative overflow-hidden w-full">
        {/* Left Button */}
        <button
          onClick={handlePrev}
          className={`absolute lg:left-0 lg:top-1/3   md:top-1/4 transform -translate-y-1/2 bg-black text-white p-3 rounded-full shadow-md z-20 hidden md:block ${
            currentIndex === 0 ? "opacity-50 cursor-not-allowed" : "opacity-100"
          }`}
          disabled={currentIndex === 0}
        >
          <FaArrowLeft size={16} />
        </button>

        {/* Carousel */}
        <div
          className="flex transition-transform duration-500 ease-in-out space-x-3"
          style={{
            transform: `translateX(-${(currentIndex * 100) / cardsPerView}%)`,
          }}
        >
          {newsData.map((news) => (
            <div
              key={news.id}
              className={`flex-shrink-0 bg-white rounded-lg shadow-lg overflow-hidden`}
              style={{
                width: `${100 / cardsPerView}%`,
              }}
            >
                           <img src={news.image} alt={news.title}   className="w-full h-auto  md:h-[180px] lg:h-[320px] object-cover aspect-[18/9]"
 />
               <div className="p-4 ">
                <p className="text-[16px] text-[#777777]">{news.date}</p>
                <h3 className="text-[28px] md:text-[30px] lg:text-[41px] mt-3 font-medium leading-[125%]">
                  {news.title}
                </h3>
                <p className="text-black text-[16px] md:text-[20px] mt-3 md:mt-2">{news.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Right Button */}
        <button
          onClick={handleNext}
          className={`absolute right-3 lg:top-1/3  md:top-1/4 transform -translate-y-1/2 bg-black text-white p-3 rounded-full shadow-md z-20 hidden md:block ${
            currentIndex >= newsData.length - cardsPerView ? "opacity-50 cursor-not-allowed" : "opacity-100"
          }`}
          disabled={currentIndex >= newsData.length - cardsPerView}
        >
          <FaArrowRight size={16} />
        </button>
      </div>

      {/* Progress Bar */}
      <div className="w-full h-1 bg-gray-300 rounded-full mt-6 relative">
        <div
          ref={progressRef}
          className="h-full bg-black rounded-full transition-all duration-500"
          style={{ width: "0%" }}
        ></div>
      </div>
    </section>
  );
};

export default Projects;

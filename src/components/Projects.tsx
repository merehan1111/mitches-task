"use client";

import { useRef, useEffect, useState } from "react";
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
      "The first fully-integrated coastal resort at the heart of the North Coast’s Ras El Hekma.",
  },
];

const Projects = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);
  const [scrollAmount, setScrollAmount] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const updateScrollAmount = () => {
      if (window.innerWidth >= 1024) {
        setScrollAmount(700);
      } else if (window.innerWidth >= 768) {
        setScrollAmount(400);
      } else {
        setScrollAmount(320);
      }
    };

    updateScrollAmount();
    window.addEventListener("resize", updateScrollAmount);
    return () => window.removeEventListener("resize", updateScrollAmount);
  }, []);

  // Handle scroll event to update progress bar
  const handleScroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const scrollOffset = direction === "left" ? -scrollAmount : scrollAmount;
      scrollContainerRef.current.scrollBy({
        left: scrollOffset,
        behavior: "smooth",
      });
    }
  };

  const updateProgressBar = () => {
    if (scrollContainerRef.current && progressRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } =
        scrollContainerRef.current;
      const scrollPercentage = (scrollLeft / (scrollWidth - clientWidth)) * 100;
      setScrollProgress(scrollPercentage);
    }
  };

  useEffect(() => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.addEventListener("scroll", updateProgressBar);
    }

    return () => {
      if (scrollContainerRef.current) {
        scrollContainerRef.current.removeEventListener(
          "scroll",
          updateProgressBar
        );
      }
    };
  }, []);

  return (
    <section className="bg-[#F6F6F6] relative w-full h-[580px] px-6 py-10 md:h-[834px]">
      {/* Header */}
      <div className="flex flex-col sm:w-[343px] h-[99px] gap-[24px] md:flex-row md:w-[1400px] md:h-[80px] md:justify-between md:items-center text-left mb-6">
        <h2 className="font-['Helvetica Now Display'] font-medium text-[28px] md:text-[64px] leading-[125%] tracking-[0px] md:tracking-[0.5px]">
          Discover our latest
        </h2>

        <button className="flex justify-center items-center gap-[12px] bg-black text-white px-[16px] py-[10px] md:py-[8px] rounded-[100px] w-[141px] h-[40px] md:w-[157px]">
          <span className="text-[14px] leading-[20px] text-center font-medium tracking-[0] font-['Helvetica Now Display']">
            Media Center
          </span>
          <FaArrowRight size={16} />
        </button>
      </div>

      {/* Carousel Container */}
      <div className="relative overflow-hidden">
        {/* Arrows (Hidden on Mobile) */}
        <div className="absolute top-1/2 left-0 right-0 transform -translate-y-1/2 hidden md:flex justify-between px-10 z-20 w-full">
          <button
            onClick={() => handleScroll("left")}
            className="bg-black text-white p-3 rounded-full shadow-md ml-4"
          >
            <FaArrowLeft size={16} />
          </button>
          <button
            onClick={() => handleScroll("right")}
            className="bg-black text-white p-3 rounded-full shadow-md mr-4"
          >
            <FaArrowRight size={16} />
          </button>
        </div>

        {/* Carousel */}
        <div
          ref={scrollContainerRef}
          className="flex overflow-x-scroll scroll-smooth scrollbar-hide w-[90%] mx-auto pl-0 space-x-3 md:space-x-0 md:space-x-0"
        >
          {newsData.map((news, index) => (
            <div
              key={news.id}
              className={`flex-shrink-0 bg-white rounded-lg shadow-lg overflow-hidden 
        w-[280px] h-[361px] md:w-[690px] md:h-[592px] 
        ${index === 0 ? "ml-0" : "ml-3 md:ml-5"}`} // First card starts at left
            >
              <img
                src={news.image}
                alt={news.title}
                className="w-full h-[148px] md:h-[320px] object-cover"
              />
              <div className="p-5 md:p-7">
                <p className="text-[#777777] text-[14px] md:text-[16px] leading-[140%]">
                  {news.date}
                </p>
                <h3 className="text-[24px] md:text-[36px] font-medium tracking-tight text-black mb-3">
                  {news.title}
                </h3>
                <p className="text-[16px] md:text-[20px] text-black">
                  {news.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Progress Bar */}
      <div className="w-[90%] mx-auto h-1 bg-gray-300 rounded-full mt-6 relative">
        <div
          ref={progressRef}
          className="h-full bg-black rounded-full transition-all duration-500"
          style={{ width: `${scrollProgress}%` }}
        ></div>
      </div>
    </section>
  );
};

export default Projects;

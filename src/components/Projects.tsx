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
];

const Projects = () => {
  const sectionRef = useRef(null);
  const progressRef = useRef(null);
  const cardsRef = useRef([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    gsap.from(cardsRef.current, {
      opacity: 0,
      y: 50,
      duration: 1,
      stagger: 0.3,
      ease: "power2.out",
    });
  }, []);

  useEffect(() => {
    const progressPercentage = ((currentIndex + 1) / (newsData.length - 1)) * 100;
    gsap.to(progressRef.current, {
      width: `${progressPercentage}%`,
      duration: 0.5,
      ease: "power2.out",
    });
  }, [currentIndex]);

  const handleNext = () => {
    if (currentIndex < newsData.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <section ref={sectionRef} className="py-16 px-6 md:px-20 bg-[#F6F6F6] relative">
      {/* Title on the left, button on the right (desktop), stacked on mobile */}
      <div className="flex flex-col md:flex-row md:justify-between md:items-center text-left mb-6 gap-4">
        <h2 className="text-[26px] md:text-[64px] font-medium">Discover our latest</h2>
        <button className="flex items-center space-x-2 bg-black text-white px-4 py-2 rounded-full  md:w-auto w-fit">
          <span>Media Center</span>
          <FaArrowRight size={16} />
        </button>
      </div>

      <div className="relative overflow-hidden ">
        <button
          onClick={handlePrev}
          className={`absolute left-0 top-1/2 transform -translate-y-1/2 bg-black text-white p-3 rounded-full shadow-md z-20  hidden md:block ${
            currentIndex === 0 ? "opacity-50 cursor-not-allowed" : "opacity-100"
          }`}
          disabled={currentIndex === 0}
        >
          <FaArrowLeft size={16} />
        </button>

        <div
          className="flex transition-transform mt-7 md:mt-0 duration-500 ease-in-out "
          style={{ transform: `translateX(-${currentIndex * 80}%)` }}
        >
          {newsData.map((news, index) => (
            <div
              key={news.id}
              ref={(el) => (cardsRef.current[index] = el)}
              className="w-[91%] md:w-[44%] flex-shrink-0 bg-white rounded-lg  shadow-lg overflow-hidden mr-3 md:mx-2 "
            >
              <img src={news.image} alt={news.title}   className="w-full h-auto md:h-[320px] object-cover aspect-[18/9]"
 />
              <div className="p-4 ">
                <p className="text-[16px] text-[#777777]">{news.date}</p>
                <h3 className="text-[28px] md:text-[41px] mt-3 font-medium leading-[125%]">
                  {news.title}
                </h3>
                <p className="text-black text-[16px] md:text-[20px] mt-3 md:mt-2">{news.description}</p>
              </div>
            </div>
          ))}
        </div>

        <button
          onClick={handleNext}
          className={`absolute right-0 top-1/2 transform -translate-y-1/2 bg-black text-white p-3 rounded-full shadow-md z-20  hidden md:block ${
            currentIndex >= newsData.length - 1 ? "opacity-50 cursor-not-allowed" : "opacity-100"
          }`}
          disabled={currentIndex >= newsData.length - 1}
        >
          <FaArrowRight size={16} />
        </button>
      </div>

      <div className="w-full h-[2px] bg-gray-300 rounded-full mt-6 relative">
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

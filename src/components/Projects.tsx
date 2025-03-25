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
        setCardsPerView(2.5); // Show 2 full cards + a portion of the 3rd
      } else if (window.innerWidth >= 768) {
        setCardsPerView(2); // Show 2 full cards
      } else {
        setCardsPerView(1); // Show only 1 card on small screens
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
  setCurrentIndex((prevIndex) => (prevIndex + 1) % newsData.length);
};

const handlePrev = () => {
  setCurrentIndex((prevIndex) =>
    prevIndex === 0 ? newsData.length - 1 : prevIndex - 1
  );
};


  return (
    <section className="bg-[#F6F6F6] relative w-[1512px] h-[580px] px-[6px] py-[40px] gap-[40px] 
  md:w-[1512px] md:h-[834px] md:px-[56px] md:py-[40px] md:gap-[40px] 
  sm:w-[375px] sm:h-[621px] sm:px-[16px] sm:py-[40px] sm:gap-[40px]">

      {/* Header */}
      <div className="flex flex-col sm:w-[343px] sm:h-[99px] sm:gap-[24px] 
    md:flex-row md:w-[1400px] md:h-[80px] md:justify-between md:items-center text-left mb-6">
  <h2 className="font-['Helvetica Now Display'] font-medium text-[28px] md:text-[64px] leading-[125%] tracking-[0px] md:tracking-[0.5px]">
  Discover our latest
</h2>

<button className="flex justify-center  items-center gap-[12px] bg-black text-white px-[16px] py-[10px] md:py-[8px] rounded-[100px] w-[141px] h-[40px] md:w-[157px]">
  <span className="text-[14px] leading-[20px]  text-center font-medium tracking-[0] font-['Helvetica Now Display']">Media Center</span>
  <FaArrowRight size={16} />
</button>


</div>


      {/* Carousel Container */}
      <div className="relative overflow-hidden">
  {/* Arrows Container */}
  <div className="absolute top-1/2 left-0 right-0 transform -translate-y-1/2 flex justify-between items-center px-4 z-20 w-full h-[56px] md:block hidden">
  {/* Left Button */}
  <button
    onClick={handlePrev}
    className={`bg-black text-white p-3 rounded-full shadow-md absolute left-4 transform -translate-x-1/2 ${
      currentIndex === 0 ? "opacity-50 cursor-not-allowed" : "opacity-100"
    }`}
    disabled={currentIndex === 0}
  >
    <FaArrowLeft size={16} />
  </button>

  {/* Right Button */}
  <button
    onClick={handleNext}
    className={`bg-black text-white p-3 rounded-full shadow-md absolute right-4 transform translate-x-1/2 ${
      currentIndex >= newsData.length - cardsPerView ? "opacity-50 cursor-not-allowed" : "opacity-100"
    }`}
    disabled={currentIndex >= newsData.length - cardsPerView}
  >
    <FaArrowRight size={16} />
  </button>
</div>





  {/* Carousel */}
  <div
    className="flex transition-transform duration-500 ease-in-out space-x-[20px] w-[1340px] h-[361px] md:w-[2820px] md:h-[592px]"
    style={{
      transform: `translateX(-${(currentIndex * 100) / cardsPerView}%)`,
    }}
  >
    {newsData.map((news) => (
      <div
        key={news.id}
        className="flex-shrink-0 bg-white rounded-lg shadow-lg overflow-hidden w-[320px] h-[361px] md:w-[690px] md:h-[592px]"
      >
        <img
          src={news.image}
          alt={news.title}
          className="w-[320px] h-[148px] md:w-[690px] md:h-[320px] object-cover"
        />

        <div className="p-[20px] md:p-[28px] w-[320px] h-[213px] md:w-[690px] md:h-[272px] space-y-[40px]">
          {/* Date Section */}
          <p className="text-[#777777] mb-3 text-[14px] md:text-[16px] leading-[140%] font-helvetica font-normal md:font-medium">
            {news.date}
          </p>

          {/* Title Section */}
          <h3 className="font-helvetica text-[24px] md:text-[36px] lg:text-[40px] leading-[140%] font-medium tracking-[-0.25px] text-black mb-3">
            {news.title}
          </h3>

          {/* Description Section */}
          <p className="font-helvetica text-[16px] md:text-[20px] leading-[125%] font-medium text-black mt-3 md:mt-2">
            {news.description}
          </p>
        </div>
      </div>
    ))}
  </div>

  {/* Progress Bar */}
  
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

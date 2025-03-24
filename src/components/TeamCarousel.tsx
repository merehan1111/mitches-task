"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { FaChevronLeft, FaChevronRight, FaPlus } from "react-icons/fa";

const teamData = [
  { id: 1, name: "Akram Ziyad", position: "Vice President - Strategy", image: "persone1.png" },
  { id: 2, name: "Ahmed Khaled", position: "Vice President - Real Estate", image: "person2.png" },
  { id: 3, name: "Mona Wael", position: "Head of People", image: "person3.png" },
  { id: 4, name: "Mona Wael", position: "Head of People", image: "person2.png" },
  { id: 5, name: "Sarah Ali", position: "Marketing Manager", image: "person3.png" },
];

const TeamCarousel = () => {
  const itemsRef = useRef<(HTMLDivElement | null)[]>([]);
  const scrollRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(100 / teamData.length);

  useEffect(() => {
    gsap.from(itemsRef.current, {
      opacity: 0,
      y: 50,
      duration: 1,
      stagger: 0.3,
      ease: "power2.out",
    });

    const handleScroll = () => {
      if (scrollRef.current) {
        const scrollLeft = scrollRef.current.scrollLeft;
        const maxScroll = scrollRef.current.scrollWidth - scrollRef.current.clientWidth;
        const minProgress = 100 / teamData.length;
        let progress = (scrollLeft / maxScroll) * 100;
        progress = scrollLeft === 0 ? minProgress : progress;
        setScrollProgress(progress);
      }
    };

    if (scrollRef.current) {
      handleScroll();
      scrollRef.current.addEventListener("scroll", handleScroll);
    }

    return () => {
      if (scrollRef.current) {
        scrollRef.current.removeEventListener("scroll", handleScroll);
      }
    };
  }, []);

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -window.innerWidth / 1.5, behavior: "smooth" });

      setTimeout(() => {
        if (scrollRef.current?.scrollLeft === 0) {
          setScrollProgress(100 / teamData.length);
        }
      }, 500);
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: window.innerWidth / 1.5, behavior: "smooth" });
    }
  };

  const scrollToNextCard = (index: number) => {
    if (scrollRef.current) {
      const nextCard = itemsRef.current[index + 1];
      if (nextCard) {
        scrollRef.current.scrollTo({ left: nextCard.offsetLeft, behavior: "smooth" });
      }
    }
  };

  return (
    <div className="relative w-full py-16 px-4 md:px-11 mx-auto">
      {/* Navigation Arrows - Hidden on Mobile */}
      <button
        onClick={scrollLeft}
        className="hidden md:flex absolute left-2 top-1/2 -translate-y-1/2 bg-black p-3 rounded-full shadow-md hover:scale-110 transition-all z-10"
      >
        <FaChevronLeft className="text-white text-lg" />
      </button>

      <button
        onClick={scrollRight}
        className="hidden md:flex absolute right-2 top-1/2 -translate-y-1/2 bg-black p-3 rounded-full shadow-md hover:scale-110 transition-all z-10"
      >
        <FaChevronRight className="text-white text-lg" />
      </button>

      {/* Team Members */}
      <div
        ref={scrollRef}
        className="flex overflow-x-auto scroll-smooth space-x-4 md:space-x-6 pb-6 no-scrollbar w-full"
      >
        {teamData.map((member, index) => (
          <div
            key={member.id}
            ref={(el) => {
              itemsRef.current[index] = el;
            }}
            className="relative flex-shrink-0 w-[90%] sm:w-[70%] md:w-[45%] lg:w-[35%] h-auto min-h-[300px] sm:min-h-[350px] md:min-h-[400px] bg-[#F6F6F6] rounded-lg shadow-lg overflow-hidden"
          >
            <img
              src={member.image}
              alt={member.name}
              className="absolute inset-0 w-full h-full object-cover"
            />

            {/* Overlay Text */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 bg-white text-black p-4 sm:p-5 rounded-md w-[80%] sm:w-[90%] lg:w-[75%]">
              <h3 className="font-medium text-[22px] sm:text-[28px] md:text-[32px] lg:text-[36px] leading-[125%]">
                {member.name}
              </h3>
              <p className="font-medium text-[16px] sm:text-[20px] leading-[125%]">
                {member.position}
              </p>
            </div>

            {/* Mobile Scroll Button */}
            <button
              onClick={() => scrollToNextCard(index)}
              className="absolute top-2/3 right-4 bg-black p-2 rounded-full shadow-md md:hidden hover:scale-110 transition-all"
            >
              <FaPlus className="text-white text-lg" />
            </button>
          </div>
        ))}
      </div>

      {/* Progress Bar */}
      <div className="w-full bg-gray-300 h-1 rounded-full mt-4 relative">
        <div
          className="h-1 bg-black rounded-full transition-all"
          style={{ width: `${scrollProgress}%` }}
        ></div>
      </div>
    </div>
  );
};

export default TeamCarousel;

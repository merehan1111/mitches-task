"use client";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { HiOutlineArrowNarrowLeft, HiOutlineArrowNarrowRight } from "react-icons/hi";
import { AiOutlinePlus } from "react-icons/ai";

const teamData = [
  { id: 1, name: "Akram Ziyad", position: "Vice President - Strategy", image: "persone1.png" },
  { id: 2, name: "Ahmed Khaled", position: "Vice President - Real Estate", image: "person2.png" },
  { id: 3, name: "Mona Wael", position: "Head of People", image: "person3.png" },
  { id: 4, name: "Omar Hisham", position: "Project Manager", image: "person2.png" },
  { id: 5, name: "Sarah Ali", position: "Marketing Manager", image: "person3.png" },
];

const TeamCarousel = () => {
  const itemsRef = useRef<(HTMLDivElement | null)[]>([]);
  const scrollRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(100 / teamData.length);
  const [windowWidth, setWindowWidth] = useState<number | null>(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setWindowWidth(window.innerWidth);
      
      const handleResize = () => setWindowWidth(window.innerWidth);
      window.addEventListener("resize", handleResize);

      return () => window.removeEventListener("resize", handleResize);
    }
  }, []);

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

  const handleNextCard = (index: number) => {
    if (scrollRef.current) {
      const nextIndex = index + 1 < teamData.length ? index + 1 : 0; // Go to next or loop to first
      const nextCard = itemsRef.current[nextIndex];

      if (nextCard) {
        nextCard.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "center" });
      }
    }
  };

  return (
    <div className="relative w-full max-w-[1512px] h-auto mx-auto p-4 md:p-6">
      {/* Navigation Arrows - Hidden on Mobile */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 
             flex justify-between items-center z-10 w-[1456px] h-[56px] hidden sm:flex">
        {/* Left Arrow */}
        <button
          onClick={scrollLeft}
          className="bg-black p-2 rounded-full shadow-md hover:scale-110 transition-all"
        >
          <HiOutlineArrowNarrowLeft className="text-white w-4 h-4" />
        </button>

        {/* Right Arrow */}
        <button
          onClick={scrollRight}
          className="bg-black p-2 rounded-full shadow-md hover:scale-110 transition-all"
        >
          <HiOutlineArrowNarrowRight className="text-white w-4 h-4" />
        </button>
      </div>

      {/* Team Members */}
      <div
        ref={scrollRef}
        className="flex overflow-x-auto scroll-smooth snap-x gap-4 p-4 
                   md:gap-6 md:p-6 w-full scrollbar-hide touch-pan-x"
      >
        {teamData.map((member, index) => (
          <div
            key={member.id}
            ref={(el) => {
              itemsRef.current[index] = el;
            }}
            className="relative flex-shrink-0 w-[320px] h-[380px] md:w-[500px] md:h-[500px] 
                       bg-[#F6F6F6] border-t border-gray-300 rounded-lg shadow-lg overflow-hidden snap-center"
          >
            {/* Image */}
            <img
              src={member.image}
              alt={member.name}
              className="absolute inset-0 w-full h-full object-cover rounded-lg"
            />

            {/* Overlay Text */}
            <div
              className="absolute bg-white text-black border-t border-gray-300 rounded-md
                         w-[85%] h-auto top-[60%] left-[8%] p-4 md:w-[90%] md:top-[70%] md:p-6"
            >
              <h3 className="font-medium text-[20px] md:text-[28px] leading-[125%] font-helvetica">
                {member.name}
              </h3>

              <p className="font-medium text-[16px] md:text-[20px] leading-[125%] font-helvetica">
                {member.position}
              </p>

              {/* "+" Button Positioned Over Text for Mobile */}
              <div className="absolute top-9 right-8 transform translate-x-1/2 -translate-y-1/2 sm:hidden">
                <button 
                  className="bg-black p-[8px] rounded-full shadow-md hover:scale-110 transition-all flex 
                             items-center justify-center w-[36px] h-[36px]"
                  onClick={() => handleNextCard(index)}
                >
                  <AiOutlinePlus className="text-white w-6 h-6" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Progress Bar */}
      <div className="w-[1400px] h-[2px] bg-[#EAEAEA] rounded-full mt-4 relative mx-auto md:w-[1400px] md:h-[2px] sm:w-[343px] sm:h-[1px]">
        <div
          className="bg-black rounded-full transition-all"
          style={{
            width: `${scrollProgress}%`,
            height: windowWidth !== null && windowWidth <= 640 ? "1px" : "2px",
          }}
        ></div>
      </div>
    </div>
  );
};

export default TeamCarousel;

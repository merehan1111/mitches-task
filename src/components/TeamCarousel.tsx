"use client";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { HiOutlineArrowNarrowLeft, HiOutlineArrowNarrowRight } from "react-icons/hi";
import { AiOutlinePlus } from "react-icons/ai";
import Image from "next/image"; // ✅ Use Next.js Image for optimization

const teamData = [
  { id: 1, name: "Akram Ziyad", position: "Vice President - Strategy", image: "/persone1.png", details: "Akram leads the strategic vision and growth of the company, ensuring long-term success and innovation." },
  { id: 2, name: "Ahmed Khaled", position: "Vice President - Real Estate", image: "/person2.png", details: "Ahmed is responsible for real estate development and portfolio expansion." },
  { id: 3, name: "Mona Wael", position: "Head of People", image: "/person3.png", details: "Mona ensures employee growth, culture development, and organizational well-being." },
  { id: 4, name: "Omar Hisham", position: "Project Manager", image: "/person2.png", details: "Omar oversees project timelines, resource allocation, and execution of key initiatives." },
  { id: 5, name: "Sarah Ali", position: "Marketing Manager", image: "/person3.png", details: "Sarah leads the brand’s marketing strategy, content creation, and digital campaigns." },
];

const TeamCarousel = () => {
  const itemsRef = useRef<(HTMLDivElement | null)[]>([]);
  const scrollRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(100 / teamData.length);
  const [expandedMember, setExpandedMember] = useState<number | null>(null);

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
        const currentScrollRef = scrollRef.current; // ✅ Fix ref issue
        const scrollLeft = currentScrollRef.scrollLeft;
        const maxScroll = currentScrollRef.scrollWidth - currentScrollRef.clientWidth;
        const minProgress = 100 / teamData.length;
        let progress = (scrollLeft / maxScroll) * 100;
        progress = scrollLeft === 0 ? minProgress : progress;
        setScrollProgress(progress);
      }
    };

    const currentRef = scrollRef.current; // ✅ Fix ref issue
    if (currentRef) {
      handleScroll();
      currentRef.addEventListener("scroll", handleScroll);
    }

    return () => {
      if (currentRef) {
        currentRef.removeEventListener("scroll", handleScroll);
      }
    };
  }, []);

  return (
    <div className="relative w-full max-w-[1512px] mx-auto p-4 md:p-6">
      {/* Navigation Arrows - Hidden on Mobile */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex justify-between items-center z-10 w-full max-w-[1456px] hidden sm:flex">
        <button onClick={() => scrollRef.current?.scrollBy({ left: -window.innerWidth / 1.5, behavior: "smooth" })}
          className="bg-black p-2 rounded-full shadow-md hover:scale-110 transition-all">
          <HiOutlineArrowNarrowLeft className="text-white w-4 h-4" />
        </button>
        <button onClick={() => scrollRef.current?.scrollBy({ left: window.innerWidth / 1.5, behavior: "smooth" })}
          className="bg-black p-2 rounded-full shadow-md hover:scale-110 transition-all">
          <HiOutlineArrowNarrowRight className="text-white w-4 h-4" />
        </button>
      </div>

      {/* Team Members */}
      <div 
  ref={scrollRef} 
  className="flex overflow-x-auto scroll-smooth snap-x gap-4 p-4 w-full scrollbar-hide"
  style={{ 
    touchAction: "auto",  // ✅ Allow touch gestures
    WebkitOverflowScrolling: "touch", // ✅ Ensures smooth scrolling on iOS
    overflowX: "scroll"  // ✅ Ensures scrolling is enabled
  }}
>

        {teamData.map((member, index) => (
          <div key={member.id} ref={(el) => { itemsRef.current[index] = el; }}
            className="relative flex-shrink-0 w-[280px] sm:w-[320px] md:w-[500px] h-[380px] md:h-[500px] bg-[#F6F6F6] border-t border-gray-300 rounded-lg shadow-lg overflow-hidden snap-center">

            {/* ✅ Optimized Next.js Image */}
            <Image src={member.image} alt={member.name} layout="fill" objectFit="cover" className="rounded-lg" priority />

            {/* Overlay Text */}
            <div className="absolute bg-white text-black border-t border-gray-300 rounded-md w-[90%] h-auto top-[65%] left-[5%] p-3 md:p-6">
              <h3 className="font-medium text-[18px] sm:text-[20px] md:text-[28px] leading-[125%]">{member.name}</h3>
              <p className="font-medium text-[14px] sm:text-[16px] md:text-[20px] leading-[125%]">{member.position}</p>

              {/* "+" Button for Mobile */}
              <div className="absolute top-8 right-6 sm:hidden">
                <button className="bg-black p-[8px] rounded-full shadow-md hover:scale-110 transition-all flex items-center justify-center w-[32px] h-[32px]"
                  onClick={() => setExpandedMember(expandedMember === member.id ? null : member.id)}>
                  <AiOutlinePlus className={`text-white w-5 h-5 transform transition-transform duration-300 ${expandedMember === member.id ? 'rotate-45' : ''}`} />
                </button>
              </div>

              {/* Expanded Content */}
              <div className={`mt-3 overflow-hidden transition-all duration-500 ease-in-out ${expandedMember === member.id ? 'max-h-[100px] opacity-100' : 'max-h-0 opacity-0'}`}>
                <p className="text-gray-600 text-sm">{member.details}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Progress Bar */}
      <div className="w-full max-w-[1400px] h-[2px] bg-[#EAEAEA] rounded-full mt-4 mx-auto">
        <div className="bg-black rounded-full transition-all" style={{ width: `${scrollProgress}%`, height: "2px" }}></div>
      </div>
    </div>
  );
};

export default TeamCarousel;

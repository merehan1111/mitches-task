"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

interface StatData {
  id: number;
  image: string;
  number: string;
  title: string;
  description: string;
}

const statsData: StatData[] = [
  {
    id: 1,
    image: "imgeState1.png",
    number: "9,588,112",
    title: "Total landbank",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: 2,
    image: "imgState2.png",
    number: "8",
    title: "Projects",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: 3,
    image: "imgState3.png",
    number: "60",
    title: "Years of operation",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
];

const StatsSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const itemsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    gsap.from(itemsRef.current, {
      opacity: 0,
      y: 50,
      duration: 1,
      stagger: 0.3,
      ease: "power2.out",
    });
  }, []);

  return (
    <div ref={sectionRef} className="max-w-8xl mx-auto px-4 md:px-10 py-15">
      {statsData.map((stat, index) => (
        <div
          key={stat.id}
          ref={(el) => {
            itemsRef.current[index] = el;
          }}
          className="flex flex-col md:flex-row  justify-between mb-10 pb-6 border-b border-gray-500/10"
        >
          {/* صورة */}
          <div className="w-full md:w-1/3">
            <img
              src={stat.image}
              alt={stat.title}
              className="w-full h-auto rounded-lg shadow-md object-cover"
            />
          </div>

          {/* النصوص */}
          <div className="w-full md:w-2/5 ml-auto  flex flex-col items-start text-left">
            <h2 className="text-[28px] md:text-[40px] font-medium text-black w-full">
              {stat.number}
            </h2>

            <p className="text-[24px] md:text-[28px] mt-3 md:mt-5 font-medium text-gray-700 w-full">
              {stat.title}
            </p>

            <p className="text-[14px] md:text-[16px] text-gray-500 w-full max-w-lg mt-2 md:mt-4">
              {stat.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default StatsSection;

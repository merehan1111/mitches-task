"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import React from "react";

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
    if (!sectionRef.current) return;

    gsap.fromTo(
      itemsRef.current,
      {
        opacity: 0,
        y: 50,
        scale: 0.9,
      },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 1.2,
        stagger: 0.3,
        ease: "power3.out",
      }
    );
  }, []);

  return (
    <div ref={sectionRef} 
      className="w-[375px] h-[1050px] gap-[40px] p-[40px_16px] 
                 md:w-[1512px] md:h-[880px] md:gap-[60px] md:p-[40px_56px] 
                 lg:w-[1200px] lg:h-[880px] lg:gap-[80px] lg:p-[50px_80px] space-y-6">

      {statsData.map((stat, index) => (
        <React.Fragment key={stat.id}>
          {/* Divider أعلى العنصر الأول فقط */}
          {index === 0 && (
            <div className="w-[343px] h-[1px] opacity-10 bg-black md:w-[1400px] lg:w-[1200px] md:mt-6 md:mb-6"></div>
          )}

          <div
            ref={(el) => {
              itemsRef.current[index] = el;
            }}
            className="w-[343px] h-[285px] md:w-[1400px] md:h-[200px] md:flex md:justify-between md:gap-6 lg:gap-10 lg:flex-row">

            {/* صورة الإحصائية */}
            <div className="w-[240px] h-[120px] md:w-[400px] md:h-[200px] lg:w-[450px] lg:h-[220px]">
              <img
                src={stat.image}
                alt={stat.title}
                className="w-full h-full rounded-lg shadow-md object-cover"
              />
            </div>

            {/* النصوص */}
            <div className="w-[343px] h-[141px] mt-3 md:mt-0 flex flex-col gap-[12px] 
                            md:w-[724px] md:h-[200px] lg:w-[700px] lg:h-[220px]">
              <h2 className="w-[343px] h-[35px] text-[28px] leading-[125%] font-medium 
                            md:w-[724px] md:h-[50px] md:text-[40px] 
                            lg:text-[42px] lg:h-[50px]">
                {stat.number}
              </h2>

              <div className="flex flex-col gap-[4px] md:gap-[12px]">
                <p className="w-[343px] h-[30px] text-[24px] leading-[125%] font-medium 
                              md:w-[724px] md:h-[35px] md:text-[28px] 
                              lg:text-[32px] lg:h-[50px]">
                  {stat.title}
                </p>

                {/* الوصف النصي أسفل العنوان */}
                <p className="w-[343px] h-[60px] md:mt-3 mt-2 text-[14px] leading-[140%] font-normal 
                              md:w-[724px] md:h-[44px] md:text-[16px] md:font-[325] 
                              lg:text-[18px] lg:h-[50px] lg:leading-[150%]">
                  {stat.description}
                </p>
              </div>
            </div>
          </div>

          {/* Divider أسفل كل عنصر */}
          <div className="w-[343px] h-[1px] opacity-10 bg-black md:w-[1400px] lg:w-[1200px] mt-6 mb-6"></div>
        </React.Fragment>
      ))}
    </div>
  );
};

export default StatsSection;

"use client";


import { useEffect, useRef } from "react";
import gsap from "gsap";

const LeaderShip = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const textRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 80%", // Animation triggers when 80% of the element is visible
      },
    });

    tl.from(titleRef.current, {
      opacity: 0,
      y: 20,
      duration: 0.8,
      ease: "power2.out",
    })
      .from(
        textRef.current,
        {
          opacity: 0,
          y: 20,
          duration: 0.8,
          ease: "power2.out",
        },
        "-=0.4" // Overlap animation slightly
      );
  }, []);

  return (
    <div
      ref={containerRef}
      className="px-2 py-0 md:py-0 ml-2 md:ml-0 flex flex-col md:flex-row justify-end gap-4 md:gap-12 md:mt-0 mt-[-25px]"
    >
      {/* Left Section (Title) */}
      <div className="flex justify-start  w-full">
        <h2
          ref={titleRef}
          className="md:text-[28px] text-[16px] font-medium leading-[1.25] tracking-normal text-[#777777] md:px-10 md:py-1 rounded-md"
          style={{ fontFamily: "Helvetica Now Display" }}
        >
          LeaderShip
        </h2>
      </div>

      {/* Right Section (Text) */}
      <div className="flex justify-end w-full  md:mr-10 lg:mr-30">
        <p
          ref={textRef}
          className="text-[28px] mt-4 md:text-[38px] font-medium leading-[1.25] tracking-normal text-black max-w-lg"
          style={{ fontFamily: "Helvetica Now Display" }}
        >
          We aim to innovate and listen closely
           to our customers to provide them with the best customer experience in every aspect
        </p>
      </div>
    </div>
  );
};

export default LeaderShip;


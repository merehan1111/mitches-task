"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const LeaderShip = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const textRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 80%",
        end: "bottom 60%",
        scrub: 1, // Smooth scrolling effect
      },
    });

    tl.fromTo(
      titleRef.current,
      { opacity: 0, y: 50, scale: 0.9 },
      { opacity: 1, y: 0, scale: 1, duration: 1.2, ease: "power3.out" }
    ).fromTo(
      textRef.current,
      { opacity: 0, y: 50, scale: 0.9 },
      { opacity: 1, y: 0, scale: 1, duration: 1.4, ease: "power3.out" },
      "-=0.8" // Slight overlap for smooth effect
    );
  }, []);

  return (
    <div
      ref={containerRef}
      className="w-full max-w-[1512px] px-4 py-10 
                 sm:px-8 sm:py-12 
                 md:px-16 md:py-16 
                 lg:px-24 lg:py-20 
                 flex flex-col md:flex-row justify-between items-start gap-6"
    >
      {/* Title Section */}
      <div className="w-full max-w-[576px]">
        <h2
          ref={titleRef}
          className="text-[16px] sm:text-[20px] md:text-[28px] lg:text-[32px] 
                     font-medium leading-[125%] tracking-normal text-[#777777]"
          style={{ fontFamily: "Helvetica Now Display" }}
        >
          LeaderShip
        </h2>
      </div>

      {/* Text Section */}
      <p
        ref={textRef}
        className="w-full max-w-[800px] 
                     text-[20px] sm:text-[24px] md:text-[32px] lg:text-[40px] 
                     font-medium leading-[125%] tracking-normal text-black"
        style={{ fontFamily: "Helvetica Now Display" }}
      >
        We aim to innovate and listen closely to our customers to provide them
        with the best customer experience in every aspect.
      </p>
    </div>
  );
};

export default LeaderShip;

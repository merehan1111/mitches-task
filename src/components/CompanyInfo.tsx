"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const CompanyInfo = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const textRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 80%",
        end: "bottom 60%",
        scrub: 1, // يجعل التحريك سلسًا بناءً على التمرير
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
      "-=0.8" // التأخير لجعل الحركة متتابعة
    );
  }, []);

  return (
    <div
      ref={containerRef}
      className="w-full max-w-[1512px] px-4 py-8 md:px-[56px] md:py-[40px] flex flex-col md:flex-row justify-between items-start gap-4 lg:gap-6"
    >
      {/* العنوان */}
      <div className="w-full max-w-[576px]">
        <h2
          ref={titleRef}
          className="text-[16px] md:text-[28px] lg:text-[32px]  font-medium leading-[125%] tracking-normal text-[#777777]"
          style={{ fontFamily: "Helvetica Now Display" }}
        >
          Our Story
        </h2>
      </div>

      {/* النص */}
      <p
        ref={textRef}
        className="w-full max-w-[724px] text-[28px] md:text-[40px] lg:text-[40px] text-black font-medium leading-[125%] tracking-normal"
        style={{ fontFamily: "Helvetica Now Display" }}
      >
        We are a family-owned real estate development company based in Egypt.
        Since 1955, we have been committed to delivering timeless, quality
        developments that epitomize comfort and functionality.
      </p>
    </div>
  );
};

export default CompanyInfo;

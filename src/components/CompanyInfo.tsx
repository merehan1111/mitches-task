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
      className="w-[375px] h-[455px] px-[16px] py-[40px] md:w-[1512px] md:h-[330px] md:px-[56px] md:py-[40px] flex flex-col md:flex-row justify-between items-start gap-4"
    >
      {/* العنوان */}
      <div className="w-[343px] h-[20px] md:w-[576px] md:h-[35px] gap-[24px]">
        <h2
          ref={titleRef}
          className="w-[343px] h-[20px] text-[16px] md:w-[576px] md:h-[35px] md:text-[28px] font-medium leading-[125%] tracking-normal text-[#777777]"
          style={{ fontFamily: "Helvetica Now Display" }}
        >
          Our Story
        </h2>
      </div>

      {/* النص */}
      <p
        ref={textRef}
        className="w-[343px] h-[315px] text-[28px] text-black md:w-[724px] md:h-[250px] md:text-[40px] font-medium leading-[125%] tracking-normal"
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

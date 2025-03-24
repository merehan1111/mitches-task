 "use client";


import { useEffect, useRef } from "react";
import gsap from "gsap";

const CompanyInfo = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const textRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 80%", 
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
        "-=0.4" 
      );
  }, []);

  return (
    <div
      ref={containerRef}
      className=" px-2 py-5 md:py-10 flex flex-col md:flex-row  justify-end gap-4 md:gap-12 "
    >
      
      <div className="flex justify-start w-full">
        <h2
          ref={titleRef}
          className="text-[28px] font-medium leading-[1.25] tracking-normal text-[#777777] md:px-10 md:py-2 rounded-md"
          style={{ fontFamily: "Helvetica Now Display" }}
        >
          Our Story
        </h2>
      </div>

      
      <div className="flex justify-end w-full md:mr-10 lg:mr-26">
        <p
          ref={textRef}
          className="text-[28px] md:text-[30px] font-medium leading-[1.25] tracking-normal text-black max-w-lg"
          style={{ fontFamily: "Helvetica Now Display" }}
        >
          We are a family-owned real estate development company based in Egypt.
          Since 1955, we have been committed to delivering timeless, quality
          developments that epitomize comfort and functionality.
        </p>
      </div>
    </div>
  );
};

export default CompanyInfo;



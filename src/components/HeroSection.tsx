"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import gsap from "gsap";
import { Globe } from "lucide-react";

const HeroSection = () => {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const descRef = useRef<HTMLParagraphElement>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State to toggle menu

  useEffect(() => {
    gsap.fromTo(
      titleRef.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1.5, ease: "power3.out" }
    );

    gsap.fromTo(
      descRef.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, delay: 0.3, duration: 1.5, ease: "power3.out" }
    );
  }, []);

  return (
    <div className="relative w-full h-screen overflow-hidden hero">
      {/* 🔹 خلفية الصورة  */}
      <div className="absolute inset-0 z-[-1] w-full min-h-screen sm:min-h-[620px] lg:min-h-[800px] xl:min-h-[900px] px-4 sm:px-[16px] lg:px-[56px] xl:px-[80px] pt-[50px] lg:pt-[120px] pb-[50px] lg:pb-[120px] pr-0 lg:pr-[600px] xl:pr-[700px] sm:pr-[16px]">
        <Image
          src="/heromitchh.png"
          alt="Hero Background"
          layout="fill"
          objectFit="cover"
          quality={100}
          className="w-full h-full"
        />
      </div>

      {/* 🔹 شريط التنقل */}
      <nav className="absolute top-0 left-0 w-full h-[60px] md:h-[100px] flex justify-between items-center bg-gradient-to-b from-black to-transparent text-white px-4 md:px-14 py-4 md:py-6">
        {/* اللوجو */}
        <h1 className="text-2xl md:text-2xl lg:text-3xl font-bold w-[200px] whitespace-nowrap">
  G Developments
</h1>


        {/* قائمة سطح المكتب */}
        <div className="hidden md:flex gap-6 items-center">
          <a href="#" className="text-[14px] md:text-[16px]">Our Communities</a>
          <a href="#" className="text-[14px] md:text-[16px]">Latest Updates</a>

          {/* زر اللغة */}
          <button className="flex items-center gap-1 text-[14px] md:text-[16px]">
            العربية
            <Globe size={13} />
          </button>

          <button className="bg-white text-black px-4 py-2 rounded-full text-[14px] md:text-[16px]">
            Get In Touch
          </button>
        </div>

        {/* زر القائمة للهاتف */}
        <button
          className="md:hidden text-3xl"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          ☰
        </button>
      </nav>

      {/* 🔹 القائمة المنسدلة للموبايل */}
      {isMenuOpen && (
        <div className="absolute top-12 left-0 w-full bg-black bg-opacity-50 p-6 flex flex-col gap-4 items-start text-white md:hidden">
          <a href="#" className="text-sm">Our Communities</a>
          <a href="#" className="text-sm">Latest Updates</a>
          <button className="text-sm flex items-center gap-1">
            العربية
            <Globe size={13} />
          </button>
          <button className="bg-white text-black px-4 py-2 rounded-full text-sm">
            Get In Touch
          </button>
        </div>
      )}

<div className="absolute top-[60%] left-4 md:left-12 text-white text-left transform -translate-y-1/4 w-full max-w-[956px] px-4 md:px-0">
  <h1
    ref={titleRef}
    className="font-[Helvetica] font-medium text-[10vw] sm:text-[40px] md:text-[90px] lg:text-[120px] leading-[125%] tracking-[0%] w-full max-w-[956px]"
  >
    About us
  </h1>

  <p
    ref={descRef}
    className="mt-2 md:mt-4 tracking-wide leading-[125%] text-[5vw] sm:text-[24px] md:text-[28px] w-full max-w-[956px] font-medium"
    style={{ fontFamily: "Helvetica Now Display", letterSpacing: "0%" }}
  >
    Real Estate developer blending <br className="block md:hidden" />
    timeless <br className="hidden md:inline" /> design with <br className="block md:hidden" />
    comfortable living.
  </p>
</div>

    </div>
  );
};

export default HeroSection;




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
    <div className="relative w-full h-screen overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-[-1] lg:w-[1512px] md:h-[700px] md:w-[1512px] lg:h-[700px] sm:w-[375px] sm:h-[620px] px-[56px] sm:px-[16px] lg:pt-[100px] lg:pb-[100px] lg:pr-[500px] sm:pr-[16px]">
  <Image
    src="/heromitchh.png"
    alt="Hero Background"
    layout="fill"
    objectFit="cover"
    quality={100}
    className="w-full h-full"
  />
</div>



      {/* Navbar */}
      <nav className="absolute top-0 left-0 w-full h-[60px] md:h-[100px] flex justify-between items-center bg-gradient-to-b from-black to-transparent text-white px-4 md:px-14 py-4 md:py-6">
      {/* Logo */}
      <h1 className="text-2xl md:text-3xl font-bold">G Developments</h1>

      {/* Desktop Menu */}
      <div className="hidden md:flex gap-6 items-center">
        <a href="#" className="text-[14px] md:text-[16px]">Our Communities</a>
        <a href="#" className="text-[14px] md:text-[16px]">Latest Updates</a>

        {/* Language Button */}
        <button className="flex items-center gap-1 text-[14px] md:text-[16px]">
          العربية
          <Globe size={13} />
        </button>

        <button className="bg-white text-black px-4 py-2 rounded-full text-[14px] md:text-[16px]">
          Get In Touch
        </button>
      </div>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden text-3xl"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        ☰
      </button>
    </nav>

      {/* Mobile Dropdown Menu */}
      {isMenuOpen && (
        <div className="absolute top-12 left-0 w-full bg-black bg-opacity-50 p-6 flex flex-col gap-4 items-start text-white md:hidden">
          <a href="#" className="text-sm">Our Communities</a>
          <a href="#" className="text-sm">Latest Updates</a>
          <button className="text-sm flex items-center gap-1">
            العربية
            <Globe size={13} />
          </button>
          <button className="bg-white text-black px-4 py-2   rounded-full text-sm">
            Get In Touch
          </button>
        </div>
      )}

      {/* Hero Content */}
      <div className="absolute top-[60%] left-4 ml-4 md:left-12 text-white text-left transform -translate-y-1/4 w-[343px] h-[164px] md:w-[956px] md:h-[244px] gap-[24px]">
      <h1
  ref={titleRef}
  className="font-[Helvetica] font-medium text-[40px] lg:text-[120px]  md:text-[90px] leading-[125%] tracking-[0%] w-[343px] lg:w-[956px] md:w-[800px] h-[50px] lg:h-[150px] md:h-[100px]"
>
  About us
</h1>

<p
  ref={descRef}
  className="mt-2 md:mt-4 tracking-wide leading-[125%] text-[24px] w-[343px] h-[90px] md:text-[28px] md:w-[956px] md:h-[70px] font-medium"
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

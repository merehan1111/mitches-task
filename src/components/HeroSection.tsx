"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { Globe } from "lucide-react"; 
const HeroSection = () => {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const descRef = useRef<HTMLParagraphElement>(null);

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
    <div className=" relative w-full h-screen overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-[-1]">
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
      <nav className="absolute top-0 left-0 w-full p-4 md:p-6 flex justify-between items-center text-white">
  <h1 className="text-2xl md:text-3xl font-bold ml-4 md:ml-10">G Developments</h1>

  <div className="hidden md:flex gap-6 items-center">
    <a href="#" className="text-sm">Our Communities</a>
    <a href="#" className="text-sm">Latest Updates</a>

    {/* زر اللغة مع الأيقونة */}
    <button className="text-sm flex items-center gap-1">
      
      العربية
      <Globe size={13} />
    </button>

    <button className="bg-white text-black px-4 py-2 rounded-full text-sm">
      Get In Touch
    </button>
  </div>

  {/* Mobile Menu Button */}
  <button className="md:hidden text-3xl mr-4">☰</button>
</nav>

      {/* Hero Content */}
      <div className="absolute top-[60%] left-4 ml-4 md:left-12 text-white text-left transform -translate-y-1/4">


        <h1 ref={titleRef} className="text-4xl md:text-6xl font-bold"  style={{ wordSpacing: "1px", letterSpacing: "4px" }}>About us</h1>
        <p
  ref={descRef}
  className="text-base md:text-lg mt-2 md:mt-4 max-w-xs md:max-w-lg tracking-wide md:tracking-normal leading-snug md:leading-tight"
  style={{ wordSpacing: "1px", letterSpacing: "1px" }}
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

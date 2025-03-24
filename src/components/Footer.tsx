"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ArrowUp } from "lucide-react";

const Footer = () => {
  const footerRef = useRef(null);
  const arrowRef = useRef(null);

  useEffect(() => {
    if (arrowRef.current) {
      gsap.to(arrowRef.current, {
        y: -10,
        repeat: -1,
        yoyo: true,
        duration: 0.8,
        ease: "power1.inOut",
      });
    }
  }, []);

  useEffect(() => {
    if (footerRef.current) {
      gsap.fromTo(
        footerRef.current,
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1, ease: "power2.out" }
      );
    }
  }, []);

  return (
    <footer
      ref={footerRef}
      className="bg-black text-white py-10 px-4 md:px-8 lg:px-16 relative"
    >
      <div className=" mx-auto">
        {/* Navigation Links */}
        {/* Navigation Links */}
        <nav className="flex flex-col lg:flex-row md:flex-row md:space-x-14 text-white text-[14px] md:text-[16px] text-left space-y-3 md:space-y-0 mt-4 md:mt-0">
          <a href="#" className="font-bold tracking-wide hover:text-gray-400">About us</a>
          <a href="#" className="font-bold tracking-wide hover:text-gray-400">Our Communities</a>
          <a href="#" className="font-bold tracking-wide hover:text-gray-400">Latest Updates</a>
          <a href="#" className="font-bold tracking-wide hover:text-gray-400">FAQs</a>
          <a href="#" className="font-bold tracking-wide hover:text-gray-400">Contact us</a>

          {/* خط فاصل تحت الـ nav في شاشات الموبايل فقط */}
          <div className="border-b border-gray-600 mt-4 md:hidden"></div>
        </nav>



        {/* Brand & Interest Form */}
        <div className="flex flex-col md:flex-row justify-between items-start mt-8 md:mt-12">
       
          <h2 className="text-3xl md:text-4xl lg:text-8xl  whitespace-nowrap relative top-72  md:top-35 font-bold tracking-wider">
            G Developments
          </h2>
          <div className="md:mt-6 mt-[-20px] lg:mt-6 lg:mr-32 md:mr-32">
            <h3 className="text-white uppercase tracking-wider text-sm md:text-base mb-2">
              INTEREST FORM
            </h3>
            <p className="text-white text-base mt-2">Looking for something specific?</p>
            <a href="#" className="text-white text-base font-medium hover:underline flex items-center mt-1">
              Submit Your Interest →
            </a>
          </div>
        </div>

        {/* Back to Top Icon */}
        <div className="absolute top-4 right-6 md:right-12">
          <a ref={arrowRef} href="#" className="p-2 rounded-full text-white shadow-lg">
            <ArrowUp size={30} />
          </a>
        </div>

        {/* Social & Contact Info */}
       {/* Middle Section */}
       <div className="flex justify-start md:justify-end mt-12">
          <div className="grid grid-cols-2 gap-6 md:gap-0">
            
            {/* Social Links */}
            <div>
              <h3 className="text-white uppercase text-[12px] md:text-[14px] tracking-wider mb-2">SOCIAL</h3>
              <ul className="space-y-1 text-[14px] md:text-[16px]">
                <li><a href="#" className="hover:underline">Instagram</a></li>
                <li><a href="#" className="hover:underline">LinkedIn</a></li>
                <li><a href="#" className="hover:underline">Facebook</a></li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-white uppercase text-[12px] md:text-[14px] tracking-wider mb-2">CONTACT INFO</h3>
              <p className="text-white text-[14px] md:text-[16px]">info@gdevelopments.com</p>
              <p className="text-white text-[14px] md:text-[16px]">16738</p>
            </div>
          </div>
        </div>

     
        <div className="md:mt-12 mt-24 border-t border-gray-800 pt-6 flex flex-col md:flex-row justify-between text-white">
          
          {/* Left Section */}
          <div className="flex flex-col md:flex-row md:items-center text-[12px] md:text-[14px] space-y-2 md:space-y-0 md:space-x-6">
            <p>© 2024 G Developments. All rights reserved.</p>
            <div className="flex md:space-x-6 space-x-3">
              <a href="#" className="hover:underline">Privacy</a>
              <a href="#" className="hover:underline">Terms & Conditions</a>
            </div>
          </div>

          {/* Right Section */}
          <p className="mt-2 md:mt-0 text-[12px] md:text-[14px]">
            Website by <a href="#" className="text-white hover:underline">Mitch Designs</a>
          </p>
        </div>
      </div>
      
    </footer>
  );
};

export default Footer;

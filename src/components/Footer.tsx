"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ArrowUp } from "lucide-react";

const Footer = () => {
  const footerRef = useRef<HTMLDivElement | null>(null);
  const arrowRef = useRef<HTMLAnchorElement | null>(null);

  useEffect(() => {
    // تحريك السهم للأعلى والأسفل بشكل مستمر
    if (arrowRef.current) {
      gsap.to(arrowRef.current, {
        y: -10, // يرتفع بمقدار 10 بكسل
        repeat: -1, // التكرار لا نهائي
        yoyo: true, // يرجع للوضع الأصلي بعد كل حركة
        duration: 0.8, // مدة الحركة
        ease: "power1.inOut", // تأثير ناعم
      });
    }
  }, []);

  useEffect(() => {
    // Animation for Footer
    if (footerRef.current) {
      gsap.fromTo(
        footerRef.current,
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1, ease: "power2.out" }
      );
    }

    // Floating Arrow Animation
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

  return (
    <footer ref={footerRef} className="bg-black text-white py-6 px-6 md:px-16 relative">
      <div className="max-w-7xl mx-auto">
        {/* Navigation Links */}
        <nav className="flex flex-col md:flex-row md:space-x-14 text-white text-[14px] md:text-[16px] text-left space-y-3 md:space-y-0 mt-4 md:mt-0">
          <a href="#" className="font-bold tracking-wide hover:text-gray-400">About us</a>
          <a href="#" className="font-bold tracking-wide hover:text-gray-400">Our Communities</a>
          <a href="#" className="font-bold tracking-wide hover:text-gray-400">Latest Updates</a>
          <a href="#" className="font-bold tracking-wide hover:text-gray-400">FAQs</a>
          <a href="#" className="font-bold tracking-wide hover:text-gray-400">Contact us</a>

          {/* خط فاصل تحت الـ nav في شاشات الموبايل فقط */}
          <div className="border-b border-gray-600 mt-4 md:hidden"></div>
        </nav>

        {/* Main Section */}
        <div className="flex flex-col md:flex-row justify-between items-start mt-0 md:mt-12">
          {/* Left - Brand Name */}
          <h2 className="text-[39px] md:text-[100px] font-bold relative top-70 md:top-35 tracking-wide md:tracking-[8px] md:order-first">
            G Developments
          </h2>

          {/* Right - Interest Form */}
          <div className="md:mt-6 mt-[-30px] md:mr-35">
            <h3 className="text-white uppercase tracking-wider text-[12px] md:text-[14px] mb-2">INTEREST FORM</h3>
            <p className="text-white text-[16px] mt-5">Looking for something specific?</p>
            <a href="#" className="text-white text-[16px] font-medium hover:underline flex items-center mt-1">
              Submit Your Interest →
            </a>
          </div>
        </div>

        {/* Back to Top Icon (Moved to Top Right) */}
        <div className="absolute top-2 right-12">
          <a ref={arrowRef} href="#" className="p-2 rounded-full text-white shadow-lg">
            <ArrowUp size={30} />
          </a>
        </div>

           {/* Middle Section (Aligned to Right) */}
           <div className="flex justify-start  md:justify-end mt-12">
          <div className="grid grid-cols-2 md:grid-cols-2 gap-6 md:gap-2">
            {/* Social Links */}
            <div>
              <h3 className="text-white uppercase text-[12px] md:text-[14px] tracking-wider mb-2">SOCIAL</h3>
              <ul className="space-y-1 text-[14px] md:text-[16px]">
                <li><a href="#" className="hover:underline ">Instagram</a></li>
                <li><a href="#" className="hover:underline">LinkedIn</a></li>
                <li><a href="#" className="hover:underline">Facebook</a></li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-white text-[12px] md:text-[14px] uppercase tracking-wider mb-2">CONTACT INFO</h3>
              <p className="text-white text-[14px] md:text-[16px]">info@gdevelopments.com</p>
              <p className="text-white text-[14px] md:text-[16px]">16738</p>
            </div>
          </div>
        </div>
   

        {/* Bottom Section */}
        <div className="md:mt-12 mt-22  border-t border-gray-800 pt-6 flex flex-col md:flex-row justify-between items-start text-white">
          {/* القسم الأيسر */}
          <div className="flex flex-col md:flex-row md:items-center text-[10px] md:text-[14px] space-y-2 md:space-y-0 md:space-x-4">
            <p>© 2024 G Developments. All rights reserved.</p>
            <div className="flex md:space-x-12 space-x-3">
              <a href="#" className="hover:underline md:ml-5">Privacy</a>
              <a href="#" className="hover:underline">Terms & Conditions</a>
            </div>
          </div>

          {/* القسم الأيمن */}
          <p className="mt-2 md:mt-0 text-[10px] md:text-[14px]">
            Website by <a href="#" className="text-white hover:underline">Mitch Designs</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

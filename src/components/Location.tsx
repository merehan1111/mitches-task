"use client";
import { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { FaPlus, FaMinus } from "react-icons/fa";

const Location = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const contentRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    if (openIndex !== null && contentRefs.current[openIndex]) {
      gsap.to(contentRefs.current[openIndex], {
        height: "auto",
        opacity: 1,
        duration: 0.5,
        ease: "power2.out",
      });
    }
  }, [openIndex]);

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const items = [
    {
      number: "01",
      title: "Location",
      content:
        "Location serves as the foundation upon which we curate remarkable living spaces. We rigorously evaluate each plot we choose, with a focus on accessibility, convenience, and potential for growth. Our strategic selection spans diverse areas across the city, guaranteeing you the best of every neighborhood.",
    },
    { number: "02", title: "Design", content: "Design is key to our projects." },
    { number: "03", title: "Construction", content: "We ensure high-quality materials." },
    { number: "04", title: "End-to-End Service", content: "From planning to final delivery." },
  ];

  return (
    <div className="w-full py-12 px-4 sm:px-6 md:px-12 bg-white">
      {/* Main Container */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 items-start">
        {/* Left Section - Title */}
        <h2 className="text-[#777777] text-[22px] md:text-[28px] ml-1 md:ml-6">
          Our Approach
        </h2>

        {/* Right Section - Accordion */}
        <div className="md:col-span-2 max-w-2xl md:ml-35 rounded-md overflow-hidden">
          {items.map((item, index) => (
            <div key={index} className="flex flex-col items-start">
              {/* Header */}
              <button
                className="w-full flex items-center justify-between py-3 px-4 md:px-6 text-left text-black font-medium text-lg"
                onClick={() => toggleItem(index)}
              >
                {/* Left-aligned Number and Title */}
                <span className="flex items-center text-[18px] sm:text-[20px] font-medium">
                  <span className="mr-2 text-black">{item.number}</span>
                  {item.title}
                </span>

                {/* Icon - Left aligned on mobile */}
                <span className="ml-auto md:ml-0">
                  {openIndex === index ? (
                    <FaMinus className="text-black text-[13px]" />
                  ) : (
                    <FaPlus className="text-black text-[13px]" />
                  )}
                </span>
              </button>

              {/* خط فاصل بعد العنصر الثاني فقط */}
              {index >= 1 && (
                <div className="w-[93%] border-[0.2px] border-[#cccccc] mx-auto"></div>
              )}

              {/* Content */}
              <div
                ref={(el) => {
                  contentRefs.current[index] = el;
                }}
                className={`overflow-hidden transition-all duration-500 px-4 md:px-6 text-black text-[16px] ${
                  openIndex === index ? "h-auto opacity-100 py-4" : "h-0 opacity-0"
                }`}
              >
                {item.content && <p>{item.content}</p>}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Location;

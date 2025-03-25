"use client";
import { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { FaPlus, FaMinus } from "react-icons/fa";

const Location = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const contentRefs = useRef<(HTMLDivElement | null)[]>([]);
  const iconRefs = useRef<(HTMLSpanElement | null)[]>([]);
  const textRefs = useRef<(HTMLSpanElement | null)[]>([]);

  useEffect(() => {
    gsap.fromTo(
      textRefs.current,
      { opacity: 0, x: -20 },
      { opacity: 1, x: 0, duration: 0.8, stagger: 0.2, ease: "power3.out" }
    );
  }, []);

  useEffect(() => {
    contentRefs.current.forEach((el, index) => {
      if (el) {
        if (openIndex === index) {
          gsap.to(el, {
            height: "auto",
            opacity: 1,
            duration: 0.5,
            ease: "power2.out",
          });
          gsap.fromTo(
            el.children,
            { y: 20, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.5, delay: 0.1, stagger: 0.1 }
          );
        } else {
          gsap.to(el, {
            height: 0,
            opacity: 0,
            duration: 0.3,
            ease: "power2.in",
          });
        }
      }
    });

    iconRefs.current.forEach((el, index) => {
      if (el) {
        gsap.to(el, {
          rotate: openIndex === index ? 180 : 0,
          duration: 0.3,
          ease: "power2.inOut",
        });
      }
    });
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
    {
      number: "02",
      title: "Design",
      content:
        "Design is key to our projects which we curate remarkable living spaces. We rigorously evaluate each plot we choose, with a focus on accessibility, convenience, and potential for growth. Our strategic selection spans diverse areas across the city, guaranteeing.",
    },
    {
      number: "03",
      title: "Construction",
      content:
        "We ensure high-quality materials which we curate remarkable living spaces. We rigorously evaluate each plot we choose, with a focus on accessibility, convenience, and potential for growth. Our strategic selection spans diverse areas across the city, guaranteeing.",
    },
    {
      number: "04",
      title: "End-to-End Service",
      content:
        "From planning to final delivery which we curate remarkable living spaces. We rigorously evaluate each plot we choose, with a focus on accessibility, convenience, and potential for growth. Our strategic selection spans diverse areas across the city, guaranteeing.",
    },
  ];

  return (
    <div className="bg-white px-4 py-10 sm:px-6 md:px-[56px] md:py-[40px] md:w-[1512px] md:h-[500px]">
      <div className="grid grid-cols-1 md:grid-cols-2 md:gap-8 items-start">
        <div className="w-[576px] h-[35px] sm:w-[343px] sm:h-[30px]">
          <h2 ref={(el) => { textRefs.current[0] = el; }} className="text-[#777777] font-helvetica font-medium text-[24px] md:text-[28px]">
            Our Approach
          </h2>
        </div>
        <div className="w-[343px] h-[340px] mt-6 md:mt-0 md:w-[724px] md:h-[420px] overflow-hidden">
          {items.map((item, index) => (
            <div key={index} className="flex flex-col items-start">
              <button
                className="w-full flex items-center justify-between py-3 px-4 md:px-6 text-left text-black font-medium text-lg"
                onClick={() => toggleItem(index)}
              >
                <span ref={(el) => { textRefs.current[index + 1] = el; }} className="flex items-center text-[18px] sm:text-[20px] font-medium">
                  <span className="mr-2 text-black">{item.number}</span>
                  {item.title}
                </span>
                <span ref={(el) => { iconRefs.current[index] = el; }} className="ml-auto">
                  {openIndex === index ? <FaMinus className="text-black text-[13px]" /> : <FaPlus className="text-black text-[13px]" />}
                </span>
              </button>
              {openIndex !== index && <div className="w-[93%] border-[0.2px] border-[#cccccc] mx-auto"></div>}
              <div ref={(el) => { contentRefs.current[index] = el; }} className="overflow-hidden px-4 md:px-6 text-black text-[16px]" style={{ height: 0, opacity: 0 }}>
                {item.content && <p className="py-4">{item.content}</p>}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Location;

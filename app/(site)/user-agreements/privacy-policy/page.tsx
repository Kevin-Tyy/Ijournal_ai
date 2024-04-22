"use client";

import React, { useEffect, useRef, useState } from "react";
import { sections } from "./components/sections";

const Home: React.FC = () => {
  const [activeTab, setActiveTab] = useState("Copyright Notice");
  const sectionRefs = useRef<any>(sections.map(() => React.createRef<HTMLDivElement>()));
  const contentRef = useRef<HTMLDivElement>(null);

  const handleActiveTab = (option: string) => {
    setActiveTab(option);
    scrollToOption(option);
  };

  const scrollToOption = (option: string) => {
    const section = sections.find((section) => section.title === option);
    if (!section) return;

    const sectionElement = sectionRefs.current[section.index]?.current;
    if (!sectionElement) return;

    sectionElement.scrollIntoView({ behavior: "smooth" });
    setActiveTab(option);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (!contentRef.current) return;

      const contentElement = contentRef.current;
      const contentRect = contentElement.getBoundingClientRect();
      const contentTop = contentRect.top;

      for (const item of sections) {
        const optionElement = sectionRefs.current[item.index]?.current;
        if (!optionElement) continue;

        const optionRect = optionElement.getBoundingClientRect();
        const optionTop = optionRect.top;

        if (optionTop <= contentTop) {
          setActiveTab(item.title);
        }
      }
    };

    contentRef.current?.addEventListener("scroll", handleScroll);

    return () => {
      contentRef.current?.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const [distanceFromTop, setDistanceFromTop] = useState(0);

  const handleTabClick = (index: number) => {
    const totalTabs = sections.length;
    const percentage = (index / totalTabs) * 100;
    setDistanceFromTop(percentage);
  };

  return (
    <div className="flex gap-10 max-w-[1360px] mx-auto pt-20">
      <div ref={contentRef} className="ml-8 flex-1 overflow-y-auto bg-gradient-to-tl from-[#FFBC6D]/20 to-[#FFE1BE]/20 rounded-[96px] p-20 mt-10">
        <p className="text-[#54607A] leading-relaxed">
          Brand Name provides its service subject to the following terms, conditions, and disclaimers. Additionally, you are bound by any terms, conditions, and
          disclaimers stated on this website in relation to a specific service.
        </p>
        {sections.map((item) => (
          <div ref={sectionRefs.current[item.index]} key={item.title} id={item.title} className={``}>
            <div className="flex flex-col gap-6 pt-10">
              <h1 className={`${activeTab === item.title ? "text-primary-blue font-bold text-xl md:text-2xl" : "text-xl md:text-2xl text-black font-bold"}`}>
                {item.title}
              </h1>
              <p className="text-[#54607A] leading-relaxed">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="relative">
        <div className="sticky top-12 space-y-8">
          <div className="">
            <h1 className="text-4xl font-semibold">Menu</h1>
          </div>
          <div className="relative">
            {sections.map((section, index) => (
              <div
                key={section.title}
                className={`border-l border-[#E5E5E5] py-1 ${activeTab === section.title && "text-primary-blue"}`}
                onClick={() => {
                  handleActiveTab(section.title);
                  handleTabClick(index);
                }}>
                <div className="pt-2 pb-3 px-6 cursor-pointer font-semibold flex items-center gap-x-3">
                  <span>{index + 1}.</span>
                  <p>{section.title}</p>
                </div>
              </div>
            ))}
            <div
              className="absolute bottom-0 w-[3px] h-[45px] bg-primary-blue transition-all duration-300 rounded-lg"
              style={{ top: `${distanceFromTop}%` }}></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

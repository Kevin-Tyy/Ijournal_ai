"use client";

import { Minus, Plus } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { Collapse } from "react-collapse";

export default function Faq() {
  const [isOpen, setIsOpen] = useState(true);
  const [currentItem, setCurrentItem] = useState(0);
  return (
    <div className="space-y-6">
      {faqList.map((faq, index) => (
        <div key={index} className={`rounded-[24px] sm:rounded-[30px] transition-all duration-500 ${isOpen && currentItem === index && "bg-[#F6F6F6]"}`}>
          <div
            onClick={() => {
              if (currentItem === index) {
                return setIsOpen((prev) => !prev);
              }
              setIsOpen(true);
              setCurrentItem(index);
            }}
            className={`px-5 sm:px-6 md:px-8 py-4 sm:py-6 cursor-pointer flex items-center justify-between ring-1 ring-[#DCDCDC] rounded-[30px] transition-all duration-500 ${
              isOpen && currentItem === index && "!ring-0"
            }`}>
            <h1 className="font-semibold text-lg sm:text-xl cursor-pointer leading-relaxed sm:leading-loose flex gap-x-2 sm:gap-x-3">
              <span>{index + 1}.</span> {faq.question}
            </h1>
            <div className={`p-3 sm:p-4 rounded-full bg-[#F6F6F6] transition-all duration-500 ${isOpen && currentItem === index && "bg-primary-blue text-white"}`}>
              {isOpen && currentItem === index ? <Minus size={28} className="w-[20px] h-[20px] sm:w-[28px] sm:h-[28px]"/> : <Plus size={28} className="w-[20px] h-[20px] sm:w-[28px] sm:h-[28px]"/>}
            </div>
          </div>
          <Collapse isOpened={isOpen && currentItem === index}>
            <div className="px-5 sm:px-10 pb-5 sm:pb-10">{faq.component}</div>
          </Collapse>
        </div>
      ))}
    </div>
  );
}

const faqList = [
  {
    question: "Contrary to popular belief, Lorem Ipsum is not simply random text",
    component: (
      <div className="space-y-5">
        <p className="leading-relaxed">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum been the industry's standard dummy text ever since the </p>
        <ul className="space-y-3 sm:space-y-5">
          <li className="flex gap-x-4 items-center">
            <Image src="/svgs/check-mark.svg" alt="" width={30} height={30} className="h-[20px] w-[20px] sm:w-[30px] sm:h-[30px]"/>
            Listen to what they say about you
          </li>
          <li className="flex gap-x-4 items-center">
            <Image src="/svgs/check-mark.svg" alt="" width={30} height={30} className="h-[20px] w-[20px] sm:w-[30px] sm:h-[30px]"/>
            Randomised words which.
          </li>
          <li className="flex gap-x-4 items-center">
            <Image src="/svgs/check-mark.svg" alt="" width={30} height={30} className="h-[20px] w-[20px] sm:w-[30px] sm:h-[30px]"/>
            Internet tend to repeat predefined chunks
          </li>
          <li className="flex gap-x-4 items-center">
            <Image src="/svgs/check-mark.svg" alt="" width={30} height={30} className="h-[20px] w-[20px] sm:w-[30px] sm:h-[30px]"/>
            Automate multiple scenarios
          </li>
        </ul>
      </div>
    ),
  },
  {
    question: "How can I return an item purchased online?",
    component: (
      <div className="space-y-5">
        <p className="leading-relaxed">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum been the industry's standard dummy text ever since the </p>
        <ul className="space-y-3 sm:space-y-5">
          <li className="flex gap-x-4 items-center">
            <Image src="/svgs/check-mark.svg" alt="" width={30} height={30} className="h-[20px] w-[20px] sm:w-[30px] sm:h-[30px]"/>
            Listen to what they say about you
          </li>
          <li className="flex gap-x-4 items-center">
            <Image src="/svgs/check-mark.svg" alt="" width={30} height={30} className="h-[20px] w-[20px] sm:w-[30px] sm:h-[30px]"/>
            Randomised words which.
          </li>
          <li className="flex gap-x-4 items-center">
            <Image src="/svgs/check-mark.svg" alt="" width={30} height={30} className="h-[20px] w-[20px] sm:w-[30px] sm:h-[30px]"/>
            Internet tend to repeat predefined chunks
          </li>
          <li className="flex gap-x-4 items-center">
            <Image src="/svgs/check-mark.svg" alt="" width={30} height={30} className="h-[20px] w-[20px] sm:w-[30px] sm:h-[30px]"/>
            Automate multiple scenarios
          </li>
        </ul>
      </div>
    ),
  },
  {
    question: "Contrary to popular belief, Lorem?",
    component: (
      <div className="space-y-5">
        <p className="leading-relaxed">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum been the industry's standard dummy text ever since the </p>
        <ul className="space-y-3 sm:space-y-5">
          <li className="flex gap-x-4 items-center">
            <Image src="/svgs/check-mark.svg" alt="" width={30} height={30} className="h-[20px] w-[20px] sm:w-[30px] sm:h-[30px]"/>
            Listen to what they say about you
          </li>
          <li className="flex gap-x-4 items-center">
            <Image src="/svgs/check-mark.svg" alt="" width={30} height={30} className="h-[20px] w-[20px] sm:w-[30px] sm:h-[30px]"/>
            Randomised words which.
          </li>
          <li className="flex gap-x-4 items-center">
            <Image src="/svgs/check-mark.svg" alt="" width={30} height={30} className="h-[20px] w-[20px] sm:w-[30px] sm:h-[30px]"/>
            Internet tend to repeat predefined chunks
          </li>
          <li className="flex gap-x-4 items-center">
            <Image src="/svgs/check-mark.svg" alt="" width={30} height={30} className="h-[20px] w-[20px] sm:w-[30px] sm:h-[30px]"/>
            Automate multiple scenarios
          </li>
        </ul>
      </div>
    ),
  },
  {
    question: "Contrary to popular belief, Lorem Ipsum?",
    component: (
      <div className="space-y-5">
        <p className="leading-relaxed">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum been the industry's standard dummy text ever since the </p>
        <ul className="space-y-3 sm:space-y-5">
          <li className="flex gap-x-4 items-center">
            <Image src="/svgs/check-mark.svg" alt="" width={30} height={30} className="h-[20px] w-[20px] sm:w-[30px] sm:h-[30px]"/>
            Listen to what they say about you
          </li>
          <li className="flex gap-x-4 items-center">
            <Image src="/svgs/check-mark.svg" alt="" width={30} height={30} className="h-[20px] w-[20px] sm:w-[30px] sm:h-[30px]"/>
            Randomised words which.
          </li>
          <li className="flex gap-x-4 items-center">
            <Image src="/svgs/check-mark.svg" alt="" width={30} height={30} className="h-[20px] w-[20px] sm:w-[30px] sm:h-[30px]"/>
            Internet tend to repeat predefined chunks
          </li>
          <li className="flex gap-x-4 items-center">
            <Image src="/svgs/check-mark.svg" alt="" width={30} height={30} className="h-[20px] w-[20px] sm:w-[30px] sm:h-[30px]"/>
            Automate multiple scenarios
          </li>
        </ul>
      </div>
    ),
  },
  {
    question: "Contrary to popular belief, Lorem Ipsum?",
    component: (
      <div className="space-y-5">
        <p className="leading-relaxed">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum been the industry's standard dummy text ever since the </p>
        <ul className="space-y-3 sm:space-y-5">
          <li className="flex gap-x-4 items-center">
            <Image src="/svgs/check-mark.svg" alt="" width={30} height={30} className="h-[20px] w-[20px] sm:w-[30px] sm:h-[30px]"/>
            Listen to what they say about you
          </li>
          <li className="flex gap-x-4 items-center">
            <Image src="/svgs/check-mark.svg" alt="" width={30} height={30} className="h-[20px] w-[20px] sm:w-[30px] sm:h-[30px]"/>
            Randomised words which.
          </li>
          <li className="flex gap-x-4 items-center">
            <Image src="/svgs/check-mark.svg" alt="" width={30} height={30} className="h-[20px] w-[20px] sm:w-[30px] sm:h-[30px]"/>
            Internet tend to repeat predefined chunks
          </li>
          <li className="flex gap-x-4 items-center">
            <Image src="/svgs/check-mark.svg" alt="" width={30} height={30} className="h-[20px] w-[20px] sm:w-[30px] sm:h-[30px]"/>
            Automate multiple scenarios
          </li>
        </ul>
      </div>
    ),
  },
];

import Image from "next/image";
import React from "react";
import { features } from "./components/constants/features";
import Faq from "./components/Faq";
import Testimonials from "./components/Testimonials";
import { MdArrowOutward } from "react-icons/md";

export default function Home() {
  return (
    <div className="px-6">
      <section className="bg-gradient-to-br from-[#FDECE6] to-[#F9E9FD] p-10 mt-28 rounded-[96px] max-h-[1000px]">
        <div className="max-w-[1360px] mx-auto flex flex-col items-center space-y-10">
          <div className="bg-white px-4 max-w-fit font-semibold py-2 rounded-full">Introducing Journal</div>
          <h1 className="text-[58px] font-bold text-center">
            Your Ultimate
            <br /> Productivity Solution
          </h1>
          <p className="text-center text-[#54607A] max-w-2xl leading-loose">
            Lorem ipsum dolor sit amet consectetur. Tellus blandit magna tempor et faucibus ut. Fermentum faucibus mauris orci facilisis. Ac pharetra auctor eu.
          </p>
          <div className="flex gap-5">
            <button className="rounded-full bg-gradient-to-br from-[#7769D4] to-[#9586FB] text-white py-4 px-10 shadow-lg shadow-[rgba(96,60,255,0.48)]">
              Buy Now
            </button>
            <button className="rounded-full bg-white border border-primary-black text-primary-black py-4 px-10">Buy SaaS Now</button>
          </div>
          <Image src="/assets/browser.svg" alt="" width={1300} height={600} />
        </div>
      </section>
      <section className="mt-[400px] max-w-[1360px] mx-auto">
        <div className="space-y-10">
          <div className="flex items-center justify-between">
            <div>
              <div className="bg-gradient-to-r from-[#EEF3FC] to-[#FFECF3] px-4 max-w-fit font-semibold py-2 rounded-full">Our Facilitations</div>
              <h1 className="text-4xl max-w-2xl leading-relaxed font-bold">
                Take your <span className="text-primary-blue">"crazy ideas"</span> seriously, write them down in focus.
              </h1>
            </div>
            <div className="space-y-3">
              <p>We have 15+ other services</p>
              <button className="flex items-center gap-3 text-primary-blue px-8 h-[60px] ring-1 ring-primary-blue rounded-full relative bg-transparent transition-colors before:absolute before:left-0 before:top-0 before:bottom-0 before:-z-10 before:h-full before:w-full before:origin-top-left before:scale-x-0 before:bg-primary-blue before:transition-transform before:duration-300 before:content-[''] hover:text-white before:hover:scale-x-100 overflow-hidden">
                <span>Discover more</span>
                <MdArrowOutward />
              </button>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-2">
            {features.map((feature, index) => (
              <div
                key={index}
                className="flex flex-col items-center space-y-5 px-10 py-20 hover:ring-1 hover:ring-inset hover:ring-primary-blue rounded-3xl transition-all duration-500 cursor-pointer hover:shadow-box-hover">
                <Image src={feature.image_url} alt="" width={70} height={70} />
                <h1 className="text-center text-2xl font-bold max-w-[300px] leading-relaxed">{feature.title}</h1>
                <p className="text-[#54607A] leading-relaxed text-center">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="bg-[#F6F6F6] rounded-[96px] p-20 mt-20">
        <div className="flex flex-col items-center space-y-10">
          <div className="bg-white px-4 max-w-fit font-semibold py-2 rounded-full">Why Us?</div>
          <h1 className="text-[42px] text-center leading-relaxed">
            Our happy <span className="font-bold">family </span>
          </h1>
          <Testimonials />
        </div>
      </section>
      <section className="max-w-[1360px] mx-auto mt-28 mb-10">
        <div className="space-y-10">
          <div className="flex justify-between items-center gap-5">
            <h1 className="text-[42px] text-center leading-relaxed">
              Frequently asked <span className="font-bold">questions </span>
            </h1>
            <p className="max-w-xl leading-loose">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy.
            </p>
          </div>
          <Faq />
        </div>
      </section>
    </div>
  );
}

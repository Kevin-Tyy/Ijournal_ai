import React from "react";
import Faq from "../components/Faq";
import Testimonials from "../components/Testimonials";
import Image from "next/image";

export default function About() {
  return (
    <div>
      <section className="relative h-[55vh] flex justify-center items-center">
        <Image src="/assets/bg-about-hero.svg" alt="" width={2000} height={2000} className="absolute inset-0 w-full h-full object-cover z-[-1]" />
      </section>
      <section className="bg-[#292930] py-16">
        <div className="flex justify-between max-w-[1360px] mx-auto">
          <div className="text-white flex flex-col items-center space-y-3">
            <h1 className="text-5xl font-bold">07 years</h1>
            <p className="text-sm">In Business</p>
          </div>
          <div className="text-white flex flex-col items-center space-y-3">
            <h1 className="text-5xl font-bold">10,000+</h1>
            <p className="text-sm">Customers</p>
          </div>
          <div className="text-white flex flex-col items-center space-y-3">
            <h1 className="text-5xl font-bold">100k+</h1>
            <p className="text-sm">Monthly Journal Users</p>
          </div>
          <div className="text-white flex flex-col items-center space-y-3">
            <h1 className="text-5xl font-bold">1.2K+</h1>
            <p className="text-sm">Social Followers</p>
          </div>
        </div>
      </section>
      <section className="max-w-[1360px] mx-auto flex gap-10 mt-20">
        <div className="w-full flex justify-center">
          <Image src="/assets/no-1-businesswoman.png" alt="" width={400} height={400} />
        </div>
        <div className="w-full space-y-6">
          <div className="bg-gradient-to-r from-[#EEF3FC] to-[#FFECF3] px-4 max-w-fit font-semibold py-2 rounded-full">About Us</div>
          <h1 className="text-[42px] leading-relaxed !mt-5 font-bold max-w-xl">The #1 Journal writing platform</h1>
          <div className="flex items-center gap-4">
            <div className="bg-[#292930] rounded-xl h-[65px] px-6 flex gap-4 items-center">
              <Image src="/icons/goals.svg" alt="" width={25} height={25} />
              <p className="text-lg font-semibold text-white">Goals & Plans</p>
            </div>
            <div className="bg-[#292930] rounded-xl h-[65px] px-6 flex gap-4 items-center">
              <Image src="/icons/megaphone.svg" alt="" width={40} height={40} />
              <p className="text-lg font-semibold text-white">Personal Projects</p>
            </div>
          </div>
          <p className="leading-relaxed text-[#54607A]">
            Lorem ipsum dolors sit non amet consectetur adipiscing elit fringilla aliquam Aliquam vestibulum libero morbi blandit cursus risus. Laoreet non
            curabitur gravida arcu ac tortor semper vivera nam libero justo laoreet mollis aliquam ut porttitor leo a diam.
          </p>
          <button className="text-primary-blue px-8 h-[60px] ring-1 ring-primary-blue rounded-full relative bg-transparent transition-colors before:absolute before:left-0 before:top-0 before:bottom-0 before:-z-10 before:h-full before:w-full before:origin-top-left before:scale-x-0 before:bg-primary-blue before:transition-transform before:duration-300 before:content-[''] hover:text-white before:hover:scale-x-100 overflow-hidden">
            <span>Get In Touch</span>
          </button>
        </div>
      </section>

      <div className="px-6">
        <section className="bg-gradient-to-tl from-[#FFBC6D]/20 to-[#FFE1BE]/20 rounded-[96px] p-20 mt-20">
          <div className="max-w-[1360px] mx-auto flex flex-col space-y-5">
            <div className="flex flex-col items-center space-y-4">
              <div className="bg-white px-4 max-w-fit font-semibold py-2 rounded-full">Core Values</div>
              <h1 className="text-[42px] font-bold text-center">The core values behind our Journal</h1>
            </div>
          </div>
        </section>
        <section className="max-w-[1360px] mx-auto flex flex-col space-y-5 mt-20">
          <div className="flex flex-col items-center space-y-4">
            <div className="bg-white px-4 max-w-fit font-semibold py-2 rounded-full">Team</div>
            <h1 className="text-[42px] font-bold text-center">Our great team</h1>
          </div>
          <div className="flex gap-6">
            <div className="ring-1 ring-inset ring-[#DCDCDC] rounded-[30px] p-10 flex flex-col items-center space-y-8 w-full group relative hover:ring-0 transition-all duration-500">
              <div className="absolute inset-0 bg-gradient-to-r from-[#E9F7FF] via-[#FFDBD4] to-[#FFF3CA] opacity-0 group-hover:opacity-100 z-[-1] transition-all duration-300 rounded-[30px]" />
              <Image src="/assets/person-4.png" alt="" width={300} height={400} className="rounded-3xl object-cover h-[370px] w-[370px] !mt-0" />
              <span className="w-full h-1 bg-[#5956E8] max-w-[100px] rounded-full" />
              <h1 className="text-2xl font-bold text-center">Pippa Clarkson</h1>
              <p className="text-[#54607A] ">Lead Manager</p>
              <div className="flex gap-3">
                <Image src="/icons/facebook.svg" alt="" width={35} height={35} className="cursor-pointer" draggable={false} />
                <Image src="/icons/twitter.svg" alt="" width={35} height={35} className="cursor-pointer" draggable={false} />
                <Image src="/icons/instagram.svg" alt="" width={35} height={35} className="cursor-pointer" draggable={false} />
              </div>
            </div>
            <div className="ring-1 ring-inset ring-[#DCDCDC] rounded-[30px] p-10 flex flex-col items-center space-y-8 w-full group relative hover:ring-0 transition-all duration-500">
              <div className="absolute inset-0 bg-gradient-to-r from-[#E9F7FF] via-[#FFDBD4] to-[#FFF3CA] opacity-0 group-hover:opacity-100 z-[-1] transition-all duration-300 rounded-[30px]" />
              <Image src="/assets/person-2.png" alt="" width={300} height={400} className="rounded-3xl object-cover h-[370px] w-[370px] !mt-0" />
              <span className="w-full h-1 bg-[#5956E8] max-w-[100px] rounded-full" />
              <h1 className="text-2xl font-bold text-center">Richard	Walsh</h1>
              <p className="text-[#54607A] ">Lead Manager</p>
              <div className="flex gap-3">
                <Image src="/icons/facebook.svg" alt="" width={35} height={35} className="cursor-pointer" draggable={false} />
                <Image src="/icons/twitter.svg" alt="" width={35} height={35} className="cursor-pointer" draggable={false} />
                <Image src="/icons/instagram.svg" alt="" width={35} height={35} className="cursor-pointer" draggable={false} />
              </div>
            </div>
            <div className="ring-1 ring-inset ring-[#DCDCDC] rounded-[30px] p-10 flex flex-col items-center space-y-8 w-full group relative hover:ring-0 transition-all duration-500">
              <div className="absolute inset-0 bg-gradient-to-r from-[#E9F7FF] via-[#FFDBD4] to-[#FFF3CA] opacity-0 group-hover:opacity-100 z-[-1] transition-all duration-300 rounded-[30px]" />
              <Image src="/assets/person-3.png" alt="" width={300} height={400} className="rounded-3xl object-cover h-[370px] w-[370px] !mt-0" />
              <span className="w-full h-1 bg-[#5956E8] max-w-[100px] rounded-full" />
              <h1 className="text-2xl font-bold text-center">Richard	Walsh</h1>
              <p className="text-[#54607A] ">Lead Manager</p>
              <div className="flex gap-3">
                <Image src="/icons/facebook.svg" alt="" width={35} height={35} className="cursor-pointer" draggable={false} />
                <Image src="/icons/twitter.svg" alt="" width={35} height={35} className="cursor-pointer" draggable={false} />
                <Image src="/icons/instagram.svg" alt="" width={35} height={35} className="cursor-pointer" draggable={false} />
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[#F6F6F6] rounded-[96px] p-20 mt-20">
          <div className="flex flex-col items-center space-y-10">
            <div className="bg-white px-4 max-w-fit font-semibold py-2 rounded-full">Why Us?</div>
            <h1 className="text-[42px] text-center leading-relaxed !mt-5">
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
    </div>
  );
}

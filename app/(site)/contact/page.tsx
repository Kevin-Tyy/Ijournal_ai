import Image from "next/image";
import React from "react";
import Faq from "../components/Faq";

export default function ContactPage() {
  return (
    <div className="overflow-hidden">
      <section className="relative min-h-[400px] h-[55vh] flex justify-center items-end pb-40">
        <Image src="/assets/bg-contact-hero.svg" alt="" width={2000} height={2000} className="absolute inset-0 w-full h-full object-cover z-[-1]" />
        <Image src="/assets/bg-contact-hero-banner.svg" alt="" width={2000} height={2000} className="absolute inset-0 w-full h-full object-cover z-[-2]" />
        <div className="flex flex-col items-center gap-y-10">
          <h1 className="text-4xl md:text-5xl font-bold">
            Get in <span className="text-primary-blue">touch</span>
          </h1>
          <div className="flex flex-col sm:flex-row items-center  gap-y-5 sm:gap-10">
            <div className="flex items-center gap-2">
              <Image src="/icons/mail.svg" alt="" width={30} height={30} className="w-[20px] sm:w-[30px]"/>
              <span className="font-semibold text-base sm:text-lg">contact@brandname.com</span>
            </div>
            <div className="flex items-center gap-2">
              <Image src="/icons/call.svg" alt="" width={30} height={30} className="w-[20px] sm:w-[30px]"/>
              <span className="font-semibold text-base sm:text-lg">(011) 6543 8974 210</span>
            </div>
          </div>
        </div>
      </section>
      <div className="relative max-w-[1360px] mx-auto px-4">
        <section className="bg-white p-4 sm:p-10 md:p-16 -mt-20 rounded-[30px] space-y-6 sm:space-y-10 shadow-2xl shadow-[#eee]/90">
          <div className="flex flex-col sm:flex-row gap-8">
            <div className="space-y-4 w-full">
              <label className="font-semibold">
                Full name <span className="text-[#E03137]">*</span>
              </label>
              <input className="ring-1 ring-[#DCDCDC] h-[50px] sm:h-[70px] w-full block rounded-2xl px-4 sm:px-6 outline-none focus:ring-2" placeholder="Full Names" />
            </div>
            <div className="space-y-4 w-full">
              <label className="font-semibold">
                Your email <span className="text-[#E03137]">*</span>
              </label>
              <input className="ring-1 ring-[#DCDCDC] h-[50px] sm:h-[70px] w-full block rounded-2xl px-4 sm:px-6 outline-none focus:ring-2" placeholder="Your email" />
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-8">
            <div className="space-y-4 w-full">
              <label className="font-semibold">
                Company <span className="text-[#E03137]">*</span>
              </label>
              <input className="ring-1 ring-[#DCDCDC] h-[50px] sm:h-[70px] w-full block rounded-2xl px-4 sm:px-6 outline-none focus:ring-2" placeholder="Your company name here" />
            </div>
            <div className="space-y-4 w-full">
              <label className="font-semibold">
                Subject <span className="text-[#E03137]">*</span>
              </label>
              <input className="ring-1 ring-[#DCDCDC] h-[50px] sm:h-[70px] w-full block rounded-2xl px-4 sm:px-6 outline-none focus:ring-2" placeholder="Subject" />
            </div>
          </div>
          <div className="space-y-4 w-full">
            <label className="font-semibold">
              Subject <span className="text-[#E03137]">*</span>
            </label>
            <textarea
              className="ring-1 ring-[#DCDCDC] min-h-[300px] max-h-[600px] w-full block rounded-2xl p-4 sm:p-6 outline-none focus:ring-2"
              placeholder="Hello there,I would like to talk about how to..."
            />
          </div>
          <div className="flex justify-center">
            <button className="rounded-full bg-gradient-to-br from-[#7769D4] to-[#9586FB] text-white py-5 sm:py-6 px-10">Send Message</button>
          </div>
        </section>
        <div className="w-full max-w-[1000px] h-10 bg-[#1B16FF]/90 blur-[100px] absolute bottom-14 left-10 z-[-1]" />
        <div className="w-full max-w-[1000px] h-10 bg-[#DB14F1]/90 blur-[100px] absolute bottom-14 right-10 z-[-1]" />
      </div>

      <section className="max-w-[1360px] mx-auto mt-16 md:mt-28 mb-10 px-4">
        <div className="space-y-10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-5">
            <h1 className="text-[30px] sm:text-[36px] md:text-[42px] text-center md:text-left leading-relaxed w-full">
              Frequently asked <span className="font-bold">questions </span>
            </h1>
            <p className="max-w-xl leading-loose text-center md:text-left">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy.
            </p>
          </div>
          <Faq />
        </div>
      </section>
    </div>
  );
}

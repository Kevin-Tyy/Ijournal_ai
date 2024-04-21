import Image from "next/image";
import React from "react";
import Faq from "../components/Faq";

export default function ContactPage() {
  return (
    <div>
      <section className="relative h-[55vh] flex justify-center items-end pb-40">
        <Image src="/assets/bg-contact-hero.svg" alt="" width={2000} height={2000} className="absolute inset-0 w-full h-full object-cover z-[-1]" />
        <div className="flex flex-col items-center gap-y-10">
          <h1 className="text-5xl font-bold">
            Get in <span className="text-primary-blue">touch</span>
          </h1>
          <div className="flex items-center gap-10">
            <div className="flex items-center gap-2">
              <Image src="/icons/mail.svg" alt="" width={30} height={30} />
              <span className="font-semibold text-lg">contact@brandname.com</span>
            </div>
            <div className="flex items-center gap-2">
              <Image src="/icons/mail.svg" alt="" width={30} height={30} />
              <span className="font-semibold text-lg">contact@brandname.com</span>
            </div>
          </div>
        </div>
      </section>
      <div className="relative max-w-[1360px] mx-auto">
        <section className="bg-white p-16 -mt-20 rounded-[30px] space-y-10 shadow-2xl shadow-[#eee]/90">
          <div className="flex gap-8">
            <div className="space-y-4 w-full">
              <label className="font-semibold">
                Full name <span className="text-[#E03137]">*</span>
              </label>
              <input className="ring-1 ring-[#DCDCDC] h-[70px] w-full block rounded-2xl px-6 outline-none focus:ring-2" placeholder="Full Names" />
            </div>
            <div className="space-y-4 w-full">
              <label className="font-semibold">
                Your email <span className="text-[#E03137]">*</span>
              </label>
              <input className="ring-1 ring-[#DCDCDC] h-[70px] w-full block rounded-2xl px-6 outline-none focus:ring-2" placeholder="Your email" />
            </div>
          </div>
          <div className="flex gap-8">
            <div className="space-y-4 w-full">
              <label className="font-semibold">
                Company <span className="text-[#E03137]">*</span>
              </label>
              <input className="ring-1 ring-[#DCDCDC] h-[70px] w-full block rounded-2xl px-6 outline-none focus:ring-2" placeholder="Your company name here" />
            </div>
            <div className="space-y-4 w-full">
              <label className="font-semibold">
                Subject <span className="text-[#E03137]">*</span>
              </label>
              <input className="ring-1 ring-[#DCDCDC] h-[70px] w-full block rounded-2xl px-6 outline-none focus:ring-2" placeholder="Subject" />
            </div>
          </div>
          <div className="space-y-4 w-full">
            <label className="font-semibold">
              Subject <span className="text-[#E03137]">*</span>
            </label>
            <textarea
              className="ring-1 ring-[#DCDCDC] min-h-[300px] max-h-[600px] w-full block rounded-2xl p-6 outline-none focus:ring-2"
              placeholder="Hello there,I would like to talk about how to..."
            />
          </div>
          <div className="flex justify-center">
            <button className="rounded-full bg-gradient-to-br from-[#7769D4] to-[#9586FB] text-white py-6 px-10">Send Message</button>
          </div>
        </section>
        <div className="w-full max-w-[1000px] h-10 bg-[#1B16FF]/90 blur-[100px] absolute bottom-0 left-10 z-[-1]" />
        <div className="w-full max-w-[1000px] h-10 bg-[#DB14F1]/90 blur-[100px] absolute bottom-0 right-10 z-[-1]" />
      </div>

      <section className="max-w-[1360px] mx-auto mt-40 mb-10">
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

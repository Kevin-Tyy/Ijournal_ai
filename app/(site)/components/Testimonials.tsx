"use client";

import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";
import { SwiperSlide, Swiper } from "swiper/react";
import { testimonials } from "./constants/testimonials";
import Image from "next/image";
import { A11y, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

export default function Testimonials() {
  return (
    <div className="max-w-[1360px] mx-auto">
      <div className="w-full flex justify-center items-center gap-5">
        {/* <button className="bg-white p-4 rounded-full hover:bg-primary-blue transition-all duration-500 hover:text-white cursor-pointer button-prev-slide">
          <FaChevronLeft size={30} />
        </button> */}

        <div className="w-full max-w-[1060px] mx-auto cursor-pointer">
          <Swiper
            modules={[Navigation, A11y]}
            loop={true}
            slidesPerView={1}
            navigation={{
              nextEl: ".button-next-slide",
              prevEl: ".button-prev-slide",
            }}>
            {testimonials.map((testimonial, index) => (
              <SwiperSlide key={index}>
                <div key={index} className="flex flex-col items-center space-y-6 cursor-grab active:cursor-grabbing">
                  <div className="relative">
                    <Image src={testimonial.author.profile_image} alt="" width={200} height={200} className="rounded-full w-[160px] h-[160px] object-cover" />
                    <div className="bg-primary-blue h-16 w-16 rounded-full grid place-content-center absolute -bottom-1 -left-5">
                      <Image src="/svgs/quotes.svg" alt="" width={30} height={30} />
                    </div>
                  </div>
                  <Image src="/svgs/stars.svg" alt="" width={200} height={100} />
                  <h1 className="font-semibold text-2xl">
                    {testimonial.author.name}, {testimonial.author.job_title}
                  </h1>
                  <p className="text-[#54607A] text-center leading-loose max-w-4xl">{testimonial.description}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <button className="bg-white p-4 rounded-full hover:bg-primary-blue transition-all duration-500 hover:text-white cursor-pointer button-next-slide">
          <FaChevronRight size={30} />
        </button>
      </div>
    </div>
  );
}

import Image from "next/image";
import React from "react";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <section className="relative h-[40vh] flex justify-center items-center">
        <Image
          src="/assets/bg-terms-and-conditions-hero.svg"
          alt=""
          width={2000}
          height={2000}
          className="absolute inset-0 w-full h-full object-cover z-[-1]"
        />
        <h1 className="text-5xl font-bold mt-20">Privacy Policy</h1>
      </section>
      {children}
    </div>
  );
}

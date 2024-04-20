"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import MobileSidebar from "./MobileSidebar";
import Logo from "./shared/Logo";

export default function Navbar() {
  const pathname = usePathname();
  const [isExpanded, setIsExpanded] = useState(false);
  const navLinks = [
    {
      href: "/",
      label: "Products",
    },
    {
      href: "/",
      label: "Pricing",
    },
    {
      href: "/",
      label: "Demo",
    },
    {
      href: "/",
      label: "Marketplace",
    },
    {
      href: "/",
      label: "Help Center",
    },
    {
      href: "/",
      label: "Resources",
    },
  ];
  return (
    <header className="absolute top-0 w-full px-4 py-4 z-[5]">
      <div className="max-w-[1360px] mx-auto">
        <nav className="w-full flex items-center justify-between">
          <Logo />
          <div className="w-10 grid place-content-center ml-6 xl:hidden">
            <div
              className="flex flex-col items-end justify-center rounded-md transition duration-100 p-2 space-y-[7px] cursor-pointer group"
              onClick={() => setIsExpanded(true)}>
              <span
                className={`w-5 relative h-[2px] bg-[#8E93A4] block transition rounded-full duration-300 ${
                  isExpanded && "rotate-[135deg] translate-y-[9px] w-5"
                }`}></span>
              <span
                className={`w-4 relative h-[2px] bg-[#8E93A4] transition  rounded-full duration-100 opacity-100 ${
                  isExpanded && "opacity-0 invisible"
                } `}></span>
              <span
                className={`w-5 relative h-[2px] bg-[#8E93A4] rounded-full transition duration-300 ${
                  isExpanded && "-rotate-[135deg] -translate-y-[9px] w-5"
                }`}></span>
            </div>
          </div>
          <div className="hidden xl:flex items-center gap-x-12">
            <div className="">
              <ul className="text-[#636369] flex gap-x-10">
                {navLinks.map((link, index) => (
                  <Link href={link.href} key={index}>
                    <div className={`flex flex-col gap-[10px] items-center cursor-pointer`}>
                      <h1 className="whitespace-nowrap">{link.label}</h1>
                    </div>
                  </Link>
                ))}
              </ul>
            </div>
            <div className="flex gap-x-5">
              <div className="flex gap-x-4">
                <Link href="/auth/login">
                  <button className="rounded-full bg-gradient-to-br from-[#7769D4] to-[#9586FB] text-white py-4 px-10 shadow-lg shadow-[rgba(96,60,255,0.48)]">
                    Sign in
                  </button>
                </Link>
                {/* <Link href="/auth/signup">
                  <button className="bg-gradient-to-r from-[#c04cff] to-[#6035ff] text-white py-3 px-8 rounded-xl">Sign up</button>
                </Link> */}
              </div>
            </div>
          </div>
        </nav>
      </div>
      <MobileSidebar onClose={() => setIsExpanded(false)} isOpen={isExpanded} />
    </header>
  );
}

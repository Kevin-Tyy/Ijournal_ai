"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef, useEffect } from "react";
import Logo from "./shared/Logo";
import { usePathname } from "next/navigation";
interface Props {
  onClose: () => void;
  isOpen?: boolean;
}
export default function MobileSidebar({ onClose, isOpen }: Props) {
  const mainRef = useRef<HTMLElement | null>(null);
  const handleClickOutside = (event: any) => {
    if (mainRef.current && !mainRef.current.contains(event.target)) {
      onClose();
    }
  };
  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

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
  const pathname = usePathname();
  return (
    <nav
      ref={mainRef}
      className={`${
        isOpen ? "w-[300px]" : "w-0"
      } overflow-hidden bg-white fixed right-0 top-0 bottom-0 h-screen shadow-2xl z-[9999999] transition-[width] duration-500`}>
      <div className="pl-8 flex flex-col justify-between pt-6 pb-10 px-4 h-full">
        <div className="flex items-center justify-between w-full">
          <Logo isMobile />
          <div className="w-10 grid place-content-center ml-6">
            <div
              className="flex flex-col items-end justify-center rounded-md transition duration-100 p-2 space-y-[7px] cursor-pointer  group"
              onClick={onClose}>
              <span
                className={`w-5 relative h-[2px] bg-[#8E93A4] block transition rounded-full duration-300 ${
                  isOpen && "rotate-[135deg] translate-y-[9px] w-5"
                }`}></span>
              <span
                className={`w-4 relative h-[2px] bg-[#8E93A4] transition  rounded-full duration-100 opacity-100 ${isOpen && "!opacity-0 invisible"} `}></span>
              <span
                className={`w-5 relative h-[2px] bg-[#8E93A4] rounded-full transition duration-300 ${
                  isOpen && "-rotate-[135deg] -translate-y-[9px] w-5"
                }`}></span>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-10">
          {navLinks.map((link, index) => (
            <Link href={link.href} key={index}>
              <div className={`flex flex-col gap-[10px] cursor-pointer`}>
                <h1 className="whitespace-nowrap">{link.label}</h1>
              </div>
            </Link>
          ))}
        </div>
        <div className="flex gap-x-5">
          <div className="flex gap-x-4 w-full">
            <Link href="/auth/login" className="w-full">
              <button className="rounded-full bg-gradient-to-br from-[#7769D4] to-[#9586FB] text-white py-4 px-10 w-full shadow-lg shadow-[rgba(96,60,255,0.48)] whitespace-nowrap">
                Sign in
              </button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

import Link from "next/link";
import { FaFacebook, FaInstagram, FaLinkedinIn, FaTwitter, FaYoutube } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="px-4 -mt-28 sm:-mt-16">
      <div className="bg-gradient-to-r from-[#adf5ff] to-[#ffcedf] max-w-[1360px] mx-auto p-6 sm:p-8 md:p-16 flex flex-col lg:flex-row rounded-[32px] sm:rounded-[40px] translate-y-28 space-y-4">
        <h1 className="text-2xl sm:text-3xl md:text-4xl w-full font-bold !leading-normal sm:!leading-relaxed">Take control of your personal Journals today</h1>
        <div className="w-full flex items-center gap-2 sm:gap-4 md:gap-8">
          <input type="email" className="h-[52px] sm:h-[64px] w-full bg-white rounded-full px-6 sm:px-8" placeholder="Enter your email" />
          <button className="rounded-full bg-gradient-to-br from-[#69add4] to-[#9586FB] text-white h-[52px] sm:h-[64px] w-full max-w-[112px] sm:max-w-[200px]">
            Subscribe
          </button>{" "}
        </div>
      </div>
      <div className="bg-primary-chocolate rounded-b-[32px] sm:rounded-b-[96px] text-white rounded-t-[96px] pt-40 lg:pt-60 pb-16 sm:pb-20 md:pb-28 lg:pb-36 px-5 sm:px-10 md:px-20">
        <div className="max-w-[1360px] mx-auto">
          <div className="flex flex-col lg:flex-row gap-y-10 justify-between gap-x-32">
            <div className="space-y-8">
              <h1 className="text-xl font-bold ">LOGO HERE</h1>
              <p className="leading-loose mt-2 max-w-2xl">
                Lorem ipsum dolor sitonsecteturadipisicing elit sed do eiusmod temporincididunt Laoreet non sagittis aliquam bibendum.{" "}
              </p>
              <div className="flex gap-6">
                <Link href="https://instagram.com" target="_blank">
                  <FaInstagram size={24} className="" />
                </Link>
                <Link href="https://facebook.com" target="_blank">
                  <FaFacebook size={24} className="" />
                </Link>
                <Link href="https://x.com" target="_blank">
                  <FaTwitter size={24} className="" />
                </Link>
                <Link href="https://linkedin.com" target="_blank">
                  <FaLinkedinIn size={24} className="" />
                </Link>
                <Link href="https://youtube.com" target="_blank">
                  <FaYoutube size={24} className="" />
                </Link>
              </div>
            </div>
            <div className="h-[223px] w-[1px] bg-[#C4C4C4]/30 hidden lg:block" />
            <div className="w-full flex flex-wrap gap-x-10 gap-y-12 justify-between">
              <div className="space-y-8">
                <h1 className="font-bold text-2xl sm:text-3xl">Product</h1>
                <ul className="space-y-5">
                  <li className="hover:underline cursor-pointer">
                    <Link href="#">Business Suite</Link>
                  </li>
                  <li className="hover:underline cursor-pointer">
                    <Link href="#">HostBilling</Link>
                  </li>
                  <li className="flex items-center gap-x-4 !mt-4 !mb-2">
                    <Link href="#" className="hover:underline cursor-pointer">
                      iBilling
                    </Link>
                    <span className="bg-[#2FCF3F] px-4 py-1 rounded-full">Offer</span>
                  </li>
                  <li className="hover:underline cursor-pointer">
                    <Link href="#">More</Link>
                  </li>
                </ul>
              </div>
              <div className="space-y-8">
                <h1 className="font-bold text-2xl sm:text-3xl">Brand Name</h1>
                <ul className="space-y-5">
                  <li className="hover:underline cursor-pointer">
                    <Link href="#">Help center</Link>
                  </li>
                  <li className="hover:underline cursor-pointer">
                    <Link href="/user-agreements/privacy-policy">Privacy policy</Link>
                  </li>
                  <li className="hover:underline cursor-pointer">
                    <Link href="#">Cookie policy</Link>
                  </li>

                  <li className="hover:underline cursor-pointer">
                    <Link href="#">Support policy</Link>
                  </li>
                </ul>
              </div>
              <div className="space-y-8">
                <h1 className="font-bold text-2xl sm:text-3xl">Product</h1>
                <ul className="space-y-5">
                  <li className="hover:underline cursor-pointer">+9155 456 789</li>
                  <li className="hover:underline cursor-pointer">mail@email.com </li>
                  <Link href="/contact">
                    <button className="rounded-full bg-gradient-to-br from-[#7769D4] to-[#9586FB] text-white py-4 px-6 uppercase mt-5">Chat with Us</button>{" "}
                  </Link>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center py-8 sm:py-12 md:py-16">
        <p className="text-center">
          Copyright © <span className="font-bold">Brand Name</span> 2024
        </p>
      </div>
    </footer>
  );
}

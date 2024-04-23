import Logo from "@/app/components/shared/Logo";
import { Eye } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { FaRegUser } from "react-icons/fa6";
import { HiUser } from "react-icons/hi2";

export default function Register() {
  return (
    <div className="flex flex-col lg:flex-row min-h-screen h-full">
      <div className="w-full space-y-3 flex lg:justify-end">
        <div className="w-full flex flex-col justify-between lg:max-w-xl p-4 pt-8 lg:mr-20 space-y-20">
          <Logo />
          <div className="space-y-8 w-full max-w-xl mx-auto">
            <h1 className="text-4xl font-bold">Register your account</h1>
            <p className="text-[#54607A] leading-relaxed">
              Lorem ipsum dolor sit amet consectetur. Urna accumsan habitasse in rutrum volutpat nisl quam. Eget auctor ut mi ac ultricies.
            </p>
            <div className="space-y-4">
              <label className="text-[#54607A]">First Name</label>
              <div className="bg-[#F6F6F6] rounded-2xl flex items-center gap-4 w-full px-4">
                <FaRegUser size={20} />
                <input className="h-[65px] w-full bg-transparent outline-none" placeholder="Type your first name" />
              </div>
            </div>
            <div className="space-y-4">
              <label className="text-[#54607A]">Last Name</label>
              <div className="bg-[#F6F6F6] rounded-2xl flex items-center gap-4 w-full px-4">
                <FaRegUser size={20} />
                <input className="h-[65px] w-full bg-transparent outline-none" placeholder="Type your last name" />
              </div>
            </div>
            <div className="space-y-4">
              <label className="text-[#54607A]">Email</label>
              <div className="bg-[#F6F6F6] rounded-2xl flex items-center gap-4 w-full px-4">
                <Image src="/icons/message.svg" alt="" width={25} height={25} />
                <input className="h-[65px] w-full bg-transparent outline-none" placeholder="email@gmail.com" />
              </div>
            </div>
            <div className="space-y-4">
              <label className="text-[#54607A]">Password</label>
              <div className="bg-[#F6F6F6] rounded-2xl flex items-center gap-4 w-full px-4">
                <Image src="/icons/unlock.svg" alt="" width={25} height={25} />
                <input className="h-[65px] w-full bg-transparent outline-none" placeholder="*********" />
                <Eye size={30} />
              </div>
            </div>

            <button className="rounded-xl bg-gradient-to-t from-[#7769D4] to-[#9586FB] text-white py-5 w-full shadow-lg shadow-[rgba(96,60,255,0.48)]">
              Register
            </button>
            <p className="text-center">
              Already have an account?
              <Link href="/auth/login" className="text-primary-blue">
                Login
              </Link>
            </p>
          </div>
          <div />
        </div>
      </div>
      <div className="w-full min-h-screen h-full bg-[#56CCF2] relative pt-10 flex justify-end">
        <div className="max-w-[882px] w-full flex flex-col justify-between gap-10">
          <div className="space-y-6 px-6">
            <h1 className="text-4xl text-white font-bold">Login to Your Journal Account</h1>
            <p className="text-white leading-relaxed max-w-2xl w-full">
              Lorem ipsum dolor sit amet consectetur. Dictum ac in feugiat eu donec fusce. Ornare accumsan consectetur malesuada sed. Dolor nulla nullam commodo
              vitae.
            </p>
          </div>
          <Image src="/assets/register-bg-mask.png" alt="" width={984} height={984} className="self-end" />
        </div>
      </div>
    </div>
  );
}

import Logo from "@/app/components/shared/Logo";
import { Eye } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Login() {
  return (
    <div className="flex flex-col lg:flex-row min-h-screen h-full">
      <div className="w-full space-y-3 flex lg:justify-end">
        <div className="w-full flex flex-col justify-between lg:max-w-xl p-4 pt-8 lg:mr-20 space-y-20">
          <Logo />
          <div className="space-y-8 w-full max-w-xl mx-auto">
            <h1 className="text-4xl font-bold">Log in to your account</h1>
            <p className="text-[#54607A] leading-relaxed">
              Lorem ipsum dolor sit amet consectetur. Urna accumsan habitasse in rutrum volutpat nisl quam. Eget auctor ut mi ac ultricies.
            </p>
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
            <div className="flex justify-between">
              <div className="flex items-center gap-x-3">
                <input type="checkbox" id="remember-me" className="outline-none" />
                <label htmlFor="remember-me" className="text-[#54607A]">
                  Remember me
                </label>
              </div>
              <p className="text-primary-blue">Forgot Password?</p>
            </div>
            <button className="rounded-xl bg-gradient-to-t from-[#7769D4] to-[#9586FB] text-white py-5 w-full shadow-lg shadow-[rgba(96,60,255,0.48)]">
              Log in
            </button>
            <p className="text-center">
              Don't have an account?{" "}
              <Link href="/auth/register" className="text-primary-blue">
                Create an account
              </Link>
            </p>
          </div>
          <div />
        </div>
      </div>
      <div className="w-full min-h-screen h-full bg-primary-blue relative pt-10 flex justify-end">
        <div className="max-w-[882px] w-full flex flex-col justify-between gap-10">
          <div className="space-y-6 px-6">
            <h1 className="text-4xl text-white font-bold">Login to Your Journal Account</h1>
            <p className="text-white leading-relaxed max-w-2xl w-full">
              Lorem ipsum dolor sit amet consectetur. Dictum ac in feugiat eu donec fusce. Ornare accumsan consectetur malesuada sed. Dolor nulla nullam commodo
              vitae.
            </p>
          </div>
          <Image src="/assets/login-bg-mask.png" alt="" width={1248} height={1248} className="self-end" />
        </div>
      </div>
    </div>
  );
}

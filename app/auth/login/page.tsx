import Logo from "@/app/components/shared/Logo";
import { Eye } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Login() {
  return (
    <div className="flex h-screen">
      <div className="w-full space-y-3 flex justify-end">
        <div className="flex flex-col justify-between max-w-xl p-4 mr-20">
          <Logo />
          <div className="space-y-8">
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
              <label className="text-[#54607A]">Email</label>
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
      <div className="w-full h-screen bg-primary-blue relative px-40">
        <div>
          <h1 className="text-4xl text-white font-bold">Login to Your Journal Account</h1>
        </div>
        <Image src="/assets/login-bg-mask.svg" alt="" width={1100} height={1100} className="absolute bottom-0 right-0" />
      </div>
    </div>
  );
}

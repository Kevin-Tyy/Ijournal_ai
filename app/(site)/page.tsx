import Image from "next/image";
import { BsPlayFill } from "react-icons/bs";
import { MdArrowOutward } from "react-icons/md";
import Faq from "./components/Faq";
import Testimonials from "./components/Testimonials";
import { features } from "./components/constants/features";

export default function Home() {
  return (
    <div className="px-6">
      <section className="bg-gradient-to-br from-[#FDECE6] to-[#F9E9FD] p-10 mt-28 rounded-[96px] max-h-[1000px]">
        <div className="max-w-[1360px] mx-auto flex flex-col items-center space-y-10">
          <div className="bg-white px-4 max-w-fit font-semibold py-2 rounded-full">Introducing Journal</div>
          <h1 className="text-[58px] font-bold text-center">
            Your Ultimate
            <br /> Productivity Solution
          </h1>
          <p className="text-center text-[#54607A] max-w-2xl leading-loose">
            Lorem ipsum dolor sit amet consectetur. Tellus blandit magna tempor et faucibus ut. Fermentum faucibus mauris orci facilisis. Ac pharetra auctor eu.
          </p>
          <div className="flex gap-5">
            <button className="rounded-full bg-gradient-to-br from-[#7769D4] to-[#9586FB] text-white py-4 px-10 shadow-lg shadow-[rgba(96,60,255,0.48)]">
              Buy Now
            </button>
            <button className="rounded-full bg-white border border-primary-black text-primary-black py-4 px-10">Buy SaaS Now</button>
          </div>
          <Image src="/assets/browser.svg" alt="" width={1300} height={600} />
        </div>
      </section>
      <section className="mt-[400px] max-w-[1360px] mx-auto">
        <div className="space-y-10">
          <div className="flex items-center justify-between">
            <div className="space-y-7">
              <div className="bg-gradient-to-r from-[#EEF3FC] to-[#FFECF3] px-4 max-w-fit font-semibold py-2 rounded-full">Our Facilitations</div>
              <h1 className="text-4xl max-w-2xl leading-relaxed font-bold">
                Take your <span className="text-primary-blue">"crazy ideas"</span> seriously, write them down in focus.
              </h1>
            </div>
            <div className="space-y-3">
              <p>We have 15+ other services</p>
              <button className="flex items-center gap-3 text-primary-blue px-8 h-[60px] ring-1 ring-primary-blue rounded-full relative bg-transparent transition-colors before:absolute before:left-0 before:top-0 before:bottom-0 before:-z-10 before:h-full before:w-full before:origin-top-left before:scale-x-0 before:bg-primary-blue before:transition-transform before:duration-300 before:content-[''] hover:text-white before:hover:scale-x-100 overflow-hidden">
                <span>Discover more</span>
                <MdArrowOutward />
              </button>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-2">
            {features.map((feature, index) => (
              <div
                key={index}
                className="flex flex-col items-center space-y-5 px-10 py-20 hover:ring-1 hover:ring-inset hover:ring-primary-blue rounded-3xl transition-all duration-500 cursor-pointer hover:shadow-box-hover">
                <Image src={feature.image_url} alt="" width={70} height={70} />
                <h1 className="text-center text-2xl font-bold max-w-[300px] leading-relaxed">{feature.title}</h1>
                <p className="text-[#54607A] leading-relaxed text-center">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="bg-gradient-to-tl from-[#ECB0CD]/20 to-[#FFE5F2]/20 rounded-[96px] p-20 mt-10">
        <div className="max-w-[1360px] mx-auto flex flex-col space-y-4">
          <div className="space-y-4">
            <div className="bg-[#9586FB] text-white px-4 max-w-fit font-semibold py-2 rounded-full">The Solutions</div>
            <h1 className="text-[42px] leading-relaxed font-bold max-w-xl">
              Write, plan, & <span className="text-[#9586FB]">get organized</span> all in one place.
            </h1>
          </div>
          <div className="flex items-start gap-10">
            <div className="w-4/5 space-y-12">
              <p className="max-w-2xl leading-relaxed text-[#54607A] !mt-0 !mb-10">
                Building an enterprise level site doesn't need nightmare or cost your thousands. Felix is purpose built for ease of use and complete flexability
                to create even the most powerful of products.
              </p>
              <div className="flex gap-5 items-start">
                <div className="bg-white p-7 rounded-2xl w-full max-w-fit">
                  <Image src="/icons/notes.svg" alt="" width={40} height={40} />
                </div>
                <div className="space-y-4">
                  <h1 className="text-2xl font-bold">Take Notes</h1>
                  <p className="leading-relaxed text-[#54607A]">
                    Write notes quickly and organize them as you like, no matter where you are. Focus remembers it all and keeps it organized so you don’t have
                    to. Whether it’s to-do’s, or your next big idea, focus makes it way easier to add and find later.
                  </p>
                </div>
              </div>
              <div className="flex gap-5 items-start">
                <div className="bg-white p-7 rounded-2xl w-full max-w-fit">
                  <Image src="/icons/to-dos.svg" alt="" width={40} height={40} />
                </div>
                <div className="space-y-4">
                  <h1 className="text-2xl font-bold">Track to-dos and to-learns</h1>
                  <p className="leading-relaxed text-[#54607A]">
                    Did you know that stress comes from not taking action on certain things that you might have some control over. As soon as you take action on
                    it, you will feel better. Make simple tasks checklists with Focus. In Focus, you can get a full view of what needs to get done, so no
                    important task stays undone.
                  </p>
                </div>
              </div>
              <div className="flex gap-4 items-center">
                <button className="text-[#9586FB] px-8 h-[64px] ring-1 ring-[#9586FB] rounded-full relative bg-transparent transition-colors before:absolute before:left-0 before:top-0 before:bottom-0 before:-z-10 before:h-full before:w-full before:origin-top-left before:scale-x-0 before:bg-[#9586FB] before:transition-transform before:duration-300 before:content-[''] hover:text-white before:hover:scale-x-100 overflow-hidden">
                  <span className="font-semibold text-lg">Get Started</span>
                </button>
                <button className="bg-[#9586FB] text-white h-[60px] w-[60px] rounded-full grid place-content-center">
                  <BsPlayFill size={36} />
                </button>
              </div>
            </div>
            <div className="w-full flex justify-end items-center">
              <Image src="/assets/asset-4.svg" alt="" width={1000} height={1000} />
            </div>
          </div>
        </div>
      </section>
      <section className="bg-gradient-to-tl from-[#FFBC6D]/20 to-[#FFE1BE]/20 rounded-[96px] p-20 mt-10">
        <div className="max-w-[1360px] mx-auto flex flex-col space-y-4">
          <div className="flex flex-row-reverse items-end gap-20">
            <div className="w-full space-y-12">
              <div className="space-y-4">
                <div className="bg-[#FBAB4D] px-4 max-w-fit font-semibold py-2 rounded-full">The Solutions</div>
                <h1 className="text-[42px] leading-relaxed font-bold">
                  <span className="text-[#FBAB4D]">Bring Clarity </span> back in your life
                </h1>
                <p className="max-w-2xl leading-relaxed text-[#54607A]">
                  Motivation does not help get things done; clarity does. Learn to develop better plans as only better planning will help you gain clarity.
                </p>
              </div>
              <div className="space-y-4">
                <h2 className="text-2xl font-bold">Say good bye to procrastination</h2>
                <p className="text-[#54607A] leading-relaxed max-w-md">
                  Get things done. This will help you get rid of stress and will bring joy in your life. Remember you are stressed not beacuse you over work but
                  you have poor planning.
                </p>
              </div>
              <div className="flex gap-5 items-start">
                <div className="bg-white p-7 rounded-2xl w-full max-w-fit">
                  <Image src="/icons/business.svg" alt="" width={40} height={40} />
                </div>
                <div className="space-y-4">
                  <h1 className="text-2xl font-bold">Turn your ideas into real business</h1>
                  <p className="leading-relaxed text-[#54607A]">
                    Every Human being is unique and has a special kind of power and creativity that they can offer to the world. Ideas in your head do not get
                    any value until it forms into any expression.
                  </p>
                </div>
              </div>
              <div className="flex gap-5 items-start">
                <div className="bg-white p-7 rounded-2xl w-full max-w-fit">
                  <Image src="/icons/trust.svg" alt="" width={40} height={40} />
                </div>
                <div className="space-y-4">
                  <h1 className="text-2xl font-bold">Manifest and trust</h1>
                  <p className="leading-relaxed text-[#54607A]">
                    Create vision board to visualiise what you want to achive in your life. Get super clear about it. This way you can take actions needed to go
                    there.
                  </p>
                </div>
              </div>
              <div className="flex gap-4 items-center">
                <button className="text-[#FBAB4D] px-8 h-[64px] ring-1 ring-[#FBAB4D] rounded-full relative bg-transparent transition-colors before:absolute before:left-0 before:top-0 before:bottom-0 before:-z-10 before:h-full before:w-full before:origin-top-left before:scale-x-0 before:bg-[#FBAB4D] before:transition-transform before:duration-300 before:content-[''] hover:text-white before:hover:scale-x-100 overflow-hidden">
                  <span className="font-semibold text-lg">Get Started</span>
                </button>
                <button className="bg-[#FBAB4D] text-white h-[60px] w-[60px] rounded-full grid place-content-center">
                  <BsPlayFill size={36} />
                </button>
              </div>
            </div>
            <div className="w-full flex justify-end items-center relative">
              <Image src="/assets/asset-1.png" alt="" width={500} height={500} className="shadow-2xl rounded-2xl" />
              <Image src="/assets/asset-2.png" alt="" width={600} height={600} className="absolute top-10 left-[-20%]" />
              <Image src="/assets/asset-3.png" alt="" width={600} height={600} className="absolute bottom-0 left-[-15%]" />
            </div>
          </div>
        </div>
      </section>
      <section className="bg-gradient-to-tl from-[#56CCF2]/20 to-[#D4F4FF]/20 rounded-[96px] p-20 mt-10">
        <div className="max-w-[1360px] mx-auto flex flex-col space-y-4">
          <div className="space-y-4">
            <div className="bg-[#56CCF2] text-white px-4 max-w-fit font-semibold py-2 rounded-full">The Solutions</div>
            <h1 className="text-[42px] leading-relaxed font-bold">
              Plan for <span className="text-[#56CCF2]">Success </span>
            </h1>
          </div>
          <div className="flex items-start">
            <div className="w-full space-y-12">
              <p className="max-w-2xl leading-relaxed text-[#54607A] !mt-0 !mb-10">
                Building an enterprise level site doesn't need nightmare or cost your thousands. Felix is purpose built for ease of use and complete flexability
                to create even the most powerful of products.
              </p>
              <div className="flex gap-5 items-start">
                <div className="bg-white p-7 rounded-2xl w-full max-w-fit">
                  <Image src="/icons/calendar.svg" alt="" width={40} height={40} />
                </div>
                <div className="space-y-4">
                  <h1 className="text-2xl font-bold">Plan your Week</h1>
                  <p className="leading-relaxed text-[#54607A]">
                    Create a weekly plan to design the entire week so that you manage your time wisely and do not forget any important tasks to finish. If you
                    create the weekly plan before the week starts, you will see how much more you can accomplish just in a week.
                  </p>
                </div>
              </div>
              <div className="flex gap-5 items-start">
                <div className="bg-white p-7 rounded-2xl w-full max-w-fit">
                  <Image src="/icons/project-strategy.svg" alt="" width={40} height={40} />
                </div>
                <div className="space-y-4">
                  <h1 className="text-2xl font-bold">Write Business plans</h1>
                  <p className="leading-relaxed text-[#54607A]">
                    If you have an idea of a business, write it down. It will help you focus on the specific steps and actions you need to turn the idea into a
                    real successful business. A business plan is an essential tool for entrepreneurs. It is the first step to kickstart your business.
                  </p>
                </div>
              </div>
              <div className="flex gap-5 items-start">
                <div className="bg-white p-7 rounded-2xl w-full max-w-fit">
                  <Image src="/icons/projects.svg" alt="" width={40} height={40} />
                </div>
                <div className="space-y-4">
                  <h1 className="text-2xl font-bold">Manage Projects</h1>
                  <p className="leading-relaxed text-[#54607A]">
                    Don't waste time looking for information instead of focusing on the creative work you do best. Focus gives you a central hub to organize all
                    your internal work. When all information is in one place, executing projects becomes far easier.
                  </p>
                </div>
              </div>
              <div className="flex gap-4 items-center">
                <button className="text-[#56CCF2] px-8 h-[64px] ring-1 ring-[#56CCF2] rounded-full relative bg-transparent transition-colors before:absolute before:left-0 before:top-0 before:bottom-0 before:-z-10 before:h-full before:w-full before:origin-top-left before:scale-x-0 before:bg-[#56CCF2] before:transition-transform before:duration-300 before:content-[''] hover:text-white before:hover:scale-x-100 overflow-hidden">
                  <span className="font-semibold text-lg">Get Started</span>
                </button>
                <button className="bg-[#56CCF2] text-white h-[60px] w-[60px] rounded-full grid place-content-center">
                  <BsPlayFill size={36} />
                </button>
              </div>
            </div>
            <div className="w-full flex justify-end items-center">
              <Image src="/assets/plan-success.svg" alt="" width={600} height={600} />
            </div>
          </div>
        </div>
      </section>
      <section className="mt-20">
        <div className="max-w-[1360px] mx-auto flex flex-col items-center space-y-10">
          <div className="bg-gradient-to-r from-[#EEF3FC] to-[#FFECF3] px-4 max-w-fit font-semibold py-2 rounded-full">Why Us?</div>
          <h1 className="text-[42px] text-center leading-relaxed !mt-5">
            Why it
            <br /> is worth choosing <span className="font-bold">Product Name Here </span>
          </h1>
          <div className="space-y-8">
            <div className="grid grid-cols-3 gap-8">
              <div className="bg-[#F8F8F8] px-20 py-12 flex items-center gap-20 col-span-2 rounded-[40px]">
                <div className="w-full space-y-4">
                  <h1 className="text-2xl font-semibold">Awesome Features</h1>
                  <p className="text-[#54607A] leading-relaxed">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt Laoreet non curabitur gravida sagittis aliquam
                    bibendum.
                  </p>
                </div>
                <div className="w-full">
                  <Image src="/assets/product-features-img.png" alt="" width={500} height={500} />
                </div>
              </div>
              <div className="bg-[#F8F8F8] p-8 rounded-[40px] space-y-7">
                <Image src="/assets/fast-billing.svg" alt="" width={1000} height={300} />
                <div className="w-full space-y-4">
                  <h1 className="text-2xl font-semibold">Fast Billing</h1>
                  <p className="text-[#54607A] leading-relaxed max-w-[320px]">
                    Easily integrate with all your need favorite tools through and APIsing including automatic
                  </p>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-8">
              <div className="bg-[#F8F8F8] p-8 rounded-[40px] space-y-7">
                <Image src="/assets/easy-writing.svg" alt="" width={1000} height={300} />
                <div className="w-full space-y-4">
                  <h1 className="text-2xl font-semibold">Easy Writing</h1>
                  <p className="text-[#54607A] leading-relaxed max-w-[320px]">
                    Easily integrate with all your need favorite tools through and APIsing including automatic
                  </p>
                </div>
              </div>
              <div className="bg-[#F8F8F8] p-8 rounded-[40px] space-y-7">
                <Image src="/assets/professional-notepad.svg" alt="" width={1000} height={300} />
                <div className="w-full space-y-4">
                  <h1 className="text-2xl font-semibold">Professional NotePad</h1>
                  <p className="text-[#54607A] leading-relaxed max-w-[320px]">
                    Easily integrate with all your need favorite tools through and APIsing including automatic
                  </p>
                </div>
              </div>
              <div className="bg-[#F8F8F8] p-8 rounded-[40px] space-y-7">
                <Image src="/assets/project-management.svg" alt="" width={1000} height={300} />
                <div className="w-full space-y-4">
                  <h1 className="text-2xl font-semibold">Project Management</h1>
                  <p className="text-[#54607A] leading-relaxed max-w-[320px]">
                    Easily integrate with all your need favorite tools through and APIsing including automatic
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-[#F6F6F6] rounded-[96px] p-20 mt-20">
        <div className="flex flex-col items-center space-y-10">
          <div className="bg-white px-4 max-w-fit font-semibold py-2 rounded-full">Why Us?</div>
          <h1 className="text-[42px] text-center leading-relaxed !mt-5">
            Our happy <span className="font-bold">family </span>
          </h1>
          <Testimonials />
        </div>
      </section>
      <section className="max-w-[1360px] mx-auto mt-28 mb-10">
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

"use client";
import { Badge } from "../ui/badge";
import { LuSparkles } from "react-icons/lu";
import Link from "next/link";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { SignedOut, SignedIn, SignInButton } from "@clerk/nextjs";
import Banner from "./Banner";

const HeroSection = () => {
  return (
    <section className="w-full flex-1 flex flex-col  relative z-40">
      {/* gradient background  */}
      <div>
        <div
          className="size-80 sm:size-96 bg-green-400/20 absolute z-30 top-30 left-0"
          style={{
            clipPath:
              "polygon(56% 40%, 10% 10%, 94% 11%, 100% 70%, 95% 93%, 31% 85%, 4% 90%, 0% 70%, 5% 10%, 20% 10%",
          }}
        />
        <div className="w-full h-full absolute z-30 top-0 left-0 backdrop-blur-3xl" />
      </div>
      {/* content  */}
      <div className="w-full min-h-screen  flex flex-col  items-center justify-center   gap-6 relative z-40">
        <Banner />
        <Badge
          variant={"secondary"}
          className="border-2 border-rose-600 p-2 px-4"
        >
          <div className="w-full flex items-center gap-2 text-2xl text-rose-700">
            <LuSparkles className=" animate-pulse" />
            <span className="text-sm md:text-base font-semibold">
              Powered by AI
            </span>
          </div>
        </Badge>
        <h1 className="w-full sm:w-xl md:w-2xl lg:w-4xl xl:w-5xl mx-auto text-center font-bold px-1 leading-tight">
          Transform PDFs into{" "}
          <span className="relative inline-block px-1">
            <span className="relative z-10 text-rose-900">concise</span>
            <span className="absolute inset-0 bg-rose-700/20 rounded-md -z-10 translate-y-1 -rotate-3" />
          </span>{" "}
          summaries
        </h1>

        <p className="w-full  mx-auto text-center text-lg md:text-xl lg:text-2xl text-gray-500 font-roboto">
          Get a beautiful summary reel of the document in seconds.
        </p>
        {/* if logged in  */}
        <SignedIn>
          <Link
            href="/upload"
            className="relative flex items-center justify-center gap-4 w-48 h-12 md:w-60 md:h-16 mt-16 lg:mt-0 bg-linear-to-r from-rose-900 to-gray-900 text-white font-medium cursor-pointer active:scale-95 rounded-full shadow-md transition-all duration-300 overflow-hidden group"
          >
            <span className="relative z-10 text-base md:text-xl">Try Now</span>

            <MdKeyboardDoubleArrowRight className="relative z-10 text-2xl transition-transform text-white duration-300 group-hover:translate-x-2 animate-pulse" />

            {/* gradient overlay on hover */}
            <span className="absolute inset-0 bg-linear-to-r from-gray-900 to-rose-900 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </Link>
        </SignedIn>
        {/* if logged out  */}
        <SignedOut>
          <SignInButton>
            <div className="relative flex items-center justify-center w-48 h-12 md:w-60 md:h-16 mt-16 lg:mt-0 bg-linear-to-r from-rose-900 to-gray-900 text-white font-medium cursor-pointer hover:scale-105 rounded-full shadow-md transition-all duration-300 overflow-hidden group">
              <span className="relative z-10 text-base md:text-xl">
                Try Now
              </span>
              <MdKeyboardDoubleArrowRight className="relative z-10 text-2xl transition-transform text-white duration-300 group-hover:translate-x-2 animate-pulse" />
              {/* gradient overlay on hover */}
              <span className="absolute inset-0 bg-linear-to-r from-gray-900 to-rose-900 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
          </SignInButton>
        </SignedOut>
      </div>
    </section>
  );
};

export default HeroSection;

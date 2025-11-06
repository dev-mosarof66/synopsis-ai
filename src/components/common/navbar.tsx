"use client";
import Link from "next/link";
import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import { PiSignInBold } from "react-icons/pi";
import { FaFire } from "react-icons/fa";
import { useAppSelector } from "@/app/hooks";

const Navbar = () => {
  const { user } = useAppSelector((state) => state.user);
  return (
    <nav className="w-full  fixed top-0 left-0 backdrop-blur-sm z-50">
      <div className="w-full max-w-7xl mx-auto flex items-center justify-between py-3 px-4 md:px-0">
        {/* logo  */}
        <div>
          <Link
            href="/"
            className="flex items-center gap-1 text-base font-semibold text-gray-900 hover:opacity-90 active:scale-95 transition-all duration-300 delay-75 group"
          >
            synopsis ai
          </Link>
        </div>
        {/* cta button  */}

        <SignedOut>
          <SignInButton>
            <button className="w-fit px-4  py-2 text-xs sm:text-sm bg-rose-900 rounded-md font-semibold text-white cursor-pointer hover:bg-rose-950 active:scale-95 transition-all duration-300 delay-75">
              <PiSignInBold
                size={18}
                className="inline-block items-center mr-2"
              />
              <span className="hidden sm:inline-block">Sign In</span>
            </button>
          </SignInButton>
        </SignedOut>

        <SignedIn>
          {user && (
            <div className="flex items-center gap-4">
              <Link
                href="/your-summaries"
                className="text-sm sm:text-base font-semibold cursor-pointer text-amber-600 hover:text-rose-700 active:scale-95 transition-all duration-300 delay-75"
              >
                <FaFire className="text-2xl" />
              </Link>
            </div>
          )}
          <UserButton />
        </SignedIn>
      </div>
    </nav>
  );
};

export default Navbar;

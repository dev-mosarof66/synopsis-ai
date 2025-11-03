"use client";
import Link from "next/link";
import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";

const Navbar = () => {
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
            <button className="w-fit px-4  py-2 text-xs sm:text-sm bg-rose-900 rounded-md text-white cursor-pointer hover:bg-rose-950 active:scale-95 transition-all duration-300 delay-75">
              Sign In
            </button>
          </SignInButton>
        </SignedOut>

        <SignedIn>
          <UserButton />
        </SignedIn>
      </div>
    </nav>
  );
};

export default Navbar;

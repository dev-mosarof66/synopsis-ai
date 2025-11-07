"use client";
import Link from "next/link";
import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import { PiSignInBold } from "react-icons/pi";
import { FaFire } from "react-icons/fa";
import { useAppSelector } from "@/app/hooks";
import { usePathname } from "next/navigation";
import { Button } from "../ui/button";

const Navbar = () => {
  const { user } = useAppSelector((state) => state.user);
  const pathname = usePathname();
  const isAuth =
    pathname === "/signin" || pathname === "/signup" ? true : false;

  if (isAuth) {
    return;
  }
  return (
    <nav className="w-full  fixed top-0 left-0 backdrop-blur-sm z-50">
      <div className="w-full max-w-7xl mx-auto flex items-center justify-between py-3 px-4 ">
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
            <Button
              variant={"outline"}
              size={"sm"}
              className="border border-rose-600 hover:bg-rose-600 transition-all duration-300 delay-75 hover:text-white"
            >
              <PiSignInBold className="inline-block items-center" />
              <span className="hidden sm:inline-block">Sign In</span>
            </Button>
          </SignInButton>
        </SignedOut>

        <SignedIn>
          <div className="flex items-center gap-4">
            {user && (
              <Link
                href="/your-summaries"
                className="text-sm sm:text-base font-semibold cursor-pointer text-amber-600 hover:text-rose-700 active:scale-95 transition-all duration-300 delay-75"
              >
                <FaFire className="text-2xl" />
              </Link>
            )}
            <UserButton />
          </div>
        </SignedIn>
      </div>
    </nav>
  );
};

export default Navbar;

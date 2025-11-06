"use client";
import { Button } from "../ui/button";
import { FaPlus } from "react-icons/fa";
import Link from "next/link";

const Header = () => {
  return (
    <div className="w-full max-w-6xl mx-auto flex flex-row items-center justify-between">
      {/* left  */}

      <h2 className="text-lg sm:text-xl font-semibold px-2">Your Summaries</h2>

      {/* right button  */}
      <Button
        className="w-fit border-none bg-rose-600 text-white hover:text-white hover:bg-rose-700 transition-all duration-300 delay-75"
        variant={"outline"}
      >
        <Link href={"/upload"} className="flex items-center">
          <FaPlus className="inline-block mr-2" />
          <span className="hidden sm:block">New Summary</span>
        </Link>
      </Button>
    </div>
  );
};

export default Header;

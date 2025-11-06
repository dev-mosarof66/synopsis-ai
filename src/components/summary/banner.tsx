"use client";
import { useAppSelector } from "@/app/hooks";
import { TbChevronsRight } from "react-icons/tb";

const Banner = () => {
  const { user } = useAppSelector((state) => state.user);
  return (
    <div>
      <div className="w-full max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between rounded-lg border border-rose-300 bg-rose-50 p-4 text-rose-800 shadow-sm gap-2">
        <div className="w-full sm:w-fit flex flex-col items-center sm:items-start">
          <p className="text-sm font-medium">
            You have{" "}
            <span className="font-bold text-rose-600">
              {user ? user.freeLimit : 5}
            </span>{" "}
            quota remaining.
          </p>
          <p className="text-xs text-rose-500">
            Upgrade to unlock unlimited summaries.
          </p>
        </div>

        <button className="group flex items-center rounded-md bg-amber-500 px-3 py-1.5 text-sm font-semibold text-white shadow hover:bg-amber-600 transition">
          Upgrade to Pro
          <TbChevronsRight
            className="ml-2 text-red-800 transition group-hover:translate-x-1 animate-pulse"
            size={20}
          />
        </button>
      </div>
    </div>
  );
};

export default Banner;

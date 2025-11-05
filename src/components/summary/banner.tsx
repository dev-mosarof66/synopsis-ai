"use client";

import { ArrowRight } from "lucide-react";

const Banner = () => {
  return (
    <div>
      <div className="flex items-center justify-between rounded-lg border border-rose-300 bg-rose-50 p-4 text-rose-800 shadow-sm">
        <div>
          <p className="text-sm font-medium">
            You have <span className="font-bold text-rose-600">5</span> quota remaining.
          </p>
          <p className="text-xs text-rose-500">Upgrade to unlock unlimited summaries.</p>
        </div>

        <button className="group flex items-center rounded-md bg-amber-500 px-3 py-1.5 text-sm font-semibold text-white shadow hover:bg-amber-600 transition">
          Upgrade to Pro
          <ArrowRight className="ml-2 transition group-hover:translate-x-1" size={16} />
        </button>
      </div>
    </div>
  );
};

export default Banner;

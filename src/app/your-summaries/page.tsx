/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { useRouter } from "next/navigation";
import { useAppSelector } from "../hooks";
import { FileText, ArrowRight } from "lucide-react";

const YourSummaries = () => {
  const router = useRouter();
  const { user } = useAppSelector((state) => state.user);

  const summaries = user?.summaries || [];

  return (
    <div className="w-full min-h-[92vh] flex flex-col py-20 px-4 max-w-5xl mx-auto">
      <h2 className="text-3xl font-semibold mb-10 text-center">
        Your Summaries
      </h2>

      {summaries.length === 0 ? (
        <div className="flex flex-col items-center text-gray-500 py-20">
          <FileText size={60} className="mb-4 opacity-70" />
          <p>No summaries found yet.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-6">
          {summaries.map((summary: any) => (
            <div
              key={summary._id}
              onClick={() => router.push(`/your-summaries/${summary._id}`)}
              className="p-5 bg-white rounded-xl shadow hover:shadow-lg border cursor-pointer transition"
            >
              <div className="flex flex-col gap-4">
                <div className="w-full flex items-center gap-2">
                  <FileText className="text-rose-600 sm:hidden" size={24}  />
                  <FileText className="text-rose-600 hidden sm:block" size={30}  />
                  <h3 className="font-semibold text-xl sm:text-2xl lg:text-3xl">{summary.title}</h3>
                </div>
                <p className="text-sm text-gray-500 line-clamp-3">
                  {summary.summaries[0]?.description[0]}
                </p>
                <div className="w-full flex items-center justify-center lg:justify-start">
                  <button className="w-48 py-2 flex items-center justify-center gap-4 rounded-md text-white font-semibold bg-rose-700 hover:bg-rose-600 active:scale-95 cursor-pointer transition-all duration-300 delay-75">
                    View Details <ArrowRight size={14} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default YourSummaries;

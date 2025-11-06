"use client";

import { useAppSelector } from "@/app/hooks";
import { Skeleton } from "../ui/skeleton";

const LimitBox = () => {
  const { user } = useAppSelector((state) => state.user);

  if (!user) {
    return (
      <div className="w-48 md:w-60 h-22 bg-white fixed top-14 right-0 shadow rounded-l-md z-40 overflow-hidden">
        <Skeleton className="w-full h-full rounded-none bg-rose-300/50" />
      </div>
    );
  }

  const freeLimit = user.freeLimit ?? 0;
  const isFree = user.currentPlan?.toLowerCase() === "free";

  const maxUsage = isFree ? 5 : 3;
  const currentUsage = maxUsage - freeLimit;

  return (
    <div className="w-48 md:w-52 h-22 flex flex-col items-center fixed top-14 right-0 bg-white shadow p-3 z-40 rounded-md">
      <p className={`text-sm font-bold mb-2 ${isFree ? "text-rose-600" : "text-gray-700"}`}>
        {isFree ? "Your Current Usage" : "Your Daily Limit"}
      </p>

      <div className="w-full flex flex-col items-center">
        <div className="w-full flex items-center justify-between text-xs px-2 py-0.5">
          <span>{currentUsage}</span>/<span>{maxUsage}</span>
        </div>
        <div className="w-full h-2 border border-purple-500 rounded-sm overflow-hidden">
          <div
            className={`h-full ${isFree ? "bg-rose-500" : "bg-green-500"}`}
            style={{ width: `${(currentUsage / maxUsage) * 100}%` }}
          />
        </div>
      </div>
    </div>
  );
};

export default LimitBox;

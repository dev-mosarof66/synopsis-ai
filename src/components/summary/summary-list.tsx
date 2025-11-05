/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { useRouter } from "next/navigation";
import {  useAppSelector } from "@/app/hooks";
import { FileText } from "lucide-react";
import { Skeleton } from "@/components/ui/skeleton";
import { FaDownload } from "react-icons/fa";
import { Button } from "../ui/button";
import { MdDelete } from "react-icons/md";
import { useEffect, useState } from "react";
import axios from "axios";
import { toast as HotToast } from "react-hot-toast";
import { toast } from "sonner";


const SummaryList = () => {
  const { user } = useAppSelector((state) => state.user);
  const isDevelopmentMode = true;
  const summaries = user?.summaries || [];

  return (
    <div>
      {user ? (
        summaries.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-24 text-gray-500">
            <FileText size={60} className="mb-4 opacity-70" />
            <p className="text-lg font-medium">No summaries yet.</p>
            <p className="text-sm text-gray-400">
              Your summaries will appear here once created.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 animate-in fade-in slide-in-from-bottom-2">
            {summaries.map((summary: any) => (
              <SummaryCard
                key={summary._id}
                summary={summary}
                isDevelopmentMode={isDevelopmentMode}
              />
            ))}
          </div>
        )
      ) : (
        <LoadingSkeletonGrid />
      )}
    </div>
  );
};

const SummaryCard = ({ summary, isDevelopmentMode }: any) => {
  const router = useRouter();
  const [loading, setLoading] = useState<boolean>(false);
  const [response, setResponse] = useState(false);

  const handleDelete = async () => {
    try {
      setLoading(true);
      const res = await axios.delete(`/api/summary/${summary._id}`);
      console.log(res.data);
      setResponse(true);
    } catch (error: any) {
      if (error.response.status === 500) {
        router.push("/not-found");
      }
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    let toastId: string;
    if (loading) {
      toastId = HotToast.loading("Deleting the summary");
    } else if (!loading && response) {
      toast.success("Summary deleted successfully.");
    }
    return () => {
      if (toastId) {
        toast.dismiss(toastId);
      }
    };
  }, [loading, response]);

  return (
    <div className="group p-5 bg-white rounded-xl border hover:border-rose-300 shadow-sm hover:shadow-md transition duration-200">
      <div className="flex items-start justify-between">
        <div className="flex items-center gap-2 w-[85%]">
          <FileText className="text-rose-600" size={28} />
          <h3
            onClick={() => router.push(`/your-summaries/${summary._id}`)}
            className="font-semibold text-lg leading-tight truncate cursor-pointer hover:text-rose-600 hover:underline"
          >
            {summary.title}
          </h3>
        </div>

        <Button
          size="icon"
          variant="outline"
          onClick={handleDelete}
          className="border-rose-400 hover:bg-rose-50 hover:text-rose-600 transition"
        >
          <MdDelete size={18} />
        </Button>
      </div>

      <p className="mt-3 text-sm text-gray-500 line-clamp-3">
        {summary.summaries?.[0]?.description?.[0] ??
          "No description available."}
      </p>

      {!isDevelopmentMode && (
        <Button  className="w-full mt-4 py-2.5 flex items-center justify-center gap-2 rounded-md bg-gray-800 text-white font-medium hover:bg-gray-700 active:scale-[0.98] transition">
          <FaDownload size={14} />
          Download
        </Button>
      )}
    </div>
  );
};

const LoadingSkeletonGrid = () => (
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 py-10">
    {[...Array(6)].map((_, i) => (
      <Skeleton key={i} className="w-full h-40 bg-black/10 rounded-lg" />
    ))}
  </div>
);

export default SummaryList;

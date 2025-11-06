/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { useRouter } from "next/navigation";
import { useAppSelector } from "@/app/hooks";
import { FileText } from "lucide-react";
import { Skeleton } from "@/components/ui/skeleton";
import { FaDownload } from "react-icons/fa";
import { Button } from "../ui/button";
import { MdDelete } from "react-icons/md";
import { useState } from "react";
import axios from "axios";
import { toast } from "sonner";
import { ResponseItem } from "@/features/response";
import moment from "moment";
import DeleteLoader from "./delete-loader";

const SummaryList = ({
  summaries,
  setSummaries,
  summaryLoading,
}: {
  summaries: ResponseItem[];
  setSummaries: (summaries: ResponseItem[]) => void;
  summaryLoading: boolean;
}) => {
  const router = useRouter();
  const { user } = useAppSelector((state) => state.user);
  const [loading, setLoading] = useState<boolean>(false);

  console.log(summaries);

  const handleDelete = async (_id: string) => {
    try {
      setLoading(true);
      const res = await axios.delete(`/api/summary/${_id}`);
      if (res.data.success) {
        console.log(res.data);
        const filteredSummary = summaries.filter((t) => t._id !== _id);
        setSummaries(filteredSummary);
        toast.success("Summary deleted successfully.");
      }
    } catch (error: any) {
      if (error.response.status === 500) {
        router.push("/not-found");
      }
    } finally {
      setLoading(false);
    }
  };

  const isPaidUser = user?.currentPlan.toLowerCase() !== "free";

  return (
    <div className="w-full max-w-6xl mx-auto">
      {!summaryLoading ? (
        summaries.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-24 text-gray-500">
            <FileText size={60} className="mb-4 opacity-70 text-rose-600" />
            <p className="text-lg font-medium">No summaries yet.</p>
            <p className="text-sm text-rose-300">
              Your summaries will appear here once created.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 animate-in fade-in slide-in-from-bottom-2">
            {summaries.map((summary) => (
              <SummaryCard
                key={summary._id}
                summary={summary}
                setSummaries={setSummaries}
                handleDelete={handleDelete}
                isPaidUser={isPaidUser}
              />
            ))}
          </div>
        )
      ) : (
        <LoadingSkeletonGrid />
      )}
      <div className="fixed bottom-2 right-0 z-50">
        {loading && <DeleteLoader />}
      </div>
    </div>
  );
};

const SummaryCard = ({
  summary,
  isPaidUser = false,
  handleDelete,
  onDownload,
}: any) => {
  const router = useRouter();

  return (
    <div className="group p-5 bg-white rounded-xl border hover:border-rose-300 shadow-sm hover:shadow-md transition duration-200">
      <div className="flex items-start justify-between">
        <div className="flex items-center gap-2 w-[85%]">
          <FileText className="text-rose-600" size={40} />

          <div className="w-full">
            <h3
              onClick={() => router.push(`/your-summaries/${summary._id}`)}
              className="font-semibold text-lg leading-tight truncate cursor-pointer hover:text-rose-600 hover:underline"
            >
              {summary.title}
            </h3>

            <p className="w-fit text-[9px] bg-purple-100 px-1 py-0.5 rounded-md border border-purple-400">
              {moment(summary.createdAt).fromNow()}
            </p>
          </div>
        </div>

        <Button
          size="icon"
          variant="outline"
          onClick={() => handleDelete(summary._id)}
          className="border-rose-400 text-rose-500 hover:bg-rose-50 hover:text-rose-600 transition"
        >
          <MdDelete size={18} />
        </Button>
      </div>

      <p className="mt-3 text-sm text-gray-500 line-clamp-2">
        {summary.description}
      </p>

      {isPaidUser && (
        <Button
          onClick={() => onDownload?.(summary._id)}
          className="w-full mt-4 py-2.5 flex items-center justify-center gap-2 rounded-md bg-rose-600 text-white font-medium hover:bg-rose-700 active:scale-[0.98] transition"
        >
          <FaDownload size={14} />
          Download
        </Button>
      )}
    </div>
  );
};

const LoadingSkeletonGrid = () => (
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
    {[...Array(6)].map((_, i) => (
      <Skeleton key={i} className="w-full h-40 bg-black/10 rounded-lg" />
    ))}
  </div>
);

export default SummaryList;

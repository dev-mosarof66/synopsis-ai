"use client";

import { useAppSelector } from "@/app/hooks";
import { responseProp } from "@/app/your-summaries/[id]/page";
import { format } from "date-fns";
import Link from "next/link";
import { Button } from "../ui/button";
import { toast } from "sonner";

const SummaryHeader = ({ response }: { response: responseProp | null }) => {
  const { user } = useAppSelector((state) => state.user);
  const isPaidUser = user?.currentPlan?.toLowerCase() !== "free";

  console.log(response);

  const formattedDate = response?.createdAt
    ? format(new Date(response.createdAt), "MMM dd, yyyy")
    : "";

  const downloadSummary = () => {
    if (!response) return;

    if (!isPaidUser) {
      toast.error("Please upgrade your plan to access this feature.");
      return;
    }

    const content = `
Title: ${response.title}

Description:
${response.description}

Summaries:
${response.summaries.map((s) => `- ${s}`).join("\n")}
  `;

    const blob = new Blob([content], { type: "text/plain" });
    const url = window.URL.createObjectURL(blob);

    const link = document.createElement("a");
    link.href = url;
    link.download = `${response.title || "summary"}.txt`;
    link.click();

    window.URL.revokeObjectURL(url);
  };

  return (
    <div className="w-full border-b pb-3 flex flex-col items-center gap-3">
      <div className="flex flex-col items-center sm:items-start gap-1">
        <p className="text-lg font-semibold text-center text-rose-500">
          {response?.title}
        </p>
        {formattedDate && (
          <span className="text-xs bg-purple-100 text-purple-700 px-2 py-0.5 rounded-md w-fit">
            Generated at: <span className="font-semibold">{formattedDate}</span>
          </span>
        )}
      </div>

      <div className="flex items-center gap-4 text-sm">
        <Link
          href={`${response?.url}`}
          target="_blank"
          className="text-gray-600 underline cursor-pointer hover:text-gray-800 transition"
        >
          Original PDF
        </Link>

        <Button
          onClick={() => {
            downloadSummary();
          }}
          className={`w-48 bg-rose-600 hover:bg-rose-700 text-white rounded-md text-xs sm:text-sm transition flex items-center justify-center gap-1
  `}
        >
          Download
        </Button>
      </div>
    </div>
  );
};

export default SummaryHeader;

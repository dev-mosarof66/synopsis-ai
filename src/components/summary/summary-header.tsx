"use client";
import { useAppSelector } from "@/app/hooks";
import { responseProp } from "@/app/your-summaries/[id]/page";
import Link from "next/link";
import { toast } from "sonner";
import {
  FaCalendar,
  FaClock,
  FaDownload,
  FaHandSparkles,
} from "react-icons/fa";
import { ChevronLeft, ExternalLink, FileText } from "lucide-react";
import { useRouter } from "next/navigation";

const SummaryHeader = ({ response }: { response: responseProp | null }) => {
  const router = useRouter();
  const { user } = useAppSelector((state) => state.user);
  const isPaidUser = user?.currentPlan?.toLowerCase() !== "free";

  console.log(response?.summaries.length);

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

  if (!response) {
    return;
  }

  return (
    <div className="w-full max-w-2xl mx-auto pb-3 flex flex-col gap-3">
      <div className="w-full  flex items-center justify-between px-2">
        <div className="flex items-center gap-2">
          <p className="bg-purple-100  text-rose-400 font-semibold text-xs  py-0.5 px-1 rounded-md">
            <FaHandSparkles size={18} className="inline-block mr-1" />
            AI Summary
          </p>
          <p className="bg-rose-100 flex items-center text-rose-500 font-semibold text-xs  py-0.5 px-1 rounded-md">
            <FaCalendar size={12} className="inline-block mr-1" />
            <span>
              {" "}
              {response &&
                new Date(response?.createdAt).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "short",
                  day: "2-digit",
                })}
            </span>
          </p>
          <p className="bg-purple-100 flex items-center text-rose-400 font-semibold text-xs  py-0.5 px-1 rounded-md">
            <FaClock size={14} className="inline-block mr-1" />
            <span>
              {response.summaries.length > 4 ? response.summaries.length / 2 : response.summaries.length}{" "}
              min read
            </span>
          </p>
        </div>
        <div
          onClick={() => router.push('/your-summaries')}
          className="flex items-center text-xs bg-purple-200 rounded-md p-1 cursor-pointer hover:bg-purple-300 active:scale-95 transition-all duration-300 delay-75"
        >
          <ChevronLeft size={16} />
          <span className="font-semibold hidden sm:block">
            Back to Dashboard
          </span>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center sm:items-start">
        <p className="text-lg text-center font-semibold text-rose-500">
          {response && response?.title}
        </p>
      </div>

      <div className="w-full flex flex-col items-center gap-2">
        <div className="w-full flex items-center justify-center text-sm gap-1 font-medium">
          <FileText size={18} className="text-rose-400" />
          <span>Source PDF: {response && response.originalName}</span>
        </div>
        <div className="flex items-center gap-4 text-sm">
          <Link
            href={`${response?.url}`}
            target="_blank"
            className="flex items-center gap-1 font-semibold cursor-pointer text-rose-400 hover:text-rose-500 transition-all duration-300 delay-75 text-sm "
          >
            <ExternalLink size={15} />
            View Original
          </Link>

          <div
            onClick={() => {
              downloadSummary();
            }}
            className={`px-4 py-2 bg-rose-200 hover:bg-rose-300 text-rose-600 rounded-md text-xs sm:text-sm transition-all duration-300 cursor-pointer flex items-center justify-center gap-1 font-semibold
  `}
          >
            <FaDownload />
            Download Summary
          </div>
        </div>
      </div>
    </div>
  );
};

export default SummaryHeader;

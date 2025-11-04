"use client";
import SummaryPDF from "@/components/common/summary-pdf";
import { FaDownload, FaUpload } from "react-icons/fa";
import { useAppSelector } from "@/app/hooks";
import { FileText } from "lucide-react";
import { useRouter } from "next/navigation";

const YourSummary = () => {
  const router = useRouter();
  const { pdfSummary } = useAppSelector((state) => state.summary);
  console.log("summary from redux store : ", pdfSummary);

  if (pdfSummary?.summaries?.length === 0 || !pdfSummary) {
    return (
      <div className="w-full h-[90vh] max-w-xl mx-auto flex flex-col items-center justify-center gap-4 py-10">
        <FileText className="w-12 h-12 text-red-400 animate-bounce" />
        <p className="text-center text-gray-500 text-lg">
          No summary available.
        </p>
        <button
          onClick={() => router.push("/upload")}
          className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 active:scale-95 transition-all duration-300 delay-75"
        >
          <FaUpload className="inline mr-2" />
          Upload PDF
        </button>
      </div>
    );
  }
  return (
    <section className="w-full min-h-screen flex flex-col py-20 px-2 bg-linear-to-br from-white to-gray-100">
      <div className="w-full max-w-6xl mx-auto flex flex-col items-center justify-center gap-8">
        <h1 className="text-2xl font-bold text-center"> Your PDF Summary</h1>

        <SummaryPDF data={pdfSummary?.summaries ?? []} />

        <div className="w-full flex flex-col gap-2 items-center py-6">
          <p className="text-sm sm:text-lg text-center text-gray-600">
            You can download your PDF by clicking the button
          </p>
          <button className="w-48 px-4 py-2 bg-rose-600 text-white rounded-md hover:bg-rose-700 active:scale-95 transition-all duration-300 delay-75">
            <FaDownload className="inline mr-2 animate-bounce" />
            Download PDF
          </button>
        </div>
      </div>
    </section>
  );
};

export default YourSummary;

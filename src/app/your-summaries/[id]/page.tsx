"use client";
import SummaryPDF from "@/components/common/summary-pdf";
import { FaDownload, FaUpload } from "react-icons/fa";
import { FileText } from "lucide-react";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import axios from "axios";
import { Spinner } from "@/components/ui/spinner";
import SummaryHeader from "@/components/summary/summary-header";

export type summaryProps = {
  title: string;
  description: string[];
};

export type responseProp = {
  _id: string;
  title: string;
  description: string;
  summaries: summaryProps[];
  fileId: string;
  url: string;
  originalName: string;
  createdAt: Date;
  updatedAt: Date;
};

const YourSummary = () => {
  const isDevelopmentMode = true;
  const router = useRouter();
  const params = useParams();
  const [loading, setLoading] = useState(true);
  const [response, setResponse] = useState<responseProp | null>(null);

  useEffect(() => {
    const fetchSummary = async () => {
      try {
        const res = await axios.get(`/api/summary/${params.id}`);
        console.log("response in individual summary : ", res.data);
        if (res.data.success) {
          setResponse(res.data.summary);
        }
      } catch (error) {
        console.log("error while fetching indivisual summary : ", error);
      } finally {
        setLoading(false);
      }
    };
    fetchSummary();
  }, [params.id]);

  if (!response && !loading) {
    return (
      <div className="w-full h-[90vh] max-w-xl mx-auto flex flex-col items-center justify-center gap-4 py-10">
        <FileText className="w-12 h-12 text-red-400 animate-bounce" />
        <p className="text-center text-gray-500 text-lg">No summary found.</p>
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

  if (loading) {
    return (
      <div className="w-full h-screen flex items-center justify-center">
        <Spinner />
      </div>
    );
  }

  return (
    <section className="w-full min-h-screen flex flex-col py-20 px-2 bg-linear-to-br from-white to-gray-100">
      <div className="w-full max-w-6xl mx-auto flex flex-col items-center justify-center gap-8">
        <SummaryHeader response = {response ?? null} />

        <SummaryPDF data={response?.summaries ?? []} />

        {!isDevelopmentMode && (
          <div className="w-full flex flex-col gap-2 items-center py-6">
            <p className="text-sm sm:text-lg text-center text-gray-600">
              You can download your PDF by clicking the button
            </p>
            <button className="w-48 px-4 py-2 bg-rose-600 text-white rounded-md hover:bg-rose-700 active:scale-95 transition-all duration-300 delay-75">
              <FaDownload className="inline mr-2 animate-bounce" />
              Download PDF
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default YourSummary;

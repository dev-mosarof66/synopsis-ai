"use client";
import React from "react";
import { FaFilePdf } from "react-icons/fa";
import { Button } from "../ui/button";
import { HiUpload } from "react-icons/hi";
import { Loader } from "../ui/spinner";
import { useAppSelector } from "@/app/hooks";
import { Skeleton } from "@/components/ui/skeleton";

type Props = {
  file: File | null;
  handleFileChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  getSummary: () => void;
  loading: boolean;
  freeQoutaBanner?: boolean;
};

const UploadPDF = ({
  file,
  handleFileChange,
  getSummary,
  loading,
  freeQoutaBanner,
}: Props) => {
  const { user } = useAppSelector((state) => state.user);

  return (
    <div className="w-full flex flex-col items-center gap-6">
      {/* Header */}
      <div className="text-center space-y-2">
        <h2 className="text-3xl sm:text-4xl font-semibold text-gray-800">
          Upload Your PDF
        </h2>
        <p className="text-gray-500 text-sm sm:text-base max-w-lg mx-auto">
          Drag and drop your PDF file below or click to upload. Our AI will
          summarize it instantly.
        </p>
      </div>

      {/* free Qouta Banner */}

      {user ? (
        <div>
          {freeQoutaBanner && (
            <div>
              <p className="w-full max-w-lg text-sm text-center text-yellow-800 bg-yellow-200 px-4 py-2 rounded-md border border-yellow-300">
                You are on a free plan and you have 1 quota remaining. Upgrade
                plan for unlimited PDF summaries and additional features.
              </p>
            </div>
          )}
        </div>
      ) : (
        <div className="w-full max-w-lg h-16 border border-amber-300 rounded-md">
          <Skeleton className="w-full h-full bg-amber-500/20" />
        </div>
      )}

      {/* Upload box */}
      <div
        className={`relative w-full sm:w-[80%] md:w-[600px] h-64 border-2 border-dashed border-rose-400 rounded-xl flex flex-col items-center justify-center ${
          file ? "bg-rose-600/10" : "bg-white"
        } hover:border-rose-600 cursor-pointer shadow-sm shadow-black`}
      >
        <FaFilePdf size={48} className="text-rose-500 mb-3" />
        <p className="text-gray-600 font-medium">
          {file ? file.name : "Click or drop your PDF here"}
        </p>
        <input
          id="file-upload"
          type="file"
          onChange={handleFileChange}
          accept="application/pdf"
          className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
        />
      </div>

      {/* Submit button */}
      <Button
        onClick={getSummary}
        className="w-48 h-10 bg-rose-500 hover:bg-rose-600 text-white rounded-md text-base shadow-sm transition-all"
        disabled={!file}
      >
        {loading ? (
          <Loader />
        ) : (
          <div className="flex items-center gap-2">
            <span className="text-xl">
              <HiUpload className="animate-bounce" />
            </span>
            <span>Get Summary</span>
          </div>
        )}
      </Button>
    </div>
  );
};

export default UploadPDF;

import React from "react";
import { FaFilePdf } from "react-icons/fa";
import { Button } from "../ui/button";

type Props = {
  file: File | null;
  handleFileChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  getSummary: () => void;
  loading: boolean;
};

const UploadPDF = ({ file, handleFileChange, getSummary, loading }: Props) => {
  return (
    <div className="w-full flex flex-col items-center gap-6">
      {/* Header */}
      <div className="text-center space-y-2">
        <h2 className="text-3xl sm:text-4xl font-semibold text-gray-800">
          Upload Your PDF
        </h2>
        <p className="text-gray-500 text-sm sm:text-base max-w-md mx-auto">
          Drag and drop your PDF file below or click to upload. Our AI will
          summarize it instantly.
        </p>
      </div>

      {/* Upload box */}
      <div
        className={`relative w-full sm:w-[80%] md:w-[600px] h-64 border-2 border-dashed border-rose-400 rounded-xl flex flex-col items-center justify-center ${
          file ? "bg-rose-600/10" : "bg-white"
        } hover:border-rose-600 cursor-pointer transition-all duration-300 shadow-sm`}
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
        className="bg-rose-500 hover:bg-rose-600 text-white px-6 py-2 rounded-lg text-base shadow-sm transition-all"
        disabled={!file}
      >
        {loading ? "AI is thinking..." : " Get Summary"}
      </Button>
    </div>
  );
};

export default UploadPDF;

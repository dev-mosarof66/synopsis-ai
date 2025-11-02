"use client";
import { useState, ChangeEvent } from "react";
import { toast } from "react-hot-toast";
import UploadPDF from "@/components/upload/upload-pdf";

const UploadPDFPage = () => {
  const [file, setFile] = useState<File | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [response, setResponse] = useState<string>("");

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (selectedFile && selectedFile.type === "application/pdf") {
      setFile(selectedFile);
      toast.success("File selected successfully.");
    } else {
      setFile(null);
      toast.error("Please upload a valid PDF file");
    }
  };

  const getSummary = async () => {
    try {
      setLoading(true);
      setResponse('')
    } catch (error) {
      console.log("error while generating pdf summary  : ", error);
    }
  };

  return (
    <section className="w-full min-h-[92vh] bg-linear-to-br from-white to-gray-100 py-14 sm:py-20 px-4">
      <div className="w-full max-w-4xl mx-auto flex flex-col items-center justify-center pt-10 gap-8">
        {response.trim() !== "" ? (
          <div></div>
        ) : (
          <UploadPDF
            file={file}
            handleFileChange={handleFileChange}
            getSummary={getSummary}
            loading={loading}
          />
        )}
      </div>
    </section>
  );
};

export default UploadPDFPage;

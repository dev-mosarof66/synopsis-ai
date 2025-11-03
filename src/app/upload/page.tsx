/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";
import { useState, ChangeEvent } from "react";
import { toast } from "react-hot-toast";
import UploadPDF from "@/components/upload/upload-pdf";
import axios from "axios";

const UploadPDFPage = () => {
  const [file, setFile] = useState<File | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [response, setResponse] = useState<string>("");

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    console.log(selectedFile);
    if (selectedFile && selectedFile.size > 12 * 1024 * 1024) {
      toast.error("File must be less than 12MB");
      return;
    }
    if (selectedFile && selectedFile.type !== "application/pdf") {
      toast.error("File must be a PDF");
      return;
    }
    if (selectedFile) {
      setFile(selectedFile);
      toast.success("File selected successfully.");
    }
  };

  const getSummary = async () => {
    const formData = new FormData();
    if (!file) {
      toast.error("No PDF selected");
      return;
    } else {
      formData.append("file", file);
    }
    setLoading(true);
    try {
      console.log("inside upload client");
      const res = await axios.post("/api/upload", formData);
      console.log(res.data);
    } catch (error) {
      console.log("error while generating pdf summary  : ", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="w-full min-h-[92vh] bg-linear-to-br from-white to-gray-100 py-14 sm:py-20 px-2">
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

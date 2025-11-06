"use client";
import { useState, ChangeEvent } from "react";
import { toast } from "sonner";
import UploadPDF from "@/components/upload/upload-pdf";
import axios from "axios";
import { useRouter } from "next/navigation";
import { setResponse as setStoreResponse } from "@/features/response";
import { useAppDispatch, useAppSelector } from "../hooks";
import { useUser } from "@clerk/nextjs";
import LimitBox from "@/components/upload/limit-box";
import { setUser } from "@/features/user";
import UploadLoader from "@/components/upload/upload-loader";

const UploadPDFPage = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const [file, setFile] = useState<File | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const loggedInUser = useUser();
  const { user } = useAppSelector((state) => state.user);

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
    if (user && user?.freeLimit === 0) {
      toast.error(
        "You have exhausted your free quota. Please upgrade your plan for more summaries."
      );
      return;
    }
    const formData = new FormData();
    if (!file) {
      toast.error("No PDF selected");
      return;
    } else {
      formData.append("file", file);
      formData.append(
        "email",
        loggedInUser.user?.emailAddresses[0].emailAddress || ""
      );
    }
    setLoading(true);
    try {
      console.log("inside upload client");
      const res = await axios.post("/api/gemini", formData);
      console.log("response from server : ", res.data);
      dispatch(setStoreResponse(res.data.response));
      dispatch(setUser(res.data.user));
      toast.success("Summary generated successfully.");
      setLoading(false);
      router.push(`/your-summaries/${res.data.response._id}`);
    } catch (error) {
      console.log("error while generating pdf summary  : ", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="w-full min-h-screen bg-linear-to-br from-white to-gray-100 py-14 sm:py-20 px-2 relative">
      {/* LimitBox */}

      {user && user?.currentPlan?.toLowerCase() !== "pro" && <LimitBox />}

      <div className="w-full max-w-4xl mx-auto flex flex-col items-center justify-center gap-2 pt-24 md:py-0">
        {!user && (
          <span className="inline-block bg-purple-100 text-purple-800 text-sm font-semibold px-2 py-1 rounded-full">
            As a free user, you have 5 quota to generate pdf summaries.
          </span>
        )}
        <UploadPDF
          file={file}
          handleFileChange={handleFileChange}
          getSummary={getSummary}
          loading={loading}
        />
      </div>
      <div className=" fixed bottom-2 right-0 z-50">
        {loading && <UploadLoader />}
      </div>
    </section>
  );
};

export default UploadPDFPage;

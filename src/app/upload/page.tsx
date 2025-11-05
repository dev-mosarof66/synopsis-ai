"use client";
import { useState, ChangeEvent, useEffect } from "react";
import { toast as HotToast } from "react-hot-toast";
import { toast } from "sonner";
import UploadPDF from "@/components/upload/upload-pdf";
import axios from "axios";
import { useRouter } from "next/navigation";
import { setSummary } from "@/features/summary";
import { useAppDispatch, useAppSelector } from "../hooks";
import { useUser } from "@clerk/nextjs";

const UploadPDFPage = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const [file, setFile] = useState<File | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [response, setResponse] = useState<boolean>(false);
  const [freeQoutaBanner, setFreeQoutaBanner] = useState<boolean>(true);
  const loggedInUser = useUser();

  const { user } = useAppSelector((state) => state.user);

  console.log("current user : ", user);

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
    if (user && user?.isNewUser === false) {
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
      dispatch(setSummary(res.data.response));
      setResponse(true);
      router.push(`/your-summaries/${res.data.response._id}`);
    } catch (error) {
      console.log("error while generating pdf summary  : ", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    let toastId: string;
    if (loading) {
      toastId = HotToast.loading("Generating summary, please wait...");
    }
    if (!loading && response) {
      toast.success("Summary generated successfully.");
    }

    return () => {
      if (toastId) {
        toast.dismiss(toastId);
      }
    };
  }, [loading, response]);

  useEffect(() => {
    if (user && user?.isNewUser === false) {
      setFreeQoutaBanner(false);
    }
  }, [user]);

  return (
    <section className="w-full min-h-[92vh] bg-linear-to-br from-white to-gray-100 py-14 sm:py-20 px-2">
      <div className="w-full max-w-4xl mx-auto flex flex-col items-center justify-center pt-10 gap-8">
        <UploadPDF
          file={file}
          handleFileChange={handleFileChange}
          getSummary={getSummary}
          loading={loading}
          freeQoutaBanner={freeQoutaBanner}
        />
      </div>
    </section>
  );
};

export default UploadPDFPage;

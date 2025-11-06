"use client";
import Banner from "@/components/summary/banner";
import Header from "@/components/summary/header";
import SummaryList from "@/components/summary/summary-list";
import { ResponseItem } from "@/features/response";
import axios from "axios";
import { useEffect, useState } from "react";
import { useAppSelector } from "../hooks";

const YourSummaries = () => {
  const { user } = useAppSelector((state) => state.user);
  const [summaries, setSummaries] = useState<ResponseItem[]>([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchSummaries = async () => {
      try {
        const res = await axios.get(`/api/summary/all/${user?._id}`);
        console.log(res.data);
        if (res.data.success) {
          setSummaries(res.data.summaries);
        }
      } catch (error) {
        console.log("error in fetching summaries: ", error);
      } finally {
        setLoading(false);
      }
    };
    if (user) {
      fetchSummaries();
    }
  }, [user]);

  return (
    <div className="w-full min-h-screen  flex flex-col pt-20 px-4  gap-6 relative">
      {/* header  */}
      <Header />
      {/* banner  */}
      <Banner />
      {/* list  */}
      <SummaryList summaries={summaries} setSummaries={setSummaries} summaryLoading={loading} />
    </div>
  );
};

export default YourSummaries;
